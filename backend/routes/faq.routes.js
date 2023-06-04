const express = require('express');
const router = express.Router();

const {
    isLoggedIn,
    isAdmin,
} = require('../middlewares');

const { faqController: {
    createFAQ,
    getFAQs,
    getFAQ,
    updateFAQ,
    deleteFAQ
} } = require('../controllers');

router.get('/', getFAQs);
router.get('/:id', getFAQ);
router.post('/', isLoggedIn, isAdmin, createFAQ);
router.put('/:id', isLoggedIn, isAdmin, updateFAQ);
router.delete('/:id', isLoggedIn, isAdmin, deleteFAQ);

module.exports = router;
