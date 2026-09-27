import React, { useState, useEffect } from 'react';
import DashboardLayout from '../components/Layout/DashboardLayout';
import { getAllIncomes, deleteIncome } from "../services/incomeApi";
import { formatDate } from '../utils/date';
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import IncomeForm from '../components/Income/IncomeForm';
import { MdClose } from "react-icons/md";
import { toast } from 'sonner';

function ViewAllIncome() {

    const [incomes, setIncomes] = useState([]);
    const [selectedIncome, setSelectedIncome] = useState(null);
    const [selectedDeleteIncome, setSelectedDeleteIncome] = useState(null);

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
    useEffect(() => {
        fetchIncomes();
    }, []);

    const handleDeleteIncome = async () => {
        try {
            await deleteIncome(selectedDeleteIncome._id);
            toast.success("Income deleted successfully!");

            await fetchIncomes();
            setSelectedDeleteIncome(null);
        }
        catch (error) {
            console.log("Delete Income error :", error);
            toast.error("Income could not be deleted");
        }
    };

    return (
        <DashboardLayout title="All Incomes">

            <div className="w-full  items-center justify-between mb-6">
                <div>

                    <div className="bg-white w-full rounded-2xl border border-gray-100 overflow-hidden">

                        {/* edit modal */}
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
                                            onSuccess={() => {
                                                fetchIncomes();
                                                setSelectedIncome(null)
                                            }} />
                                    </div>
                                </div>


                            )
                        }

                        {/* delete confirmation box modal */}
                        {
                            selectedDeleteIncome && (
                                <div className='fixed inset-0 bg-black/40 flex items-center justify-center z-50'>
                                    <div className='bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative'>

                                        {/* closebutton */}
                                        <button
                                            onClick={() => setSelectedDeleteIncome(null)}
                                            className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 cursor-pointer">
                                            <MdClose size={24} />
                                        </button>

                                        <div className='bg-white rounded-2xl border border-gray-100 p-6'>
                                            <h3 className='text-lg font-semibold mb-6'>Delete Income</h3>

                                            <p className='text-gray-500 mb-4 text-center'>Are you sure you want to delete income ?</p>

                                            <div className='flex justify-center gap-3'>

                                                <button onClick={handleDeleteIncome} className='w-20 h-11 px-7 py-4 bg-[#a52cf6] rounded-lg text-white 
                                                text-sm font-medium hover:text-[#a52cf6] hover:border-[#a52cf6] hover:bg-[#f1e6f8]
                                         transition cursor-pointer flex items-center gap-4'>Yes</button>

                                                <button onClick={() => setSelectedDeleteIncome(null)} className='px-7 py-4 w-20 h-11  bg-[#a52cf6] rounded-lg text-white text-sm 
                                         font-medium hover:text-[#a52cf6] hover:border-[#a52cf6] hover:bg-[#f1e6f8]
                                         transition cursor-pointer flex items-center gap-4'>No</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            )
                        }

                        <div className='max-h-[500px] overflow-y-auto'>

                       
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
                                    <tr key={income._id} className='border-t border-gray-100 hover:bg-gray-100 transition'>
                                        <td className='px-6 py-4'>{income.source}</td>
                                        <td className='px-6 py-4'>₹{income.amount}</td>
                                        <td className='px-6 py-4'>{formatDate(income.date)}</td>
                                        <td className='px-6 py-4 text-gray-500'>{income.notes || "-"}</td>
                                        <td className='px-6 py-4'>
                                            <button onClick={() => setSelectedIncome(income)}
                                                title="Edit"
                                                className='text-gray-700 mr-4 hover:text-[#a52cf6]'><MdModeEdit /></button>
                                            <button onClick={() => setSelectedDeleteIncome(income)}
                                                title="Delete" className='text-gray-700 mr-4 hover:text-red-600'><MdDelete /></button>
                                        </td>
                                    </tr>

                                )
                                )}
                            </tbody>
                        </table>
 </div>
                    </div>

                </div>
            </div>

        </DashboardLayout>
    );
}

export default ViewAllIncome;