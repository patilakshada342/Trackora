import React from 'react'
import DashboardLayout from '../components/Layout/DashboardLayout'


function Expense() {
    const transactions = [
        { title: "Rent", amount: "50,000",  category:"Rent",date: "03 May" },
        { title: "Grocersy shopping", amount: "2300", category:"shopping", date: "04 May" },
        { title: "petrol", amount: "10,000", category:"Transport", date: "02 May" },
        { title: "Shopping", amount: "900",  category:"Shopping",date: "02 May" },
        
    ]
  return (
    <>
      <DashboardLayout title={"Add Expense"}>

                <div className='grid lg:grid-cols-12 gap-6'>

                    <div className='lg:col-span-7'>
                        <div className='bg-white rounded-2xl border border-gray-100 p-6'>
                            <h3 className='text-lg font-semibold mb-6'>Expense Title</h3>
                            <form action="" className='space-y-5'>
                                <div>
                                    <label htmlFor="" className='text-sm font-medium mb-2 block'>Income Source</label>
                                    <input type="text" placeholder="Grosery/Rent/shopping" className='w-full border
                                                 border-gray-300 rounded-xl px-4 py-3 outline-none' />
                                </div>

                                <div>
                                    <label htmlFor="" className='text-sm font-medium mb-2 block'>Amount</label>
                                    <input type="number" placeholder="Enter Amount" className='w-full border
                                                 border-gray-300 rounded-xl px-4 py-3 outline-none' />
                                </div>

                                <div>
                                    <label htmlFor="" className='text-sm font-medium mb-2 block'>Expense Category</label>
                                    <select name="" id="" className='w-full border border-gray-300 rounded-xl px-3 py-4 outline-none'>
                                        <option value="">Food & Dinning</option>
                                        <option value="">Shopping</option>
                                        <option value="">Rent</option>
                                        <option value="">Subscriptions</option>
                                    </select>
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
                                         transition cursor-pointer flex items-center gap-4'>Save Expense</button>
                            </form>
                        </div>
                    </div>

                    <div className='lg:col-span-5 space-y-6'>
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
                                                <p className='text-sx text-gray-500 mt-1'>{item.date} . {item.category}</p>
                                            </div>

                                            <div className='text-right'>
                                                <p className={`font-semibold text-sm text-red-500`}>+ ₹{item.amount}</p>
                                            </div>
                                        </div>
                                    ))
                                }


                            </div>
                        </div>
                    </div>
                </div>
            </DashboardLayout >
    </>
  )
}

export default Expense
