import React from 'react';
import Card from './Card';
import Button from './Button';
import classes from './Modal.module.css';
import { Link } from 'react-router-dom';

const Modal = ({ title, message, registration, error, removeOverlay }) => {
  return (
    <Card className={classes.modal}>
      <header
        className={`${classes.header} ${
          registration ? classes.success : error ? classes['header__error'] : ''
        }`}
      >
        <h2>{title}</h2>
      </header>
      <div
        className={`${classes.content} ${
          registration ? classes.success : error ? classes['header__error'] : ''
        }`}
      >
        <p>{message}</p>
      </div>
      <footer className={classes.actions}>
        <Link to="/">
          <Button onClick={removeOverlay}>
            {registration ? 'Tnx for Reg..' : error ? 'Try again' : 'Yeah!!!'}
          </Button>
        </Link>
      </footer>
    </Card>
  );
};

export default Modal;
