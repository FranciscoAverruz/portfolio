/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { LuArrowBigUpDash } from "react-icons/lu";

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
      className={`fixed bottom-16 right-2 p-[10px] bg-light-txt/80 dark:bg-dark-txt/80 text-white dark:text-dark-background rounded-full w-11 h-11 shadow-lg hover:bg-light-txt/70 dark:hover:bg-dark-primary hover:text-white focusBtn lg:hidden transition-opacity duration-300 font-extrabold text-2xl ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      } justify-center items-center`}
      style={{ zIndex: 100, strokeWidth:"3",}}
    >
      <LuArrowBigUpDash/>
    </button>
  );
};

export default ScrollToTopButton;
