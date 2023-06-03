const mongoose = require('mongoose');
const { Schema, models, model } = mongoose;

const blogSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    content: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    image: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    other_images: {
        type: Array,
        required: true,
        trim: true,
        default: [],
        minlength: 3
    },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = models.Blog || model('Blog', blogSchema);
