

import React from 'react'
import Navbar from './navbar/Navbar'
import Welcome from './welcome/Welcome'
import Three from './three/Three'
import Services from './services/Services'
import Footer from './footer/Footer'

const HomePage = () => {
  return (
    <div>
        <Navbar/>
        <Welcome/>
        <Three/>
        <Services/>
        <Footer/>
    </div>
  )
}

export default HomePage