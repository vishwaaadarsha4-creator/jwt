const {Sequelize, DataTypes} = require("sequelize");
const dbConfig = require("../config/dbConfig");

const {dbname,user,password,host,pool,port,dialect} =dbConfig;
const sequelize = new Sequelize(dbname,user,password,{
    host,
    port,
    dialect,
    pool
});

sequelize.authenticate()
.then(()=>{
    console.log("Database Connected Successfully");
}).catch((err)=>{
    console.log("Unable to connect to Database");
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

sequelize.sync({force: false}).then(()=>{
    console.log("Synced Done");
});

module.exports = db;