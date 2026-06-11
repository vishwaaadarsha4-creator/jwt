const { where } = require("sequelize");
const db = require("../model");
const  {users} = db;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEmail = require("../services/sendEmail");
exports.getRegister = (req,res)=>{
    res.render("auth/register");
}

exports.getLogin = (req,res)=>{
    res.render("auth/login");
}

exports.postRegister = async(req,res)=>{
    try{
    const {firstName, lastName, email, userName, password} = req.body;
    if(!firstName || !lastName || !email || !userName || !password){
        return res.status(400).send("All fields are necessary");
    }
    const existingUser = await users.findOne({
        where: {
            email: email
        }
    });
    if(existingUser){
        return res.status(400).send("User with this email already exists!!");
    }
    const user = await users.create({
        firstName,
        lastName,
        email,
        userName,
        password: bcrypt.hashSync(password,10),
    });
    res.redirect("login");
    }catch(error){
        console.log(error);
        res.status(500).send("Server Error");
    }
}

exports.postLogin = async(req,res)=>{
    try{
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json("Both email and passord are required");
        }
        const userExist = await users.findOne({
            where : {
                email: email
            }
        });
        if(!userExist){
            // return res.status(404).send("User is not registered");
            return res.status(404).redirect("/register");
        }
        const isMatched = bcrypt.compareSync(password,userExist.password);
        if(!isMatched){

            return res.status(401).send("Incorrect Password");
        }
        const token = jwt.sign({id: userExist.id},process.env.JWTSECRET,{
                expiresIn: "1d"
            });
            res.cookie("token",token, {
                httpOnly: true,
                maxAge: 24 * 60  * 60 * 1000
            });
            console.log(token);
        res.redirect("/");
    }catch(error){
        console.log(error);
        res.status(500).send("Server Error");
    }
}

exports.Logout = (req,res)=>{
    res.clearCookie("token");
    res.redirect("/login");
    
}

exports.forgotPassword = (req,res)=>{
    res.render("auth/forgotPassword");
}

exports.sendOtp = async(req,res)=>{
    try{
        const {email} = req.body;
        if(!email){
            return res.send("Kindly provide your registered email");
        }
        const existedUser = await users.findOne({
            where : {
                email : email,
            }
        });
        if(!existedUser){
            res.status(400).send("No account found with this email");
        }else{
            sendEmail({
                email : email,
                subject : "Forgot Password OTP",
                otp : Math.floor(100000 + Math.random() * 900000),
            })
            // res.send("Email sent successfully");
            res.redirect("/verifyOtp");
        }
  
    }catch(error){
        console.log(error);
        res.status(500).send("Server Error");
    }
}

exports.otpVerification = (req,res)=>{
    res.render("auth/verifyOtp");
}