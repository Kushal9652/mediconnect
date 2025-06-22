const express = require('express');
const { registerUser, loginUser, getUserProfile, handleDeleteUser } = require('../controller/user.controller');
const authenticateUser = require('../middleware/authenticateuser');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', authenticateUser, getUserProfile);
router.delete('/delete/:id', authenticateUser, handleDeleteUser);

module.exports = router;