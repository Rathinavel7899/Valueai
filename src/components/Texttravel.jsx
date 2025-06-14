
"use client";

import { TextReveal } from "@/components/magicui/text-reveal";

const Texttravel = () => {
  return (
    <div className="flex w-full items-center justify-center bg-[#1A1A2E] backdrop-blur-md py-2">
      <TextReveal style={{color:'white'}} className="text-[#fcf8f8] text-center text-2xl font-semibold">
        We are on a mission to revolutionize the way businesses leverage artificial intelligence. 
        With a team of dedicated experts and a commitment to innovation, we strive to make AI accessible
        and valuable to everyone.
      </TextReveal>
    </div>
  );
};

export default Texttravel;