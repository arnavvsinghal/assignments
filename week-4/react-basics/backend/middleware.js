const todoSchema = require("./types");
function todoMiddleware(req, res, next) {
  const todoData = req.body;
  const parseResult = todoSchema.safeParse(todoData);
  if (parseResult.success) {
    next();
  } else {
    res.status(404).send("Error! Request could not be parsed.");
  }
}
module.exports = todoMiddleware;
