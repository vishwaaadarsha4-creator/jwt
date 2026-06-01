require("dotenv").config();

const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public/css/'));
app.set('view engine','ejs');
app.use(express.static("public/css/"));
const homeRoute = require("./routes/homeRoute");
const authRoute = require("./routes/authRoute");
const getStartedRoute = require("./routes/getStartedRoute");
const taskRoute = require("./routes/tasksRoute");
const db = require("./model");
const cookieParser = require("cookie-parser");
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use("",authRoute);
app.use("",homeRoute);
app.use("",getStartedRoute);
app.use("",taskRoute);


app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});