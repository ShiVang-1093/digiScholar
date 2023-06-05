const { News } = require('../models');

exports.createNews = async (req, res) => {
    try {
        req.body.created_by = req.user.id;
        const news = await News.create(req.body);
        res.status(201).json({ news });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.getNews = async (req, res) => {
    try {
        const news = await News.find();
        res.status(200).json({ news });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.getNewsById = async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        res.status(200).json({ news });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.updateNews = async (req, res) => {
    try {
        const news = await News.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json({ news });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.deleteNews = async (req, res) => {
    try {
        const news = await News.findByIdAndDelete(req.params.id);
        res.status(200).json({ news });
    } catch (error) {
        res.status(500).json({ error });
    }
};
