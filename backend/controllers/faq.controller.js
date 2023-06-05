const { FAQ } = require('../models');

exports.createFAQ = async (req, res) => {
    try {
        req.body.created_by = req.user.id;
        const faq = await FAQ.create(req.body);
        return res.status(201).json({ faq });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.getFAQs = async (req, res) => {
    try {
        const faqs = await FAQ.find();
        return res.status(200).json({ faqs });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.getFAQ = async (req, res) => {
    try {
        const faq = await FAQ.findById(req.params.id);
        return res.status(200).json({ faq });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.updateFAQ = async (req, res) => {
    try {
        const faq = await FAQ.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        return res.status(200).json({ faq });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.deleteFAQ = async (req, res) => {
    try {
        const faq = await FAQ.findByIdAndDelete(req.params.id);
        return res.status(200).json({ faq });
    } catch (error) {
        return res.status(500).json({ error });
    }
};
