import { React, useState, useEffect } from 'react'
import DashboardLayout from '../components/Layout/DashboardLayout'
import { getAllIncomes, createIncome } from "../services/incomeApi";
import { toast } from 'sonner';
import {Link} from "react-router"
import {getToday} from "../utils/date";
import { formatDate } from "../utils/date";

function Income() {

    const [source, setSource] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState(getToday());
    const [notes, setNotes] = useState('');
    const [incomes, setIncomes] = useState([]);

    const totalIncome = incomes.reduce((total,income) =>{
        return total + Number(income.amount);
    },0);

    const totalEntries = incomes.length;

    const highestIncome =incomes.reduce((highest, income) =>{
        return Number(income.amount) > Number(highest.amount) ? income :highest ;
    },incomes[0]);


    const handleCreateIncome =async(e) =>{
        e.preventDefault();

        try{
            const incomeData ={
                source,
                amount:Number(amount),
                date,
                notes
            }

            const data=await createIncome(incomeData);

            toast.success("Income added successfully!!")

            console.log("Income Created data",{
                style:{
                    color:"#16a34a",
                },
            });

            setSource("");
            setAmount("");
            setDate(getToday());
            setNotes("");

            //refresh income list 
            const updatedData = await getAllIncomes();
            setIncomes(updatedData.incomes);
        }catch(error){
            console.log("Create income error:",error);
            toast.error("Income could not be added.")
        }
    };


    useEffect(() => {
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
        fetchIncomes();
    }, []);

    return (
        <>
            <DashboardLayout title={"Add Income"}>

                <div className='grid lg:grid-cols-12 gap-6'>

                    <div className='lg:col-span-7'>
                        <div className='bg-white rounded-2xl border border-gray-100 p-6'>
                            <h3 className='text-lg font-semibold mb-6'>Income Title</h3>
                            <form  onSubmit={handleCreateIncome} className='space-y-5'>
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
                                    value ={amount} 
                                    onChange={(e) =>setAmount(e.target.value)}
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

                                {/* <div>
                                    <label htmlFor="" className='text-sm font-medium mb-2 block'>Payment Method</label>
                                    <select name="" id="" className='w-full border border-gray-300 rounded-xl px-3 py-4 outline-none'>
                                        <option value="">Cash</option>
                                        <option value="">Bank Transfer</option>
                                        <option value="">UPI</option>
                                        <option value="">Cheque</option>
                                    </select>
                                </div> */}

                                <div>
                                    <label htmlFor="notes" className='text-sm font-medium mb-2 block'>Notes</label>
                                    <textarea name="" id="" placeholder='Additional notes...'
                                    value={notes}
                                    onChange={(e) =>setNotes(e.target.value)}
                                        className='w-full border border-gray-300 rounded-xl px-4 py-3 outline-noe '></textarea>
                                </div>
                                <button type="submit" className='w-full h-11 justify-center px-7 py-4  bg-[#a52cf6] rounded-lg text-white text-sm font-medium hover:text-[#a52cf6] hover:border-[#a52cf6] hover:bg-[#f1e6f8]
                                         transition cursor-pointer flex items-center gap-4'>Save Income</button>
                            </form>
                        </div>
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
                                <Link to ='/allIncomes' className='text-sm text-[#a52cf6] font-medium'>View All</Link>
                            </div>
                            <div className='space-y-4'>
                                {
                                    incomes.map((item) => (
                                        <div key={item._id} className='flex items-center justify-between border-b
                     border-gray-100 pb-4 last: border-0'>
                                            <div>
                                                <h4 className='font-medium text-sm'>{item.source}</h4>
                                                <p className='text-sx text-gray-500 mt-1'>{formatDate(item.date)}</p>
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
