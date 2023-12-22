const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

const { Admin, Course } = require('../db/index');
const crypto = require("crypto");

function stringToDecimalHash(inputString) {
    const hash = crypto.createHash("md5");
    const hexDigest = hash.update(inputString).digest("hex");
    return parseInt(hexDigest, 16);
}
// Admin Routes
router.post('/signup', (req, res) => {
    const adminData = {
        username : req.body.username,
        password : req.body.password,
    }
    new Admin(adminData).save().then(()=>{
        res.status(200).json({
            message : 'Admin created successfully'
        });
    });
});

router.post('/courses', adminMiddleware, (req, res) => {
    const admin = req.headers.username;
    const title = req.body.title;
    const courseData = {
        courseID : stringToDecimalHash(admin + title),
        admin : admin,
        title : title,
        description : req.body.description,
        price : req.body.price,
        imageLink : req.body.imageLink
    }
    new Course(courseData).save().then(()=>{
        res.status(200).json({
            message : 'Course created successfully',
            courseID : courseData.courseID
        });
    });
});

router.get('/courses', adminMiddleware, (req, res) => {
    const adminFilter = {
        admin : req.headers.username
    }
    Course.find(adminFilter).then(courses => {
        res.json(courses);
    });
});

module.exports = router;