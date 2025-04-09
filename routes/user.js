

function createUserRoutes(app) {
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
}

module.exports = {
    createUserRoutes: createUserRoutes
}