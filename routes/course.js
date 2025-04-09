const { Router } = require("express");

const courseRouter = Router();

courseRouter.post("/purchases", (req,res) =>{
    // you would expect the user to pay you money
    res.status(200).json({
        msg: "course purchases end point" 
    })
})

courseRouter.get("/preview", (req,res) =>{
    res.status(200).json({
        msg: "courses end point" 
    })
})



module.exports = {
    courseRouter: courseRouter
}