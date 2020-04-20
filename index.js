const express = require("express");

const app = express();

const path = require("path");

const bodyParser = require("body-parser");

const expressLayouts = require("express-ejs-layouts");

const PORT = process.env.PORT || 2300;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(expressLayouts);

app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname,"views")));

app.get("/",(req,res)=>{
    res.render("calculator",{ "title" : "Calculator"});
});

app.get("/status",(req,res)=>{
    res.json(
        {
            status : "Active",
            message : "Calculator is running"
        }
    );
});

app.get("/demo",(req,res)=>{
    res.sendFile(path.join(__dirname,"views","public","index.html"))
});

app.listen(PORT,()=>{
    console.log("Server is running on:%s",PORT);
});