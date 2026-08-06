const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
{
    name:{
        type:String,
        required:true,
        trim:true
    },
    monthlyLimit:{
        type:Number,
        default:0
    }
},{
    timestamp:true
});

module.exports =mongoose.model("Category",categorySchema);