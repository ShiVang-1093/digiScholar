const mongoose = require('mongoose');
const { Schema, models, model } = mongoose;

const faqSchema = new Schema({
    question: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    answer: {
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

module.exports = models.FAQ || model('FAQ', faqSchema);
