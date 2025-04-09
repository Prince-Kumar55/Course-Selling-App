const express = require("express");
const jwt = require("jsonwebtoken");

const {createUserRoutes} = require("./routes/user");
const {createCourseRoutes} = require("./routes/course");


const app = express();

app.use(express.json()); 

createUserRoutes(app);
createCourseRoutes(app); 





app.listen(3000);