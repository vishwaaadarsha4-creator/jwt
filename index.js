require("dotenv").config();

const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public/css/'));
app.set('view engine','ejs');
app.use(express.static("public/css/"));
const homeRoute = require("./routes/homeRoute");
const authRoute = require("./routes/authRoute");
const db = require("./model");

app.use("",authRoute);
app.use("",homeRoute);


app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});