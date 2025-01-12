const express = require('express');
const { registerUser, loginUser, forgotPassword, verifyEmail } = require('../controllers/authController');
const router = express.Router();

// Register user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

// Forgot password
router.post('/forgot-password', forgotPassword);

// Email verification
router.get('/verify-email/:userId', verifyEmail);

module.exports = router;
