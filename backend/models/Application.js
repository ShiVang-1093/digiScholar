const mongoose = require('mongoose');
const { Schema, models, model } = mongoose;

const applicationSchema = new Schema({
    scholarship: {
        type: Schema.Types.ObjectId,
        ref: 'Scholarship',
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending'
    }
}, { timestamps: true });

applicationSchema.index({ scholarship: 1, user: 1 }, { unique: true });

module.exports = models.Application || model('Application', applicationSchema);