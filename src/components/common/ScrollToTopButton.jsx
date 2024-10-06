/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const scrollableContainer = document.querySelector('.overflow-auto');

    const handleScroll = () => {
      if (scrollableContainer.scrollTop > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    if (scrollableContainer) {
      scrollableContainer.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (scrollableContainer) {
        scrollableContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handleClick = () => {
    const scrollableContainer = document.querySelector('.overflow-auto');
    if (scrollableContainer) {
      scrollableContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-16 right-2 p-3 bg-light-txt/30 text-white rounded-full w-11 h-11 shadow-lg hover:bg-light-txt/70 focusBtn lg:hidden transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{ zIndex: 100 }}
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
