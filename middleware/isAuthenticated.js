const jwt = require("jsonwebtoken");
const {promisify} = require("util");
const { users } = require("../model");
exports.isAuthenticated = async(req,res,next)=>{
    const token = req.cookies.token;
    //CHECK TOKEN GIVEN OR NOT
    if(!token){
        return res.redirect("/login");
    };
    // VERIFY TOKEN IF IT IS LEGIT OR NOT 
    const decryptedResult = await promisify(jwt.verify)(token,process.env.JWTSECRET);

    const userExists = await users.findOne({
        where : {
            id : decryptedResult.id,
        }
    });
    if(!userExists){
        res.send("user with that token doesn't exist")
    }else{
        req.id = userExists.id;
        next();
    }


}