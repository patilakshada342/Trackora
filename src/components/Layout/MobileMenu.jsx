import React from 'react'
import { NavLink, useNavigate } from 'react-router'
import { FaTimes } from 'react-icons/fa'
import { MdDashboard } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";
import { BsGraphDownArrow } from "react-icons/bs";
import { TbCategoryPlus, TbReport } from "react-icons/tb";
import { GoGoal } from "react-icons/go";
import { FaRobot } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaMoneyBillAlt } from "react-icons/fa";

function MobileMenu({isOpen, setIsOpen}) {
    const navigate = useNavigate()

    const menus = [
        { icon: <MdDashboard />, path: "/dashboard", name: "Dashboard" },
        { icon: <FaMoneyBillAlt />, path: "/income", name: "Income" },
        { icon: <BsGraphDownArrow />, path: "/expense", name: "Expense" },
        { icon: <TbCategoryPlus />, path: "/categories", name: "Categories" },
        { icon: <GoGoal />, path: "/budget", name: "Budget" },
        { icon: <TbReport />, path: "/report", name: "Report" },
        { icon: <FaRobot />, path: "/aiAdvisor", name: "AI Advisor" },
        { icon: <IoMdSettings />, path: "/settings", name: "Settings" }
    ]

    return (
        <>
            <div className={`fixed inset-0 bg-black/40 z-40 transition ${isOpen ? 'block' : 'hidden'}`}
                onClick={() => setIsOpen(false)}
                >
                <aside className={`fixed top-0 left-0 w-[260px] h-screen bg-white z-50 p-5 
            overflow-y-auto transition-all duration-300 ${isOpen ? 'translate-x-0 ' : '-translate-x-full'}`}>

                    <div className='flex items-center justify-between mb-8'>
                        <h1 className='text-2xl font-bold text-[#a52cf6] mb-10'>
                            Trackora
                        </h1>
                        <button
                            onClick={() => setIsOpen(false)}>
                            <FaTimes size={14} />
                        </button>
                    </div>
                    <div className='flex flex-col gap-2'>
                        {
                            menus.map((data, i) => (
                                <NavLink
                                    key={i}
                                    to={data.path}
                                    className={({ isActive }) => `
    flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${isActive ? 'bg-[#a52cf6] text-white' : 'text-gray-600 hover:bg-gray-100'}
    `}>
                                    {data.icon} {data.name}
                                </NavLink>
                            ))
                        }
                    </div>
                </aside>
            </div>
        </>
    )
}

export default MobileMenu
