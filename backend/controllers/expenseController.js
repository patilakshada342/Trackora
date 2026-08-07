const Expense = require("../models/Expense")

const createExpense = async (req,res) => {

    const { amount, category, date, paymentMethod, notes } = req.body;

    if (!amount || !category || !date || !paymentMethod) {
        return res.status(400).json({
             message: "Enter all  details"
        });
    }

    const income = await Expense.create({amount,category,date,paymentMethod,notes});
    return res.status(200).json({ message: "Expense created" })
}

const getAllExpenses =async (req,res) =>{

    const expenses = await Expense.find()

    console.log("ALL Expenses -->",expenses);

    return res.status(200).json({
        message:"All expense fetched sucessfully"
    });
}

const updateExpense = async(req,res) => {

    const {id} = req.params;
    const {amount, category, date, paymentMethod, notes} =req.body;

    const expense = await Expense.findById(id);

    if(!expense){
        return res.status(404).json({
            message:"Expense not found"
        });
    }

   const updatedExpense = await Expense.findByIdAndUpdate(id,{amount,category,date,paymentMethod,notes},{new:true});
   return res.status(200).json({
        message:"Expense updated sucessfully"
    })
}

const deleteExpense = async(req,res)  =>{

    const {id}=req.params;
const deletedExpense = await Expense.findByIdAndDelete(id)
    if(deletedExpense){

    return res.status(200).json({
        message:"Expense deleted sucessfully"
    })
}else
{
    return res.status(404).json({
        message:"Expense does not exits"
    });
}




}
module.exports = { createExpense , getAllExpenses, updateExpense, deleteExpense};