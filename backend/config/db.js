const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        //console.log(process.env.MONGO_URI);
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongo connected sucessfully");
    }catch(error){
        console.error("Mongo connection failed");
        console.error(error.message);
        process.exit(1);
    }
};

module.exports = connectDB;