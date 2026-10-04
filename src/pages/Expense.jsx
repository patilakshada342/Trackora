import React ,{useState, useEffect} from 'react'
import DashboardLayout from '../components/Layout/DashboardLayout'
import ExpenseForm from '../components/Expense/ExpenseForm';
import { getAllExpenses } from '../services/expenseApi';
import { Link } from "react-router"
import { getToday } from "../utils/date";
import { formatDate } from "../utils/date";


function Expense() {

const [expenses,setExpenses] = useState([]);
const recentExpenses = expenses.slice(0,3);

const totalExpense = expenses.reduce((total, expense) => {
        return total + Number(expense.amount);
    }, 0);

    const totalEntries = expenses.length;

    const highestExpense = expenses.reduce((highest, expense) => {
        return Number(expense.amount) > Number(highest.amount) ? expense : highest;
    }, expenses[0]);

const fetchExpenses = async () =>{
    try{
        const data = await getAllExpenses();

        console.log("expenses api res",data);
        setExpenses(data.expenses || []);
    }catch(error){
        console.log("expense api error",error);
    }
}

useEffect(() =>{
    fetchExpenses();
},[]); //empty dependency [] ; runs only once when the component loads


    return (
        <>
            <DashboardLayout title={"Add Expense"} noScroll={false} >

                <div className='grid lg:grid-cols-12 gap-6'>

                    <div className='lg:col-span-7'>
                        <ExpenseForm onSuccess={fetchExpenses}/>
                    </div>

                     <div className='lg:col-span-5 space-y-6'>
                        <div className='bg-white rounded-2xl border border-gray-100 p-6'>
                            <h3 className='text-lg font-semibold mb-6'>Expense Summary</h3>

                            <div className='space-y-4'>

                                <div className='flex justify-between border-b border-gray-100 pb-3'>
                                    <span className='text-gray-500'>Total Expense</span>
                                    <span className='font-semibold text-red-500'>₹{totalExpense}</span>
                                </div>

                                <div className='flex justify-between border-b border-gray-100 pb-3'>
                                    <span className='text-gray-500'>Top Category</span>
                                    <span className='font-semibold '>{highestExpense?.category?.name || "NA"}</span>
                                </div>

                                <div className='flex justify-between border-b border-gray-100 pb-3'>
                                    <span className='text-gray-500'>Entries added</span>
                                    <span className='font-semibold '>{totalEntries}</span>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-2xl border border-gray-100 p-6 mt-6 '>
                            <div className='flex items-center justify-between mb-5'>
                                <h3 className='text-lg font-semibold mb-6'>Recent Expense History</h3>
                                <Link to='/allExpenses' className='text-sm text-[#a52cf6] font-medium mb-5'>View All</Link>
                            </div>
                            <div className='space-y-4'>
                                {
                                    recentExpenses.map((item) => (
                                        <div className='flex items-center justify-between border-b
                     border-gray-100 pb-4 last: border-0'>
                                            <div>
                                                <h4 className='font-medium text-sm'>{item.category?.name || "Expense"}</h4>
                                                <p className='text-xs text-gray-500 mt-1'>{new Date(item.date).toLocaleDateString()} · {item.paymentMethod}</p>
                                            </div>

                                            <div className='text-right'>
                                                <p className={`font-semibold text-sm text-red-500`}>+ ₹{Number(item.amount).toLocaleString()}</p>
                                            </div>
                                        </div>
                                    ))
                                }


                            </div>
                        </div>
                    </div> 
                </div>
            </DashboardLayout >
        </>
    )
}

export default Expense
