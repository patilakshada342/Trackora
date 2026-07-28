import React from 'react'
import DashboardLayout from '../components/Layout/DashboardLayout'
import { IoFastFoodSharp } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa6";
import { FaBagShopping } from "react-icons/fa6";
import { MdModeEditOutline, MdDelete } from "react-icons/md";

function Categories() {

    const categories = [
        { name: "Food & Dinning", type: "Expense", limit: "10,000", icon: <IoFastFoodSharp /> },
        { name: "Salary", type: "Income", limit: "", icon: <FaMoneyBillWave /> },
        { name: "Shopping", type: "Expense", limit: "8,000", icon: <FaBagShopping /> },
    ]
    return (
        <>
            <DashboardLayout title="Categories">
                <div className='grid lg:grid-cols-12 gap-6'>
                    <div className='lg:col-span-4'>
                        <div className='bg-white rounded-2xl border border-gray-100 p-6'>
                            <h3 className='text-lg font-semibold mb-6'>Add new Category</h3>
                            <form action="" className='space-y-5'>
                                <div>
                                    <label htmlFor="" className='text-sm font-medium mb-2 block'>Category Name</label>
                                    <input type="text" placeholder="Food/Transport/Bills" className='w-full border
                                                 border-gray-300 rounded-xl px-4 py-3 outline-none' />
                                </div>

                                <div>
                                    <label htmlFor="" className='text-sm font-medium mb-2 block'>Category Type</label>
                                    <select name="" id="" className='w-full border border-gray-300 rounded-xl px-3 py-4 outline-none'>
                                        <option value="">Income</option>
                                        <option value="">Expense</option>
                                        <option value="">Budget</option>

                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="" className='text-sm font-medium mb-2 block'>Monthly Limit(Optional)</label>
                                    <input type="number" placeholder="Enter monthly budget limit" className='w-full border
                                                 border-gray-300 rounded-xl px-4 py-3 outline-none' />
                                </div>




                                <button className='w-full h-11 justify-center px-7 py-4  bg-[#a52cf6] rounded-lg text-white text-sm font-medium hover:text-[#a52cf6] hover:border-[#a52cf6] hover:bg-[#f1e6f8]
                                         transition cursor-pointer flex items-center gap-4'>Save Category</button>
                            </form>
                        </div>
                    </div>

                    {/* List of categories */}
                    <div className='lg:col-span-8'>
                        <div className='w-full h-full rounded-2xl bg-white border border-gray-100 p-6'>
                            <div className='flex items-center justify-between mb-6'>
                                <h3 className='text-lg font-semibold'>Manage Categories</h3>
                                <p className='text-sm text-gray-500 '>{categories.length} Categories</p>
                            </div>
                            <div className='grid md:grid-cols-2 gap-5'>
                                {
                                    categories.map((item, index) => (
                                        <div className='bg-white rounded-2xl border border-gray-100 p-5 '>
                                            <div className='flex items-center justify-between mb-4'>
                                                <div className='w-11 h-11 rounded-xl bg-[#f4f1ff] text-[#a52cf6] flex items-center justify-center'>
                                                    {item.icon}
                                                </div>

                                                <div className='flex gap-3 text-gray-500'>
                                                    <button>{<MdModeEditOutline />}</button>
                                                    <button><MdDelete /></button>
                                                </div>
                                            </div>
                                            <h4 className='font-semibold mb-2'>{item.name}</h4>
                                            <p className='text-gray-500'>Type : {item.type}</p>
                                            <p className='text-gray-500'>Monthly Limit : ₹{item.limit}</p>
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
