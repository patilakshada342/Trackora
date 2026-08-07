const mongoose = require('mongoose');

const incomeSchema = new mongoose.Schema(
    {
        source:{
            type:String,
            required:true,
            trim:true
        },
        amount:{
            type:Number,
            required:true,
        },
        date:{
            type:Date,
            required:true,
        },
        notes:{
            type:String,
            default:"",
        } ,
        
    },
    {
        timestamp:true
    }
);


module.exports =mongoose.model("Income",incomeSchema);