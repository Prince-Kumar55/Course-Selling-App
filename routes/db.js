const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;
require('dotenv').config();
mongoose.connect(process.env.mongodburi);

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


const userModel = mongoose.Model("user",  userSchema);
const adminModel = mongoose.Model("admin",  adminSchema);
const courseModel = mongoose.Model("course",  courseSchema);
const purchaseModel = mongoose.Model("purchase",  purchaseSchema);


module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}

