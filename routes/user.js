const express = require('express');
const router = express.Router();

const authentication = require('../controllers/authentication');
const { register } = require('../controllers/user');

//REGISTRATION
router.post('/register', register);

module.exports = router;