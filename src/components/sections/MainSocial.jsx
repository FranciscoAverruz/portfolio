/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import Social from '../layout/Social';
import { FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { RiDownloadCloud2Line } from "react-icons/ri";
import { useTranslation } from "react-i18next";

const MainSocial = () => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation(); // Get current location
    const handleViewCV = () => {
    window.open("/CV Francisco.Averruz.pdf", "_blank");
  };
  const { t } = useTranslation();

  useEffect(() => {
    const scrollContainer = document.querySelector('.overflow-auto'); // Select the scroll container

    // Define the handleScroll function inside useEffect
    const handleScroll = () => {
      if (scrollContainer) {
        const threshold = window.innerWidth >= 768 ? 110 : 300;
        // Check the scroll position of the container only if on '/' or '/about'
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

    // Cleanup the scroll event on component unmount
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [location.pathname]); // Add location.pathname to dependencies

  // Determine if the current route is allowed
  const isRouteAllowed = location.pathname !== '/' && location.pathname !== '/about';

  return (
    <div>
      <div 
        className={`flex flex-row gap-1 w-fit fixed bottom-4 right-4 z-40 top-2 left-2 md:left-6 lg:left-0 transition-opacity duration-300 transform lg:-translate-y-6 lg:-translate-x-6 h-fit ${
          isRouteAllowed || (isVisible && (location.pathname === '/' || location.pathname === '/about')) ? 'opacity-100' : 'opacity-0'
        } `}
      >
        <Social
          Icon={FaLinkedinIn}
          to="https://www.linkedin.com/in/franciscoaverruz"
          className={""}
          title="https://www.linkedin.com/in/franciscoaverruz"
        />
      
        <Social
          Icon={LuGithub}
          to="https://github.com/FranciscoAverruz"
          className={""}
          style={{strokeWidth:'3' }}
          title="https://github.com/FranciscoAverruz"
        />
          <Social
          Icon={RiDownloadCloud2Line}
          onClick={handleViewCV}
          className={""}
          style={{strokeWidth:'1' }}
          size={"21"}
          title={t("viewCV")}
          />
      </div>
    </div>
  );
}

export default MainSocial;
