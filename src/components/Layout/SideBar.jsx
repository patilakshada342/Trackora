import React from 'react'
import { NavLink, useNavigate } from 'react-router'
import { MdDashboard } from "react-icons/md";
import { FcMoneyTransfer } from "react-icons/fc";
import { BsGraphDownArrow } from "react-icons/bs";
import { TbCategoryPlus, TbReport } from "react-icons/tb";
import { GoGoal } from "react-icons/go";
import { FaRobot } from "react-icons/fa6";
import { IoMdSettings } from "react-icons/io";
import { FaMoneyBillAlt } from "react-icons/fa";



function SideBar() {
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
            <aside className='w-[250px] bg-white border-r border-gray-100 h-screen fixed top-0 px-5 py-6 hidden lg:block overflow-y-auto'>
                <h1 className='text-2xl font-bold text-[#a52cf6] mb-10'>
                    Trackora
                </h1>
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
                <div className='mt-12 bg-[#f8f7ff] border boredr-[#ddd8ff] rounded-2xl p-4'>
                    <p className='text-sm font-semibold mb-2'>Your AI Financal Assistant</p>
                    <p className='text-xs text-gray-500 mb-4'>Get smart monthly insights amd improve your saving habits</p>
                    <button className='w-full bg-[#a52cf6] text-white py-2 rounded-lg text-sm'>Ask AI Advisor</button>

                </div>
            </aside>
        </>
    )
}

export default SideBar
