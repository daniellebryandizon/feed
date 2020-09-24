const express = require('express');
const router = express.Router();

const authentication = require('../controllers/authentication');
const { register, login, getUser} = require('../controllers/user');

router.get('/', authentication, getUser);

//REGISTRATION
router.post('/register', register);
//LOGIN
router.post('/login', login)

module.exports = router;