import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button';
import classes from './Logout.module.css';

const Logout = () => {
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/welcome');
  };

  return (
    <Button onClick={logoutHandler} className={classes.logout}>
      Logout
    </Button>
  );
};

export default Logout;
