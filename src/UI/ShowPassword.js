import React from 'react';
import classes from './ShowPassword.module.css';

const ShowPassword = ({ name, togglePassword }) => {
  return (
    <div className={classes['registration__form-show']}>
      <input type="checkbox" id="show" onChange={togglePassword} name={name} />
      <label htmlFor="show">Show Password</label>
    </div>
  );
};

export default ShowPassword;
