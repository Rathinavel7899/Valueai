
"use client"

import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import Link from 'next/link';
import { Container, styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const navItems = [
  { label: 'Industries', href: '/industries' },
  { label: 'Services', href: '/services' },
  { label: 'About Us', href: '/aboutus' },
  { label: 'Blog', href: '/blog' },
  { label: 'Jobs', href: '/jobs' }
]

// Contactus button styled
const CustomButton = styled(Button)({
  backgroundColor: '#6B48FF',
  color: '#fff',
  borderRadius: '20px',
  padding: '8px 20px',
  textTransform: 'none',
  fontWeight: 'bold',
  '&:hover': {
    backgroundColor: '#5a3ed6',
  },
});

// styled link
const NavLink = styled(Link)({
  color: '#fff',
  textDecoration: 'none',
  margin: '0 10px',
  padding: '6px 12px',
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: 500,
  transition: 'background-color 0.3s, color 0.3s',
  '&:hover': {
    backgroundColor: '#ffffff',
    color: '#1A1A2E',
  },
});

// Custom styled link for drawer
const DrawerNavLink = styled(Link)({
  color: '#1A1A2E',
  textDecoration: 'none',
  width: '100%',
  padding: '10px 20px',
  fontSize: '16px',
  fontWeight: 500,
  transition: 'background-color 0.3s, color 0.3s',
  '&:hover': {
    backgroundColor: '#f0f0f0',
    color: '#6B48FF',
  },
});

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Drawer content for mobile menu
  const drawer = (
    <Box sx={{ width: 250, bgcolor: '#fff', height: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={handleDrawerToggle}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <DrawerNavLink href={item.href} onClick={handleDrawerToggle}>
              <ListItemText primary={item.label} />
            </DrawerNavLink>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <DrawerNavLink href="/contactus" onClick={handleDrawerToggle}>
            <ListItemText primary="Contact Us" />
          </DrawerNavLink>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Container maxWidth={false} disableGutters>
      <AppBar position="fixed" sx={{ backgroundColor: '#1A1A2E', boxShadow: 'none' }}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', padding: { xs: '0 20px', sm: '0 40px' } }}>
          
          {/* Logo */}
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
                AI
              </Typography>
            </Box>
            <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
              Value AI
            </Typography>
          </Box>

          {/* Spacer to push navigation links to the center on larger screens */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} />

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center',textAlign:'center' }}>
            {navItems.map((item, index) => (
              <NavLink key={index} href={item.href}>
                {item.label}
              </NavLink>
            ))}
            <CustomButton variant="contained" href='/contactus'>
              Contact Us
            </CustomButton>
          </Box>

          {/* Hamburger Menu Icon for Phone Screens */}
          <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            <IconButton
              color="inherit"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>
    </Container>
  );
};

export default Navbar;