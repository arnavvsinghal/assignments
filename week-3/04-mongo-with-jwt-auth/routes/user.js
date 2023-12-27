const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

const { User, Course } = require("../db/index");
const jwt = require("jsonwebtoken");
const userJwtPassword = "jwtuser";
// User Routes
router.post("/signup", (req, res) => {
  const userData = {
    username: req.body.username,
    password: req.body.password,
    courses: [],
  };
  new User(userData).save().then(() => {
    res.status(200).json({
      message: "User created successfully",
    });
  });
});

router.post("/signin", userMiddleware, (req, res) => {
  const user = {
    username: req.body.username,
  };
  const token = jwt.sign(user, userJwtPassword);
  res.json({
    token: token,
  });
});

router.get("/courses", (req, res) => {
  Course.find().then((coursesData) => {
    res.json({
      courses: coursesData,
    });
  });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  const userToken = req.headers.authorization.split(" ")[1];
  const courseID = req.params.courseId;
  const filter = {
    username: jwt.decode(userToken).username,
  };
  User.findOne(filter)
    .then((specificUser) => {
      specificUser.courses.push(courseID);
      return specificUser;
    })
    .then((specificUser) => {
      const update = {
        courses: specificUser.courses,
      };
      return User.updateOne(filter, update);
    })
    .then(() => {
      res.json({
        message: "Course purchased successfully",
      });
    });
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  const userToken = req.headers.authorization.split(" ")[1];
  const username = jwt.decode(userToken).username;
  const userFilter = {
    username: username,
  };
  User.findOne(userFilter)
    .then(async function (specificUser) {
      const promises = specificUser.courses.map(async function (item) {
        const courseFilter = {
          courseID: item,
        };
        const specificCourse = await Course.findOne(courseFilter);
        return specificCourse;
      });
      const courseData = await Promise.all(promises);
      return courseData;
    })
    .then((courseData) => {
      res.json({
        purchasedCourses: courseData,
      });
    });
});

module.exports = router;
