const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://arnavsinghal1234:kX9xZef5cOnnI6kb@cluster0.dqvtlqx.mongodb.net/todo"
);

const TodoSchema = new mongoose.Schema({
  title: String,
  description: String
});

const Todo = mongoose.model("Todo", TodoSchema);

module.exports = Todo;
