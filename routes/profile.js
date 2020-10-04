const express = require('express')
const router = express.Router();

const authentication = require('../controllers/authentication');

router.get('/:username', authentication, (req, res) => {
    res.json({ hello: 'hello' })
});

module.exports = router;