const express = require('express')
const router = express.Router();

const { loadProfile, createProfile } = require('../controllers/profile/profile');
const authentication = require('../controllers/authentication');

//LOAD PROFILE
router.get('/:username', authentication, loadProfile);
//CREATE PROFILE
router.post('/create', authentication, createProfile);

module.exports = router;