const cloudinary = require('cloudinary').v2;
const { cloudinaryConfig } = require('../config');
const { Scholarship } = require('../models');

cloudinary.config(cloudinaryConfig);

const folder = process.env.CLOUDINARY_FOLDER;

exports.createScholarship = async (req, res) => {
    try {
        const { image } = req.files;

        const imageResult = image[0].path;

        const scholarship = await Scholarship.create({
            ...req.body,
            image: imageResult,
            created_by: req.user.id
        });

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
        const { image } = req.files;

        const imageResult = image[0].path;

        const scholarship = await Scholarship.findById(req.params.id);

        if (scholarship.image !== imageResult) {
            const imagePublicId = cloudinary
                .url(scholarship.image)
                .split('/')
                .pop()
                .split('.')[0];
            await cloudinary.uploader.destroy(
                `${folder}/${imagePublicId}`,
                (error, result) => {
                    if (error) {
                        console.log(error);
                    }
                    console.log(result);
                }
            );
        }

        const updatedScholarship = await Scholarship.findByIdAndUpdate(
            req.params.id,
            {
                ...req.body,
                image: imageResult
            },
            { new: true }
        );

        return res.status(200).json({ scholarship: updatedScholarship });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.deleteScholarship = async (req, res) => {
    try {
        const test = await Scholarship.findByIdAndDelete(req.params.id);
        if (!test) {
            return res.status(404).json({ error: 'Scholarship not found' });
        }
        const scholarship = await Scholarship.findById(req.params.id);
        const imagePublicId = cloudinary
            .url(scholarship.image)
            .split('/')
            .pop()
            .split('.')[0];
        await cloudinary.uploader.destroy(
            `${folder}/${imagePublicId}`,
            (error, result) => {
                if (error) {
                    console.log(error);
                }
                console.log(result);
            }
        );
        return res.status(200).json({ message: 'Scholarship deleted' });
    } catch (error) {
        return res.status(500).json({ error });
    }
};
