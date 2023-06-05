const { body } = require('express-validator');

const { User } = require('../models');

exports.validateRegister = [
    body('fname')
        .not()
        .isEmpty()
        .withMessage('First name is required.')
        .trim()
        .isLength({ min: 3, max: 20 })
        .withMessage('First name must be between 3 to 20 characters long.')
        .isAlpha()
        .withMessage('First name must be alphabetic.'),
    body('lname')
        .not()
        .isEmpty()
        .withMessage('Last name is required.')
        .trim()
        .isLength({ min: 3, max: 20 })
        .withMessage('Last name must be between 3 to 20 characters long.')
        .isAlpha()
        .withMessage('Last name must be alphabetic.'),
    body('email')
        .not()
        .isEmpty()
        .withMessage('Email is required.')
        .trim()
        .isLength({ min: 3, max: 50 })
        .withMessage('Email must be between 3 to 50 characters long.')
        .isEmail()
        .withMessage('Email must be valid.')
        .custom(async (email) => {
            const user = await User.findOne({ email });
            if (user) {
                throw new Error('Email already exists.');
            }
            return true;
        }
        ),
    body('password')
        .not()
        .isEmpty()
        .withMessage('Password is required.')
        .trim()
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long.')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, 'i')
        //eslint-disable-next-line max-len
        .withMessage('Password must contain at least one uppercase letter, one lowercase letter, one number and one special character.'),
    body('age') // optional
        .optional()
        .trim()
        .isInt({ min: 10, max: 100 })
        .withMessage('Age must be between 10 to 100.'),
    body('gender') // optional
        .optional()
        .trim()
        .isLength({ min: 3, max: 10 })
        .withMessage('Gender must be between 3 to 10 characters long.')
        .isAlpha()
        .withMessage('Gender must be alphabetic.'),
    body('cast') // optional
        .optional()
        .trim()
        .isLength({ min: 3, max: 20 })
        .withMessage('Cast must be between 3 to 20 characters long.')
        .isAlpha()
        .withMessage('Cast must be alphabetic.'),
    body('income') // optional
        .optional()
        .trim()
        .isLength({ min: 3, max: 20 })
        .withMessage('Income must be between 3 to 20 characters long.')
        .isAlpha()
        .withMessage('Income must be alphabetic.'),
    body('city') // optional
        .optional()
        .trim()
        .isLength({ min: 3, max: 20 })
        .withMessage('City must be between 3 to 20 characters long.')
        .isAlpha()
        .withMessage('City must be alphabetic.'),
    body('state') // optional
        .optional()
        .trim()
        .isLength({ min: 3, max: 20 })
        .withMessage('State must be between 3 to 20 characters long.')
        .isAlpha()
        .withMessage('State must be alphabetic.'),
    body('education') // optional
        .optional()
        .trim()
        .isLength({ min: 3, max: 20 })
        .withMessage('Education must be between 3 to 20 characters long.')
        .isAlpha()
        .withMessage('Education must be alphabetic.'),
    body('institute') // optional
        .optional()
        .trim()
        .isLength({ min: 3, max: 50 })
        .withMessage('Institute must be between 3 to 50 characters long.')
        .isAlpha()
        .withMessage('Institute must be alphabetic.'),
    body('contact') // optional
        .optional()
        .trim()
        .isLength({ min: 3, max: 20 })
        .withMessage('Contact must be between 3 to 20 characters long.')
        .isNumeric()
        .withMessage('Contact must be numeric.')
];

exports.validateLogin = [
    body('email')
        .not()
        .isEmpty()
        .withMessage('Email is required.')
        .trim()
        .isLength({ min: 3, max: 50 })
        .withMessage('Email must be between 3 to 50 characters long.')
        .isEmail()
        .withMessage('Email must be valid.'),
    body('password')
        .not()
        .isEmpty()
        .withMessage('Password is required.')
        .trim()
        .isLength({ min: 8 })
        .withMessage('Password must be at least 8 characters long.')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{8,}$/, 'i')
        //eslint-disable-next-line max-len
        .withMessage('Password must contain at least one uppercase letter, one lowercase letter, one number and one special character.')
];

exports.validateUpdateUser = [
    body('fname')
        .optional()
        .trim()
        .isLength({ min: 3, max: 20 })
        .withMessage('First name must be between 3 to 20 characters long.')
        .isAlpha()
        .withMessage('First name must be alphabetic.'),
    body('lname')
        .optional()
        .trim()
        .isLength({ min: 3, max: 20 })
        .withMessage('Last name must be between 3 to 20 characters long.')
        .isAlpha()
        .withMessage('Last name must be alphabetic.'),
    body('age') // optional
        .optional()
        .trim()
        .isInt({ min: 10, max: 100 })
        .withMessage('Age must be between 10 to 100.'),
    body('gender') // optional
        .optional()
        .trim()
        .isLength({ min: 3, max: 10 })
        .withMessage('Gender must be between 3 to 10 characters long.')
        .isAlpha()
        .withMessage('Gender must be alphabetic.'),
    body('cast') // optional
        .optional()
        .trim()
        .isLength({ min: 3, max: 20 })
        .withMessage('Cast must be between 3 to 20 characters long.')
        .isAlpha()
        .withMessage('Cast must be alphabetic.'),
    body('income') // optional
        .optional()
        .trim()
        .isLength({ min: 3, max: 20 })
        .withMessage('Income must be between 3 to 20 characters long.')
        .isAlpha()
        .withMessage('Income must be alphabetic.'),
    body('city') // optional
        .optional()
        .trim()
        .isLength({ min: 3, max: 20 })
        .withMessage('City must be between 3 to 20 characters long.')
        .isAlpha()
        .withMessage('City must be alphabetic.'),
    body('state') // optional
        .optional()
        .trim()
        .isLength({ min: 3, max: 20 })
        .withMessage('State must be between 3 to 20 characters long.')
        .isAlpha()
        .withMessage('State must be alphabetic.'),
    body('education') // optional
        .optional()
        .trim()
        .isLength({ min: 3, max: 20 })
        .withMessage('Education must be between 3 to 20 characters long.')
        .isAlpha()
        .withMessage('Education must be alphabetic.'),
    body('institute') // optional
        .optional()
        .trim()
        .isLength({ min: 3, max: 50 })
        .withMessage('Institute must be between 3 to 50 characters long.')
        .isAlpha()
        .withMessage('Institute must be alphabetic.'),
    body('contact') // optional, must be numeric
        .optional()
        .trim()
        .isLength({ min: 3, max: 20 })
        .withMessage('Contact must be between 3 to 20 characters long.')
        .isNumeric()
        .withMessage('Contact must be numeric.')
];
