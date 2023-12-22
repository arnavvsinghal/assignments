const {User} = require("../db/index");
function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const userData = {
    username: req.headers.username,
    password: req.headers.password,
  };
  User.exists(userData).then((exists) => {
    if (exists) {
      next();
    } else {
      res.status(404).send("User is not authorized.");
    }
  });
}

module.exports = userMiddleware;
