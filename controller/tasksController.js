const db = require("../model");

const {tasks} = db;
exports.getAllTasks = async(req,res)=>{
    const data = await tasks.findAll();
    res.render("allTaks",{task: data});
}

exports.getCreateTask = (req,res)=>{
    res.render("createTask");
}

exports.postCreateTask = async(req,res)=>{
    try{
        const {title, description, status} = req.body;

        if(!title || !description || !status){
            return res.status(400).send("All fields are required");
        }
        const task = await db.tasks.findOne({
            where : {
                title : title,
            }
        });
        if(task){
            return res.status(400).send("Task with this title already exists");
        }
        await tasks.create({
            title,
            description,
            status,
        });
        res.redirect("/alltasks")
    }catch(error){
        console.log(error);
        res.status(500).send("Server Error");
    }
}

exports.deleteTask = async(req,res)=>{
    try{
        const id = req.params.id;
        await tasks.destroy({
            where : {
                id: id
            }
        });
        res.redirect("/alltasks");
    }catch(error){
        console.log(error);
        res.status(500).send("Server Error");
    }
}