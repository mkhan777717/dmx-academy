const prisma = require('../prisma');
const { executeCode } = require('./executionService');

/**
 * Submits user code, triggers execution against test cases, and stores the results
 * @param {Object} data - Submission info
 * @param {number} data.userId
 * @param {number} data.problemId
 * @param {string} data.language
 * @param {string} data.code
 */
const submitUserCode = async ({ userId, problemId, language, code }) => {
  // 1. Fetch problem and testcases
  const problem = await prisma.problem.findUnique({
    where: { id: problemId },
    include: { testCases: true },
  });

  if (!problem) {
    const error = new Error('Problem not found');
    error.statusCode = 404;
    throw error;
  }

  if (problem.testCases.length === 0) {
    const error = new Error('This problem does not have any test cases configured.');
    error.statusCode = 400;
    throw error;
  }

  // 2. Create pending submission in DB first
  const pendingSubmission = await prisma.submission.create({
    data: {
      userId,
      problemId,
      language,
      code,
      status: 'PENDING',
      executionTime: 0,
    },
  });

  try {
    // 3. Execute code
    const result = await executeCode(language, code, problem.testCases);

    // 4. Update submission with execution status
    const updatedSubmission = await prisma.submission.update({
      where: { id: pendingSubmission.id },
      data: {
        status: result.status,
        executionTime: result.executionTime,
      },
    });

    return updatedSubmission;
  } catch (error) {
    // If execution crashes unexpectedly, mark submission as RUNTIME_ERROR
    const failedSubmission = await prisma.submission.update({
      where: { id: pendingSubmission.id },
      data: {
        status: 'RUNTIME_ERROR',
        executionTime: 0,
      },
    });
    console.error('Submission execution failed:', error);
    return failedSubmission;
  }
};

module.exports = {
  submitUserCode,
};
