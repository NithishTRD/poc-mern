
const express = require('express');
const { registerUser, loginUser, getUserProfile, deleteUser, updateUser } = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/login', loginUser);
router.post('/register', registerUser);
router.get('/profile', protect, getUserProfile);
router.delete('/profile', protect, deleteUser);
router.put('/profile', protect, updateUser);

module.exports = router;