import React from 'react';
import Card from './Card';
import Button from './Button';
import classes from './Modal.module.css';
import { Link } from 'react-router-dom';

const Modal = ({
  title,
  message,
  registration,
  login,
  error,
  removeOverlay,
}) => {
  return (
    <Card className={classes.modal}>
      <header
        className={`${classes.header} ${
          registration || login
            ? classes.success
            : error
            ? classes['header__error']
            : ''
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
            {registration
              ? "Let's Login and Start Exploring!"
              : error
              ? 'Try again'
              : login && "Yeah! Let's Get Started!"}
          </Button>
        </Link>
      </footer>
    </Card>
  );
};

export default Modal;
