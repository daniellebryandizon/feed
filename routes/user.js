const express = require('express');
const router = express.Router();
const authentication = require('../controllers/authentication');

const { register, login, getUser } = require('../controllers/user/user');

//REGISTRATION
router.post('/register', register);
//LOGIN
router.post('/login', login)
//LOAD USER
router.get('/', authentication, getUser);

module.exports = router;