const express = require('express');
const { getUsers, deleteUser, getPosts, deletePost, createNotification } = require('../controllers/adminController');
const { protect, isAdmin } = require('../middlewares/authMiddleware');
const router = express.Router();
const { linkUserToInstitute, unlinkUserFromInstitute, assignVerificationBadge, verifyUser } = require('../controllers/adminController');

// Admin routes protected by authentication middleware and role check
router.get('/users', protect, isAdmin, getUsers);
router.delete('/users/:id', protect, isAdmin, deleteUser);
router.get('/posts', protect, isAdmin, getPosts);
router.delete('/posts/:id', protect, isAdmin, deletePost);
router.post('/notifications', protect, isAdmin, createNotification);
router.post('/link-user-to-institute', linkUserToInstitute);
router.post('/unlink-user-from-institute', unlinkUserFromInstitute);
router.post('/assign-verification-badge', assignVerificationBadge);
router.post('/verify-user', verifyUser);

module.exports = router;
