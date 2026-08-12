import React from 'react'
import {Routes , Route} from 'react-router'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import Register from './pages/Register'
import Income from './pages/Income'
import Expense from './pages/Expense'
import Categories from './pages/Categories'
import AIAdvisor from './pages/AIAdvisor'
import AiChat from './pages/AiChat'
import { Toaster } from "sonner"
// import AllIncomes from './pages/AllIncomes'

function App() {
  return (
    <>
    <Toaster position='top-center'/>
    <Routes>
       <Route path='/' element={<LandingPage />} />
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element ={<Register />} />

       <Route path = '/dashboard' element ={<Dashboard />} />
        <Route path='/income' element={<Income />} />
        <Route path='/expense' element={<Expense />} />
       <Route path='/settings' element ={<Settings />} />
      <Route path='/categories' element ={<Categories />} />
      <Route path='/aiAdvisor' element={<AIAdvisor/>} />
      <Route path='/aiChat' element={<AiChat/>} />
      {/* <Route path='/allIncomes' element={<AllIncomes/>} /> */}

    </Routes>
    </>
  )
}

export default App
