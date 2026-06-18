const express = require('express');
const {
  createContest,
  addProblemToContest,
  getAllContests,
  getContestDetails,
  getContestLeaderboard,
} = require('../controllers/contestController');
const { protect, restrictTo } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.get('/', getAllContests);
router.get('/:id', getContestDetails);
router.get('/:id/leaderboard', getContestLeaderboard);

// Admin-only routes
router.post('/', protect, restrictTo('ADMIN'), createContest);
router.post('/:id/problem', protect, restrictTo('ADMIN'), addProblemToContest);

module.exports = router;
