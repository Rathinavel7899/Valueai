"use client"
import React from 'react'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import Link from 'next/link';
import { styled } from '@mui/system';

// Custom styled button to match the "Buy template" button
const CustomButton = styled(Button)({
  backgroundColor: '#6B48FF',
  color: '#fff',
  borderRadius: '20px',
  padding: '8px 20px',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#5a3ed6',
  },
});

// Custom styled link for nav items
const NavLink = styled(Link)({
  color: '#fff',
  textDecoration: 'none',
  margin: '0 15px',
  fontSize: '16px',
  fontWeight: 500,
  '&:hover': {
    color: '#ddd',
  },
});

const Navbar = () => {
  return (
    <>
       <AppBar position="fixed" sx={{ backgroundColor: '#1A1A2E', boxShadow: 'none' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', padding: '0 20px' }}>
        {/* Logo Section */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box
            sx={{
              width: 30,
              height: 30,
              backgroundColor: '#6B48FF',
              borderRadius: '50%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: '10px',
            }}
          >
            <Typography variant="h6" sx={{ color: '#fff', fontSize: '16px' }}>
              A
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
            Anius
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/features">Features</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/blog">Blog</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </Box>

        {/* Buy Template Button */}
        <CustomButton variant="contained">
          Buy template
        </CustomButton>
      </Toolbar>
    </AppBar>
    </>
  )
}

export default Navbar


