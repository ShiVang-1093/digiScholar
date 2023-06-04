const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../middlewares');

const { authController: {
    registerUser,
    loginUser,
    getUser,
    updateUser
} } = require('../controllers');

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/user', isLoggedIn, getUser);
router.put('/user', isLoggedIn, updateUser);

module.exports = router;
