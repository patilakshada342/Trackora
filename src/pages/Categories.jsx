import React, { useEffect, useState } from 'react'
import DashboardLayout from '../components/Layout/DashboardLayout'
import { IoFastFoodSharp } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { MdModeEditOutline, MdDelete } from "react-icons/md";
import { createCategory, getAllCategories } from "../services/categoryApi";

function Categories() {

    const [name, setName] = useState("");
    const [monthlyLimit, setMonthlyLimit] = useState("");
    const [categories, setCategories] = useState([]);

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

           console.log("category created",categoryData)

            setName("");
            setMonthlyLimit("");

            // Refresh categories
            fetchCategories();

        } catch (error) {

            console.log("Create category error:", error);
             console.log("Backend response:", error.response?.data);


            
        }
    };


    return (
        <>
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

                                                    <button>
                                                        <MdModeEditOutline />
                                                    </button>

                                                    <button>
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