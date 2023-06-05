const { Resource } = require('../models');

exports.createResource = async (req, res) => {
    try {
        req.body.created_by = req.user.id;
        const resource = await Resource.create(req.body);
        res.status(201).json({ resource });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
};

exports.getResources = async (req, res) => {
    try {
        const resources = await Resource.find();
        res.status(200).json({ resources });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.getResource = async (req, res) => {
    try {
        const resource = await Resource.findById(req.params.id);
        res.status(200).json({ resource });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.getResourceByScholarship = async (req, res) => {
    try {
        const resource = await Resource.find({ scholarship: req.params.id });
        res.status(200).json({ resource });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.updateResource = async (req, res) => {
    try {
        const resource = await Resource.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        res.status(200).json({ resource });
    } catch (error) {
        res.status(500).json({ error });
    }
};

exports.deleteResource = async (req, res) => {
    try {
        const resource = await Resource.findByIdAndDelete(req.params.id);
        res.status(200).json({ resource });
    } catch (error) {
        res.status(500).json({ error });
    }
};
