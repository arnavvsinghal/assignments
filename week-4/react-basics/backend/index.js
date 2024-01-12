const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 3000;
const Todo = require("./db");
const todoMiddleware = require("./middleware");

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.post("/todo", todoMiddleware, async (req, res) => {
  const todoData = req.body;
  const newTodo = await Todo.create({
    title: todoData.title,
    description: todoData.description,
  });
  res.json({
    message: "Todo created successfully.",
    todo: newTodo,
  });
});

app.get("/todos", async (req, res) => {
  const allTodos = await Todo.find({});
  res.json(allTodos);
});

app.delete("/:id",(req,res)=>{
  const todoId = req.params.id;
  Todo.findByIdAndDelete(todoId)
  .then((doc)=>{
    res.send("Deletion Successful");
  })
  .catch((err) => {
    res.status(404).send("Deletion error!");
  })
});

app.put("/:id", todoMiddleware, (req, res) => {
  const todoId = req.params.id;
  const todoData = req.body;

  Todo.findByIdAndUpdate(todoId, todoData, { new: true })
    .then((updatedDoc) => {
      if (updatedDoc) {
        res.json(updatedDoc);
      } else {
        res.send("Todo doesn't exist.");
      }
    })
    .catch((err) => {
      res.status(404).send("Updation error!");
    });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error!");
});

app.listen(PORT, () => {
  console.log(`App is listening to ${PORT}.`);
});
