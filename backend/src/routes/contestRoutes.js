const express = require('express');
const {
  createContest,
  addProblemToContest,
  getAllContests,
  getContestDetails,
  getContestLeaderboard,
  participateInContest,
  finishContestAttempt,
  getContestParticipation,
  getContestParticipants,
} = require('../controllers/contestController');
const { protect, restrictTo, fetchUserIfExists } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes with optional user identification
router.get('/', fetchUserIfExists, getAllContests);
router.get('/:id', fetchUserIfExists, getContestDetails);
router.get('/:id/leaderboard', getContestLeaderboard);

// User contest attempt routes
router.post('/:id/participate', protect, participateInContest);
router.post('/:id/finish', protect, finishContestAttempt);
router.get('/:id/participation', protect, getContestParticipation);

// Admin-only routes
router.post('/', protect, restrictTo('ADMIN'), createContest);
router.post('/:id/problem', protect, restrictTo('ADMIN'), addProblemToContest);
router.get('/:id/participants', protect, restrictTo('ADMIN'), getContestParticipants);

module.exports = router;

