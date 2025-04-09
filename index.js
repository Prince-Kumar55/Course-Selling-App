const express = require("express");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json()); 

app.post("user/signup", (req,res) =>{
    res.status(200).json({
        msg: "signup end point" 
    })
})
app.post("user/signin", (req,res) =>{
    res.status(200).json({
        msg: "signin end point" 
    })
})

app.get("user/purchases", (req,res) =>{
    res.status(200).json({
        msg: "user purchases end point" 
    })
})

app.post("course/purchases", (req,res) =>{
    // you would expect the user to pay you money
    res.status(200).json({
        msg: "course purchases end point" 
    })
})

app.get("courses", (req,res) =>{
    res.status(200).json({
        msg: "courses end point" 
    })
})


app.listen(3000);