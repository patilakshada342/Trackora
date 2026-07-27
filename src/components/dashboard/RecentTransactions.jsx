import React from 'react'

function RecentTransactions() {
    const transactions = [
        { title: "salary credited", category: "Income", amount: "50,000", type: "credit", date: "03 May" },
        { title: "Grosery shopping", category: "Food", amount: "2300", type: "credit", date: "04 May" },
        { title: "Petrol", category: "Transport", amount: "10,000", type: "expense", date: "02 May" },
        { title: "Boots", category: "Shopping", amount: "900", type: "expense", date: "02 May" },
        { title: "Netfilx Subscription", category: "Entertaiment", amount: "399", type: "expense", date: "03 May" },
        { title: "Finance", category: "Kharcha pani", amount: "900", type: "expense", date: "06 May" },

    ]
    return (
        <>
            <div className='bg-white rounded-2xl border border-gray-100 p-5 h-full'>
                <div className='flex items-center justify-between mb-5'>
                    <h3 className='font-semibold '>Recent Transaction </h3>
                    <p className='text-sm text-[#a52cf6] font-medium'>View All</p>
                </div>
                <div className='space-y-4'>
                    {
                        transactions.map((item, index) => (
                            <div className='flex items-center justify-between border-b
                     border-gray-100 pb-4 last: border-0'>
                                <div>
                                    <h4 className='font-medium text-sm'>{item.title}</h4>
                                    <p className='text-sx text-gray-500 mt-1'>{item.category}</p>
                                </div>

                                <div className='text-right'>
                                    <p className={`font-semibold text-sm ${item.type == 'credit' ? 
                                    'text-green-600' : 'text-red-500'}`}>{item.type == 'credit' ? '+' : '-'} ₹{item.amount}</p>
                                    <p className='text-sx text-gray-500 mt-1'>{item.date}</p>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </>
    )
}

export default RecentTransactions
