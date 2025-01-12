import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
import Support from './components/Support'
import Register from './pages/Register'
import Login from './pages/Login'
import DisplayProduct from './pages/DisplayProduct'
import MyProfile from './pages/MyProfile'
import Payment from './pages/Payment'
import AOS from 'aos'
import 'aos/dist/aos.css'
import CatalogProduct from './pages/CatalogProduct'

const App = () => {

  AOS.init({
    offset: 100,
    duration: 500,
    easing: 'ease-in-sine',
    delay: 200,
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:catalog/' element={<CatalogProduct />} />
        <Route path='/product/:id' element={<DisplayProduct />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/thanh-toan' element={<Payment />} />

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
      <Footer />
      <Support />
    </BrowserRouter>
  )
}

export default App