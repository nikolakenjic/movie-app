import React, { useContext } from 'react';
import DataContext from '../context/DataContext';
import classes from './Button.module.css';

const Button = ({ children, type, onClick, className, disabled }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${classes.button} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
