const express = require('express');
const { register, login, getProfile } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const { authLimiter } = require('../middleware/rateLimiter');

const router = express.Router();

// Public routes with rate limit
router.post('/register', authLimiter, register);
router.post('/login', authLimiter, login);

// Private/Protected routes
router.get('/profile', protect, getProfile);

module.exports = router;
