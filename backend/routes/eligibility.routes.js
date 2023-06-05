const express = require('express');
const router = express.Router();

const {
    isLoggedIn,
    isAdmin
} = require('../middlewares');

const {
    eligibilityController: {
        createEligibility,
        getEligibilities,
        getEligibility,
        getEligibilityByScholarship,
        updateEligibility,
        deleteEligibility
    }
} = require('../controllers');

router.get('/', getEligibilities);
router.get('/:id', getEligibility);
router.get('/scholarship/:id', getEligibilityByScholarship);
router.post('/', isLoggedIn, isAdmin, createEligibility);
router.put('/:id', isLoggedIn, isAdmin, updateEligibility);
router.delete('/:id', isLoggedIn, isAdmin, deleteEligibility);

module.exports = router;
