import { useState, useEffect } from 'react';

const useWindowScroll = () => {
  const [windowScroll, setWindowScroll] = useState(0);

  const handleScroll = () => {
    setWindowScroll(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return windowScroll;
};

export default useWindowScroll;
