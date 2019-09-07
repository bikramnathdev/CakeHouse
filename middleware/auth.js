const jwt = require('jsonwebtoken');
const config = require('config');


module.exports = (req, res, next) => {
    const token = req.header('x-auth-token');
// chech if token exists
    if (!token) {
        return res.status(401).json({ msg : 'No Token, Auth Denied' });
    }

// verify token
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'));
        req.user = decoded.user;
        next();
    } catch (error) {
        res.status(401).json({msg : "Token is not valid"});
    }
}