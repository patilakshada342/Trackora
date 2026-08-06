const express = require("express")
require("dotenv").config();
const authRoutes = require('./routes/authRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const connectDB = require("./config/db")

const app= express();       //creates the express
app.use(express.json());        // express does not understand json so .json() is used

app.use("/api/auth",authRoutes);
app.use("/api/categories",categoryRoutes);

const PORT = process.env.PORT || 5000;

connectDB(); //connect database

app.get("/",(req,res) =>{
    res.send("Welcome to Trackora Backend");
});

app.listen(PORT, () =>{
    console.log(`server running on  ${PORT}`)
});