import React from 'react';
import classes from './AboutPage.module.css';

const Contact = () => {
  return (
    <div className={classes.about}>
      <h1>Contact:</h1>
      <p>kenjicniko@gmail.com</p>
      <p>
        <a
          href="https://github.com/nikolakenjic/movie-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://github.com/nikolakenjic/movie-app
        </a>
      </p>
    </div>
  );
};

export default Contact;
