import { useEffect } from 'react';

const GoogleAnalyticsScript = () => {
  useEffect(() => {

    if (typeof window.gtag === 'undefined') {
      window.dataLayer = window.dataLayer || [];

      window.gtag = function() {
        window.dataLayer.push(arguments);
      };

      const script = document.createElement('script');
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-HXCF6RHBW5';
      script.async = true;
      script.defer = true;

      document.head.appendChild(script);

      script.onload = () => {
        window.gtag('js', new Date());
        window.gtag('config', 'G-HXCF6RHBW5');
      };
    }
  }, []);

  return null; 
};

export default GoogleAnalyticsScript;
