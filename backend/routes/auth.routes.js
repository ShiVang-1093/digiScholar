const express = require('express');
const router = express.Router();

const {
    authMiddleware,
    adminMiddleware
} = require('../middlewares');

const { authController: {
    registerUser,
    loginUser,
    getUser
} } = require('../controllers');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user', authMiddleware, getUser);

module.exports = router;
