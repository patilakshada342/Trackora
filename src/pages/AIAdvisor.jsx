import React, { useState, useEffect } from 'react'
import DashboardLayout from '../components/Layout/DashboardLayout'
import { FaRobot, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router'
import { useNavigate } from 'react-router'
import { getAIAdvice } from '../services/aiApi';


function AIAdvisor() {

    const navigate = useNavigate();

    const [advice, setAdvice] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const goToAIChat = () => {
        navigate('/aiChat');
    }

    useEffect(() => {
        const fetchAdvice = async () => {
            try {
                const data = await getAIAdvice();
                setAdvice(data.aiAdvice);
            }
            catch (error) {
                console.log("Fetch advice api error:", error);
                setError("Unableto load AI advice");
            }
            finally {
                setLoading(false);
            }
        };
        fetchAdvice();
    }, []);



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
                                {
                                    loading
                                        ? "Generating your financial summary..."
                                        : error
                                            ? error
                                            : advice?.executiveSummary || "No summary available."
                                }
                            </p>
                        </div>
                    </div>

                    <div className='grid lg:grid-cols-2 gap-6'>
                        <div className='bg-white rounded-2xl border border-gray-100 p-6 '>

                            <h3 className='font-semibold  text-lg mb-5'>Spending Pattern Analysis</h3>
                            <div className='space-y-4 '>
                                {loading ? (
                                    <p className="text-sm text-gray-500">
                                        Analyzing spending patterns...
                                    </p>
                                ) : error ? (
                                    <p className="text-sm text-gray-500">{error}</p>
                                ) : advice?.spendingPatterns?.length ? (
                                    advice.spendingPatterns.map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-white border border-gray-100 rounded-xl p-4 text-sm text-gray-700"
                                        >
                                            {item}
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-sm text-gray-500">
                                        No spending patterns available.
                                    </p>
                                )}

                            </div>
                        </div>

                        <div className='bg-white rounded-2xl border border-gray-100 p-6  '>

                            <h3 className='font-semibold  text-lg mb-5'>Smart Saving Opportunities</h3>
                            <div className='space-y-4'>
                                {loading ? (
                                    <p className="text-sm text-gray-500">
                                        Finding saving opportunities...
                                    </p>
                                ) : error ? (
                                    <p className="text-sm text-gray-500">{error}</p>
                                ) : advice?.savingOpportunities?.length ? (
                                    advice.savingOpportunities.map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-[#a52cf60f] border border-[#a52cf621] rounded-xl p-4 text-sm text-gray-700"
                                        >
                                            {item}
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-sm text-gray-500">
                                        No saving opportunities available.
                                    </p>
                                )}

                            </div>
                        </div>

                        <div className='bg-white rounded-2xl border border-gray-100 p-6  '>

                            <h3 className='font-semibold  text-lg mb-5'>Money Waste Detected</h3>
                            <div className='space-y-4'>
                                {loading ? (
                                    <p className="text-sm text-gray-500">
                                        Analyzing unnecessary expenses...
                                    </p>
                                ) : error ? (
                                    <p className="text-sm text-gray-500">{error}</p>
                                ) : advice?.moneyWaste?.length ? (
                                    advice.moneyWaste.map((item, index) => (
                                        <div
                                            key={index}
                                            className="bg-[#e70a0a14] border border-[#e70a0a17] rounded-xl p-4 text-sm text-gray-700"
                                        >
                                            {item}
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-sm text-gray-500">
                                        No money waste insights available.
                                    </p>
                                )}
                            </div>


                        </div>

                        <div className='bg-white rounded-2xl border border-gray-100 p-6 '>
                            <h3 className='text-lg font-semibold mb-5'>Recommended Next Month Budget</h3>


                            <div className='space-y-4'>
                                {loading ? (
                                    <p className="text-sm text-gray-500">
                                        Generating recommended budget...
                                    </p>
                                ) : error ? (
                                    <p className="text-sm text-gray-500">{error}</p>
                                ) : advice?.recommendedBudget?.length ? (
                                    advice.recommendedBudget.map((item) => (
                                        <div
                                            key={item.name}
                                            className="flex items-center justify-between"
                                        >
                                            <span>{item.name}</span>
                                            <span>
                                                ₹{Number(item.amount).toLocaleString('en-IN')}
                                            </span>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-sm text-gray-500">
                                        No budget recommendations available.
                                    </p>
                                )}




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
