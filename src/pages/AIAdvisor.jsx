import React from 'react'
import DashboardLayout from '../components/Layout/DashboardLayout'
import { FaRobot, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router'
import { useNavigate } from 'react-router'


function AIAdvisor() {

    const navigate = useNavigate();

    const goToAIChat =() =>{
        navigate('/aiChat');
    }
    const transactions = [
        { title: "Rent", amount: "50,000", category: "Rent", date: "03 May" },
        { title: "Grocersy shopping", amount: "2300", category: "shopping", date: "04 May" },
        { title: "petrol", amount: "10,000", category: "Transport", date: "02 May" },
        { title: "Shopping", amount: "900", category: "Shopping", date: "02 May" },

    ]

    const category = [
        { name: "Housing", amount: "20,000" },
        { name: "Food & Dinning", amount: "10,000" },
        { name: "Transport", amount: "20,000" },
        { name: "Entertainment", amount: "2,000" },
        { name: "Shopping", amount: "5,000" },
    ]

    return (
        <>
            <DashboardLayout title={"AI Financial Advisor"}>
                <div className='space-y-6'>
                    <div className='bg-white rounded-2xl border border-gray-100 p-7 flex
flex-col lg:flex-row lg:items-center lg:justify-between gap-6'>
                        <div className=''>
                            <div className='flex items-center mb-4 gap-3'>

                                <div className='w-11 h-11 rounded-xl bg-[#f4f1ff] text-[#a52cf6] flex 
                        items-center justify-center'>
                                    <FaRobot />
                                </div>
                                <h3 className='font-semibold text-xl '>AI Monthly Financial Analysis Ready</h3>
                            </div>

                            <p className='text-gray-500 leading-7 max-x-3xl'>
                                Personalized financial observations generated after scanning your monthly income, expense , recurring patterns and saving behaviour </p>
                        </div>
                        <button className='px-7 py-4  bg-[#a52cf6] rounded-lg text-white text-sm 
                        font-medium hover:text-[#a52cf6] hover:border-[#a52cf6] hover:bg-[#f1e6f8]
                         transition cursor-pointer flex items-center gap-4' onClick={goToAIChat}>
                            Chat with AI Advisor<FaArrowRight />
                        </button>
                    </div>

                    <div className='bg-[#a52cf60f] rounded-2xl border border-[#a52cf621] p-7 flex
flex-col lg:flex-row lg:items-center lg:justify-between gap-6 '>
                        <div className=''>
                            <div className='flex items-center  mb-4 gap-3'>
                                <h3 className='font-semibold text-xl '>AI Executive Summary</h3>
                            </div>

                            <p className='text-gray-500  leading-7 '>
                                Your monthly finances are stable overall, but AI detected rising frequency , recurring entertainment ,
                                subscriptions and slightly evelavted foor delivery spending. There is a clear
                                opportunity to improve your monthly savings by restructuring category limits </p>
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-2 gap-6'>
                        <div className='bg-white rounded-2xl border border-gray-100 p-6 '>

                            <h3 className='font-semibold  text-lg mb-5'>Spending Pattern Analysis</h3>
                            <div className='space-y-4 '>
                                <div className='bg-white border  border-gray-100 rounded-xl p-4 
    text-sm text-gray-700'>
                                    Housing remained the higgest spending category this month
                                </div>
                                <div className='bg-white border border-gray-100  rounded-xl p-4 
    text-sm text-gray-700'>
                                    Food & Dinning consumed nearly 20% of total expenses
                                </div>
                                <div className='bg-white border border-gray-100 rounded-xl p-4
    text-sm text-gray-700'>
                                    Shopping increased by 12% compared to provided month

                                </div>
                                <div className='bg-white border border-gray-100 rounded-xl p-4
    text-sm text-gray-700'>
                                    Transport speeding stayed within controlled budget
                                </div>

                            </div>
                        </div>

                        <div className='bg-white rounded-2xl border border-gray-100 p-6  '>

                            <h3 className='font-semibold  text-lg mb-5'>Smart Saving Opportunities</h3>
                            <div className='space-y-4'>
                                <div className='bg-[#a52cf60f] border  border-[#a52cf621] rounded-xl p-4 
    text-sm text-gray-700'>
                                    Reduce food delivery orders by ₹2,000 monthly
                                </div>
                                <div className='bg-[#a52cf60f] border border-[#a52cf621]  rounded-xl p-4 
    text-sm text-gray-700'>
                                    Pause or remove 2 low value subscriptions
                                </div>
                                <div className='bg-[#a52cf60f] border border-[#a52cf621] rounded-xl p-4
    text-sm text-gray-700'>
                                    Move fixed 15% salary directly to savings account

                                </div>
                                <div className='bg-[#a52cf60f] border border-[#a52cf621] rounded-xl p-4
    text-sm text-gray-700'>
                                    Set weekly shopping spendings limit
                                </div>

                            </div>
                        </div>

                        <div className='bg-white rounded-2xl border border-gray-100 p-6  '>

                            <h3 className='font-semibold  text-lg mb-5'>Money Waste Detected</h3>
                            <div className='space-y-4'>
                                <div className='bg-[#e70a0a14] border  border-[#e70a0a17] rounded-xl p-4 
    text-sm text-gray-700'>
                                    3 recurring subscriptions costing ₹1,200 detected
                                </div>
                                <div className='bg-[#e70a0a14] border border-[#e70a0a17]  rounded-xl p-4 
    text-sm text-gray-700'>
                                    Frequent impulse UPI payments noticed
                                </div>
                                <div className='bg-[#e70a0a14] border border-[#e70a0a17] rounded-xl p-4
    text-sm text-gray-700'>
                                    Weekend entertainment exceeded usual pattern
                                </div>
                                <div className='bg-[#e70a0a14] border border-[#e70a0a17] rounded-xl p-4
    text-sm text-gray-700'>
                                    Small requested cash withdrawn indicate leakage

                                </div>
                            </div>


                        </div>

                        <div className='bg-white rounded-2xl border border-gray-100 p-6 '>
                            <h3 className='text-lg font-semibold mb-5'>Recommended Next Month Budget</h3>


                            <div className='space-y-4'>
                                {
                                    category.map((item, index) => (
                                        <div key={index} className='flex items-center justify-between
                                 border-b border-gray-100 pb-3 last:border=0'>

                                            <span>{item.name}</span>
                                            <span className='font-semibold'>₹{item.amount}</span>
                                        </div>
                                    ))


                                }




                            </div>
                        </div>

                    </div>
                    <p className='text-gray-500 text-center'>Get more detailed answers with <Link to='/aiChat' className='text-[#a52cf6] font-medium'>AI Advisory Chat</Link></p>

                </div>

            </DashboardLayout >
        </>
    )
}

export default AIAdvisor
