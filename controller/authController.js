const { where } = require("sequelize");
const db = require("../model");
const  {users} = db;
const bcrypt = require("bcrypt");
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
            return res.status(500).send("User is not registered");
        }
        const isMatched = bcrypt.compareSync(password,userExist.password);
        if(!isMatched){
            return res.status(400).send("Incorrect Password");
        }
        res.redirect("/blogs");
    }catch(error){
        console.log(error);
        res.status(500).send("Server Error");
    }
}