import React from 'react'
import { Link } from 'react-router'

function Header() {
    return (
        <>
            <header className='w-full bg-white border-b border-gray-100 sticky top-0 z-50' >
                <div className='max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between'>
                    <h1 className='text-2xl font-bold text-[#a52cf6]'>Tractora</h1>

                    <nav className='hidden md:flex item-center gap-8 text-sm font-medium text-gray-600'>
                        <a href="#features" className='hover:text-[#a52cf6]'>Features</a>
                        <a href="#howitworks" className='hover:text-[#a52cf6]'>How It Works</a>
                        <a href="#aiadvisor" className='hover:text-[#a52cf6]'>AI Advisor</a>
                        <a href="#reviews" className='hover:text-[#a52cf6]'>Reviews</a>
                    </nav>
                    <div className='flex item-center gap-3'>
                        <Link to ='/login'className='px-5 py-2 border border-gray-200 rounded-xl text-sm font-medium hover:text-[#a52cf6] hover:border-[#a52cf6] hover:bg-[#f1e6f8] transition cursor-pointer'>Login</Link>
                        <Link to = '/register' className='px-5 py-2  bg-[#a52cf6] rounded-xl text-white text-sm font-medium hover:text-[#a52cf6] hover:border-[#a52cf6] hover:bg-[#f1e6f8] transition cursor-pointer'>Get Started</Link>
                    </div>


                </div>
            </header>
        </>
    )
}

export default Header
