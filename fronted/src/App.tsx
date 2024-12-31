import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Support from './components/Support'
import Register from './pages/Register'
import Login from './pages/Login'
import DisplayProduct from './pages/DisplayProduct'
import MyProfile from './pages/MyProfile'
import Cart from './pages/Cart'
import TypeProduct from './pages/TypeProduct'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/nuoc-hoa-nam' element={<TypeProduct />} />
        <Route path='/nuoc-hoa-nu' element={<TypeProduct />} />
        <Route path='/nuoc-hoa-mini' element={<TypeProduct />} />
        <Route path='/product/:id' element={<DisplayProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/my-profile' element={<MyProfile />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
      <Support />
    </BrowserRouter>
  )
}

export default App