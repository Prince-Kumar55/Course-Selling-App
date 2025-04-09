const { Router } = require("express");

const userRouter = Router();

userRouter.post("/signup", (req,res) =>{
    res.status(200).json({
        msg: "signup end point" 
    })
})
userRouter.post("/signin", (req,res) =>{
    res.status(200).json({
        msg: "signin end point" 
    })
})

userRouter.get("/purchases", (req,res) =>{
    res.status(200).json({
        msg: "user purchases end point" 
    })
})


module.exports = {
    userRouter: userRouter
}