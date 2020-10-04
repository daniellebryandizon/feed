const jwtToken = require('jsonwebtoken');

module.exports = (req, res, next) => {

    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json({
            message: 'Authorization denied'
        });
    }

    try {

        const decoded = jwtToken.verify(token, process.env.JSONWEBTOKEN);
        req.user = decoded.user;
        next();

    } catch (error) {

        console.log(error.message);
        res.status(401).json({
            message: 'Authorization is invalid'
        })
        
    }
}