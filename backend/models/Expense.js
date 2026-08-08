const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema(
    {

        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true
        },

        amount: {
            type: Number,
            required: true
        },

        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Category",
            required: true,
        },

        date: {
            type: Date,
            required: true
        },

        paymentMethod: {
            type: String,
            required: true,
            enum: [
                "Cash",
                "UPI",
                "Debit Card",
                "Net Banking"
            ]
        },

        notes: {
            type: String,
            default: ""
        }

    },
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Expense",expenseSchema);