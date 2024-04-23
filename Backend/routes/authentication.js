// Import Express.js, create router, import User Model and import (body, validationResult) package
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator')
// Create POST request
router.post('/createUser', [
    // Validation of name, email and password
    body('email', 'Enter a valid email address').isEmail(),
    body('name').isLength({ min: 3 }),
    body('password').isLength({ min: 8 })
], async (request, response) => {
    // Checking Result and calculating errors
    const error = validationResult(request);
    if (!error.isEmpty()) {
        return response.status(400).json({ error: error.array() })
    }
    try {
        // If user with this email already exist then it shows error as following
        let user = await User.findOne("400 : " + { email: request.body.email })
        if (user) {
            return response.send("Sorry, The User with this Email already exist.");
        }
        // Creating User with Given Informations
        user = await User.create({
            name: request.body.name,
            email: request.body.email,
            password: request.body.password,
        })
        response.send("Successfully Created a User.");
    } catch (error) {
        console.error(error);
        response.send("Error occurred due to some reason.")
    }
})

module.exports = router;