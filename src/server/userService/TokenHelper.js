const jwt = require("jsonwebtoken");

exports.EncodedToken=(email)=>{
    return jwt.sign({email:email}, "ABC123", {expiresIn: '1h'})
}
exports.DecodedToken=(token)=>{

    try{
       return jwt.verify(token, 'ABC123')
    }
    catch (err){
        return null
    }
}

