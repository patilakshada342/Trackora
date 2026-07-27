import React from 'react'
import DashboardLayout from '../components/Layout/DashboardLayout'
import SummaryCard from '../components/dashboard/SummaryCard'
import ExpenseChart from '../components/dashboard/ExpenseChart'
import RecentTransactions from '../components/dashboard/RecentTransactions'
import AIPreviewCard from '../components/dashboard/AIPreviewCard'


function Dashboard() {
  return (
    <>
      <DashboardLayout title={"Dashboard"}>

        <SummaryCard />

        <div className='grid lg:grid-cols-12 gap-6 mb-6'>

          <div className='lg:col-span-4 '>
              <ExpenseChart />
          </div>

          <div className='lg:col-span-4'> <RecentTransactions /></div>
          <div className='lg:col-span-4'>
            <AIPreviewCard/>
          </div>
          
        </div>


      </DashboardLayout>
    </>
  )
}

export default Dashboard
