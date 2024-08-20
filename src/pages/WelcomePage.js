import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from '../UI/Button';
import classes from './WelcomePage.module.css';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      navigate('/');
    } else {
      navigate('/welcome');
    }
  }, [navigate]);

  return (
    <div className={classes['home__content']}>
      <img
        src="https://mebincdn.themebin.com/1664271580523.jpg"
        alt="bcg_img"
      />

      <div className={classes['home__content-info']}>
        <h1>Unlimited movies, TV shows, and more</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <br />
        <Link to="/login">
          <Button className={classes['home_content-info_btn']}>Login</Button>
        </Link>
        <Link to="/registration">
          <Button className={classes['home_content-info_btn']}>Sign up</Button>
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
