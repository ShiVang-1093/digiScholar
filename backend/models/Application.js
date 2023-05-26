const mongoose = require('mongoose');
const { Schema, models, model } = mongoose;

const applicationSchema = new Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    scholarship_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Scholarship',
        required: true
    },
    isApproved: {
        type: Boolean,
        default: false
    },
    comments: {
        type: String
    },
    isMoneyTransfered: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true,
    strictQuery: true
});

applicationSchema.index({ user_id: 1, scholarship_id: 1 }, { unique: true });

module.exports = models.Application || model('Application', applicationSchema);
