import React, { useEffect, useState } from 'react'
import DashboardLayout from '../components/Layout/DashboardLayout'
import { IoFastFoodSharp } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { MdModeEditOutline, MdDelete, MdClose } from "react-icons/md";
import { createCategory, getAllCategories, deleteCategory, updateCategory } from "../services/categoryApi";
import { toast } from 'sonner';


function Categories() {

    const [name, setName] = useState("");
    const [monthlyLimit, setMonthlyLimit] = useState("");
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedDeleteCategory, setSelectedDeleteCategory] = useState(null);

    const fetchCategories = async () => {
        try {
            const data = await getAllCategories();

            console.log("Categories:", data);

            setCategories(data.categories || []);

        } catch (error) {
            console.log("Get categories error:", error);
        }
    };


    useEffect(() => {
        fetchCategories();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const categoryData = {
                name,
                monthlyLimit: Number(monthlyLimit) || 0
            };

            await createCategory(categoryData);

            console.log("category created", categoryData)

            setName("");
            setMonthlyLimit("");

            // Refresh categories
            fetchCategories();

        } catch (error) {

            console.log("Create category error:", error);
            console.log("Backend response:", error.response?.data);



        }
    };

    const handleDeleteCategory = async (id) => {
        try {
            await deleteCategory(selectedDeleteCategory._id);
            console.log("Category deleted");
            toast.success("Category Deleted Successfully!");
            await fetchCategories();
            setSelectedDeleteCategory(null);

        }
        catch (error) {
            console.log("Delete category error", error);
            toast.error("Category cannot be deleted");
        }
    }

    


    return (
        <>

        //update category
    {
        selectedCategory && (
            <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>

                <div className='bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative'>

                    <button
                        onClick={() => setSelectedCategory(null)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer"
                    >
                        <MdClose size={24} />
                    </button>

                    <div className='bg-white rounded-2xl border border-gray-100 p-6'>

                        <h3 className='text-lg font-semibold mb-6'>
                            Edit Category
                        </h3>

                        <form
                            onSubmit={async (e) => {
                                e.preventDefault();

                                try {
                                    await updateCategory(
                                        selectedCategory._id,
                                        {
                                            name: selectedCategory.name,
                                            monthlyLimit: Number(selectedCategory.monthlyLimit) || 0
                                        }
                                    );

                                    await fetchCategories();
                                    setSelectedCategory(null);

                                } catch (error) {
                                    console.log("Update category error:", error);
                                    console.log("Backend response:", error.response?.data);
                                }
                            }}
                            className='space-y-5'
                        >

                            <div>
                                <label className='text-sm font-medium mb-2 block'>
                                    Category Name
                                </label>

                                <input
                                    type="text"
                                    value={selectedCategory.name}
                                    onChange={(e) =>
                                        setSelectedCategory({
                                            ...selectedCategory,
                                            name: e.target.value
                                        })
                                    }
                                    className='w-full border border-gray-300 rounded-xl px-4 py-3 outline-none'
                                    required
                                />
                            </div>

                            <div>
                                <label className='text-sm font-medium mb-2 block'>
                                    Monthly Limit
                                </label>

                                <input
                                    type="number"
                                    value={selectedCategory.monthlyLimit}
                                    onChange={(e) =>
                                        setSelectedCategory({
                                            ...selectedCategory,
                                            monthlyLimit: e.target.value
                                        })
                                    }
                                    className='w-full border border-gray-300 rounded-xl px-4 py-3 outline-none'
                                />
                            </div>

                            <button
                                type="submit"
                                className='w-full h-11 justify-center px-7 py-4 bg-[#a52cf6] rounded-lg text-white text-sm font-medium hover:text-[#a52cf6] hover:border-[#a52cf6] hover:bg-[#f1e6f8] transition cursor-pointer flex items-center gap-4'
                            >
                                Update Category
                            </button>

                        </form>

                    </div>
                </div>
            </div>
        )
    }

    //delete category
    {
        selectedDeleteCategory && (
            <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>

                <div className='bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative'>

                    <button
                        onClick={() => setSelectedDeleteCategory(null)}
                        className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer"
                    >
                        <MdClose size={24} />
                    </button>

                    <div className='bg-white rounded-2xl border border-gray-100 p-6'>

                        <h3 className='text-lg font-semibold mb-6'>
                            Delete Category
                        </h3>

                        <p className='text-gray-500 mb-4 text-center'>
                            Are you sure you want to delete 
                            <strong className='text-gray-800'>
        "{selectedDeleteCategory.name}"
    </strong> category?
                        </p>

                        <div className='flex justify-center gap-3'>

                            <button
                                onClick={handleDeleteCategory}
                                className='w-20 h-11 px-7 py-4 bg-[#a52cf6] rounded-lg text-white text-sm font-medium hover:text-[#a52cf6] hover:border-[#a52cf6] hover:bg-[#f1e6f8] transition cursor-pointer flex items-center justify-center'
                            >
                                Yes
                            </button>

                            <button
                                onClick={() => setSelectedDeleteCategory(null)}
                                className='w-20 h-11 px-7 py-4 bg-[#a52cf6] rounded-lg text-white text-sm font-medium hover:text-[#a52cf6] hover:border-[#a52cf6] hover:bg-[#f1e6f8] transition cursor-pointer flex items-center justify-center'
                            >
                                No
                            </button>

                        </div>

                    </div>
                </div>
            </div>
        )
    }

            <DashboardLayout title="Categories">

                <div className='grid lg:grid-cols-12 gap-6'>

                    {/* ADD CATEGORY */}

                    <div className='lg:col-span-4'>

                        <div className='bg-white rounded-2xl border border-gray-100 p-6'>

                            <h3 className='text-lg font-semibold mb-6'>
                                Add new Category
                            </h3>

                            <form
                                onSubmit={handleSubmit}
                                className='space-y-5'
                            >

                                <div>

                                    <label className='text-sm font-medium mb-2 block'>
                                        Category Name
                                    </label>

                                    <input
                                        type="text"
                                        placeholder="Food/Transport/Bills"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className='w-full border border-gray-300 rounded-xl px-4 py-3 outline-none'
                                        required
                                    />

                                </div>


                                <div>

                                    <label className='text-sm font-medium mb-2 block'>
                                        Monthly Limit(Optional)
                                    </label>

                                    <input
                                        type="number"
                                        placeholder="Enter monthly budget limit"
                                        value={monthlyLimit}
                                        onChange={(e) => setMonthlyLimit(e.target.value)}
                                        className='w-full border border-gray-300 rounded-xl px-4 py-3 outline-none'
                                    />

                                </div>


                                <button
                                    type="submit"
                                    className='w-full h-11 justify-center px-7 py-4 bg-[#a52cf6] rounded-lg text-white text-sm font-medium hover:text-[#a52cf6] hover:border-[#a52cf6] hover:bg-[#f1e6f8] transition cursor-pointer flex items-center gap-4'
                                >
                                    Save Category
                                </button>

                            </form>

                        </div>

                    </div>


                    {/* LIST OF CATEGORIES */}

                    <div className='lg:col-span-8'>

                        <div className='w-full h-full rounded-2xl bg-white border border-gray-100 p-6'>

                            <div className='flex items-center justify-between mb-6'>

                                <h3 className='text-lg font-semibold'>
                                    Manage Categories
                                </h3>

                                <p className='text-sm text-gray-500'>
                                    {categories.length} Categories
                                </p>

                            </div>


                            <div className='grid md:grid-cols-2 gap-5'>

                                {
                                    categories.map((item) => (

                                        <div
                                            key={item._id}
                                            className='bg-white rounded-2xl border border-gray-100 p-5'
                                        >

                                            <div className='flex items-center justify-between mb-4'>

                                                <div className='w-11 h-11 rounded-xl bg-[#f4f1ff] text-[#a52cf6] flex items-center justify-center'>

                                                    <IoFastFoodSharp />

                                                </div>


                                                <div className='flex gap-3 text-gray-500'>

                                                    <button
                                                        onClick={() =>{ 
                                                            console.log("edit clicked",item);
                                                            setSelectedCategory(item);
                                                        }}

                                                        className='hover:text-[#a52cf6] transition cursor-pointer'
                                                        title="Edit"
                                                    >
                                                        <MdModeEditOutline />
                                                    </button>

                                                    <button
                                                        onClick={() => {
                                                            console.log("delete clicked",item);
                                                            setSelectedDeleteCategory(item)}}
                                                        className='hover:text-red-600 transition cursor-pointer'
                                                        title='Delete'>
                                                        <MdDelete />
                                                    </button>

                                                </div>

                                            </div>


                                            <h4 className='font-semibold mb-2'>
                                                {item.name}
                                            </h4>


                                            <p className='text-gray-500'>
                                                Monthly Limit : ₹{item.monthlyLimit}
                                            </p>

                                        </div>

                                    ))

                                }

                            </div>

                        </div>

                    </div>

                </div>

            </DashboardLayout>
        </>
    )
}

export default Categories