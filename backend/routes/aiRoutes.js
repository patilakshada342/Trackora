const express = require("express");
const { GoogleGenAI } = require("@google/genai")  //gemini SDK
const router = express.Router();


const authMiddleware = require("../middleware/authMiddleware");
const Income = require("../models/Income");
const Expense = require("../models/Expense");



const ai = new GoogleGenAI({                //genimi client creation
    apiKey: process.env.GEMINI_API_KEY,
});


//test route
router.get("/test", async (req, res) => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: "i have salary 15k , how much i sav",
        });

        res.status(200).json({
            success: true,
            message: response.text,
        });

    } catch (error) {
        console.error("Gemini Error:", error);

        res.status(500).json({
            success: false,
            message: "AI request failed",
        });
    }
});


//Ai advice route 
router.post("/advice", authMiddleware, async (req, res) => {
    try {
        //console.log("AI advice api called");

        const incomes = await Income.find({
            user: req.user
        });

        const expenses = await Expense.find({
            user: req.user
        }).populate("category", "name");

        //calculating the totals
        const totalIncome = incomes.reduce(
            (total, income) => total + income.amount, 0
        );

        const totalExpense = expenses.reduce(
            (total, expense) => total + expense.amount, 0
        );

        const balance = totalIncome - totalExpense;

        //category-wise spending
        const categoryTotals = {};   //created an abj


        expenses.forEach((expense) => {         //checking category for each expense
            const categoryName = expense.category?.name || "Other";

            if (!categoryTotals[categoryName]) {
                categoryTotals[categoryName] = 0;
            }

            categoryTotals[categoryName] += expense.amount;
        });


        // console.log("Incomes fetched:", incomes);
        // console.log("Expenses fetched:", expenses);

        res.status(200).json({
            success: true,
            totalIncome,
            totalExpense,
            balance,
            categoryTotals,
            message: "Incomes & Expenses fetched successfully!"
        });

    }
    catch (error) {
        console.log("Ai advice api error:", error);
        res.status(500).json({
            success: false,
            message: "Failed to fetch financial data"
        });
    }
});



module.exports = router;