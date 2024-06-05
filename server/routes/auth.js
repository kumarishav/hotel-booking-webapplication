const router = require('express').Router();
const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');
// const multer = require('multer');

const User = require('../models/User');

// storage


//user register
router.post('/register', async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        //existing user
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'User alredy exists' })
        }

        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // create user
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        //save the new user
        await newUser.save();

        //sucessfull message
        res.status(200).json({ message: 'User registered sucessfully', user: newUser });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Registration failed', error: err.message });
    }
});

module.exports = router;