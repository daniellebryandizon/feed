const jwtToken = require('jsonwebtoken');

module.exports = (req, res, next) => {

    const token = req.header('auth-token');

    if (!token) {
        return res.json({
            message: 'Authorization denied'
        });
    }

    try {
        const decoded = jwtToken.verify(token, process.env.JSONWEBTOKEN);
        req.user = decoded.user;
        next();
    } catch (error) {
        console.log(error.message);
        res.json({
            message: 'Authorization is invalid'
        })
    }

}