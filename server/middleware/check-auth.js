const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        let token = req.headers['authorization'].split(' ')[2];
        const decoded = jwt.verify(token, process.env.APP_SECRET);
        req.userData = decoded;
        next();
        } catch (err) {
            return res.status(400).json({"message" : "Not authorized"});
        }
}