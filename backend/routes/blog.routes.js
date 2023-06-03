const express = require('express');
const router = express.Router();
const { blogController: {
    getAllBlogs,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog
} } = require('../controllers');

const {
    authMiddleware,
    adminMiddleware
} = require('../middlewares');

router.get('/', getAllBlogs); // route to get all the blogs
router.get('/:id', getBlogById); // route get a blog with particular id
router.post('/', authMiddleware, adminMiddleware, createBlog); // route to add a blog in the db
router.put('/:id', authMiddleware, adminMiddleware, updateBlog); // route update a blog with particular id
router.delete('/:id', authMiddleware, adminMiddleware, deleteBlog); // route delete particular blog

module.exports = router;