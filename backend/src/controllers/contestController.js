const prisma = require('../prisma');
const { contestSchema, contestProblemSchema } = require('../utils/validators');

/**
 * Create a new contest (Admin only)
 */
const createContest = async (req, res, next) => {
  try {
    const validatedData = contestSchema.parse(req.body);
    const { title, description, startTime, endTime } = validatedData;
    const creatorId = req.user.id;

    const contest = await prisma.contest.create({
      data: {
        title,
        description,
        startTime: new Date(startTime),
        endTime: new Date(endTime),
        creatorId,
      },
    });

    res.status(201).json({
      success: true,
      message: 'Contest created successfully.',
      contest,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Add a problem to a contest (Admin only)
 */
const addProblemToContest = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contestId = parseInt(id);

    if (isNaN(contestId)) {
      return res.status(400).json({ success: false, message: 'Invalid contest ID format.' });
    }

    const validatedData = contestProblemSchema.parse(req.body);
    const { problemId, points } = validatedData;

    // Verify contest exists
    const contest = await prisma.contest.findUnique({ where: { id: contestId } });
    if (!contest) {
      return res.status(404).json({ success: false, message: 'Contest not found.' });
    }

    // Verify problem exists
    const problem = await prisma.problem.findUnique({ where: { id: problemId } });
    if (!problem) {
      return res.status(404).json({ success: false, message: 'Problem not found.' });
    }

    // Add problem to contest
    const contestProblem = await prisma.contestProblem.create({
      data: {
        contestId,
        problemId,
        points: points || 100,
      },
      include: {
        problem: {
          select: {
            id: true,
            title: true,
            slug: true,
          },
        },
      },
    });

    res.status(201).json({
      success: true,
      message: 'Problem added to contest successfully.',
      contestProblem,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get all contests (Public)
 */
const getAllContests = async (req, res, next) => {
  try {
    const contests = await prisma.contest.findMany({
      include: {
        creator: {
          select: {
            id: true,
            username: true,
          },
        },
        _count: {
          select: { contestProblems: true },
        },
      },
      orderBy: { startTime: 'desc' },
    });

    res.status(200).json({
      success: true,
      count: contests.length,
      contests,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get details of a single contest including its problems
 */
const getContestDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contestId = parseInt(id);

    if (isNaN(contestId)) {
      return res.status(400).json({ success: false, message: 'Invalid contest ID format.' });
    }

    const contest = await prisma.contest.findUnique({
      where: { id: contestId },
      include: {
        creator: {
          select: { id: true, username: true },
        },
        contestProblems: {
          include: {
            problem: {
              select: {
                id: true,
                title: true,
                slug: true,
                difficulty: true,
              },
            },
          },
        },
      },
    });

    if (!contest) {
      return res.status(404).json({ success: false, message: 'Contest not found.' });
    }

    res.status(200).json({
      success: true,
      contest,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get Leaderboard for a contest
 */
const getContestLeaderboard = async (req, res, next) => {
  try {
    const { id } = req.params;
    const contestId = parseInt(id);

    if (isNaN(contestId)) {
      return res.status(400).json({ success: false, message: 'Invalid contest ID format.' });
    }

    const contest = await prisma.contest.findUnique({
      where: { id: contestId },
      include: {
        contestProblems: {
          include: { problem: true },
        },
      },
    });

    if (!contest) {
      return res.status(404).json({ success: false, message: 'Contest not found.' });
    }

    // Get all problems associated with this contest
    const problemIds = contest.contestProblems.map((cp) => cp.problemId);

    // Map points for easy lookup
    const problemPointsMap = {};
    contest.contestProblems.forEach((cp) => {
      problemPointsMap[cp.problemId] = cp.points;
    });

    // Fetch all submissions for these problems during the contest period
    const submissions = await prisma.submission.findMany({
      where: {
        problemId: { in: problemIds },
        createdAt: {
          gte: contest.startTime,
          lte: contest.endTime,
        },
      },
      include: {
        user: {
          select: { id: true, username: true },
        },
      },
      orderBy: { createdAt: 'asc' }, // Process in chronological order
    });

    // Aggregate statistics per user
    const leaderboardMap = {};

    submissions.forEach((sub) => {
      const uId = sub.userId;
      if (!leaderboardMap[uId]) {
        leaderboardMap[uId] = {
          user: {
            id: sub.user.id,
            username: sub.user.username,
          },
          solvedProblems: {}, // problemId -> { points, executionTime, submissionId, createdAt }
          totalScore: 0,
          totalExecutionTime: 0,
          attempts: {}, // problemId -> attemptCount
        };
      }

      const userStats = leaderboardMap[uId];

      // If the problem is not solved yet by this user, evaluate this submission
      if (!userStats.solvedProblems[sub.problemId]) {
        userStats.attempts[sub.problemId] = (userStats.attempts[sub.problemId] || 0) + 1;

        if (sub.status === 'ACCEPTED') {
          const points = problemPointsMap[sub.problemId] || 100;
          userStats.solvedProblems[sub.problemId] = {
            points,
            executionTime: sub.executionTime || 0,
            submissionId: sub.id,
            createdAt: sub.createdAt,
          };
          userStats.totalScore += points;
          userStats.totalExecutionTime += sub.executionTime || 0;
        }
      }
    });

    // Convert map to array
    const leaderboard = Object.values(leaderboardMap).map((player) => {
      return {
        user: player.user,
        totalScore: player.totalScore,
        totalExecutionTime: player.totalExecutionTime,
        solvedCount: Object.keys(player.solvedProblems).length,
        solvedProblems: player.solvedProblems,
        attempts: player.attempts,
      };
    });

    // Sort: Higher Score first, then lower total execution time
    leaderboard.sort((a, b) => {
      if (b.totalScore !== a.totalScore) {
        return b.totalScore - a.totalScore;
      }
      return a.totalExecutionTime - b.totalExecutionTime;
    });

    res.status(200).json({
      success: true,
      contest: {
        id: contest.id,
        title: contest.title,
        startTime: contest.startTime,
        endTime: contest.endTime,
      },
      leaderboard,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createContest,
  addProblemToContest,
  getAllContests,
  getContestDetails,
  getContestLeaderboard,
};
