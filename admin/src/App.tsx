import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import AddProduct from './pages/AddProduct'
import Orders from './pages/Orders'
import Products from './pages/Products'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='flex items-start '>
        <Sidebar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/products' element={<Products />} />
          <Route path='/add-product' element={<AddProduct />} />
          <Route path='/manage-user' element={<AddProduct />} />
          <Route path='/orders' element={<Orders />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
