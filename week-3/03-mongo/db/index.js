const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://arnavsinghal1234:kX9xZef5cOnnI6kb@cluster0.dqvtlqx.mongodb.net/w3a3"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
  courses: [Number],
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  courseID: Number,
  admin: String,
  title: String,
  description: String,
  price: Number,
  imageLink: String
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
