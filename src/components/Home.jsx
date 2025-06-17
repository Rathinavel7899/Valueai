"use client"

import { Globe } from "@/components/magicui/globe"
import { Container } from "@mui/material"

const Home = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <div className="flex h-[50vh] w-full items-center justify-center bg-[#1A1A2E] mt-2 sm:mt-[55px]">
        <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-transparent px-40 pb-40 pt-8 md:pb-60">
          {/* <span className="pointer-events-none whitespace-pre-wrap text-center text-8xl font-semibold leading-none text-[#F5F5F5]">
            ValueAI
          </span> */}
          <span className="m-10 pointer-events-none whitespace-pre-wrap text-center text-4xl sm:text-6xl md:text-8xl font-semibold leading-none text-[#F5F5F5]">
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
// import React from 'react';

// const ValueAIGlobe = () => {
//   return (
//     <div style={{
//       width: '100%',
//       height: '100vh',
//       background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f172a 100%)',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       justifyContent: 'center',
//       position: 'relative',
//       overflow: 'hidden',
//       fontFamily: 'Poppins, sans-serif'
//     }}>
//       {/* ValueAI Title */}
//       <h1 style={{
//         fontSize: '5rem',
//         fontWeight: 800,
//         color: '#ffffff',
//         textAlign: 'center',
//         marginBottom: '2rem',
//         letterSpacing: '0.05em',
//         textShadow: '0 0 30px rgba(255, 255, 255, 0.3)',
//         zIndex: 2,
//         margin: '0 0 2rem 0',
//       }}>
//         ValueAI
//       </h1>
      
//       {/* Globe Container */}
//       <div style={{
//         position: 'relative',
//         width: '400px',
//         height: '200px',
//         perspective: '1000px',
//       }}>
//         {/* Main Globe */}
//         <div style={{
//           width: '100%',
//           height: '100%',
//           background: `
//             radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8) 0%, rgba(220, 220, 220, 0.6) 30%, rgba(180, 180, 180, 0.4) 100%),
//             linear-gradient(45deg, rgba(64, 224, 255, 0.1) 0%, rgba(0, 150, 255, 0.1) 50%, rgba(0, 100, 200, 0.1) 100%)
//           `,
//           borderRadius: '400px 400px 0 0',
//           position: 'relative',
//           animation: 'rotate 20s linear infinite, pulseGlow 3s ease-in-out infinite',
//           boxShadow: '0 0 50px rgba(64, 224, 255, 0.3), inset 0 0 50px rgba(255, 255, 255, 0.1)',
//           overflow: 'hidden',
//         }}>
          
//           {/* Sea Pattern (Blue dots) */}
//           <div style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: `
//               radial-gradient(1px 1px at 60px 40px, rgba(64, 224, 255, 0.8), transparent),
//               radial-gradient(1px 1px at 90px 70px, rgba(0, 150, 255, 0.6), transparent),
//               radial-gradient(1px 1px at 130px 50px, rgba(64, 224, 255, 0.7), transparent),
//               radial-gradient(1px 1px at 170px 80px, rgba(0, 150, 255, 0.5), transparent),
//               radial-gradient(1px 1px at 210px 60px, rgba(64, 224, 255, 0.8), transparent),
//               radial-gradient(1px 1px at 250px 90px, rgba(0, 150, 255, 0.6), transparent),
//               radial-gradient(1px 1px at 290px 70px, rgba(64, 224, 255, 0.7), transparent),
//               radial-gradient(1px 1px at 110px 110px, rgba(0, 150, 255, 0.5), transparent),
//               radial-gradient(1px 1px at 150px 130px, rgba(64, 224, 255, 0.8), transparent),
//               radial-gradient(1px 1px at 190px 120px, rgba(0, 150, 255, 0.6), transparent),
//               radial-gradient(1px 1px at 230px 140px, rgba(64, 224, 255, 0.7), transparent),
//               radial-gradient(1px 1px at 270px 120px, rgba(0, 150, 255, 0.5), transparent),
//               radial-gradient(1px 1px at 310px 100px, rgba(64, 224, 255, 0.8), transparent),
//               radial-gradient(1px 1px at 350px 80px, rgba(0, 150, 255, 0.6), transparent)
//             `,
//             borderRadius: '400px 400px 0 0',
//             animation: 'rotate 25s linear infinite',
//           }} />
          
//           {/* Land Pattern (Gray dots) */}
//           <div style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: `
//               radial-gradient(1px 1px at 80px 60px, rgba(100, 100, 100, 0.8), transparent),
//               radial-gradient(1px 1px at 120px 80px, rgba(100, 100, 100, 0.6), transparent),
//               radial-gradient(1px 1px at 160px 100px, rgba(100, 100, 100, 0.7), transparent),
//               radial-gradient(1px 1px at 200px 70px, rgba(100, 100, 100, 0.5), transparent),
//               radial-gradient(1px 1px at 240px 90px, rgba(100, 100, 100, 0.8), transparent),
//               radial-gradient(1px 1px at 280px 110px, rgba(100, 100, 100, 0.6), transparent),
//               radial-gradient(1px 1px at 100px 120px, rgba(100, 100, 100, 0.7), transparent),
//               radial-gradient(1px 1px at 140px 140px, rgba(100, 100, 100, 0.5), transparent),
//               radial-gradient(1px 1px at 180px 130px, rgba(100, 100, 100, 0.8), transparent),
//               radial-gradient(1px 1px at 220px 150px, rgba(100, 100, 100, 0.6), transparent),
//               radial-gradient(1px 1px at 260px 160px, rgba(100, 100, 100, 0.7), transparent),
//               radial-gradient(1px 1px at 300px 140px, rgba(100, 100, 100, 0.5), transparent)
//             `,
//             borderRadius: '400px 400px 0 0',
//             animation: 'rotate 15s linear infinite reverse',
//           }} />
          
//           {/* Highlight spot */}
//           <div style={{
//             position: 'absolute',
//             top: '20%',
//             left: '10%',
//             width: '30%',
//             height: '40%',
//             background: 'radial-gradient(ellipse, rgba(255, 140, 0, 0.6) 0%, transparent 70%)',
//             borderRadius: '50%',
//             filter: 'blur(2px)',
//           }} />
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes rotate {
//           from {
//             transform: rotateY(0deg);
//           }
//           to {
//             transform: rotateY(360deg);
//           }
//         }
        
//         @keyframes pulseGlow {
//           0%, 100% {
//             box-shadow: 0 0 50px rgba(64, 224, 255, 0.3), inset 0 0 50px rgba(255, 255, 255, 0.1);
//           }
//           50% {
//             box-shadow: 0 0 80px rgba(64, 224, 255, 0.5), inset 0 0 80px rgba(255, 255, 255, 0.2);
//           }
//         }
        
//         @media (max-width: 768px) {
//           h1 {
//             font-size: 3rem !important;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default ValueAIGlobe;