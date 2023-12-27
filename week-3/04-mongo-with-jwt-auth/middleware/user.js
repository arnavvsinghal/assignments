const { User } = require("../db/index");
const jwt = require("jsonwebtoken");
const userJwtPassword = "jwtuser";

function userMiddleware(req, res, next) {
  const tokenExists = req.headers.authorization;
  if (tokenExists) {
    const userToken = tokenExists.split(" ")[1];
    try {
      const verified = jwt.verify(userToken, userJwtPassword);
      next();
    } catch {
      res.status(404).send("User is not authorized.");
    }
  } else {
    const userData = {
      username: req.body.username,
      password: req.body.password,
    };
    User.exists(userData).then((exists) => {
      if (exists) {
        next();
      } else {
        res.status(404).send("User is not authorized.");
      }
    });
  }
}

module.exports = userMiddleware;
