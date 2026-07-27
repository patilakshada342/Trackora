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
            desc: 'Maintain a complete record os all your salary , freelancing ,bills , shopping and daily spending transactions'
        },
        {
            icon: <FaRobot />,
            title: 'AI Financial Advisory',
            desc: 'Receive smart monthly analysis,saving opprotunities, money waste alearts and AI generated budget suggestions'
        },
        {
            icon: <FaChartLine />,
            title: 'Brdgrt and category & Insights',
            desc: 'understand where your money goes with category wise spending , links , overspending , warnings and montly control'
        },
        {
            icon: <GoGoal />,
            title: 'financial goal tracing',
            desc: 'create saving goals for emergency funds,gadgets vacations or investments and monitor your progress vasually'
        },
        {
            icon: <TbReportMoneyFilled />,
            title: 'professional monthly reports',
            desc: 'generate financial summaries with total income total expenses , net savings and monthly behaviour observations'
        },
        {
            icon: <RiDashboard2Line />,
            title: 'unified financial Dashboard',
            desc: 'eberything from transactions stays in one place '
        }
    ]
    return (
        <>
            <section id='features' className='max-w-7xl max-auto px-6 lg:px-10 pb-20'>

                <div className='text-center mb-14'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-4'>Everything you need for smart money control</h2>
                    <p className='text-gray-500 max-w-2xl mx-auto leading-8'>Tracora is the best app created up till now enyou it use it
                        hiiii kuch bhi likh sakhte hai yaha pe ..
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
