const express = require("express");
const jwt = require("jsonwebtoken");

const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");
const course = require("./routes/course");


const app = express();

app.use(express.json()); 

app.use("/user", userRouter);
app.use("/course", courseRouter);

createUserRoutes(app);
createCourseRoutes(app); 





app.listen(3000);