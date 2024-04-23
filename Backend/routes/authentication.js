const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator')

router.post('/', [
    body('email', 'Enter a valid email address').isEmail(),
    body('name').isLength({ min: 3 }),
    body('password').isLength({ min: 8 })
], (request, response) => {
    const error = validationResult(request);
    if (!error.isEmpty()) {
        return response.status(400).json({ error: error.array() })
    }
    User.create({
        name: request.body.name,
        email: request.body.email,
        password: request.body.password,
    }).then((user) => { response.send("Data Stored Successfully.") })
        .catch((err) => {
            response.json({error: 'Please Enter Valid Informations', message: err.msg})
        })
})

module.exports = router;