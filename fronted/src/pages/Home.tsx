import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Header from '../components/Header'
import Navbar from '../components/Navbar'


const Home = () => {
    return (
        <div className=''>
            <Header />
            <Navbar />
            <Hero />
            <About />
        </div>
    )
}

export default Home