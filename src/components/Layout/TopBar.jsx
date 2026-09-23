import React from 'react'
import { FaBars, FaBell } from 'react-icons/fa'
// import { } from ''


function TopBar({ title, setIsOpen }) {

    const user = JSON.parse(sessionStorage.getItem("user"));

    return (
        <>
            <div className='w-full bg-white border border-gray-100 rounded-2xl px-4 sm:px=6 py-4 flex items-center justify-between mb-6'>

                <div className='flex item-center gap-4'>
                    <button
                        onClick={() => setIsOpen(true)}
                        className='w-10 h-10 rounded-full border border-gray-100 flex lg:hidden items-center justify-center'>
                        <FaBars size={14} />
                    </button>
                    <h2 className='text-lg sm:text-xl font-semibold'>{title}</h2>
                </div>
                <div className='flex items-center gap-3 sm:gap-4'>
                    <button className='w-10 h-10 rounded-full border border-gray-100 flex lg:hidden items-center justify-center'>
                        <FaBell size={14} />
                    </button>
                    <div className='flex items-center gap-2'>
                        <div className='w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#a52cf6] text-white flex items-center justify-center fot-semibold'>
                            5
                        </div>
                        <span className='text-sm font-semibold hidden sm:block'>{user?.name || ""}</span>
                    </div>
                </div>


            </div>
        </>
    )
}

export default TopBar
