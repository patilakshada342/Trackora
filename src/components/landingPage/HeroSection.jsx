import React from 'react'
import { FaChartPie , FaRobot , FaArrowRight} from "react-icons/fa";
import { MdSavings , MdOutlineSupportAgent} from "react-icons/md";
import { TbReportMoneyFilled } from "react-icons/tb";
import { Link } from 'react-router'

function HeroSection() {
    return (
        <>
            <section className='max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24 grid lg:grid-cols-2 gap-14 items-center'>
                <div>
                    <div className='text-sm uppercase tracking-[3px] text-[#a52cf6]'>
                        smart personal finance platform
                    </div>
                    <h2 className='text-4xl md:text-6xl font-bold leading-tight mb-6 text-gray-900'>
                        Track Money Smarter , Save Better with AI.
                    </h2>
                    <p className='text-gray-600 text-lg leading-8 mb-8 max-w-xl'>
                        Track your income, expenses, budgets, and financial goals in one place — with AI-powered insights to help you make smarter financial decisions
                    </p>
                    <div className='flex flex-col sm:flex-row gap-4 mb-10'>
                        <Link to = '/register' className='px-7 py-4  bg-[#a52cf6] rounded-lg text-white text-sm font-medium hover:text-[#a52cf6] hover:border-[#a52cf6] hover:bg-[#f1e6f8] transition cursor-pointer flex items-center gap-4'>Create Free Account <FaArrowRight/></Link>
                        <button className='px-7 py-4 border border-gray-200 rounded-lg text-sm font-medium hover:text-[#a52cf6] hover:border-[#a52cf6] hover:bg-[#f1e6f8] transition cursor-pointer'>Explore Feature</button>
                    </div>

                    <div className='flex fleax-wrap gap-6 text-sm text-gray-500 font-medium'>
                        <span> ✓ Income & Expense Tracker</span>
                        <span>✓ AI-Powered Financial Insights</span>
                        <span>✓ Smart Monthly Reports</span>
                    </div>

                </div>

                <div className='grid grid-cols-2 gap-5'>
                    <div className='bd-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:transition-transform duration-300 hover:scale-105 '>
                        <FaChartPie className='text-[#a52cf6] text-2xl mb-4' />
                        <h3 className='font-semibold text-lg mb-2'>Expense Analytics</h3>
                        <p className='text-gray-500 text-sm'>Understand where your money goes</p>
                    </div>
                    <div className='bd-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:transition-transform duration-300 hover:scale-105 '>
                        <MdSavings className='text-[#a52cf6] text-2xl mb-4' />
                        <h3 className='font-semibold text-lg mb-2'>Saving Saving Planner</h3>
                        <p className='text-gray-500 text-sm'>Turn your goals into achievable plans</p>
                    </div>
                    <div className='bd-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:transition-transform duration-300 hover:scale-105 '>
                        <FaRobot className='text-[#a52cf6] text-2xl mb-4' />
                        <h3 className='font-semibold text-lg mb-2'>AI Financial Insights</h3>
                        <p className='text-gray-500 text-sm'> Make smarter decisions with AI</p>
                    </div>
                    <div className='bd-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:transition-transform duration-300 hover:scale-105 '>
                        <TbReportMoneyFilled  className='text-[#a52cf6] text-2xl mb-4' />
                        <h3 className='font-semibold text-lg mb-2'>Montly Reports</h3>
                        <p className='text-gray-500 text-sm'>See your financial progress at a glance</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HeroSection
