const mongoose = require('mongoose');
const { Schema, models, model } = mongoose;
const { Application, Testimonial, Contact } = require('.');

const userSchema = new Schema({
    fname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    lname: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50,
        unique: true,
        match: /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 50
    },
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
    city: {
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
    contact: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

userSchema.pre('remove', async function (next) {
    try {
        const user = this;
        await Application.deleteMany({ user: user._id });
        await Testimonial.deleteMany({ user: user._id });
        await Contact.deleteMany({ user: user._id });
        next();
    } catch (error) {
        next(error);
    }
});

module.exports = models.User || model('User', userSchema);
