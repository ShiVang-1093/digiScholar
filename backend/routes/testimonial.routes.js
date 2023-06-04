const express = require('express');
const router = express.Router();

const {
    isLoggedIn,
    isAdmin
} = require('../middlewares');

const { testimonialController: {
    createTestimonial,
    getTestimonials,
    getTestimonial,
    getTestimonialsByScholarship,
    updateTestimonial,
    deleteTestimonial
} } = require('../controllers');

router.post('/', isLoggedIn, createTestimonial);
router.get('/', getTestimonials);
router.get('/:id', getTestimonial);
router.get('/scholarship/:id', getTestimonialsByScholarship);
router.put('/:id', isLoggedIn, isAdmin, updateTestimonial);
router.delete('/:id', isLoggedIn, isAdmin, deleteTestimonial);

module.exports = router;
