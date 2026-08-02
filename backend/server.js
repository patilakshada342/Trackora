const express = require("express")
require("dotenv").config();
const authRoutes = require('./routes/authRoutes');

const connectDB = require("./config/db")

const app= express();
app.use(express.json());

app.use("/api/auth",authRoutes);

const PORT = process.env.PORT || 5000;

connectDB(); //connect database

app.get("/",(req,res) =>{
    res.send("Welcome to Trackora Backend");
});

app.listen(PORT, () =>{
    console.log(`server running on  ${PORT}`)
});