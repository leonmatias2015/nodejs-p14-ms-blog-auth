const jwt = require('jsonwebtoken');

let verifyToken = (req, res, next) => {
    jwt.verify(token, process.env.SEED, (err, decoded) => {
        if (err) {
            return res.status(401).json({
                of: false,
                err: {
                    message: 'Invalid token!   :( '
                }
            })
        }
        req.user = decoded.user;
        next();
    });
};

module.exports = {
    verifyToken
};
