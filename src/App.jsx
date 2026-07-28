import React from 'react'
import {Routes , Route} from 'react-router'
import LandingPage from './pages/LandingPage'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Settings from './pages/Settings'
import Register from './pages/Register'
import Income from './pages/Income'
import Expense from './pages/Expense'

function App() {
  return (
    <>
    <Routes>
       <Route path='/' element={<LandingPage />} />
       <Route path='/login' element={<Login/>}/>
       <Route path='/register' element ={<Register />} />

       <Route path = '/dashboard' element ={<Dashboard />} />
        <Route path='/income' element={<Income />} />
        <Route path='/expense' element={<Expense />} />
       <Route path='/settings' element ={<Settings />} />
      
    </Routes>
    </>
  )
}

export default App
