import React from 'react'
import { FaUserCircle } from "react-icons/fa";

function Testimonials() {

    const testimonials =[
        {
            name:"Akshada Patil",
            msg:"Absolutely love it! ❤️ Super easy to use, looks amazing, and makes tracking everything so much simpler."

        },
         {
            name:"Farheen Shaikh",
            msg:"This is honestly so helpful! 🥹 Clean design, smooth experience, and exactly what I needed. Great job!"

        },
         {
            name:"Pornima Dabhekar",
            msg:"Cute, simple, and works perfectly! ✨ Managing my expenses has never been this easy. Keep up the awesome work! 💙"

        },
    ]
    return (
        <>
            <section id='reviews' className='max-w-7xl mx-auto px-6 lg:px-10 pb-20'>
                <div className=' text-center mb-14'>
                    <h2 className='text-3xl md:text-4xl font-bold mb-4'>Loved by users building better financial discipline</h2>
                    <p className='text-gray-500 max-w-2xl mx-auto leading-8'>A smarter experience than spreadsheet , notebooks or traditional tracters
                    </p>
                </div>

                <div className='grid md:grid-cols-3 gap-6'>
                    {
                      testimonials.map((data,i)=>(
                        <div key={i}className='rounded-2xl border border-gray-100  p-7 shadow-sm hover:transition-transform duration-300 hover:scale-105 bg-[#f6f7fb]'>
                            <FaUserCircle className='text-4xl text-gray-400 md-5'/>
                        <p className='text-gray-600 mb-5 leading-8'>{data.msg}</p>
                        <h4 className='font-semibold'>{data.name} </h4>
                        </div>
                                
                      ))  
                    }
                </div>
            </section>
        </>
    )
}

export default Testimonials
