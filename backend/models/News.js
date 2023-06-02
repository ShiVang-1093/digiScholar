const mongoose = require('mongoose');
const { Schema, models, model } = mongoose;

const newsSchema = new Schema({
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
    created_by: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = models.News || model('News', newsSchema);
