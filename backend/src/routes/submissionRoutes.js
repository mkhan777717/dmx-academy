const express = require('express');
const {
  submitSolution,
  getAllSubmissions,
  getSingleSubmission,
} = require('../controllers/submissionController');
const { protect } = require('../middleware/authMiddleware');
const { submissionLimiter } = require('../middleware/rateLimiter');

const router = express.Router();

// Publicly view submissions
router.get('/', getAllSubmissions);
router.get('/:id', getSingleSubmission);

// Submit code for a specific problem (protected and rate-limited)
router.post('/problem/:problemId', protect, submissionLimiter, submitSolution);

module.exports = router;
