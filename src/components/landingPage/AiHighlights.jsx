import React from 'react'
import { FaArrowRight, FaRobot } from 'react-icons/fa'

function AiHighlights() {

    const points = [
        "Ai scans montly expenses and finds usual spending patterns",
        "Detects subscriptions , impulse shopping and recurring money leaks ",
        "Builds a practical category wise budget recommendation",
        " lets users directly chat ask personalised financial questions"
    ]
    return (
        <>
            <section id='aiadvisor' className='max-w-7xl mx-auto px-6 lg:px-10 pb-20'>

                <div className='grid lg:grid-cols-2 gap-12 items-center'>
                    <div>
                        <div className='w-12 h-12 rounded-xl bg-[#f4f1ff] text-[#a52cf6] flex 
                    items-center justify-center text-xl mb-5'>
                            <FaRobot />
                        </div>
                        <div className=' mb-14'>
                            <h2 className='text-3xl md:text-4xl font-bold mb-4'>Not Just an Expense Tracker - A Real AI Financial Assistant</h2>
                            <p className='text-gray-500 max-w-2xl mx-auto leading-8'>Tracora Ai continously analyzes your financial behavoiur and gives practical money managemen suggestion instaed of genric charts alone.
                            </p>
                        </div>

                        <div className="space-y-4 mb-8">
                            {
                                points.map((data, i) => (
                                    <div key={i} className='bg-white border border-gray-100 rounded-xl p-4 text-sm text-gray-700'>
                                        {data}
                                    </div>
                                ))
                            }
                        </div>
                        <button className='px-7 py-4  bg-[#a52cf6] rounded-lg text-white text-sm font-medium hover:text-[#a52cf6] hover:border-[#a52cf6] hover:bg-[#f1e6f8] transition cursor-pointer flex items-center gap-4'>Experience AI Financial Planning <FaArrowRight/></button>

                    </div>
                    <div className='grid grid-cols-2 gap-5'>
                                        <div className='bd-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:transition-transform duration-300 hover:scale-105 '>
                                            <h3 className='font-semibold text-lg mb-2'>AI spending analysis</h3>
                                            <p className='text-gray-500 text-sm'>AI identifies categories , expenses and unstable spending patterns </p>
                                        </div>
                                        <div className='bd-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:transition-transform duration-300 hover:scale-105 '>
                                            <h3 className='font-semibold text-lg mb-2'>Money waste detections</h3>
                                            <p className='text-gray-500 text-sm'>Recurring subscription and hidden small leakages are automatically highlighted</p>
                                        </div>
                                        <div className='bd-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:transition-transform duration-300 hover:scale-105 '>
                                            <h3 className='font-semibold text-lg mb-2'>Budget recommendation</h3>
                                            <p className='text-gray-500 text-sm'>AI created a saler monthly allocation model based on real usage behaviour </p>
                                        </div>
                                        <div className='bd-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:transition-transform duration-300 hover:scale-105 '>
                                            <h3 className='font-semibold text-lg mb-2'>AI chat advisor</h3>
                                            <p className='text-gray-500 text-sm'>Chat with ai </p>
                                        </div>
                                    </div>
                </div>
            </section>
        </>
    )
}

export default AiHighlights
