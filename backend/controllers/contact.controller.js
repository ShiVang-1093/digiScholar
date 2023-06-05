const { Contact } = require('../models');

exports.createContact = async (req, res) => {
    try {
        req.body.created_by = req.user.id;
        const contact = await Contact.create(req.body);
        return res.status(201).json({ contact });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        return res.status(200).json({ contacts });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.getContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        return res.status(200).json({ contact });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.updateContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        return res.status(200).json({ contact });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        return res.status(200).json({ contact });
    } catch (error) {
        return res.status(500).json({ error });
    }
};
