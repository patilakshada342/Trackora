const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema(
    {
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
                "Dedit Card",
                "Net Banking"
            ]
        },

        notes: {
            type: String,
            default: ""
        }

    }
)

module.exports = mongoose.model("Expense",expenseSchema);