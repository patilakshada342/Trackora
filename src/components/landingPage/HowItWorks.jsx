import React from 'react'

function HowItWorks() {

    const steps = [
        {
            no: "01",
            title: "Create Your Account",
            desc: "Register and log in to Trackora, then set up your financial preferences and monthly goals to get started"
        },
        {
            no: "02",
            title: "Add Income and Expense Daily",
            desc: "Record your daily income and expenses and organize transactions into categories such as food, shopping, bills, travel, and more"
        },
        {
            no: "03",
            title: "Monitor Your Finances",
            desc: "Use your dashboard, charts, budgets, reports, and category-wise analysis to understand your spending patterns and financial habits"
        },
        {
            no: "04",
            title: "Improve Your Financial Habits with AI",
            desc: "Get AI-powered spending insights, money-waste alerts, saving suggestions, and personalized financial guidance to make smarter decisions"
        }
    ]
    return (
        <>
            <section id='howitworks' className='max-w-7xl mx-auto px-6 lg:px-10 pb-20'>

                <div className='text-center mb-14'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-4'>How Trackora Works</h2>
                    <p className='text-gray-500 max-w-2xl mx-auto leading-8'>
                        A simple yet powerful workflow that turns everyday spending into organized financial management
                    </p>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-6 '>

                    {
                        steps.map((data, i) => (
                            <div className='rounded-2xl border border-gray-100  p-7 shadow-sm hover:transition-transform duration-300 hover:scale-105 bg-[#f6f7fb]'>
                                <span className='text-3xl font-bold text-[#a52cf6]'>{data.no}</span>
                                <h3 className='font-semibold text-lg mt-4 mb-3'>{data.title} </h3>
                                <p className='text-gray-500 text-sm leading-7'>{data.desc}</p>

                            </div>
                        ))
                    }
                    
                </div>

            </section>
        </>
    )
}

export default HowItWorks
