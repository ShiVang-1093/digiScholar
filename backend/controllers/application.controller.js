const { Application } = require('../models');

exports.createApplication = async (req, res) => {
    try {
        req.body.user = req.user.id;
        const test = await Application.findOne({
            scholarship: req.body.scholarship,
            user: req.body.user,
        });
        if (test) {
            return res.status(409).json({ error: 'Duplicate Key Error' });
        }
        const application = await Application.create(req.body);
        return res.status(201).json(application);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.getApplications = async (req, res) => {
    try {
        const applications = await Application.find();
        return res.status(200).json(applications);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.getApplication = async (req, res) => {
    try {
        const application = await Application.findById(req.params.id);
        if (application) {
            return res.status(200).json(application);
        } else {
            return res.status(404).json({ message: 'Application not found!' });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.getApplicationsByUser = async (req, res) => {
    try {
        const applications = await Application.find({ user: req.user.id });
        return res.status(200).json(applications);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.getApplicationsByScholarship = async (req, res) => {
    try {
        const applications = await Application.find({
            scholarship: req.params.scholarshipId,
        });
        return res.status(200).json(applications);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.getApplicationsByScholarshipAndUser = async (req, res) => {
    try {
        const applications = await Application.find({
            scholarship: req.params.scholarshipId,
            user: req.user.id,
        });
        return res.status(200).json(applications);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.updateApplication = async (req, res) => {
    try {
        if (req.body.status &&
            (req.body.status === 'approved' ||
                req.body.status === 'rejected')) {
            const application = await Application.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            return res.status(200).json(application);
        } else {
            return res.status(400).json({
                message: 'Bad Request: Status must be approved or rejected',
            });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

exports.deleteApplication = async (req, res) => {
    try {
        const application = await Application.findByIdAndDelete(req.params.id);
        return res.status(200).json({
            message: 'Application deleted successfully!',
            application,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};
