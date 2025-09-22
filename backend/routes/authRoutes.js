const express = require('express');
const router = express.Router();
const { signup, login, profile } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');
const { isAdmin } = require('../middleware/roleMiddleware');

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', protect, profile);
router.get('/check-admin', protect, isAdmin, (req, res) => res.json({ role: 'admin access granted' }));

module.exports = router;
