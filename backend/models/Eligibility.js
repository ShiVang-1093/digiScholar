const mongoose = require('mongoose');
const { Schema, models, model } = mongoose;

const eligibilitySchema = new Schema({
    age: {
        type: Number,
        required: true,
        trim: true,
        min: 10,
        max: 100
    },
    gender: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 10
    },
    cast: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    income: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    state: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    education: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
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

module.exports = models.Eligibility || model('Eligibility', eligibilitySchema);
