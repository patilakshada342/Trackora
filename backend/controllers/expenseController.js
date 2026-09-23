const Expense = require("../models/Expense")

const createExpense = async (req, res) => {

    const { amount, category, date, paymentMethod, notes } = req.body;

    if (!amount || !category || !date || !paymentMethod) {
        return res.status(400).json({
            message: "Enter all  details"
        });
    }
    //     console.log("CREATE EXPENSE HIT");
    // console.log("REQ.USER =", req.user);

    const expense = await Expense.create({ user: req.user, amount, category, date, paymentMethod, notes });

    return res.status(200).json({ message: "Expense created" })
}

const getAllExpenses = async (req, res) => {

    const expenses = await Expense.find({ user: req.user })

    console.log("ALL Expenses -->", expenses);

    return res.status(200).json({
        message: "All expense fetched sucessfully",
        expenses
    });
}

const updateExpense = async (req, res) => {

    const { id } = req.params;
    const { amount, category, date, paymentMethod, notes } = req.body;

    const updateExpense = await Expense.findOneandUpdate({
        _id: id,
        user: req.user
    },
        {
            amount,
            category,
            date,
            paymentMethod,
            notes
        },

        { new: true }

    );

    if (!updatedExpense) {
        return res.status(404).json({
            message: "Expense not found"
        });
    }

    
    return res.status(200).json({
        message: "Expense updated sucessfully",
        expense: updateExpense

    });
};

const deleteExpense = async (req, res) => {

    const { id } = req.params;
    const deletedExpense = await Expense.findByIdAndDelete({
        _id: id,
        user: req.user
    })
    if (deletedExpense) {

        return res.status(200).json({
            message: "Expense deleted sucessfully"
        })
    } else {
        return res.status(404).json({
            message: "Expense does not exits"
        });
    }




}
module.exports = { createExpense, getAllExpenses, updateExpense, deleteExpense };