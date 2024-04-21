const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    let obj = {
        name: 'Hamid Raza',
        age: 16
    }
    response.json(obj);
})

module.exports = router;