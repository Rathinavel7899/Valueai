"use client"
import React from 'react'
// import Navbar from '@/components/Navbar.jsx'
import Home from '@/components/Home.jsx'
import Started from '../components/Started.jsx'
import Texttravel from '../components/Texttravel.jsx'
import { Box } from '@mui/material'
// import { TypingAnimation} from '../components/Typinganimation.jsx'

// import Footer from "../components/Footer.jsx"
const App = () => {
  return (
    <Box width='100%'>
      {/* <Navbar/> */}
      <Home/>
      <Started/>
      <Texttravel/>
      {/* <TypingAnimation/> */}
      
      {/* <Footer/> */}
    </Box>
  )
}

export default App
