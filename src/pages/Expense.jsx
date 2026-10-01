import React from 'react'
import DashboardLayout from '../components/Layout/DashboardLayout'
import ExpenseForm from '../components/Expense/ExpenseForm';

function Expense() {

    return (
        <>
            <DashboardLayout title={"Add Expense"}>

                <div className='grid lg:grid-cols-12 gap-6'>

                    <div className='lg:col-span-7'>
                        <ExpenseForm />
                    </div>

                    {/* <div className='lg:col-span-5 space-y-6'>
                        <div className='bg-white rounded-2xl border border-gray-100 p-6'>
                            <h3 className='text-lg font-semibold mb-6'>Expense Summary</h3>

                            <div className='space-y-4'>

                                <div className='flex justify-between border-b border-gray-100 pb-3'>
                                    <span className='text-gray-500'>This month Expense</span>
                                    <span className='font-semibold text-red-500'>₹85,000</span>
                                </div>

                                <div className='flex justify-between border-b border-gray-100 pb-3'>
                                    <span className='text-gray-500'>Top Category</span>
                                    <span className='font-semibold '>Rent</span>
                                </div>

                                <div className='flex justify-between border-b border-gray-100 pb-3'>
                                    <span className='text-gray-500'>Entries added</span>
                                    <span className='font-semibold '>13</span>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-2xl border border-gray-100 p-6 mt-6 '>
                            <div className='flex items-center justify-between mb-5'>
                                <h3 className='text-lg font-semibold mb-6'>Recent Expense History</h3>
                                <p className='text-sm text-[#a52cf6] font-medium'>View All</p>
                            </div>
                            <div className='space-y-4'>
                                {
                                    transactions.map((item, index) => (
                                        <div className='flex items-center justify-between border-b
                     border-gray-100 pb-4 last: border-0'>
                                            <div>
                                                <h4 className='font-medium text-sm'>{item.title}</h4>
                                                <p className='text-sx text-gray-500 mt-1'>{item.date} .{item.category}</p>
                                            </div>

                                            <div className='text-right'>
                                                <p className={`font-semibold text-sm text-red-500`}>+ ₹{item.amount}</p>
                                            </div>
                                        </div>
                                    ))
                                }


                            </div>
                        </div>
                    </div> */}
                </div>
            </DashboardLayout >
        </>
    )
}

export default Expense
