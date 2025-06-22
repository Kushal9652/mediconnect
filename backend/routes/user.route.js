const express = require('express');
const { registerUser, loginUser, getUserProfile, handleDeleteUser, updateUserProfile } = require('../controller/user.controller');
const authenticateUser = require('../middleware/authenticateuser');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authenticateUser, getUserProfile);
router.get('/me', authenticateUser, getUserProfile);
router.delete('/delete/:id', authenticateUser, handleDeleteUser);
router.post('/update', authenticateUser, updateUserProfile);

module.exports = router;