import React from 'react'
import DashboardLayout from '../components/Layout/DashboardLayout'

function Income() {
    return (
        <>
            <DashboardLayout title={"Add Income"}>

                <div className='grid lg:grid-cols-12 gap-6'>

                    <div className='lg:col-span-7'>
                        <div className='bg-white rounded-2xl border border-gray-100 p-6'>
                            <h3 className='text-lg font-semibold mb-6'>Add new Income</h3>
                            <form action="" className='space-y-5'>
                                <div>
                                    <label htmlFor="" className='text-sm font-medium mb-2 block'>Income Source</label>
                                    <input type="text" placeholder="Salary/Freelancing/Business" className='w-full border
                                                 border-gray-300 rounded-xl px-4 py-3 outline-none' />
                                </div>

                                <div>
                                    <label htmlFor="" className='text-sm font-medium mb-2 block'>Amount</label>
                                    <input type="number" placeholder="Enter Amount" className='w-full border
                                                 border-gray-300 rounded-xl px-4 py-3 outline-none' />
                                </div>

                                <div>
                                    <label htmlFor="" className='text-sm font-medium mb-2 block'>Date</label>
                                    <input type="date" placeholder="Enter Date" className='w-full border
                                                 border-gray-300 rounded-xl px-4 py-3 outline-none' />
                                </div>

                                <div>
                                    <label htmlFor="" className='text-sm font-medium mb-2 block'>Payment Method</label>
                                    <select name="" id="" className='w-full border border-gray-300 rounded-xl px-3 py-4 outline-none'>
                                        <option value="">Cash</option>
                                        <option value="">Bank Transfer</option>
                                        <option value="">UPI</option>
                                        <option value="">Cheque</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="" className='text-sm font-medium mb-2 block'>Notes</label>
                                    <textarea name="" id="" placeholder='Additional notes...' 
                                    className='w-full border border-gray-300 rounded-xl px-4 py-3 outline-noe '></textarea>
                                </div>
                                <button className='w-full h-11 justify-center px-7 py-4  bg-[#a52cf6] rounded-lg text-white text-sm font-medium hover:text-[#a52cf6] hover:border-[#a52cf6] hover:bg-[#f1e6f8]
                                         transition cursor-pointer flex items-center gap-4'>Save Income</button>
                            </form>
                        </div>
                    </div>

                    <div className='lg:col-span-5'>
                        right
                    </div>
                </div>
            </DashboardLayout>

        </>
    )
}

export default Income
