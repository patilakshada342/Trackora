import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

function ExpenseChart() {
    const data = [
        { name: "housing", value: 400 },
        { name: "shooping", value: 900 },
        { name: "entartainment", value: 4070 },
        { name: "transport", value: 6500 },
    ]

    const total = data.reduce((sum, item) => sum + item.value, 0)
    const colors = ['#6d5dfc', '#8b7fff', '#b3abff', '#ece9ff']
    return (
        <>
            <div className='bg-white rounded-2xl border border-gray-100 p-5 h-full'>
                <h3 className='font-semibold mb-5'>Expense Overview</h3>
                <div className='w-full h-[220px] relative'>
                    <ResponsiveContainer width="100%" height="100%">
                        
                        <PieChart width={250} height={250}>
                            <Pie
                                data={data}
                                innerRadius={60}
                                outerRadius={85}
                                paddingAngle={3}
                                dataKey={'value'}
                            >
                                {
                                    data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index]} />
                                    ))
                                }
                            </Pie>
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
                                <span className='w-3 h-3 rounded-full' style={{backgroundColor:colors[index]}}></span>
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
