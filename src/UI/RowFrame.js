import React, { useRef } from 'react';
import classes from './RowFrame.module.css';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Card from './Card';
import useWindowSize from '../hooks/useWindowSize';

const RowFrame = ({ className, children }) => {
  const containerRef = useRef(null);
  const { width } = useWindowSize();

  // Scroll Button
  const handleScroll = (scroll) => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += scroll;
    }
  };

  return (
    <Card className={`${classes['movie__row']} ${className}`}>
      {width > 770 && (
        <ArrowBackIosNewIcon
          className={classes.arrow}
          onClick={() => handleScroll(-110)}
        />
      )}

      <div className={classes['movie__row-list']} ref={containerRef}>
        {children}
      </div>

      {width > 770 && (
        <ArrowForwardIosIcon
          className={classes.arrow}
          onClick={() => handleScroll(110)}
        />
      )}
    </Card>
  );
};

export default RowFrame;
