const Income = require('../models/Income')

const createIncome = async (req, res) => {

    const { source, amount, date, notes } = req.body;

    if (!source || !amount || !date) {
        return res.status(400).json(
            {
                message: "Enter all details"
            });
    }

    const income = await Income.create({ source, amount, date, notes });

    return res.status(201).json({
        message: "Income created successfully"
    });
};

const getAllIncomes = async (req, res) => {

    const incomes = await Income.find();
    console.log("incomes-->", incomes)
    return res.status(200).json({
        message: "All incomes retrieved successfully"
    });
}

const updateIncome =async(req,res)=>{

    const {id} = req.params;
    const {source,amount,date,notes} = req.body;

    const income = await Income.findById(id);

    if(!source || !amount || !date ){
        return res.status(400).json({message:"Enter all values to be updated"});
    }

    if(!income){
        return res.status(400).json({
            message:"Income not found"
        });
    }

    const updatedIncome = await Income.findByIdAndUpdate(
        id,
        {source, amount,date,notes},
        {new:true}
    );
    
    return res.status(200).json({
        message:"Income updated successfully"
    }); 
}

const deleteIncome =async(req,res)=>{

    const {id} = req.params;
    
    const income = await Income.findById(id);


    if(!income){
        return res.status(400).json({
            message:"Income not found"
        });
    }

     await Income.findByIdAndDelete(id);
    
    return res.status(200).json({
        message:"Income deleted successfully"
    }); 
}


module.exports = { createIncome, getAllIncomes, updateIncome, deleteIncome };