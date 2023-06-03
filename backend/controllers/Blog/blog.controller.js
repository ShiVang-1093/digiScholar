const Blog = require('../../models/Blog');
const mongoose = require('mongoose');

exports.createBlog = async (req, res) => {
};

exports.updateBlog = async (req, res) => {
};
exports.getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json({ message: "Blogs retrieved successfully", blogs });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: "Server Error!", error });
    }
};

exports.getBlogById = (req, res) => {
    const { id } = req.params.id;
    Blog.findOne({ _id: id }).exec((err, blog) => {
        if (err) {
            return res.status(400).json({ error: "Blog not found" });
        }
        res.json(blog);
    });
};

exports.deleteBlog = async (req, res) => {
    const session = await mongoose.startSession();
    const blogId = req.params.id;
    try {
        session.startTransaction();
        await Blog.deleteOne({ _id: mongoose.Types.ObjectId(blogId) });
        await session.commitTransaction();
        return res.status(200).json({ message: "Blog deleted Sucessfully!" });
    } catch (error) {
        await session.abortTransaction();
        return res.status(500).json({ message: "Server Error!", error });
    }
};