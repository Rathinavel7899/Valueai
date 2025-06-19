
// "use client"
// import { Box, Link, Typography,Container } from '@mui/material'
// import React from 'react'
// import LinkedInIcon from '@mui/icons-material/LinkedIn'
// import TwitterIcon from '@mui/icons-material/Twitter'
// import YouTubeIcon from '@mui/icons-material/YouTube'
// import PhoneIcon from '@mui/icons-material/Phone'
// import StyledContactButton from '../components/ContactButton'

// const socialIcons = [
//   { icon: <LinkedInIcon />, color: '#0077b5', href: "https://www.linkedin.com" },
//   { icon: <TwitterIcon />, color: '#1da1f2', href: "https://twitter.com" },
//   { icon: <YouTubeIcon />, color: '#ff0000', href: "https://www.youtube.com" },
//   { icon: <PhoneIcon />, color: '#4caf50', href: "tel:9488943155" }
// ]

// const Links = [
//   { lin: 'Home', href: "/" },
//   { lin: 'Technology', href: "/technology" },
//   { lin: "Features", href: "/features" },
//   { lin: "Blog", href: "/blog" },
//   { lin: "About Us", href: "/aboutus" },
//   // { lin: 'Job', href: "/job" },
// ]

// const Footer = () => {
//   return (
//     <Container maxWidth="xl"
//       sx={{
//         // backgroundColor: '#1A1A2E',
//         backgroundColor: 'rgba(26, 26, 46, 0.9)',
//         backdropFilter: 'blur(8px)',
//         WebkitBackdropFilter: 'blur(8px)',
//         display: 'flex',
//         flexDirection: { md: 'row', xs: 'column' },
//         textAlign: 'center',
//         justifyContent: 'space-around',
//         borderTopColor: 'blue',
//         border: 2
//       }}


//     >
//       <Box sx={{ color: 'white', padding: { xs: 2, md: 4 } }}>
//         <Typography

//           variant="h6"
//           sx={{

//             fontWeight: 600,
//             marginBottom: { xs: 1, md: 2 },
//             marginTop: 2,
//             fontFamily: 'var(--font-serif)'

//           }}>
//           Value AI
//         </Typography>
//         <Typography>
//           Transforming businesses through <br />
//           strategic AI implementation and <br />
//           specialized talent solutions.
//         </Typography>

//         <Box>
//           <Typography
//             variant="h6"
//             sx={{
//               marginLeft: { xs: 0, md: 0 },
//               fontWeight: 600,
//               marginBottom: { xs: 1, md: 2 },
//               marginTop: 2,
//               fontFamily: 'var(--font-serif)'
//             }}
//           >
//             Follow Us
//           </Typography>
//           <Box sx={{ display: 'flex', gap: 1, marginLeft: { md: 0, xs: 10 }, marginBottom: 2, }}>
//             {socialIcons.map((item, index) => (
//               <Link
//                 key={index}
//                 href={item.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 underline="none"
//                 sx={{
//                   width: 50,
//                   height: 50,
//                   borderRadius: '50%',
//                   backgroundColor: '#333',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   transition: 'all 0.7s ease',
//                   color: 'white',
//                   cursor: 'pointer',
//                   '&:hover': {
//                     transform: 'rotate(720deg)',
//                     backgroundColor: item.color,
//                     color: '#fff',
//                   },
//                 }}
//               >
//                 {item.icon}
//               </Link>
//             ))}
//           </Box>
//         </Box>
//       </Box>

//       <Box sx={{ display: 'flex', flexDirection: 'column', color: 'white', padding: { xs: 2, md: 4 } }}>
//         <Typography fontWeight={600} fontSize={18} gutterBottom
//           variant="h6"
//           sx={{
//             marginLeft: { xs: 0, md: 0 },
//             fontWeight: 600,
//             marginBottom: { xs: 1, md: 2 },
//             marginTop: 2,
//             fontFamily: 'var(--font-serif)'
//           }}
//         >Quick Links
//         </Typography>

//         {Links.map((link, index) => (
//           <Link
//             key={index}
//             href={link.href}
//             underline="none"
//             display='inline-block'
//             color="inherit"
//             sx={{
//               position: 'relative',
//               fontFamily: 'var(--font-serif)',
//               fontWeight: 500,
//               marginBottom: 1.5,
//               // mx: 'auto',
//               transition: 'color 0.3s ease',
//               '&:hover': {
//                 color: '#b2180e',
//                 fontWeight: 600,
//               },

//             }}
//             target={link.target}
//           >
//             {link.lin}
//           </Link>


//         ))}
//       </Box>
//       <Box sx={{ marginBottom: 3 }}>

//         <StyledContactButton href='/contactus' >
//           Contact Us
//         </StyledContactButton>
//       </Box>


//     </Container>
//   )
// }

// export default Footer
// "use client";
// import { Box, Link, Typography, Container } from '@mui/material';
// import React from 'react';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';
// import TwitterIcon from '@mui/icons-material/Twitter';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import PhoneIcon from '@mui/icons-material/Phone';
// import StyledContactButton from '../components/ContactButton';

// const socialIcons = [
//   { icon: <LinkedInIcon />, color: '#0077b5', href: "https://www.linkedin.com" },
//   { icon: <TwitterIcon />, color: '#1da1f2', href: "https://twitter.com" },
//   { icon: <YouTubeIcon />, color: '#ff0000', href: "https://www.youtube.com" },
//   { icon: <PhoneIcon />, color: '#4caf50', href: "tel:9488943155" },
// ];

// const Links = [
//   { lin: 'Home', href: "/" },
//   { lin: 'Technology', href: "/technology" },
//   { lin: "Features", href: "/features" },
//   { lin: "Blog", href: "/blog" },
//   { lin: "About Us", href: "/aboutus" },
// ];

// const Footer = () => {
//   return (
//     <Container
//       maxWidth="xl"
//       sx={{
//         background: 'linear-gradient(135deg, #1A1A2E 0%, #2D2D44 100%)',
//         position: 'relative',
//         '&::before': {
//           content: '""',
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           right: 0,
//           bottom: 0,
//           background: 'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.05) 0%, transparent 70%)',
//           zIndex: 0,
//         },
//         display: 'flex',
//         flexDirection: { md: 'row', xs: 'column' },
//         textAlign: 'center',
//         justifyContent: 'space-around',
//         padding: { xs: 2, md: 4 },
//         borderTop: '2px solid rgba(0, 191, 255, 0.3)',
//         boxShadow: '0 -5px 15px rgba(0, 0, 0, 0.3)',
//         color: 'white',
//         overflow: 'hidden',
//       }}
//     >
//       <Box
//         sx={{
//           padding: { xs: 2, md: 4 },
//           zIndex: 1,
//           position: 'relative',
//         }}
//       >
//         <Typography
//           variant="h6"
//           sx={{
//             fontFamily: '"Roboto Slab", serif',
//             fontWeight: 600,
//             marginBottom: { xs: 1, md: 2 },
//             marginTop: 2,
//             fontSize: { xs: '1.5rem', md: '2rem' },
//           }}
//         >
//           Value AI
//         </Typography>
//         <Typography
//           sx={{
//             fontFamily: '"Poppins", sans-serif',
//             fontSize: { xs: '0.9rem', md: '1rem' },
//             lineHeight: 1.5,
//           }}
//         >
//           Transforming businesses through <br /> strategic AI implementation and <br /> specialized talent solutions.
//         </Typography>

//         <Box sx={{ mt: 4 }}>
//           <Typography
//             variant="h6"
//             sx={{
//               fontFamily: '"Roboto Slab", serif',
//               fontWeight: 600,
//               marginBottom: { xs: 1, md: 2 },
//               fontSize: { xs: '1.5rem', md: '1.8rem' },
//             }}
//           >
//             Follow Us
//           </Typography>
//           <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 1 }}>
//             {socialIcons.map((item, index) => (
//               <Link
//                 key={index}
//                 href={item.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 underline="none"
//                 sx={{
//                   width: 50,
//                   height: 50,
//                   borderRadius: '50%',
//                   backgroundColor: 'rgba(255, 255, 255, 0.1)',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   transition: 'all 0.7s ease',
//                   color: 'white',
//                   cursor: 'pointer',
//                   '&:hover': {
//                     transform: 'rotate(720deg) scale(1.1)',
//                     backgroundColor: item.color,
//                     boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
//                   },
//                 }}
//               >
//                 {item.icon}
//               </Link>
//             ))}
//           </Box>
//         </Box>
//       </Box>

//       <Box
//         sx={{
//           display: 'flex',
//           flexDirection: 'column',
//           color: 'white',
//           padding: { xs: 2, md: 4 },
//           zIndex: 1,
//           position: 'relative',
//         }}
//       >
//         <Typography
//           variant="h6"
//           sx={{
//             fontFamily: '"Roboto Slab", serif',
//             fontWeight: 600,
//             marginBottom: { xs: 1, md: 2 },
//             marginTop: 2,
//             fontSize: { xs: 20, md: 27 },
//           }}
//         >
//           Quick Links
//         </Typography>
//         {Links.map((link, index) => (
//           <Link
//             key={index}
//             href={link.href}
//             underline="none"
//             display="block"
//             color="inherit"
//             sx={{
//               fontFamily: '"Poppins", sans-serif',
//               fontWeight: 500,
//               marginBottom: 2,
//               transition: 'color 0.3s ease, transform 0.3s ease',
//               fontSize: { xs: '0.9rem', md: '1rem' },
//               '&:hover': {
//                 color: '#b2180e',
//                 fontWeight: 600,
//                 transform: 'translateX(5px)',
//               },
//             }}
//             target={link.target}
//           >
//             {link.lin}
//           </Link>
//         ))}
//       </Box>
//       <Box
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           padding: { xs: 2, md: 4 },
//           zIndex: 1,
//           position: 'relative',
//         }}
//       >
//         <StyledContactButton href="/contactus">
//           Contact Us
//         </StyledContactButton>
//       </Box>
//     </Container>
//   );
// };

// export default Footer;

"use client";
import { Box, Link, Typography, Container } from '@mui/material';
import React from 'react';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PhoneIcon from '@mui/icons-material/Phone';
import StyledContactButton from '../components/ContactButton';

const socialIcons = [
  { icon: <LinkedInIcon />, color: '#0077b5', href: "https://www.linkedin.com" },
  { icon: <TwitterIcon />, color: '#1da1f2', href: "https://twitter.com" },
  { icon: <YouTubeIcon />, color: '#ff0000', href: "https://www.youtube.com" },
  { icon: <PhoneIcon />, color: '#4caf50', href: "tel:9488943155" },
];

const Links = [
  { lin: 'Home', href: "/" },
  { lin: 'Technology', href: "/technology" },
  { lin: "Features", href: "/features" },
  { lin: "Blog", href: "/blog" },
  { lin: "About Us", href: "/aboutus" },
];

const Footer = () => {
  return (
    <Container
      maxWidth="xl"
      sx={{
        background: 'linear-gradient(180deg, #0a0f2b 0%, #1c2a4a 100%)',
        position: 'relative',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 1%, transparent 20%)',
          backgroundSize: '10px 10px',
          zIndex: 0,
        },
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        justifyContent: 'space-between',
        padding: { xs: 3, md: 5 },
        borderTop: '1px solid rgba(0, 191, 255, 0.2)',
        boxShadow: '0 -3px 10px rgba(0, 0, 0, 0.5)',
        color: '#e0e7ff',
        minHeight: '20vh',
      }}
    >
      <Box
        sx={{
          padding: { xs: 2, md: 3 },
          zIndex: 1,
          maxWidth: { md: '30%' },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            marginBottom: 2,
            fontSize: { xs: '1.5rem', md: '2rem' },
            letterSpacing: '0.1em',
          }}
        >
          Value AI
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Open Sans", sans-serif',
            fontSize: { xs: '0.9rem', md: '1rem' },
            lineHeight: 1.6,
            opacity: 0.9,
          }}
        >
          Empowering innovation with AI-driven solutions and expert talent to shape the future of business.
        </Typography>
        <Box sx={{ mt: 3 }}>
          <Typography
            variant="h6"
            sx={{
              fontFamily: '"Playfair Display", serif',
              fontWeight: 600,
              marginBottom: 1.5,
              fontSize: { xs: '1.2rem', md: '1.5rem' },
            }}
          >
            Connect With Us
          </Typography>
          <Box sx={{ display: 'flex', gap: 1.5, justifyContent: 'flex-start' }}>
            {socialIcons.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.5s ease',
                  color: '#e0e7ff',
                  '&:hover': {
                    transform: 'scale(1.2)',
                    backgroundColor: item.color,
                    boxShadow: '0 0 15px rgba(255, 255, 255, 0.2)',
                  },
                }}
              >
                {item.icon}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: { xs: 2, md: 3 },
          zIndex: 1,
          maxWidth: { md: '30%' },
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontFamily: '"Playfair Display", serif',
            fontWeight: 600,
            marginBottom: 2,
            fontSize: { xs: '1.2rem', md: '1.5rem' },
          }}
        >
          Quick Links
        </Typography>
        {Links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            underline="none"
            color="inherit"
            sx={{
              fontFamily: '"Open Sans", sans-serif',
              fontWeight: 400,
              marginBottom: 1.5,
              fontSize: { xs: '0.9rem', md: '1rem' },
              transition: 'all 0.3s ease',
              '&:hover': {
                color: '#a3bffa',
                fontWeight: 600,
                transform: 'translateX(5px)',
              },
            }}
            target={link.target}
          >
            {link.lin}
          </Link>
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: { xs: 2, md: 3 },
          zIndex: 1,
        }}
      >
        <StyledContactButton href="/contactus" sx={{ mt: { xs: 2, md: 0 } }}>
          Contact Us
        </StyledContactButton>
      </Box>
    </Container>
  );
};

export default Footer;