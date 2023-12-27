const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
// Admin Routes
const { Admin, Course } = require('../db/index');
const crypto = require("crypto");
const jwt = require('jsonwebtoken');
const adminJwtPassword = 'jwtadmin';

function stringToDecimalHash(inputString) {
    const hash = crypto.createHash("md5");
    const hexDigest = hash.update(inputString).digest("hex");
    return parseInt(hexDigest, 16);
}
// Admin Routes
router.post('/signup', (req, res) => {
    const adminData = {
        username : req.body.username,
        password : req.body.password
    }
    new Admin(adminData).save().then(()=>{
        res.status(200).json({
            message : 'Admin created successfully'
        });
    });
});

router.post('/signin', adminMiddleware, (req, res) => {
    const admin = {
        username : req.body.username,
    };
    const token = jwt.sign(admin, adminJwtPassword);
    res.json({
        token : token
    });
});

router.post('/courses', adminMiddleware, (req, res) => {
    const adminToken = req.headers.authorization.split(" ")[1];
    const admin = jwt.decode(adminToken).username;
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
    const adminToken = req.headers.authorization.split(" ")[1];
    const username = jwt.decode(adminToken).username;
    const adminFilter = {
        admin : username
    }
    Course.find(adminFilter).then(courses => {
        res.json(courses);
    });
});

module.exports = router;