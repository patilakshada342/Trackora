import React from 'react'
import { FaBars, FaBell } from 'react-icons/fa'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';


function TopBar({ title, setIsOpen }) {

    const user = JSON.parse(sessionStorage.getItem("user"));
    const profileLetter = user?.name?.charAt(0).toUpperCase();
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const navigate = useNavigate();


    const handleLogout = () => {
        sessionStorage.clear();
        navigate("/login");
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest("profile-menu")) {
                setShowProfileMenu(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);


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
                    <div className='relative profile-menu'>

                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowProfileMenu(!showProfileMenu)}
                            }
                            className='flex items-center gap-2 cursor-pointer'
                        >
                            <div className='w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#a52cf6] text-white flex items-center justify-center font-semibold'>
                                {profileLetter}
                            </div>

                            <span className='text-sm font-semibold hidden sm:block'>
                                {user?.name || ""}
                            </span>
                        </div>

                        {showProfileMenu && (
                            <div className='absolute right-0 top-12 w-32 bg-white border border-gray-100 rounded-xl shadow-lg p-2 z-50'>

                                <button
                                    onClick={handleLogout}
                                    className='w-full text-left px-3 py-2 border border-gray-50 rounded-lg text-sm text-black-500 hover:bg-gray-100 hover:border-[#a52cf6]'
                                >
                                    Logout
                                </button>

                            </div>
                        )}

                    </div>
                </div>


            </div>
        </>
    )
}

export default TopBar
