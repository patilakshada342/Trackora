import React from 'react'
import {useState,useEffect} from 'react';
import  {getAllIncomes} from '../../services/incomeApi';
import { getAllExpenses } from '../../services/expenseApi';
import { formatDate } from '../../utils/date';


function RecentTransactions() {

const [transactions,setTransactions]=useState([]);

useEffect(() => {
    const fetchTransactions = async () => {
        try {
            const incomeData = await getAllIncomes();
            const expenseData = await getAllExpenses();

            const incomes = incomeData.incomes || [];
            const expenses = expenseData.expenses || [];

            const incomeTransactions = incomes.map((income) => ({
                title: income.source,
                category: "Income",
                amount: income.amount,
                type: "credit",
                date: income.date
            }));

            const expenseTransactions = expenses.map((expense) => ({
                title: expense.category?.name,
                category: "Expense",
                amount: expense.amount,
                type: "expense",
                date: expense.date
            }));

            const allTransactions = [
                ...incomeTransactions,
                ...expenseTransactions
            ];

            allTransactions.sort(
                (a, b) => new Date(b.date) - new Date(a.date)
            );

            setTransactions(allTransactions.slice(0, 6));

        } catch (error) {
            console.log("Recent transactions error:", error);
        }
    };

    fetchTransactions();
}, []);



    return (
        <>
            <div className='bg-white rounded-2xl border border-gray-100 p-5 h-full'>
                <div className='flex items-center justify-between mb-5'>
                    <h3 className='font-semibold '>Recent Transaction </h3>
                    <p className='text-sm text-[#a52cf6] font-medium'>View All</p>
                </div>
                <div className='space-y-4'>
                    {
                        transactions.map((item, index) => (
                            <div className='flex items-center justify-between border-b
                     border-gray-100 pb-4 last: border-0'>
                                <div>
                                    <h4 className='font-medium text-sm'>{item.title}</h4>
                                    <p className='text-sx text-gray-500 mt-1'>{item.category}</p>
                                </div>

                                <div className='text-right'>
                                    <p className={`font-semibold text-sm ${item.type == 'credit' ? 
                                    'text-green-600' : 'text-red-500'}`}>{item.type == 'credit' ? '+' : '-'} ₹{item.amount}</p>
                                    <p className='text-sx text-gray-500 mt-1'>{formatDate(item.date)}</p>
                                </div>
                            </div>
                        ))
                    }


                </div>
            </div>
        </>
    )
}

export default RecentTransactions
