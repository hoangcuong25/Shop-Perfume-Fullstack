import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route />
      </Routes>
    </BrowserRouter>
  )
}

export default App
