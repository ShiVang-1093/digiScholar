const mongoose = require('mongoose');

const scholarshipSchema = new mongoose.Schema({
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
    timestamps: {
        created_at: {
            type: Date,
            default: Date.now
        },
        updated_at: {
            type: Date,
            default: Date.now
        },
        created_by: {
            type: String,
        },
        updated_by: {
            type: String,
        }
    }
});

const Scholarship = mongoose.model('Scholarship', scholarshipSchema);

module.exports = Scholarship;
