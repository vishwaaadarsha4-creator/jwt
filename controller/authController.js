exports.getRegister = (req,res)=>{
    res.render("auth/register");
}

exports.getLogin = (req,res)=>{
    res.render("auth/login");
}