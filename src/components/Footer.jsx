
"use client"
import { Box, Button, Container, Link, Typography } from '@mui/material'
import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import YouTubeIcon from '@mui/icons-material/YouTube'
import PhoneIcon from '@mui/icons-material/Phone'
import StyledContactButton from '../components/ContactButton'

const socialIcons = [
  { icon: <LinkedInIcon />, color: '#0077b5', href: "https://www.linkedin.com" },
  { icon: <TwitterIcon />, color: '#1da1f2', href: "https://twitter.com" },
  { icon: <YouTubeIcon />, color: '#ff0000', href: "https://www.youtube.com" },
  { icon: <PhoneIcon />, color: '#4caf50', href: "tel:9488943155" }
]

const Links = [
  { lin: 'Home', href: "/" },
  { lin: 'Technology', href: "/technology" },
  { lin: "Features", href: "/features" },
  { lin: "Blog", href: "/blog" },
  { lin: "About Us", href: "/aboutus" },
  // { lin: 'Job', href: "/job" },
]

const Footer = () => {
  return (
    <Container maxWidth='xl'
      sx={{
        backgroundColor: '#1A1A2E',
        display: 'flex',
        flexDirection: { md: 'row', xs: 'column' },
        textAlign: 'center',
        justifyContent: 'space-around'
      }}


    >
      <Box sx={{ color: 'white', padding: { xs: 2, md: 4 } }}>
        <Typography

          variant="h6"
          sx={{

            fontWeight: 600,
            marginBottom: { xs: 1, md: 2 },
            marginTop: 2,
            fontFamily: 'var(--font-serif)'

          }}>
          Value AI
        </Typography>
        <Typography>
          Transforming businesses through <br />
          strategic AI implementation and <br />
          specialized talent solutions.
        </Typography>

        <Box>
          <Typography
            variant="h6"
            sx={{
              marginLeft: { xs: 0, md: 0 },
              fontWeight: 600,
              marginBottom: { xs: 1, md: 2 },
              marginTop: 2,
              fontFamily: 'var(--font-serif)'
            }}
          >
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, marginLeft: { md: 0, xs: 10 }, marginBottom: 2, }}>
            {socialIcons.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                underline="none"
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: '50%',
                  backgroundColor: '#333',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.7s ease',
                  color: 'white',
                  cursor: 'pointer',
                  '&:hover': {
                    transform: 'rotate(720deg)',
                    backgroundColor: item.color,
                    color: '#fff',
                  },
                }}
              >
                {item.icon}
              </Link>
            ))}
          </Box>
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', color: 'white', padding: { xs: 2, md: 4 } }}>
        <Typography fontWeight={600} fontSize={18} gutterBottom
          variant="h6"
          sx={{
            marginLeft: { xs: 0, md: 0 },
            fontWeight: 600,
            marginBottom: { xs: 1, md: 2 },
            marginTop: 2,
            fontFamily: 'var(--font-serif)'
          }}
        >Quick Links
        </Typography>

        {Links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            underline="none"
            display='inline-block'
            color="inherit"
            sx={{
              position: 'relative',
              fontFamily: 'var(--font-serif)',
              fontWeight: 500,
              marginBottom: 1.5,
              // mx: 'auto',
              transition: 'color 0.3s ease',
              '&:hover': {
                color: '#b2180e',
                fontWeight: 600,
              },

            }}
            target={link.target}
          >
            {link.lin}
          </Link>


        ))}
      </Box>
      <Box sx={{ marginBottom: 3 }}>

        <StyledContactButton >
          Contact Us
        </StyledContactButton>
      </Box>


    </Container>
  )
}

export default Footer