

function createCourseRoutes(app) {
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
};


module.exports = {
    createCourseRoutes: createCourseRoutes
}