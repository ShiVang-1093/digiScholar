const mongoose = require('mongoose');
const { Schema, models, model } = mongoose;

const scholarshipSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    providedBy: {
        type: String,
        required: true
    },
    rules: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    deadline: {
        type: Date,
        required: true
    },
    created_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    updated_by: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
}, {
    timestamps: true,
    strictQuery: true
});

module.exports = models.Scholarship || model('Scholarship', scholarshipSchema);
