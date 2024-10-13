/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation

const FAverruzHeader = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation(); 

  useEffect(() => {
    const scrollContainer = document.querySelector('.overflow-auto'); 
    const threshold = window.innerWidth >= 768 ? 200 : 170;
    const handleScroll = () => {
      if (scrollContainer) {
        if (location.pathname === '/' || location.pathname === '/about') {
          if (scrollContainer.scrollTop > threshold) {
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
        className={`top-0 transition-opacity duration-300  items-center justify-center text-lg font-bold md:text-2xl ${
          isRouteAllowed || (isVisible && (location.pathname === '/' || location.pathname === '/about')) ? 'opacity-100' : 'opacity-0'
        } `}
        style={{ fontFamily: 'Satisfy, cursive' }}
      >
        Francisco Averruz
      </div>
    </div>
  );
}

export default FAverruzHeader;
