import React, { useState } from 'react';
import { createExpense, updateExpense } from "../../services/expenseApi";
import { toast } from "sonner";
import { getToday } from "../../utils/date";

function ExpenseForm({ expense, onSuccess }) {

    const [category, setCategory] = useState(expense?.category || "");
    const [amount, setAmount] = useState(expense?.amount || "");
    const [date, setDate] = useState(expense?.date ? expense.date.split("T")[0] : getToday()
    );
    const [paymentMethod, setPaymentMethod] = useState(expense?.paymentMethod || "");
    const [notes, setNotes] = useState(expense?.notes || "");


    const handleCreateExpense = async (e) => {
        e.preventDefault();

        try {
            const expenseData = {
                category,
                amount: Number(amount),
                paymentMethod,
                date,
                notes
            };

            if (expense) {
                await updateExpense(expense._id, expenseData);

                toast.success("Expense updated successfully!!");

                if (onSuccess) {
                    onSuccess();
                }
            }
            else {
                await createExpense(expenseData);

                toast.success("Expense added successfully!!")


                setCategory("");
                setAmount("");
                setPaymentMethod("");
                setDate(getToday());
                setNotes("");
            }

            if (onSuccess) {
                onSuccess();
            }

        } catch (error) {
            console.log("Create expense error:", error);
            toast.error(
                expense
                    ? ("Expense could not be updated.")
                    : ("Expense could not be added.")
            )

        }
    };

    return (
        <>
            <div className='bg-white rounded-2xl border border-gray-100 p-6'>
                <h3 className='text-lg font-semibold mb-6'>{expense ? "Edit Expense" : "Expense Title"}</h3>

                <form onSubmit={handleCreateExpense} className='space-y-5'>

                    {/* <label htmlFor="source" className='text-sm font-medium mb-2 block'>Income Source</label> */}

                    <div>
                        <label htmlFor="amount" className='text-sm font-medium mb-2 block'>Amount</label>
                        <input type="number" placeholder="Enter Amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className='w-full border
                                                 border-gray-300 rounded-xl px-4 py-3 outline-none' />
                    </div>


                    <div>
                        <label className='text-sm font-medium mb-2 block'>
                            Expense Category</label>

                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            
                            className='w-full border
                                                 border-gray-300 rounded-xl px-4 py-3 outline-none'
                        >
                            <option value="" disabled>Select Category</option>
                            <option value="Food & Dining">Food & Dining</option>
                            <option value="Shopping">Shopping</option>
                            <option value="Rent">Rent</option>
                            <option value="Subscriptions">Subscriptions</option>

                        </select>
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
                        <label className='text-sm font-medium mb-2 block'>
                            Payment Method
                        </label>

                        <select
                            value={paymentMethod}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className='w-full border border-gray-300 rounded-xl px-3 py-4 outline-none'
                        >
                            <option value="" disabled>Select Payment Method</option>
                            <option value="Cash">Cash</option>
                            <option value="Bank Transfer">Bank Transfer</option>
                            <option value="UPI">UPI</option>
                            <option value="Cheque">Cheque</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="notes" className='text-sm font-medium mb-2 block'>Notes</label>
                        <textarea name="" id="" placeholder='Additional notes...'
                            value={notes}
                            onChange={(e) => setNotes(e.target.value)}
                            className='w-full border border-gray-300 rounded-xl px-4 py-3 outline-noe '></textarea>
                    </div>
                    <button type="submit" className='w-full h-11 justify-center px-7 py-4  bg-[#a52cf6] rounded-lg text-white 
                    text-sm font-medium hover:text-[#a52cf6] hover:border-[#a52cf6] hover:bg-[#f1e6f8]
                                         transition cursor-pointer flex items-center gap-4'>{expense ? "Update Expense" : "Add Expense"}</button>
                </form>
            </div>
        </>
    );
}

export default ExpenseForm;


