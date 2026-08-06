const Category = require('../models/Category')  //import the model


//create a category
const createCategory = async (req, res) => {              //create category
    const { name, monthlyLimit } = req.body;              //object destructuring

    if (!name) {                                          //validation
        return res.status(400).json({
            message: "Category name is required"
        })
    }

    const existingCategory = await Category.findOne({ name });           //check for existing category

    if (existingCategory) {
        return res.status(400).json({
            message: "Category aready exists"
        });
    }

    const category = await Category.create({              //if category does not exist , create it -> take the obj & save in mongodb
        name, monthlyLimit
    });

    return res.status(201).json({
        message: "Category created successfully"
    });
};

//get all categories
const getAllCategories = async (req, res) => {      //get all the categories

    const categories = await Category.find();
    res.status(200).json({
        message: "Categories fetched successfully",
        categories
    });

    // return res.status(200).json({
    //     message :"Get categories API Working"
    // });
};


//update category
const updateCategory = async (req, res) => {

    const { id } = req.params;
    const { name, monthlyLimit } = req.body;
    console.log(monthlyLimit);


    if (!name) {                              //check if the name is entered or not 
        return res.status(400).json({
            message: "Category  is not mentioned"
        });
    }

    const category = await Category.findById(id);

    if (!category) {                      //check if category exists
        return res.status(404).json({
            message: "Category not found"
        });
    }

    const updatedCategory = await Category.findByIdAndUpdate(
        id, { name, monthlyLimit }, { new: true }
    );

    res.status(200).json({
        message: "Category updated successfully",
        category: updatedCategory
    });
};

//delete a category
const deleteCategory = async (req, res) => {

    const { id } = req.params;
    
    
    const category = await Category.findById(id);

    if (!category) {                      //check if category exists
        return res.status(404).json({
            message: "Category not found"
        });
    }

   await Category.findByIdAndDelete(id);

    return res.status(200).json({
        message: "Category deleted successfully",
        
    });
};

module.exports = { createCategory, getAllCategories, updateCategory ,deleteCategory};