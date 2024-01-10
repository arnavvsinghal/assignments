const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 3000;
const Todo = require("./db");
const todoMiddleware = require("./middleware");

app.use(express.json());
app.use(bodyParser.json());

app.post("/todo", todoMiddleware, async (req, res) => {
  const todoData = req.body;
  await Todo.create({
    title: todoData.title,
    description: todoData.description,
  });
  res.json({
    message: "Todo created successfully.",
  });
});
app.get("/todos", async (req, res) => {
  const allTodos = await Todo.find({});
  res.json({
    todos: allTodos,
  });
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
      res.status(404).send("Error!");
    });
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send("Internal Server Error!");
});

app.listen(PORT, () => {
  console.log(`App is listening to ${PORT}.`);
});
