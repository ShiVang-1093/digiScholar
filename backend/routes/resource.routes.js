const express = require('express');
const router = express.Router();

const {
    isLoggedIn,
    isAdmin,
} = require('../middlewares');

const { resourceController: {
    createResource,
    getResources,
    getResource,
    getResourceByScholarship,
    updateResource,
    deleteResource
} } = require('../controllers');

router.get('/', getResources);
router.get('/:id', getResource);
router.get('/scholarship/:id', getResourceByScholarship);
router.post('/', isLoggedIn, isAdmin, createResource);
router.put('/:id', isLoggedIn, isAdmin, updateResource);
router.delete('/:id', isLoggedIn, isAdmin, deleteResource);

module.exports = router;
