import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { motion } from 'framer-motion';

const Navbar = () => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);
  
  const navItems = [
    { name: 'Beranda', path: '/' },
    { name: 'Grafik', path: '/grafik' },
    { name: 'Galeri', path: '/galeri' },
    { name: 'Statistics', path: '/statistics'}
  ];
  
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-0 z-50 flex justify-between items-center px-12 py-4"
    >
      {/* Glass effect background */}
      <div className="absolute inset-0 bg-[#0b2a70]/80 backdrop-blur-md shadow-lg" />
      
      {/* Logo */}
      <motion.div 
        className="relative flex items-center"
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Link to="/">
          <img 
            src={logo} 
            alt="Logo Pemkab Indramayu" 
            className="h-20 w-auto drop-shadow-lg" 
          />
        </Link>
      </motion.div>
      
      {/* Navigation */}
      <nav className="relative flex items-center gap-10">
        {navItems.map((item) => (
          <motion.div
            key={item.name}
            onHoverStart={() => setHoveredItem(item.name)}
            onHoverEnd={() => setHoveredItem(null)}
            className="relative"
          >
            <Link
              to={item.path}
              className={`relative px-4 py-2 text-lg font-medium transition-all duration-300
                ${location.pathname === item.path 
                  ? 'text-white' 
                  : 'text-blue-100 hover:text-white'
                }
              `}
            >
              {item.name}
              
              {/* Hover indicator */}
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left"
                initial={{ scaleX: 0 }}
                animate={{ 
                  scaleX: hoveredItem === item.name || location.pathname === item.path ? 1 : 0,
                  opacity: hoveredItem === item.name ? 0.7 : location.pathname === item.path ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Background highlight */}
              <motion.span
                className="absolute inset-0 bg-white/10 rounded-lg -z-10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ 
                  opacity: hoveredItem === item.name || location.pathname === item.path ? 1 : 0,
                  scale: hoveredItem === item.name || location.pathname === item.path ? 1 : 0.95
                }}
                transition={{ duration: 0.2 }}
              />
            </Link>
            
            {/* Active dot indicator */}
            {location.pathname === item.path && (
              <motion.span
                layoutId="activeIndicator"
                className="absolute -top-1 right-0 w-1.5 h-1.5 bg-white rounded-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.div>
        ))}
      </nav>
    </motion.header>
  );
};

export { Navbar };