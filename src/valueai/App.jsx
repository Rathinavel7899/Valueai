"use client"
import React from 'react'
import Navbar from '@/components/Navbar.jsx'
import Home from '@/components/Home.jsx'
import Started from '../components/Started.jsx'
import Texttravel from '../components/Texttravel.jsx'
import Footer from "../components/Footer.jsx"
const App = () => {
  return (
    <>
      <Navbar/>
      <Home/>
      <Started/>
      <Texttravel/>
      <Footer/>
    </>
  )
}

export default App
