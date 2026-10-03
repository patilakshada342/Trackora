const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(     //create a schema
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        monthlyLimit: {
            type: Number,
            default: 0
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },

    }, {
    timestamps: true
});

module.exports = mongoose.model("Category", categorySchema);