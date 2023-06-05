const { FAQ } = require('../models');

exports.createFAQ = async (req, res) => {
    try {
        req.body.created_by = req.user.id;
        const faq = await FAQ.create(req.body);
        res.status(201).json({ faq });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.getFAQs = async (req, res) => {
    try {
        const faqs = await FAQ.find();
        res.status(200).json({ faqs });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.getFAQ = async (req, res) => {
    try {
        const faq = await FAQ.findById(req.params.id);
        res.status(200).json({ faq });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.updateFAQ = async (req, res) => {
    try {
        const faq = await FAQ.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json({ faq });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.deleteFAQ = async (req, res) => {
    try {
        const faq = await FAQ.findByIdAndDelete(req.params.id);
        res.status(200).json({ faq });
    } catch (error) {
        res.status(500).json({ error });
    }
};
