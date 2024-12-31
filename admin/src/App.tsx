import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='flex items-start '>
        <Sidebar />
        <Routes>
          <Route path='/dashboard' element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
