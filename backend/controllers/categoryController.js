const Category = require("../models/Category");


// CREATE CATEGORY
const createCategory = async (req, res) => {
    console.log("CREATE CATEGORY API CALLED");
    try {
        const { name, monthlyLimit } = req.body;

        if (!name) {
            return res.status(400).json({
                message: "Category name is required"
            });
        }

        const existingCategory = await Category.findOne({
            name,
            user: req.user
        });

        if (existingCategory) {
            return res.status(400).json({
                message: "Category already exists"
            });
        }

        const category = await Category.create({
            name,
            monthlyLimit: monthlyLimit || 0,
            user: req.user
        });
console.log("CREATED CATEGORY:", category);
        return res.status(201).json({
            message: "Category created successfully",
            category
        });

    } catch (error) {
        console.log("Create category error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};


// GET ALL CATEGORIES
const getAllCategories = async (req, res) => {
    try {

        const categories = await Category.find({
            user: req.user
        });

        return res.status(200).json({
            message: "Categories fetched successfully",
            categories
        });

    } catch (error) {
        console.log("Get categories error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};


// UPDATE CATEGORY
const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, monthlyLimit } = req.body;

        if (!name) {
            return res.status(400).json({
                message: "Category name is required"
            });
        }

        const category = await Category.findOne({
            _id: id,
            user: req.user
        });

        if (!category) {
            return res.status(404).json({
                message: "Category not found"
            });
        }

        const updatedCategory = await Category.findOneAndUpdate(
            {
                _id: id,
                user: req.user
            },
            {
                name,
                monthlyLimit
            },
            {
                new: true
            }
        );

        return res.status(200).json({
            message: "Category updated successfully",
            category: updatedCategory
        });

    } catch (error) {
        console.log("Update category error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};


// DELETE CATEGORY
const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;

        const category = await Category.findOne({
            _id: id,
            user: req.user
        });

        if (!category) {
            return res.status(404).json({
                message: "Category not found"
            });
        }

        await Category.findOneAndDelete({
            _id: id,
            user: req.user
        });

        return res.status(200).json({
            message: "Category deleted successfully"
        });

    } catch (error) {
        console.log("Delete category error:", error);

        return res.status(500).json({
            message: "Internal server error"
        });
    }
};


module.exports = {
    createCategory,
    getAllCategories,
    updateCategory,
    deleteCategory
};