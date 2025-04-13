const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;
require('dotenv').config();
mongoose.connect(process.env.MONGO_URI);
console.log("connected to");



const userSchema = new Schema({
    email: {type: String , unique: true},
    password: String,
    firstName: String,
    lastName: String,

});
const adminSchema = new Schema({
    email: {type: String , unique: true},
    password: String,
    firstName: String,
    lastName: String,
});

const courseSchema = new Schema({
    tittle: String,
    description: String,
    price: Number,
    imageUrl: String,
    createrId: ObjectId
});


const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId
});


const userModel = mongoose.model("user",  userSchema);
const adminModel = mongoose.model("admin",  adminSchema);
const courseModel = mongoose.model("course",  courseSchema);
const purchaseModel = mongoose.model("purchase",  purchaseSchema);


module.exports = {
    userModel:  userModel,
    adminModel:  adminModel,
    courseModel: courseModel,
    purchaseModel: purchaseModel
}

