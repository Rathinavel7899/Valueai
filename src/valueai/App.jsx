"use client"
import React from 'react'
import Home from '../components/Home.jsx'
import Review from '../components/Review.tsx'
import OurSolution from '../components/OurSolution.jsx'

// import ImageRotation from '@/components/ImageRotation.jsx'
// import Texttravel from '../components/Texttravel.jsx'
import { Box } from '@mui/material'
// import { TypingAnimation} from '../components/Typinganimation.jsx'



const App = () => {
  return (
    <Box width='100%'>
    <Home/>
    <OurSolution/>
      <Review/>
      {/* <ImageRotation/> */}
      
      {/* <Texttravel/> */}
    
    

      {/* <TypingAnimation/> */}
      
      
    </Box>
  )
}

export default App
