const mongoose = require('mongoose')

// mongoose model :contollers never talk to db directly they use models 

const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            trim:  true,
        },
        email :{
            type : String,
            required:true,
            unique:true,
            lowercase:true,
            trim:true,
        },
        password:{
            type:String,
            required:true,
        },
        profileImage:{
            type:String,
            default:"",
        },
        currency:{
            type:String,
            default:"INR",
        },
    },
    {
        timestamps:true,
    }
);

module.exports = mongoose.model("User", userSchema);