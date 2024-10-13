/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation

const BgNavSmall = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    const scrollContainer = document.querySelector('.overflow-auto'); 

    const handleScroll = () => {
      if (scrollContainer) {
        if (location.pathname === '/' || location.pathname === '/about') {
          if (scrollContainer.scrollTop > 50) {
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
    <div>
      <div 
        className={`flex fixed top-0 left-0 w-full h-12 z-30 lg:hidden items-center justify-center ${
            isRouteAllowed || (isVisible && (location.pathname === '/' || location.pathname === '/about')) ? "bg-white/70 dark:bg-dark-secondary/60 backdrop-blur-lg transition-all ease-in-out duration-300 shadow-md"
              : ""
          }`}
      >
 
      </div>
    </div>
  );
}

export default BgNavSmall;
