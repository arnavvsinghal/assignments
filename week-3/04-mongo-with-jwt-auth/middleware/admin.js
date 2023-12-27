// Middleware for handling auth
const { Admin } = require("../db/index");
const jwt = require("jsonwebtoken");
const adminJwtPassword = "jwtadmin";

function adminMiddleware(req, res, next) {
  const tokenExists = req.headers.authorization;
  if (tokenExists) {
    const adminToken = tokenExists.split(" ")[1];
    try {
      const verified = jwt.verify(adminToken, adminJwtPassword);
      next();
    } catch {
      res.status(404).send("Admin is not authorized.");
    }
  } else {
    const adminData = {
      username: req.body.username,
      password: req.body.password,
    };
    Admin.exists(adminData).then((exists) => {
      if (exists) {
        next();
      } else {
        res.status(404).send("Admin is not authorized.");
      }
    });
  }
}

module.exports = adminMiddleware;
