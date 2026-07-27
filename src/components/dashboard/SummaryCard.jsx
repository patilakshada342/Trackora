import React from 'react'
import { FaArrowUp } from 'react-icons/fa';
import { FaWallet } from "react-icons/fa";
import { FaArrowDown } from 'react-icons/fa6';
import { PiPiggyBankBold } from "react-icons/pi";

function SummaryCard() {

    const cards = [
        {
            title: "Total Balance", amount: "345", change: "+8.2% this month",
            icon: <FaWallet />, bg: "bg-[#f4f1ff]", text: "text-[#5b3df5]"
        },
        {
            title: "Total Income", amount: "200000", change: "+12.98% this month",
            icon: <FaArrowUp />, bg: "bg-[#dceee3]", text: "text-[#00a63d]"
        },
        {
            title: "Total Expense", amount: "457263", change: "+5.7% this month",
            icon: <FaArrowDown />, bg: "bg-[#f4d2dc]", text: "text-[#e70a0a]"
        },
        {
            title: "Total Savings", amount: "98347", change: "34% saved",
            icon: <PiPiggyBankBold />, bg: "bg-[#f4f1ff]", text: "text-[#5b3df5]"
        },

    ]

    return (
        <>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6'>
                {
                    cards.map((data, i) => (
                        <div key={i} className='bg-white rounded-2xl border border-gray-100 p-5 
                shadow-sm hover:transition-transform duration-300 hover:scale-105'>

                            <div className='flex items-center justify-between mb-5'>
                                <div>
                                    <p className='text-gray-500 text-sm mb-2'>{data.title}</p>
                                    <h3 className='font-bold text-2xl'>₹{data.amount}</h3>
                                </div>
                                <div className={`w-11 h-11 rounded-xl ${data.bg} ${data.text} flex items-center  justify-center`}>
                                    {data.icon}
                                </div>

                            </div>
                            <p className={`'text-sm font-medium ${data.text}`}>{data.change}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default SummaryCard
