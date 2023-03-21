const jwt = require("jsonwebtoken");
const User = require("./../models/userModels");

exports.requireAuth = (req,res,next)=>{
    const token = req.cookies.jwt;
    if(token){
        jwt.verify(token,process.env.JWT_SECRET,async (err,decodeToken)=>{
            if(err){
                console.log(err.message);
            }
            else{
                console.log(decodeToken);
                req.user = await User.findById(decodeToken.id);
                next();
            }
        })
    }
    else{
        res.redirect('/login');
    }
}