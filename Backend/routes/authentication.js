// Import Express.js, create router, import User Model and import (body, validationResult, bycrypt, jwt) package
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_CODE = "Hamid#Raza";
const fetchUser = require('../middleware/fetchUser');

// Route # 1 : Create POST request of /createUser
router.post('/createUser', [
    // Validation of name, email and password
    body('email', 'Enter a valid email address').isEmail(),
    body('name').isLength({ min: 3 }),
    body('password').isLength({ min: 8 })
], async (request, response) => {
    let success = false;
    // Checking Result and calculating errors
    const error = validationResult(request);
    if (!error.isEmpty()) {
        success = false;
        return response.status(400).json({success, error: error.array() });
    }
    try {
        // If user with this email already exist then it shows error as following
        let user = await User.findOne({ email: request.body.email });
        if (user) {
            success = false;
            return response.json({success, error:"Sorry, The User with this Email already exist."});
        }
        // Securing Password
        const salt = await bcrypt.genSalt(10);
        let securedPassword = await bcrypt.hash(request.body.password, salt);
        // Creating User with Given Informations
        user = await User.create({
            name: request.body.name,
            email: request.body.email,
            password: securedPassword,
        })
        const data = {
            user: {
                id: user.id
            }
        }
        success = true;
        const authToken = jwt.sign(data, SECRET_CODE);
        response.json({ success: success, authToken, userId: user._id });
    } catch (error) {
        console.error(error);
        response.send("Error occurred due to some reason.");
    }
})
// Route # 2 : Create a POST request of /login
router.post('/login', [
    // Validation of name, email and password
    body('email', 'Enter a valid Email Address.').isEmail(),
    body('password', 'Please Enter Password.').exists()
], async (request, response) => {
    const error = validationResult(request);
    let success = false;
    if (!error.isEmpty()) {
        success = false;
        return response.json({success, error: "Enter a Valid email address" });
    }
    try {
        const { email, password } = request.body;
        let user = await User.findOne({ email });
        if (!user) {
            success = false;
            return response.json({ success: success, error: "Please try to Login with correct credentials." });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            success = false;
            return response.json({ success: success, error: "Please try to Login with correct credentials." });
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authToken = jwt.sign(data, SECRET_CODE);
        success = true;
        response.json({ success: success, authToken, userId: user._id });
    } catch (error) {
        console.error(error);
        response.send("Error occurred due to some reason.");
    }
})
// Route # 3 : Create a POST request of /getUser
router.post('/getUser', fetchUser, async (request, response) => {
    try {
        let userId = request.body.id;
        const user = await User.findById(userId).select('-password');
        response.send(user);
    } catch (error) {
        console.error(error);
        response.send("Error occurred due to some reason.");
    }
})
module.exports = router;