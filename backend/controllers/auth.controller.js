require('dotenv').config({ path: '../.env' });
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

exports.registerUser = async (req, res) => {

    const {
        fname,
        lname,
        email,
        password,
        confirm_password,
        age,
        gender,
        cast,
        income,
        city,
        state,
        education,
        contact
    } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        user = new User({
            fname,
            lname,
            email,
            password,
            confirm_password,
            age,
            gender,
            cast,
            income,
            city,
            state,
            education,
            contact
        });

        if (password !== confirm_password) {
            return res.status(400).json({ msg: 'Password does not match' });
        }

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();

        const payload = {
            user: {
                id: user._id
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            });

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error' });
    }

};

exports.loginUser = async (req, res) => {

    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        const payload = {
            user: {
                id: user._id
            }
        };

        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: 360000 },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );

    } catch (err) {
        console.error(err.message);
        res.status(500).json({ msg: 'Server Error' });
    }

};

exports.getUser = async (req, res) => {
    try {
        // Access the user ID from the authenticated request
        const userId = req.user.id;

        console.log('User ID:', req.user);

        // Find the user in the database
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.error('Error retrieving user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};

exports.updateUser = async (req, res) => {
    try {
        // Access the user ID from the authenticated request
        const userId = req.user.id;

        // Find the user in the database
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        // Update the user's information
        user.fname = req.body.fname || user.fname;
        user.mname = req.body.mname || user.mname;
        user.lname = req.body.lname || user.lname;
        user.institute = req.body.institute || user.institute;
        user.email = req.body.email || user.email;
        user.contact = req.body.contact || user.contact;

        // Save the updated user to the database
        await user.save();

        return res.status(200).json(user);
    } catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
