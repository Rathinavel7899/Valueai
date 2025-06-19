"use client"

import React, { useState } from 'react'
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import Link from 'next/link';
import { Container, styled } from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const navItems = [
  { label: 'Features', href: '/features' },
  { label: 'Technology', href: '/technology' },
  { label: 'About Us', href: '/aboutus' },
  { label: 'Blog', href: '/blog' },
];

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

// styled link for drawer
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
    <Container maxWidth='xl'>

      <AppBar
        position="fixed"
        sx={{
          backgroundColor: 'rgba(16, 16, 20, 0.7)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          boxShadow: 'none',
        }}
      >

        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: { xs: '0 20px', sm: '0 40px' },
          }}
        >

          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Link href='/' style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
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
                  VS
                </Typography>
              </Box>
              <Typography variant="h6" sx={{ color: '#fff', fontWeight: 'bold' }}>
                Value System
              </Typography>
            </Link>
          </Box>


          <Box sx={{ display: { xs: 'none', sm: 'flex' }, alignItems: 'center', gap: 2 }}>
            {navItems.map((item, index) => (
              <NavLink key={index} href={item.href}>
                {item.label}
              </NavLink>
            ))}
          </Box>


          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <CustomButton variant="contained" href='/contactus'>
                Contact Us
              </CustomButton>
            </Box>
            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <IconButton
                color="inherit"
                edge="end"
                onClick={handleDrawerToggle}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

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
