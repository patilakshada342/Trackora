import React from 'react'
import DashboardLayout from '../components/Layout/DashboardLayout'

function Settings() {
  return (
    <>
      <DashboardLayout title='Settings'>

        <div className='space-y-6'>

          <div className='bg-white rounded-2xl border border-gray-100 p-6'>
            <h3 className='text:lg font-semibold mb-6'>Profile Information</h3>
            <div className='grid md:grid-cols-2 gap-5'>

              <div>
                <label className='text-sm font-medium block mb-2'>Full Name</label>
                <input value="AkshadaPatil" type="text" className='w-full border border-gray-100 rounded-2xl px-4 py-3 outline-none' />
              </div>

              <div>
                <label className='text-sm font-medium block mb-2'>Email Address</label>
                <input value="akshada@gmail.com" type="email" className='w-full border border-gray-100 rounded-2xl px-4 py-3 outline-none' />
              </div>

              <div>
                <label className='text-sm font-medium block mb-2'>Monthly Income Goal</label>
                <input value="85000" type="number" className='w-full border border-gray-100 rounded-2xl px-4 py-3 outline-none' />
              </div>

              <div>
                <label className='text-sm font-medium block mb-2'>Monthly Saving Target</label>
                <input value="5000" type="number" className='w-full border border-gray-100 rounded-2xl px-4 py-3 outline-none' />
              </div>




            </div>
          </div>

          <div className='bg-white rounded-2xl border border-gray-100 p-6'>
            <h3 className='text:lg font-semibold mb-6'>Prefrences</h3>
            <div className='grid md:grid-cols-2 gap-5'>

              <div>
                <label className='text-sm font-medium block mb-2'>Currency</label>
                <select name="" id="" className='w-full border border-gray-300 rounded-xl px-3 py-4 outline-none'>
                  <option value="">INR(₹)</option>
                  <option value="">USD($)</option>
                </select>
              </div>

              <div>
                <label className='text-sm font-medium block mb-2'>Theme</label>
                <select name="" id="" className='w-full border border-gray-300 rounded-xl px-3 py-4 outline-none'>
                  <option value="">Light Mode</option>
                  <option value="">Dark Mode</option>
                </select>
              </div>

              <div>
                <label className='text-sm font-medium block mb-2'>Monthly Notification</label>
                <select name="" id="" className='w-full border border-gray-300 rounded-xl px-3 py-4 outline-none'>
                  <option value="">Enabled</option>
                  <option value="">Disabled</option>
                </select>
              </div>
            </div>
          </div>

          <div className='bg-white rounded-2xl border border-gray-100 p-6'>
            <h3 className='text:lg font-semibold mb-6'>Security</h3>
            <div className='grid md:grid-cols-2 gap-5'>

              <div>
                <label className='text-sm font-medium block mb-2'>Change Password</label>
                <input value="*******" type="password" className='w-full border border-gray-100 rounded-2xl px-4 py-3 outline-none' />

              </div>

              <div>
                <label className='text-sm font-medium block mb-2'>Confirm Password</label>
                <input value="5000" type="password" className='w-full border border-gray-100 rounded-2xl px-4 py-3 outline-none' />
              </div>
            </div>
          </div>

<div className='flex  justify-center'>
  <button  className='px-6 py-2.5  bg-[#a52cf6] rounded-lg text-white text-sm 
                        font-medium hover:text-[#a52cf6] hover:border-[#a52cf6] hover:bg-[#f1e6f8]
                         transition cursor-pointer '>
    Save Settings
  </button>
</div>
        </div>
      </DashboardLayout>
    </>
  )
}

export default Settings
