import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/Login';
import Button from '../UI/Button';
// import EmailForm from '../UI/EmailForm';
import classes from './LoginPage.module.css';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
      navigate('/');
    } else {
      navigate('/login-page');
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
        <h4>
          Ready to watch? Please Login or if you don't have account Sign Up
        </h4>
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

export default HomePage;
