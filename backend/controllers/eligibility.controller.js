const { Eligibility } = require('../models');

exports.createEligibility = async (req, res) => {
    try {
        req.body.created_by = req.user.id;
        const eligibility = await Eligibility.create(req.body);
        return res.status(201).json({ eligibility });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.getEligibilities = async (req, res) => {
    try {
        const eligibilities = await Eligibility.find();
        return res.status(200).json({ eligibilities });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.getEligibility = async (req, res) => {
    try {
        const eligibility = await Eligibility.findById(req.params.id);
        return res.status(200).json({ eligibility });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.getEligibilityByScholarship = async (req, res) => {
    try {
        const eligibility = await Eligibility.findOne({
            scholarship: req.params.id
        });
        return res.status(200).json({ eligibility });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.updateEligibility = async (req, res) => {
    try {
        const eligibility = await Eligibility.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        return res.status(200).json({ eligibility });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

exports.deleteEligibility = async (req, res) => {
    try {
        const eligibility = await Eligibility.findByIdAndDelete(req.params.id);
        return res.status(200).json({ eligibility });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
