const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
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
    timestamps: {
        type: Date,
        default: Date.now
    }
});

applicationSchema.index({ user_id: 1, scholarship_id: 1 }, { unique: true });

const Application = mongoose.model('Application', applicationSchema);

module.exports = Application;
