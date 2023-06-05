const mongoose = require('mongoose');
const { Schema, models, model } = mongoose;

const resourceSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    description: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    link: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    scholarship: {
        type: Schema.Types.ObjectId,
        ref: 'Scholarship'
    },
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = models.Resource || model('Resource', resourceSchema);
