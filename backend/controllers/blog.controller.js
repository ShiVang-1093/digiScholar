const cloudinary = require('cloudinary').v2;
const { cloudinaryConfig } = require('../config');
const { Blog } = require('../models');

cloudinary.config(cloudinaryConfig);

const folder = process.env.CLOUDINARY_FOLDER;

exports.createBlog = async (req, res) => {
    try {
        console.log(req.files);
        const { image, other_images } = req.files;
        const { title, content } = req.body;

        const imageResult = image[0].path;
        const otherImageResult = other_images.map((image) => image.path);

        const blog = await Blog.create({
            title,
            content,
            image: imageResult,
            other_images: otherImageResult,
            created_by: req.user.id
        });

        return res.status(201).json({ blog });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ error });
    }
};

exports.getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        return res.status(200).json({ blogs });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.getBlog = async (req, res) => {
    try {
        const blog = await Blog.findById(req.params.id);
        return res.status(200).json({ blog });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.updateBlog = async (req, res) => {
    try {
        const { image, other_images } = req.files;
        const { title, content } = req.body;

        const imageResult = image[0].path;
        const otherImageResult = other_images.map((image) => image.path);

        const blog = await Blog.findById(req.params.id);

        if (blog.image !== imageResult) {
            const imagePublicId = cloudinary
                .url(blog.image)
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

        if (blog.other_images.length !== otherImageResult.length) {
            await Promise.all(
                blog.other_images.map(async (image) => {
                    const imagePublicId = cloudinary
                        .url(image)
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
                })
            );
        }

        const updatedBlog = await Blog.findByIdAndUpdate(
            req.params.id,
            {
                title,
                content,
                image: imageResult,
                other_images: otherImageResult
            },
            { new: true }
        );

        return res.status(200).json({ updatedBlog });
    } catch (error) {
        return res.status(500).json({ error });
    }
};

exports.deleteBlog = async (req, res) => {
    try {
        const test = await Blog.findById(req.params.id);
        if (!test) {
            return res.status(404).json({ error: 'Blog not found' });
        }
        const blog = await Blog.findByIdAndDelete(req.params.id);
        const imagePublicId = cloudinary
            .url(blog.image)
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
        await Promise.all(
            blog.other_images.map(async (image) => {
                const imagePublicId = cloudinary
                    .url(image)
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
            })
        );

        return res.status(200).json({ blog });
    } catch (error) {
        return res.status(500).json({ error });
    }
};
