const express = require('express');
const router = express.Router();

const {
    isLoggedIn,
    isAdmin,
} = require('../middlewares');

const { newsController: {
    createNews,
    getNews,
    getNewsById,
    updateNews,
    deleteNews
} } = require('../controllers');

router.get('/', getNews);
router.get('/:id', getNewsById);
router.post('/', isLoggedIn, isAdmin, createNews);
router.put('/:id', isLoggedIn, isAdmin, updateNews);
router.delete('/:id', isLoggedIn, isAdmin, deleteNews);

module.exports = router;
