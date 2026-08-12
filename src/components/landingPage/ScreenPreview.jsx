import React from 'react'

function ScreenPreview() {
    const previews = [
        {
            title: "Unified Dashboard",
            desc: "View your balance, expenses, top categories, and key insights in one place",
            image: "/trackoradashboard.jpeg"
        },
        {
            title: "AI Financial Advisory",
            desc: "Get personalized spending analysis, waste detection, and smart saving suggestions",
            image: "/financialAdvisory.jpeg"
        },
        {
            title: "AI Chat Assistant",
            desc: "Ask questions about budgeting, subscriptions, savings, and money management",
            image: "/trackorachatAI.jpeg"
        }
    ]
    return (
        <>
            <section className='max-w-7xl mx-auto px-6 lg:px-10 pb-20'>
                <div className=' text-center mb-14'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-4'>Built as a Complete Personal Finance System</h2>
                    <p className='text-gray-500 max-w-2xl mx-auto leading-8'>Manage your income, expenses, budgets, savings goals, reports, and AI insights from one smooth and responsive dashboard
                    </p>
                </div>
                <div className='grid lg:grid-cols-3 gap-6'>
                    {
                        previews.map((data, i) => (
                            <div key={i} className='rounded-2xl border border-gray-100  p-7 shadow-sm hover:transition-transform duration-300 hover:scale-105 bg-[#f6f7fb]'>
                                <div className='h-44 rounded-xl bg-white border mb-6 flex items-center justify-center text-gray-400 text-sm overflow-hidden'>
                                    <img src={data.image} alt="" className="w-full h-full object-contain" />
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

export default ScreenPreview
