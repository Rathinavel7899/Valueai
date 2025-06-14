// import React from "react";
// import Link from "next/link";
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { cn } from "@/lib/utils";

// interface NavItem {
//   name: string;
//   href: string;
// }

// const navItems: NavItem[] = [
//   { name: "About", href: "/about" },
//   { name: "Features", href: "/features" },
//   { name: "Pricing", href: "/pricing" },
//   { name: "Blog", href: "/blog" },
//   { name: "Contact", href: "/contact" },
//   { name: "Buy Template", href: "/buy-template" },
// ];

// const Navbar: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   return (
//     <motion.header
//       className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5, ease: "easeOut" }}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center py-4">
//           {/* Logo */}
//           <Link href="/" className="text-2xl font-bold text-gray-900">
//             Anius
//           </Link>

//           {/* Desktop Menu */}
//           <nav className="hidden md:flex space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             type="button"
//             className="md:hidden text-gray-600 hover:text-gray-900"
//             onClick={toggleMenu}
//             aria-label={isMenuOpen ? "Close menu" : "Open menu"}
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         <motion.nav
//           className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}
//           initial={{ height: 0, opacity: 0 }}
//           animate={{ height: isMenuOpen ? "auto" : 0, opacity: isMenuOpen ? 1 : 0 }}
//           transition={{ duration: 0.3, ease: "easeInOut" }}
//         >
//           <div className="flex flex-col space-y-4 py-4">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
//                 onClick={toggleMenu}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         </motion.nav>
//       </div>
//     </motion.header>
//   );
// };

// export default Navbar;

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


