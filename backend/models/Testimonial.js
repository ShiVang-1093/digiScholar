const mongoose = require('mongoose');
const { Schema, models, model } = mongoose;

const testimonialSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    testimonial: {
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

module.exports = models.Testimonial || model('Testimonial', testimonialSchema);