import React, { useState, useEffect } from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { getAllExpenses } from '../../services/expenseApi';


function ExpenseChart() {
    const [data, setData] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);


    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const expenseData = await getAllExpenses();
                const expenses = expenseData.expenses || [];

                const now = new Date();

                const currentMonthExpenses = expenses.filter((expense) => {
                    const expenseDate = new Date(expense.date);

                    return (
                        expenseDate.getMonth() === now.getMonth() &&
                        expenseDate.getFullYear() === now.getFullYear()
                    );
                });

                const categoryTotals = {};

                currentMonthExpenses.forEach((expense) => {
                    const categoryName =
                        expense.category?.name || "Uncategorized";

                    categoryTotals[categoryName] =
                        (categoryTotals[categoryName] || 0) +
                        Number(expense.amount);
                });

                const chartData = Object.entries(categoryTotals).map(
    ([name, value]) => ({
        name,
        value
    })
);

chartData.sort((a, b) => b.value - a.value);

setData(chartData);

            } catch (error) {
                console.log("Expense chart error:", error);
            }
        };

        fetchExpenses();
    }, []);



    const total = data.reduce((sum, item) => sum + item.value, 0)

    const colors = [
        "#5B3DF5",
        "#7560F7",
        "#8F83F9",
        "#AAA5FB",
        "#C5C1FD",
        "#E0DFFE"
    ];


    return (
        <>
            <div className='bg-white rounded-2xl border border-gray-100 p-5 h-full'>
                <h3 className='font-semibold mb-5'>
                    {new Date().toLocaleString("en-us",{month:"long"})}'s Expense Overview
                </h3>
                <div className='w-full h-[220px] relative'>
                    <ResponsiveContainer width="100%" height="100%">

                        <PieChart width={250} height={250}>
                            <Pie
                                data={data}
                                innerRadius={60}
                                outerRadius={85}
                                paddingAngle={3}
                                dataKey={'value'}
                                onMouseEnter={(_, index) => setActiveIndex(index)}
                                onMouseLeave={() => setActiveIndex(null)}
                            >
                                {
                                    data.map((entry, index) => (
                                        <Cell
                                            key={`cell-${index}`}
                                            fill={colors[index % colors.length]}
                                            outerRadius={activeIndex === index ? 92 : 85}
                                        />))
                                }
                            </Pie>
                            <Tooltip
    formatter={(value) => [`₹${Number(value).toLocaleString()}`, "Expense"]}
    labelFormatter={(label) => label}
    contentStyle={{
        borderRadius: "12px",
        border: "1px solid #eee",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)"
    }}
/>
                        </PieChart>
                    </ResponsiveContainer>
                    <div className='absolute inset-0 flex flex-col items-center justify-center pointer-events-none'>
                        <p className='text-xs text-gray-500'>Total Expense</p>
                        <h4 className='font-bold text-lg'>₹{total.toLocaleString()}</h4>
                    </div>
                </div>
                <div className='space-y-3 mt-2'>
                    {
                        data.map((item, index) => (
                            <div className='flex items-center justify-between text-sm'>
                                <div className='flex items-center justify-center gap-3'>
                                    <span className='w-3 h-3 rounded-full' 
                                    style={{ backgroundColor: colors[index % colors.length] }}>
                                        
                                    </span>
                                    <span className='text-gray-600'>{item.name}</span>
                                </div>
                                <span className='font-medium'>₹{item.value}</span>


                            </div>
                        ))
                    }
                </div>
            </div >

        </>
    )
}

export default ExpenseChart
