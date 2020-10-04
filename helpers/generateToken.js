
const jwtToken = require('jsonwebtoken');
require('dotenv').config();

const generateToken = (payload) => {

    const token = jwtToken.sign(
        payload,
        process.env.JSONWEBTOKEN,
        { expiresIn: 40000 }
    );

    return token;

}

module.exports = generateToken;