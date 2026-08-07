
const User = require('../models/User');
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({
            message: "Please fill all the fields"
        });
    }

    const existingUser = await User.findOne({ email });
    // console.log(existingUser);

    if (existingUser) {
        return res.status(400).json({
            message: "User already exists"
        });
    }

    const user = await User.create({
        name, email, password,
    });
    //console.log("user:", user);
    res.status(201).json({
        message: "User created sucessfully"
    });

    res.send("Data Received!")
};

const loginUser = async (req, res) => {

    //console.log("login api hit");

    const { email, password } = req.body;
    //validation
    if (!email || !password) {
        return res.status(400).json({
            message: "Please enter email and password"
        });

    }

    const user = await User.findOne({ email });
   // console.log("user->", user);

    if (!user) {                        //user already existing
        return res.status(404).json({
            message: "User not found"
        });
    }

    if (user.password !== password) {           //checking the password
        return res.status(400).json({
            message: "Invalid Password"
        });
    }
    //console.log("Email-->", email);
    //console.log("Password-->", password);

    //create token after every successfull login
    const token = jwt.sign(
        {
            id: user._id
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "7d"
        }
    );


    return res.status(200).json({
        message: "Login successfull",
        token,
        user: {
            id: user._id,
            name: user.name,
            email: user.email
        }
    });

};


module.exports = {
    registerUser,
    loginUser,
};