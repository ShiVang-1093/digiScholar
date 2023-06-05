const express = require('express');
const router = express.Router();

const {
    isLoggedIn,
    isAdmin,
} = require('../middlewares');

const {
    applicationController: {
        createApplication,
        getApplications,
        getApplication,
        getApplicationsByUser,
        getApplicationsByScholarship,
        getApplicationsByScholarshipAndUser,
        updateApplication,
        deleteApplication,
    }
} = require('../controllers');

router.get('/', isLoggedIn, isAdmin, getApplications);
router.get('/user', isLoggedIn, getApplicationsByUser);
router.get('/:id', isLoggedIn, isAdmin, getApplication);
router.get(
    '/scholarship/:scholarshipId',
    isLoggedIn,
    getApplicationsByScholarship
);
router.get(
    '/scholarship/:scholarshipId/user',
    isLoggedIn,
    getApplicationsByScholarshipAndUser
);
router.post('/', isLoggedIn, createApplication);
router.put('/:id', isLoggedIn, isAdmin, updateApplication);
router.delete('/:id', isLoggedIn, isAdmin, deleteApplication);

module.exports = router;
