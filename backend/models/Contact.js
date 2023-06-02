const mongoose = require('mongoose');
const { Schema, models, model } = mongoose;

const contactSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    phone: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    message: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = models.Contact || model('Contact', contactSchema);
