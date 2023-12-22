const { Admin } = require("../db/index");
// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const adminData = {
    username : req.headers.username,
    password : req.headers.password
  }
  Admin.exists(adminData)
    .then((exists) => {
      if (exists) {
        next();
      } else {
        res.status(404).send("Admin is not authorized.");
      }
    });
}

module.exports = adminMiddleware;
