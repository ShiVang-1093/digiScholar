const mongoose = require('mongoose');
const { Schema, models, model } = mongoose;

const applicationSchema = new Schema({
    scholarship: {
        type: Schema.Types.ObjectId,
        ref: 'Scholarship'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    }
}, { timestamps: true });

module.exports = models.Application || model('Application', applicationSchema);