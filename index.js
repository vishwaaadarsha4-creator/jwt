const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public/css/'));

app.get("/",(req,res)=>{
    res.render('home');
});
app.set('view engine','ejs');
app.listen(port,()=>{
    console.log(`Server is listening on port ${port}`);
});