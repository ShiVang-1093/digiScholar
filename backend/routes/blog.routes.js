const express = require('express');
const router = express.Router();

const {
    isLoggedIn,
    isAdmin
} = require('../middlewares');

const { blogController: {
    createBlog,
    getBlogs,
    getBlog,
    updateBlog,
    deleteBlog
} } = require('../controllers');

router.get('/', getBlogs);
router.get('/:id', getBlog);
router.post('/', isLoggedIn, isAdmin, createBlog);
router.put('/:id', isLoggedIn, isAdmin, updateBlog);
router.delete('/:id', isLoggedIn, isAdmin, deleteBlog);

module.exports = router;
