const Income = require('../models/Income')

const createIncome = async (req, res) => {

    const { source, amount, date, notes } = req.body;
    console.log("Logged in user:", req.user);
    if (!source || !amount || !date) {
        return res.status(400).json(
            {
                message: "Enter all details"
            });
    }

    const income = await Income.create({ user: req.user, source, amount, date, notes });

    return res.status(201).json({
        message: "Income created successfully"
    });
};

const getAllIncomes = async (req, res) => {
    try {

        const incomes = await Income.find({ user: req.user })
        .sort({ date: -1});
        console.log("incomes-->", incomes)
        return res.status(200).json({
            message: "All incomes retrieved successfully",
            incomes
        });
    } catch (error) {
        console.log("GET INCOME ERROR -->", error);

        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
}

const updateIncome = async (req, res) => {

    const { id } = req.params;
    const { source, amount, date, notes } = req.body;

    if (!source || !amount || !date) {
        return res.status(400).json({ message: "Enter all values to be updated" });
    }

    const income = await Income.findOne({
        _id: id,
        user: req.user
    });

    if (!income) {
        return res.status(400).json({
            message: "Income not found"
        });
    }

    await Income.findOneAndUpdate(
        { _id: id, user: req.user },
        { source, amount, date, notes },
        { new: true }
    )

    return res.status(200).json({
        message: "Income updated successfully"
    });
}

const deleteIncome = async (req, res) => {

    const { id } = req.params;

    const income = await Income.findById(id);


    if (!income) {
        return res.status(400).json({
            message: "Income not found"
        });
    }

    await Income.findByIdAndDelete({
        _id: id,
        user: req.user
    });

    return res.status(200).json({
        message: "Income deleted successfully"
    });
}


module.exports = { createIncome, getAllIncomes, updateIncome, deleteIncome };