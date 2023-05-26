const mongoose = require('mongoose');
const { Schema, models, model } = mongoose;

const UserSchema = new Schema({
    fname: {
        type: String,
        required: [true, 'Please enter your first name'],
        trim: true,
        minlength: 3
    },
    mname: {
        type: String,
        required: [true, 'Please enter your middle name'],
        trim: true,
        minlength: 3
    },
    lname: {
        type: String,
        required: [true, 'Please enter your last name'],
        trim: true,
        minlength: 3
    },
    institute: {
        type: String,
        required: [true, 'Please enter your institute name'],
        trim: true,
        minlength: 3
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        trim: true,
        minlength: 3,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    contact: {
        type: String,
        required: [true, 'Please enter your contact number'],
        trim: true,
        minlength: 3,
        match: [/^[0-9]{10}$/, "Please enter a valid contact number"]
    },
    isAdmin: {
        type: Boolean,
        required: true,
        default: false
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        // ^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$
        match: [/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+{};:,<.>]).{8,}$/, "Please enter a valid password"]
    },
}, {
    timestamps: true,
    strictQuery: true
});

module.exports = models.User || model('User', UserSchema);