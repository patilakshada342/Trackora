import React from 'react'
import {useState } from 'react'
import SideBar from './SideBar';
import MobileMenu from './MobileMenu';
import TopBar from './TopBar';

function DashboardLayout({title,children}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className='w-full h-screen bg-[#f6f7fb] overflow-hidden'>

                <SideBar />
                <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />

                <main className='lg:ml-[250px] h-screen overflow-y-auto p-4 sm:p-6 lg:p-8'>
                    
                    <TopBar title={title} setIsOpen ={setIsOpen}/>
                    {children}
                </main>
                
            </div>
        </>
    )
}

export default DashboardLayout
