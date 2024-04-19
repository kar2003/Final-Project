// userRoutes.js

const express = require('express');
const router = express.Router();

// Import user controller methods
const { createUser, loginUser, logoutUser, getUserProfile } = require('./gameController');

// User registration route
router.post('/register', createUser);

// User login route
router.post('/login', loginUser);

// User logout route
router.post('/logout', logoutUser);

// Get user profile route
router.get('/profile', getUserProfile);

module.exports = router;
