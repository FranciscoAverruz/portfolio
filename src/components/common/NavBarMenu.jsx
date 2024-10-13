/* eslint-disable no-unused-vars */
import { Menu, MenuButton } from '@headlessui/react';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from '../layout/NavBar';
import { useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons from react-icons

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 400, damping: 18 }
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.1 } }
};

const listVariants = {
  open: {
    clipPath: "inset(0% 0% 0% 0% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.2,
      staggerChildren: 0.05
    }
  },
  closed: {
    clipPath: "inset(10% 50% 90% 50% round 10px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.3
    }
  }
};

const NavBarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    const scrollContainer = document.querySelector('.overflow-auto'); 

    const handleScroll = () => {
      if (scrollContainer) {

        if (location.pathname === '/' || location.pathname === '/about') {
          if (scrollContainer.scrollTop > 350) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        }
      }
    };

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [location.pathname]);

  const isRouteAllowed = location.pathname !== '/' && location.pathname !== '/about';

  return (
    <Menu as="div" className={`relative inline-block text-left top-0 transition-opacity duration-300 ${
        isRouteAllowed || (isVisible && (location.pathname === '/' || location.pathname === '/about')) ? 'opacity-100' : 'opacity-0'
      } `}>
      <div>
        <MenuButton
          onClick={() => setIsOpen(!isOpen)}
        className="flex bg-white dark:bg-gray-800 w-8 h-8 rounded-full shadow-md items-center justify-center hover:border hover:border-light-accent font-semibold text-xl transition-all duration-200"
        >
          {isOpen ? <FaTimes className="w-4 h-4" /> : <FaBars className="w-4 h-4" />}
        </MenuButton>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            exit="closed"
            variants={listVariants}
            style={{ pointerEvents: isOpen ? "auto" : "none" }}
            className="fixed top-8 left-0 right-0 z-10 mt-4 w-full bg-light-background/50 dark:bg-dark-background/30 dark:text-white shadow-md backdrop-blur-md"
          >
            <motion.li 
              key={1}
              variants={itemVariants}
              className="flex justify-center items-center h-full"
            >
              <NavBar />
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </Menu>
  );
}

export default NavBarMenu;
