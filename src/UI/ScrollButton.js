import React from 'react';
import { useContext } from 'react';
import DataContext from '../context/DataContext';
import Button from './Button';
import classes from './ScrollButton.module.css';

const ScrollButton = () => {
  const { handleScroll } = useContext(DataContext);

  return (
    <Button className={classes.scroll} onClick={handleScroll}>
      Top
    </Button>
  );
};

export default ScrollButton;
