import React from 'react'

function StatsStrip() {
  
const stats = [
  { value: "10K", label: "Transaction Tracked" },
  { value: "92%", label: "User Improved Settings" },
  { value: "24/7", label: "AI Finance Monitoring" },
  { value: "100%", label: "Responsive Dashboard Experience" },
];


  return (
    <>
      <section className='max-w-7xl mx-auto px-6 lg:px-10 pb-20'>
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-5'>

          {
            stats.map((data,i) => (
              <div key={i} className='bg-white rounded-2xl border-gray-100 p-6 
              text-center shadow-sm hover:transition-transform duration-300 hover:scale-105 '>
                <h3 className='text-3xl font-bold text-[#a52cf6] mb-2'>{data.value}
                </h3>
                <p className='text-gray-500 text-sm'>{data.label}</p>
              </div>
            ))}
          

        </div>
      </section>

    </>
  )
}

export default StatsStrip
