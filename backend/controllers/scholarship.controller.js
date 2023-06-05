const { Scholarship } = require('../models');

exports.createScholarship = async (req, res) => {
    try {
        req.body.created_by = req.user.id;
        const scholarship = await Scholarship.create(req.body);
        return res.status(201).json({ scholarship });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.getScholarships = async (req, res) => {
    try {
        const scholarships = await Scholarship.find();
        return res.status(200).json({ scholarships });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.getScholarship = async (req, res) => {
    try {
        const scholarship = await Scholarship.findById(req.params.id);
        return res.status(200).json({ scholarship });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.updateScholarship = async (req, res) => {
    try {
        const scholarship = await Scholarship.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        return res.status(200).json({ scholarship });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.deleteScholarship = async (req, res) => {
    try {
        const scholarship = await Scholarship.findByIdAndDelete(req.params.id);
        return res.status(200).json({ scholarship });
    } catch (error) {
        return res.status(500).json({ error });
    }
};
