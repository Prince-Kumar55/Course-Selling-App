const { Router} = require("express");
const { adminModel } = require("./db")

const adminRouter = Router();


adminRouter.post("/signup", (req,res) =>{
    res.status(200).json({
        msg: "signup end point" 
    })
})
adminRouter.post("/signin", (req,res) =>{
    res.status(200).json({
        msg: "signin end point" 
    })
}) 
adminRouter.post("/course", (req,res) =>{
    res.status(200).json({
        msg: "created courses end point" 
    })
})
adminRouter.put("/course/change", (req,res) =>{
    res.status(200).json({
        msg: "changes end point" 
    })
})
adminRouter.get("/course/bulk", (req,res) =>{
    res.status(200).json({
        msg: "all courses end point" 
    })
})

module.exports = {
    adminRouter: adminRouter
}