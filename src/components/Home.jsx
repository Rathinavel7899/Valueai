"use client"

import { Globe } from "@/components/magicui/globe"
import { Container } from "@mui/material"

const Home = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <div className="flex h-[50vh] w-full items-center justify-center bg-[#1A1A2E] mt-2 sm:mt-[55px]">
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-transparent px-40 pb-40 pt-8 md:pb-60">
          <span className="pointer-events-none whitespace-pre-wrap text-center text-8xl font-semibold leading-none text-[#F5F5F5]">
            ValueAI
          </span>
          <div>
            <Globe className="top-50 sm:top-14 w-full h-auto" />
          </div>
          <div className="pointer-events-none absolute inset-0 h-full bg-[radial-gradient(circle_at_50%_200%,rgba(0,0,0,0.2),rgba(255,255,255,0))]" />
        </div>
      </div>
    </Container>
  );
};

export default Home;