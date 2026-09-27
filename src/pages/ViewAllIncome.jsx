import React, { useState, useEffect } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { getAllIncomes, createIncome } from "../services/incomeApi";
import { formatDate } from '../utils/date';
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import IncomeForm from '../components/Income/IncomeForm';
import { MdClose } from "react-icons/md";

function ViewAllIncome() {

    const [incomes, setIncomes] = useState([]);
    const [selectedIncome, setSelectedIncome] = useState(null);

    useEffect(() => {
        const fetchIncomes = async () => {
            try {
                const data = await getAllIncomes();
                //console.log("Income data:", data);
                setIncomes(data.incomes);
            }
            catch (error) {
                console.log("Income error:", error);
            }
        };
        fetchIncomes();
    }, []);

    return (
        <DashboardLayout title="All Incomes">

            <div className="w-full  items-center justify-between mb-6">
                <div>

                    <div className="bg-white w-full rounded-2xl border border-gray-100 overflow-hidden">
                        {
                            selectedIncome && (
                                <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
                                    <div className='bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative'>
                                        <button
                                            onClick={() => setSelectedIncome(null)}
                                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer">
                                            <MdClose size={24} />
                                        </button>
                                        <IncomeForm income={selectedIncome}
                                            onSuccess={() => setSelectedIncome(null)} />
                                    </div>
                                </div>


                            )
                        }


                        <table className='w-full'>
                            <thead className='bg-[#a52cf6]'>
                                <tr>
                                    <th className='text-left px-6 py-4 text-sm font-medium text-white'>Source</th>
                                    <th className='text-left px-6 py-4 text-sm font-medium text-white'>Amount</th>
                                    <th className='text-left px-6 py-4 text-sm font-medium text-white'>Date</th>
                                    <th className='text-left px-6 py-4 text-sm font-medium text-white'>Notes</th>
                                    <th className='text-left px-6 py-4 text-sm font-medium text-white'>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                {incomes.map((income) => (
                                    <tr key={income._id} className='border-t border-gray-100'>
                                        <td className='px-6 py-4'>{income.source}</td>
                                        <td className='px-6 py-4'>₹{income.amount}</td>
                                        <td className='px-6 py-4'>{formatDate(income.date)}</td>
                                        <td className='px-6 py-4 text-gray-500'>{income.notes || "-"}</td>
                                        <td className='px-6 py-4'>
                                            <button onClick={() => setSelectedIncome(income)}
                                            title="Edit"
                                                className='text-gray-700 mr-4 hover:text-[#a52cf6]'><MdModeEdit /></button>
                                            <button title = "Delete" className='text-gray-700 mr-4 hover:text-red-600'><MdDelete /></button>
                                        </td>
                                    </tr>

                                )
                                )}
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>

        </DashboardLayout>
    );
}

export default ViewAllIncome;