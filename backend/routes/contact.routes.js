const express = require('express');
const router = express.Router();

const {
    isLoggedIn,
    isAdmin,
} = require('../middlewares');

const { contactController: {
    createContact,
    getContacts,
    getContact,
    updateContact,
    deleteContact
} } = require('../controllers');

router.get('/', isLoggedIn, isAdmin, getContacts);
router.get('/:id', isLoggedIn, isAdmin, getContact);
router.post('/', createContact);
router.put('/:id', isLoggedIn, isAdmin, updateContact);
router.delete('/:id', isLoggedIn, isAdmin, deleteContact);

module.exports = router;
