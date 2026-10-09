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


        //prompt 

        const prompt = `
        You are a personal financial advisor for an application called Trackora.

        Analyze ONLY the  financial data provided below:

        Final summary:
        -Total Income : ₹${totalIncome}
        -Total Expense : ₹${totalExpense}
        -Remaining Balance : ₹${balance}

        Category-wise Expenses:${JSON.stringify(categoryTotals, null, 2)}

        Your Task:
        1.Give a short analysis of the user's financial situation
        2. Identify the user's biggest spending category
        3. Give two practical suggestions to manage spending
        4. Give one simple saving suggestion

        Important Rules:
            - Do not assume expenses that are not provided.
            - Do not invent financial information
            - Do not assume the expenses are from a specific month unless explicitly provided.
            - Do not claim that the user can save a specific amount unless it can be calculated from the provided data.
            - Clearly distinguish between observations and suggestions.
            - Keep the advice practical and easy to understand.
            - Do not provide investment recommendations or specific financial products.
            - Do not assume the remaining balance is available for savings.
            - Do not tell the user to save or transfer the entire remaining balance.
            - When suggesting savings, recommend setting a reasonable savings goal rather than assuming a specific amount is available.


        Keep the advice simple,practical , and easy to understand.
        `;

        //console.log("PROMPT:", prompt);


        //call gemini
        const response = await ai.models.generateContent({
            model: "gemini-3.5-flash",
            contents: prompt,
        });

        //get answer from gemini
        const aiAdvice = response.text;


        // console.log("Incomes fetched:", incomes);
        // console.log("Expenses fetched:", expenses);

        res.status(200).json({
            success: true,
            totalIncome,
            totalExpense,
            balance,
            categoryTotals,
            aiAdvice,
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



 // AI insight route
router.post("/insights", authMiddleware, async (req, res) => {
    try {
        // Fetch logged-in user's income and expenses
        const incomes = await Income.find({
            user: req.user
        });

        const expenses = await Expense.find({
            user: req.user
        }).populate("category", "name");

        // Calculate verified financial metrics in Node.js
        const now = new Date();
        const currentMonth = now.getMonth();
        const currentYear = now.getFullYear();

        const isInMonth = (date, month, year) => {
            const d = new Date(date);

            return (
                d.getMonth() === month &&
                d.getFullYear() === year
            );
        };

        const currentMonthIncomes = incomes.filter((income) =>
            isInMonth(income.date, currentMonth, currentYear)
        );

        const currentMonthExpenses = expenses.filter((expense) =>
            isInMonth(expense.date, currentMonth, currentYear)
        );

        const previousMonthDate = new Date(
            currentYear,
            currentMonth - 1,
            1
        );

        const previousMonthExpenses = expenses.filter((expense) =>
            isInMonth(
                expense.date,
                previousMonthDate.getMonth(),
                previousMonthDate.getFullYear()
            )
        );

        const monthlyIncome = currentMonthIncomes.reduce(
            (sum, income) => sum + Number(income.amount),
            0
        );

        const monthlyExpense = currentMonthExpenses.reduce(
            (sum, expense) => sum + Number(expense.amount),
            0
        );

        const previousMonthExpenseTotal = previousMonthExpenses.reduce(
            (sum, expense) => sum + Number(expense.amount),
            0
        );

        // Calculate current month's expense totals by category
        const categoryTotals = {};

        currentMonthExpenses.forEach((expense) => {
            const categoryName = expense.category?.name || "Other";

            categoryTotals[categoryName] =
                (categoryTotals[categoryName] || 0) +
                Number(expense.amount);
        });

        // Calculate percentage change from the previous month
        const expenseChangePercent =
            previousMonthExpenseTotal > 0
                ? Number(
                    (
                        ((monthlyExpense - previousMonthExpenseTotal) /
                            previousMonthExpenseTotal) * 100
                    ).toFixed(2)
                )
                : null;

        // Create financial context for Gemini
        const financialContext = {
            incomes: incomes.map((income) => ({
                source: income.source,
                amount: income.amount,
                date: income.date,
                notes: income.notes
            })),

            expenses: expenses.map((expense) => ({
                amount: expense.amount,
                category: expense.category?.name || "Other",
                date: expense.date,
                paymentMethod: expense.paymentMethod,
                notes: expense.notes
            })),

            verifiedMetrics: {
                currentMonthIncome: monthlyIncome,
                currentMonthExpense: monthlyExpense,
                previousMonthExpense: previousMonthExpenseTotal,
                expenseChangePercent,
                currentMonthCategoryTotals: categoryTotals
            }
        };

        console.log(
            "Verified financial metrics:",
            financialContext.verifiedMetrics
        );

        // Prompt
        const prompt = `
You are Trackora's AI Financial Insights Engine.

Analyze the user's actual financial transactions and generate exactly 3
distinct, short, quantitative dashboard insights.

FINANCIAL DATA:
${JSON.stringify(financialContext, null, 2)}

Generate these 3 insights:

1. TREND:
Identify a measurable change in income or expenses by comparing two
complete or comparable periods.
Use a percentage (%) to describe the change.
If a valid comparison is unavailable, use another measurable trend
supported by the available data, or clearly state that more data is needed.

2. CONCERN:
Identify a measurable financial issue, such as a high expense category,
expenses exceeding income, or a budget overrun if budget data is provided.
Use a rupee amount (₹) to express the key measurement.
Do not label spending as excessive without sufficient evidence.

3. POSITIVE:
Provide a measurable, actionable opportunity to improve the user's
finances, based on actual transaction data.
Use either a percentage (%) OR a rupee amount (₹) to express the
opportunity, never both in this insight.
Do not present a hypothetical saving as a guaranteed result.

STRICT RULES:
- All 3 insights must describe different findings.
- Never repeat the same category, metric, or observation across insights.
- Each insight must contain one primary quantitative measurement.
- Use either % or ₹ in each insight, never both together.
- Do not invent amounts, percentages, trends, budgets, or transactions.
- Compare periods only when sufficient dated data is available.
- Calculate percentages only when the required baseline is valid and non-zero.
- Do not simply repeat total income, total expenses, or balance.
- Do not give generic praise or motivational statements.
- Keep each insight to one short sentence.
- If a reliable measurement cannot be calculated, clearly state that
  sufficient data is unavailable instead of guessing.
- Return valid JSON only, without Markdown or additional text.

**WHEN DATA IS INSUFFICIENT:**
* If the available data does not support a reliable insight, do not force one.
* Briefly explain what cannot be determined from the available data and offer a useful next step relevant to the user's situation.
* If there are no recorded transactions, avoid assuming that the user has or has not earned or spent money.
* If historical data is insufficient, suggest reviewing the trend again after more time has passed.
* If a financial opportunity cannot be quantified, provide a practical suggestion without inventing numbers.
* Keep the insight helpful, natural, and specific. Avoid repetitive suggestions, generic advice, and unnecessary requests to enter data.


Return exactly this JSON structure:
{
  "trend": "One short quantitative insight",
  "concern": "One short quantitative insight",
  "positive": "One short quantitative insight"
}
`;

        // Call Gemini with a backup model
        let response;

        try {
            response = await ai.models.generateContent({
                model: "gemini-3.5-flash",
                contents: prompt,
            });
        } catch (error) {
            // Switch models only when the primary model is unavailable
            if (error.status !== 503) {
                throw error;
            }

            console.warn(
                "Primary Gemini model unavailable. Trying backup model..."
            );

            response = await ai.models.generateContent({
                model: "gemini-3.5-flash-lite",
                contents: prompt,
            });
        }

        // Get answer from Gemini
        const aiInsights = response.text;

        res.status(200).json({
            success: true,
            aiInsights
        });

    } catch (error) {
        console.error("AI insight API error:", error);

        res.status(500).json({
            success: false,
            message: "Failed to generate AI insights"
        });
    }
});

module.exports = router;