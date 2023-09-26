const {DecodedToken} = require("../utility/TokenUtility");


module.exports = (req, res, next) => {
    let token = req.headers['token'];// Use parentheses instead of square brackets

    let decoded = DecodedToken(token);
    if (decoded === null) {
        return res.status(401).json({
            success: false,
            message: 'Unauthorized'
        })
    }
    else {
        let email = decoded['email'];
        let id = decoded['id'];
        req.headers.email = email;
        req.headers.id = id;
        next();
    }
}
