import React from 'react'
import { FaArrowUp } from 'react-icons/fa';
import { FaWallet } from "react-icons/fa";
import { FaArrowDown } from 'react-icons/fa6';
import { PiPiggyBankBold } from "react-icons/pi";
import {useState,useEffect} from 'react';
import  {getAllIncomes} from '../../services/incomeApi';
import { getAllExpenses } from '../../services/expenseApi';

function SummaryCard() {

    const[totalIncome,setTotalIncome]=useState(0);
    const[totalExpense,setTotalExpense]=useState(0);

    useEffect (() =>{
        const fetchSummary = async() =>{
            try{
                const incomeData = await getAllIncomes();
                const expenseData = await getAllExpenses();

                const incomes = incomeData.incomes || []; 
                const expenses = expenseData.expenses || [];

                const incomeTotal = incomes.reduce((sum,income) => sum + Number(income.amount),0);
                const expenseTotal = expenses.reduce((sum, expense) => sum + Number(expense.amount),0 );

                setTotalIncome(incomeTotal);
            setTotalExpense(expenseTotal);

            }
            catch(error){
                console.log("Dashboard summary error:",error)
            }
        };

        fetchSummary();
    },[]);

const balance = totalIncome - totalExpense;

    const cards = [
        {
            title: "Total Balance", amount:balance, change: "+8.2% this month",
            icon: <FaWallet />, bg: "bg-[#f4f1ff]", text: "text-[#5b3df5]"
        },
        {
            title: "Total Income", amount:totalIncome, change: "+12.98% this month",
            icon: <FaArrowUp />, bg: "bg-[#dceee3]", text: "text-[#00a63d]"
        },
        {
            title: "Total Expense", amount: totalExpense, change: "+5.7% this month",
            icon: <FaArrowDown />, bg: "bg-[#f4d2dc]", text: "text-[#e70a0a]"
        },
        {
            title: "Total Savings", amount:balance, change: "34% saved",
            icon: <PiPiggyBankBold />, bg: "bg-[#f4f1ff]", text: "text-[#5b3df5]"
        },

    ]

    return (
        <>
            <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6'>
                {
                    cards.map((data, i) => (
                        <div key={i} className='bg-white rounded-2xl border border-gray-100 p-5 
                shadow-sm hover:transition-transform duration-300 hover:scale-105'>

                            <div className='flex items-center justify-between mb-5'>
                                <div>
                                    <p className='text-gray-500 text-sm mb-2'>{data.title}</p>
                                    <h3 className='font-bold text-2xl'>₹{data.amount}</h3>
                                </div>
                                <div className={`w-11 h-11 rounded-xl ${data.bg} ${data.text} flex items-center  justify-center`}>
                                    {data.icon}
                                </div>

                            </div>
                            <p className={`'text-sm font-medium ${data.text}`}>{data.change}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default SummaryCard
