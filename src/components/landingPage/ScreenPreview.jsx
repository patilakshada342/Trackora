import React from 'react'

function ScreenPreview() {
    const previews=[
        {
            title:"Unified Dashboard",
            desc:"Balance sumary ,expense charts ,top category and AI tools quick insights in one view",
            image:"/dashboard.jpeg"
        },
        {
            title:"AI Financial Advisory",
            desc:"Personalized spending analysis , waste detaction, and smaort saving opportunities",
             image:"/aiadvisory.jpeg"
        },
        {
            title:"AI chat Assistant",
            desc:"Ask direct question about budgeting,subscriptions , monthly , money planning and money control",
             image:"/AIScreen.jpeg"
        }
    ]
  return (
    <>
      <section className='max-w-7xl mx-auto px-6 lg:px-10 pb-20'>
        <div className=' text-center mb-14'>
                            <h2 className='text-3xl md:text-4xl font-bold mb-4'>Built Like a complete financial operation system</h2>
                            <p className='text-gray-500 max-w-2xl mx-auto leading-8'>Every major financial activity is centralized into one smooth and responsive dashboard Experience
                            </p>
                        </div>
                        <div className='grid lg:grid-cols-3 gap-6'>
                        {
                            previews.map((data,i)=>(
                                <div key={i} className='rounded-2xl border border-gray-100  p-7 shadow-sm hover:transition-transform duration-300 hover:scale-105 bg-[#f6f7fb]'>
                                    <div className='h-44 rounded-xl bg-white border mb-6 flex item-center justify-center text-gray-400 text-sm overflow-hidden'>
<img src={data.image} alt="" className="w-full h-full object-cover"/>
</div>
                                <h3 className='font-semibold text-lg mb-3'>{data.title} </h3>
                                <p className='text-gray-500 text-sm leading-7'>{data.desc}</p>

                            </div>
                            ))
                        }
                        </div>
      </section>
    </>
  )
}

export default ScreenPreview
