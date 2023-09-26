const jwt = require("jsonwebtoken");

exports.EncodedToken=(email,user_id)=> {
    return  jwt.sign({email:email,id:user_id},"ABC123",{expiresIn:'1h'});
}

exports.DecodedToken=(token)=> {
    try {
        return  jwt.verify(token, 'ABC123');
    }
    catch(err) {
        return null;
    }
}