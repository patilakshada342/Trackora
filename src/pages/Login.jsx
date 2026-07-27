import React from 'react'
import { Link } from 'react-router'

function Login() {
  return (
    <>
      <div className='min-h-screen bg-[#f6f7fb] flex items-center justify-center px-5 py-10'>
        <div className='max-w-6xl w-full grid lg:grid-cols-2 gap-10 items-center'>

          <div className='hidden lg:block'>
            <h1 className='text-5xl leading-tight mb-6 font-bold'>Manage Every Expense with complete confidence</h1>
            <p className='text-gray-500 text-lg leading-8 max-w-xl'>Access your smart dashboard , track all transactions , view monthly reports and get Ai-powered saving insights in one place</p>
          </div>

          <div className='max-w-md w-full mx-auto'>
            <div className='w-full bg-white border border-gray-100 rounded-2xl p-8 shadow-sm'>
              <h2 className='text-3xl font-bold md-2'>Welcome to Trackora</h2>
              <p className='text-gray-500 text-lg leading-8 max-w-xl mb-8'>Login to access your financial dashboard</p>

              <form action="" className='space-y-5'>
                <label htmlFor="" className='text-sm font-medium mb-2'>Email Address</label>
                <input type="email" placeholder="Enter your email" className='w-full border border-gray-300 rounded-xl px-3 py-3 outline-none' />
                <label htmlFor="">Password</label>
                <input type="password" placeholder="Enter your password" className='w-full border border-gray-300 rounded-xl px-3 py-3 outline-none' />
                                        <button className='w-full h-11 justify-center px-7 py-4  bg-[#a52cf6] rounded-lg text-white text-sm font-medium hover:text-[#a52cf6] hover:border-[#a52cf6] hover:bg-[#f1e6f8] transition cursor-pointer flex items-center gap-4'>Login Account</button>
                                        <p className='text-sm text-gray=500 mt-6 text-center'>Don't have an account? <Link to ='/register' className='text-[#a52cf6] font-medium'>Register</Link></p>
                
              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Login
