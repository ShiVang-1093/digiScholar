const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    /* 
    fname
    mname
    lname
    institute
    email
    contact
    isAdmin
    password
    timestamps
    */
    fname: {
        type: String,
        required: true
    },
    mname: {
        type: String,
        required: false
    },
    lname: {
        type: String,
        required: true
    },
    institute: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    contact: {
        type: Number,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    },
    password: {
        type: String,
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

const User = mongoose.model('User', userSchema);

module.exports = User;