"use client"
import React from 'react'
// import Navbar from '@/components/Navbar.jsx'
import ImageRotation from '@/components/ImageRotation.jsx'
import Started from '../components/Started.jsx'
import Texttravel from '../components/Texttravel.jsx'
import { Box } from '@mui/material'
// import { TypingAnimation} from '../components/Typinganimation.jsx'
import OrbittingCirclesDemo from '../components/OrbitingCirclesDemo.jsx'
import Review from '../components/Review.tsx'

// import Footer from "../components/Footer.jsx"
const App = () => {
  return (
    <Box width='100%'>
      {/* <Navbar/> */}
      <ImageRotation/>
      <Started/>
      <Texttravel/>
      <OrbittingCirclesDemo/>
      <Review/>

      {/* <TypingAnimation/> */}
      
      {/* <Footer/> */}
    </Box>
  )
}

export default App
