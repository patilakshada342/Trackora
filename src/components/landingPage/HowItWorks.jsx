import React from 'react'

function HowItWorks() {

    const steps = [
        {
            no: "01",
            title: "create your account",
            desc: "Register,login and set your monthly financial target to login structured montly tracking"
        },
        {
            no: "02",
            title: "Add income and expense daily",
            desc: "Record of all transactions in categories like food ,shopping etc"
        },
        {
            no: "03",
            title: "Monitor dashboard and reports",
            desc: "use charts,monthly reports.budget planners and category analysis to understand your habits"
        },
        {
            no: "04",
            title: "use AI to improve savings",
            desc: "get ai based waste deteactions,smart recommendations and ask personlized financial advices anytime"
        }
    ]
    return (
        <>
            <section id='howitworks' className='max-w-7xl max-auto px-6 lg:px-10 pb-20'>

                <div className='text-center mb-14'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-4'>How Trackora Works</h2>
                    <p className='text-gray-500 max-w-2xl mx-auto leading-8'>
                        A simple but powerfull workflows that transforms random monthly spending into organized financial discipline
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
