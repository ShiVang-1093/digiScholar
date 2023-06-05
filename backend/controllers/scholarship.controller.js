const { Scholarship } = require('../models');

exports.createScholarship = async (req, res) => {
    try {
        req.body.created_by = req.user.id;
        const scholarship = await Scholarship.create(req.body);
        res.status(201).json({ scholarship });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.getScholarships = async (req, res) => {
    try {
        const scholarships = await Scholarship.find();
        res.status(200).json({ scholarships });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.getScholarship = async (req, res) => {
    try {
        const scholarship = await Scholarship.findById(req.params.id);
        res.status(200).json({ scholarship });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.updateScholarship = async (req, res) => {
    try {
        const scholarship = await Scholarship.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json({ scholarship });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.deleteScholarship = async (req, res) => {
    try {
        const scholarship = await Scholarship.findByIdAndDelete(req.params.id);
        res.status(200).json({ scholarship });
    } catch (error) {
        res.status(500).json({ error });
    }
};
