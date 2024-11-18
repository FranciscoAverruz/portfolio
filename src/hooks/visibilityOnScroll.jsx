import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const VisibilityOnScroll = (thresholds, allowedRoutes = []) => {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const scrollContainer = document.querySelector('.overflow-auto');
    let threshold;

    const calculateThreshold = () => {
      if (window.innerWidth >= 1024) {
        threshold = thresholds.lg || 110;
      } else if (window.innerWidth >= 768) {
        threshold = thresholds.md || 150;
      } else {
        threshold = thresholds.sm || 300;
      }
    };

    calculateThreshold();

    const handleScroll = () => {
      if (scrollContainer) {
        const isRouteAllowed = allowedRoutes.length === 0 || allowedRoutes.includes(location.pathname);
        if (isRouteAllowed) {
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
  }, [location.pathname, thresholds, allowedRoutes]);

  return isVisible;
};

export default VisibilityOnScroll;