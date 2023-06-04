const { Contact } = require('../models');

exports.createContact = async (req, res) => {
    try {
        const contact = await Contact.create(req.body);
        res.status(201).json({ contact });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json({ contacts });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.getContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        res.status(200).json({ contact });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.updateContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json({ contact });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        res.status(200).json({ contact });
    } catch (error) {
        res.status(500).json({ error });
    }
};
