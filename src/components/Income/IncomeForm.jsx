import React, { useState } from 'react';
import { createIncome, updateIncome } from "../../services/incomeApi";
import { toast } from "sonner";
import { getToday } from "../../utils/date";

function IncomeForm({ income, onSuccess }) {

    const [source, setSource] = useState(income?.source || "");
    const [amount, setAmount] = useState(income?.amount || "");
    const [date, setDate] = useState(income?.date ? income.date.split("T")[0] : getToday()
    );
    const [notes, setNotes] = useState(income?.notes || "");
    const [incomes, setIncomes] = useState([]);


    const handleCreateIncome = async (e) => {
        e.preventDefault();

        try {
            const incomeData = {
                source,
                amount: Number(amount),
                date,
                notes
            };

            if (income) {
                await updateIncome(income._id, incomeData);

                toast.success("Income updated successfully!!");

                if (onSuccess) {
                    onSuccess();
                }
            }
            else {
                await createIncome(incomeData);

                const data = await createIncome(incomeData);

                toast.success("Income added successfully!!")

                if (onSuccess) {
                    onSuccess();
                }

                console.log("Income Created data", {
                    style: {
                        color: "#16a34a",
                    },
                });

                setSource("");
                setAmount("");
                setDate(getToday());
                setNotes("");
            }
                //refresh income list 
                // const updatedData = await getAllIncomes();
                // setIncomes(updatedData.incomes);

            } catch (error) {
                //console.log("Create income error:",error);
                toast.error(
                    income
                    ?("Income could not be updated.")
                    :("Income could not be added.")
                )
                
            }
        };

        return (
            <>
                <div className='bg-white rounded-2xl border border-gray-100 p-6'>
                    <h3 className='text-lg font-semibold mb-6'>{income ? "Edit Income" : "Income Title"}</h3>
                    <form onSubmit={handleCreateIncome} className='space-y-5'>
                        <div>
                            <label htmlFor="source" className='text-sm font-medium mb-2 block'>Income Source</label>
                            <input type="text"
                                placeholder="Salary/Freelancing/Business"
                                value={source}
                                onChange={(e) => setSource(e.target.value)}
                                className='w-full border
                                                 border-gray-300 rounded-xl px-4 py-3 outline-none' />
                        </div>

                        <div>
                            <label htmlFor="amount" className='text-sm font-medium mb-2 block'>Amount</label>
                            <input type="number" placeholder="Enter Amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className='w-full border
                                                 border-gray-300 rounded-xl px-4 py-3 outline-none' />
                        </div>

                        <div>
                            <label htmlFor="date" className='text-sm font-medium mb-2 block'>Date</label>
                            <input type="date"
                                placeholder="Enter Date"
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                className='w-full border
                                                 border-gray-300 rounded-xl px-4 py-3 outline-none' />
                        </div>

                        <div>
                            <label htmlFor="notes" className='text-sm font-medium mb-2 block'>Notes</label>
                            <textarea name="" id="" placeholder='Additional notes...'
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                className='w-full border border-gray-300 rounded-xl px-4 py-3 outline-noe '></textarea>
                        </div>
                        <button type="submit" className='w-full h-11 justify-center px-7 py-4  bg-[#a52cf6] rounded-lg text-white text-sm font-medium hover:text-[#a52cf6] hover:border-[#a52cf6] hover:bg-[#f1e6f8]
                                         transition cursor-pointer flex items-center gap-4'>{income ? "Update Income" : "Add Income"}</button>
                    </form>
                </div>
            </>
        )
    }

    export default IncomeForm;

