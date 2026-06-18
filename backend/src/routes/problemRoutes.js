const express = require('express');
const {
  createProblem,
  updateProblem,
  deleteProblem,
  getAllProblems,
  getSingleProblem,
} = require('../controllers/problemController');
const { protect, restrictTo, fetchUserIfExists } = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.get('/', getAllProblems);
router.get('/:slug', fetchUserIfExists, getSingleProblem);

// Admin-only routes
router.post('/', protect, restrictTo('ADMIN'), createProblem);
router.put('/:id', protect, restrictTo('ADMIN'), updateProblem);
router.delete('/:id', protect, restrictTo('ADMIN'), deleteProblem);

module.exports = router;
