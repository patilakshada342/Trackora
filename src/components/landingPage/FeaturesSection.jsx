import React from 'react'
import { FaWallet, FaRobot, FaChartLine } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { TbReportMoneyFilled } from "react-icons/tb";
import { RiDashboard2Line } from "react-icons/ri";

function FeaturesSection() {

    const features = [
        {
            icon: <FaWallet />,
            title: 'Track Every Income & Expense',
            desc: 'Keep a complete record of your salary, freelancing income, bills, shopping, and everyday expenses in one organized place'
        },
        {
            icon: <FaRobot />,
            title: 'AI Financial Advisory',
            desc: 'Get AI-powered financial insights, saving opportunities, spending alerts, and personalized suggestions to help you build better money habits'
        },
        {
            icon: <FaChartLine />,
            title: 'Budget, Categories & Insights',
            desc: 'Understand where your money goes with category-wise spending analysis, budget tracking, overspending alerts, and financial insights'
        },
        {
            icon: <GoGoal />,
            title: 'Financial Goal Tracking',
            desc: 'Create and track savings goals for emergency funds, gadgets, vacations, or future investments, and monitor your progress visually'
        },
        {
            icon: <TbReportMoneyFilled />,
            title: 'Professional Monthly Reports',
            desc: 'Get clear financial summaries covering total income, total expenses, net savings, spending patterns, and monthly financial behaviour'
        },
        {
            icon: <RiDashboard2Line />,
            title: 'Unified Financial Dashboard',
            desc: 'Access your transactions, budgets, goals, reports, and financial insights from one centralized dashboard'
        }
    ]
    return (
        <>
            <section id='features' className='max-w-7xl mx-auto px-6 lg:px-10 pb-20'>

                <div className='text-center mb-14'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-4'>Everything You Need for Smart Money Management</h2>
                    <p className='text-gray-500 max-w-2xl mx-auto leading-8'>Trackora brings your income, expenses, budgets, 
                        savings goals, and financial insights together in one simple platform — helping you understand your
                         money and make better financial decisions
                    </p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 '>
                    {
                        features.map((data, i) => (
                            <div className='bg-white rounded-2xl border-gray-100 p-6 
               shadow-sm hover:transition-transform duration-300 hover:scale-105 '>
                                <div className='w-12 h-12 rounded-xl bg-[#f4f1ff] text-[#a52cf6] flex 
                    items-center justify-center text-xl mb-5'>
                                    {data.icon}
                                </div>
                                <h3 className='font-semibold text-lg mb-3'>{data.title} </h3>
                                <p className='text-gray-500 text-sm leading-7'>{data.desc}</p>
                            </div>
                        ))
                    }

                </div>

            </section>
        </>
    )
}

export default FeaturesSection
