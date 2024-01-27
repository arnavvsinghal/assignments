const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { userUpdateSchema } = require("../types");

function authMiddleware(req, res, next) {
  const updateData = req.body;
  const parseResult = userUpdateSchema.safeParse(updateData);
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ") || !parseResult.success) {
    res.status(403).json({});
  }
  const userToken = authHeader.split(" ")[1];
  try {
    const verified = jwt.verify(userToken, JWT_SECRET);
    if (verified.userId) {
      req.userId = verified.userId;
      next();
    } else {
      res.status(403).json({});
    }
  } catch {
    res.status(403).json({});
  }
}

module.exports = authMiddleware;
