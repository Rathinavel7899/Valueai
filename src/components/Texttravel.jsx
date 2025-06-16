
"use client"

import { TextReveal } from "@/components/magicui/text-reveal"
import { Container } from "@mui/material"

const Texttravel = () => {
  return (
    <Container maxWidth={false} disableGutters>

    
    <div className="flex w-full items-center justify-center bg-[#1A1A2E] backdrop-blur-md py-6 px-4 sm:px-8">
      <TextReveal
        style={{ color: 'white' }}
        className="text-center text-base sm:text-xl md:text-2xl font-semibold text-[#fcf8f8]"
      >
        We are on a mission to revolutionize the way businesses leverage artificial intelligence. 
        With a team of dedicated experts and a commitment to innovation, we strive to make AI accessible
        and valuable to everyone.
      </TextReveal>
    </div>
    </Container>
  )
}

export default Texttravel
