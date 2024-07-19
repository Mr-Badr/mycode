"use client"
// components/ScrollToTopButton.js
import { useState, useEffect } from 'react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const fullHeight = document.body.scrollHeight;

      const maxScroll = fullHeight - windowHeight;
      const scrollPercentage = (scrollTop / maxScroll) * 100;

      setIsVisible(scrollTop > 400); // Show button after scrolling 400px down

      // Update scroll progress percentage (between 0 and 100)
      setScrollProgress(scrollPercentage > 100 ? 100 : scrollPercentage);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={`btn-scroll-top ${isVisible ? 'active-progress' : ''}`} onClick={scrollToTop}>
      <svg className="progress-square svg-content" width="100%" height="100%" viewBox="0 0 40 40">
        <path 
          d="M8 1H32C35.866 1 39 4.13401 39 8V32C39 35.866 35.866 39 32 39H8C4.13401 39 1 35.866 1 32V8C1 4.13401 4.13401 1 8 1Z" 
          style={{
            transition: 'stroke-dashoffset 10ms linear 0s',
            strokeDasharray: '139.989',
            strokeDashoffset: `${139.989 - (scrollProgress * 1.39989)}`
          }}
        ></path>
      </svg>
    </div>
  );
};

export default ScrollToTopButton;


