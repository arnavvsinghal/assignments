const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

const { User, Course } = require("../db/index");

// User Routes
router.post("/signup", (req, res) => {
  const userData = {
    username: req.headers.username,
    password: req.headers.password,
    courses: [],
  };
  new User(userData).save().then(() => {
    res.status(200).json({
      message: "User created successfully",
    });
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
  // Implement course purchase logic
  const courseID = req.params.courseId;
  const filter = {
    username: req.headers.username,
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
  const username = req.headers.username;
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
