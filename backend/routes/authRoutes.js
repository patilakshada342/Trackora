const express = require('express');

const { registerUser, loginUser} = require('../controllers/authController');
 
const router = express.Router()

router.post("/register", registerUser);     //defined the controller or url mapping 
router.post("/login",loginUser);

router.get("/test", (req, res) => {
    res.json({
        message: "Auth route is working"
    });
});

module.exports = router;