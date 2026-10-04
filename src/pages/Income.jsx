import { React, useState, useEffect } from 'react'
import DashboardLayout from '../components/Layout/DashboardLayout'
import { getAllIncomes, createIncome } from "../services/incomeApi";
import { toast } from 'sonner';
import { Link } from "react-router"
import { getToday } from "../utils/date";
import { formatDate } from "../utils/date";
import IncomeForm from '../components/Income/IncomeForm';

function Income() {

    const [incomes, setIncomes] = useState([]);
    const recentIncomes = incomes.slice(0, 3);

    const totalIncome = incomes.reduce((total, income) => {
        return total + Number(income.amount);
    }, 0);

    const totalEntries = incomes.length;

    const highestIncome = incomes.reduce((highest, income) => {
        return Number(income.amount) > Number(highest.amount) ? income : highest;
    }, incomes[0]);



    const fetchIncomes = async () => {
        try {
            const data = await getAllIncomes();
            console.log("Income data:", data);
            setIncomes(data.incomes);
        }
        catch (error) {
    console.log("Income error:", error);
        }
    };

    useEffect(() => {
        fetchIncomes();
    }, []);

    return (
        <>
            <DashboardLayout title={"Add Income"} noScroll = {true}>

                <div className='grid lg:grid-cols-12 gap-6'>

                    <div className='lg:col-span-7'>
                        <IncomeForm onSuccess={fetchIncomes} />
                        
                    </div>

                    <div className='lg:col-span-5 space-y-6'>
                        <div className='bg-white rounded-2xl border border-gray-100 p-6'>
                            <h3 className='text-lg font-semibold mb-6'>Income Summary</h3>

                            <div className='space-y-4'>

                                <div className='flex justify-between border-b border-gray-100 pb-3'>
                                    <span className='text-gray-500'>Total Income</span>
                                    <span className='font-semibold text-green-500'>₹{totalIncome}</span>
                                </div>

                                <div className='flex justify-between border-b border-gray-100 pb-3'>
                                    <span className='text-gray-500'>Highest Source</span>
                                    <span className='font-semibold '>{highestIncome?.source || "NA"}</span>
                                </div>

                                <div className='flex justify-between border-b border-gray-100 pb-3'>
                                    <span className='text-gray-500'>Entries added</span>
                                    <span className='font-semibold '>{totalEntries}</span>
                                </div>
                            </div>
                        </div>
                        <div className='bg-white rounded-2xl border border-gray-100 p-6 mt-6 '>
                            <div className='flex items-center justify-between mb-5'>
                                <h3 className='text-lg font-semibold mb-6'>Recent Income History</h3>
                                <Link to='/allIncomes' className='text-sm text-[#a52cf6] font-medium mb-5'>View All</Link>
                            </div>
                            <div className='space-y-4'>
                                {
                                    recentIncomes.map((item) => (
                                        <div key={item._id} className='flex items-center justify-between border-b
                     border-gray-100 pb-4 last:border-0'>
                                            <div>
                                                <h4 className='font-medium text-sm'>{item.source}</h4>
                                                <p className='text-xs text-gray-500 mt-1'>{formatDate(item.date)}</p>
                                            </div>

                                            <div className='text-right'>
                                                <p className={`font-semibold text-sm text-green-500`}>+ ₹{item.amount}</p>
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

export default Income
