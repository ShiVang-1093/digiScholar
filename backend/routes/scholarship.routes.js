const express = require('express');
const router = express.Router();

const {
    isLoggedIn,
    isAdmin
} = require('../middlewares');

const { scholarshipController: {
    createScholarship,
    getScholarships,
    getScholarship,
    updateScholarship,
    deleteScholarship
} } = require('../controllers');

router.get('/', getScholarships);
router.get('/:id', getScholarship);
router.post('/', isLoggedIn, isAdmin, createScholarship);
router.put('/:id', isLoggedIn, isAdmin, updateScholarship);
router.delete('/:id', isLoggedIn, isAdmin, deleteScholarship);

module.exports = router;
