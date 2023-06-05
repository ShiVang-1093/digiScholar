const { Resource } = require('../models');

exports.createResource = async (req, res) => {
    try {
        req.body.created_by = req.user.id;
        const resource = await Resource.create(req.body);
        return res.status(201).json({ resource });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error });
    }
};

exports.getResources = async (req, res) => {
    try {
        const resources = await Resource.find();
        return res.status(200).json({ resources });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.getResource = async (req, res) => {
    try {
        const resource = await Resource.findById(req.params.id);
        return res.status(200).json({ resource });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.getResourceByScholarship = async (req, res) => {
    try {
        const resource = await Resource.find({ scholarship: req.params.id });
        return res.status(200).json({ resource });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.updateResource = async (req, res) => {
    try {
        const resource = await Resource.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );
        return res.status(200).json({ resource });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.deleteResource = async (req, res) => {
    try {
        const resource = await Resource.findByIdAndDelete(req.params.id);
        return res.status(200).json({ resource });
    } catch (error) {
        return res.status(500).json({ error });
    }
};
