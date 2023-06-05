const express = require('express');
const router = express.Router();

const { isLoggedIn } = require('../middlewares');

const {
    authValidator: {
        validateRegister,
        validateLogin,
        validateUpdateUser,
    },
    validate
} = require('../validators');

const { authController: {
    registerUser,
    loginUser,
    getUser,
    updateUser
} } = require('../controllers');

router.post('/register', validateRegister, validate, registerUser);
router.post('/login', validateLogin, validate, loginUser);
router.get('/user', isLoggedIn, getUser);
router.put('/user', isLoggedIn, validateUpdateUser, validate, updateUser);

module.exports = router;
