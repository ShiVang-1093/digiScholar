const cloudinary = require('cloudinary').v2;
const { cloudinaryConfig } = require('../config');
const { News } = require('../models');

cloudinary.config(cloudinaryConfig);

const folder = process.env.CLOUDINARY_FOLDER;

exports.createNews = async (req, res) => {
    try {
        const { image } = req.files;

        const imageResult = image[0].path;

        const news = await News.create({
            ...req.body,
            image: imageResult,
            created_by: req.user.id
        });

        return res.status(201).json({ news });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.getNews = async (req, res) => {
    try {
        const news = await News.find();
        return res.status(200).json({ news });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.getNewsById = async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        return res.status(200).json({ news });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.updateNews = async (req, res) => {
    try {
        const { image } = req.files;

        const imageResult = image[0].path;

        const news = await News.findById(req.params.id);

        if (news.image !== imageResult) {
            const imagePublicId = cloudinary
                .url(news.image)
                .split('/')
                .pop()
                .split('.')[0];
            await cloudinary.uploader.destroy(
                `${folder}/${imagePublicId}`,
                async (error, result) => {
                    if (error) {
                        return res.status(500).json({ error });
                    }
                    console.log(result);
                    const updatedNews = await News.findByIdAndUpdate(
                        req.params.id,
                        {
                            ...req.body,
                            image: imageResult
                        },
                        { new: true }
                    );
                    return res.status(200).json({ news: updatedNews });
                }
            );
        } else {
            const news = await News.findByIdAndUpdate(
                req.params.id,
                {
                    ...req.body,
                    image: news.image
                },
                { new: true }
            );
            return res.status(200).json({ news });
        }
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.deleteNews = async (req, res) => {
    try {
        const test = await News.findById(req.params.id);
        if (!test) {
            return res.status(404).json({ error: 'News not found' });
        }
        const imagePublicId = cloudinary
            .url(test.image)
            .split('/')
            .pop()
            .split('.')[0];
        await cloudinary.uploader.destroy(
            `${folder}/${imagePublicId}`,
            async (error, result) => {
                if (error) {
                    return res.status(500).json({ error });
                }
                console.log(result);

                return res.status(200).json({ message: 'News deleted' });
            }
        );
    } catch (error) {
        return res.status(500).json({ error });
    }
};
