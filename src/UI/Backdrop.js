import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = ({ removeOverlay }) => {
  return <div className={classes.backdrop} onClick={removeOverlay} />;
};

export default Backdrop;
