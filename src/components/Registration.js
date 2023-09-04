import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import classes from './Registration.module.css';
import Button from '../UI/Button';
import DataContext from '../context/DataContext';
import SucceedOrFailed from './SucceedOrFailed';

const Registration = () => {
  // const navigate = useNavigate();
  const { successOrError, setSuccessOrError } = useContext(DataContext);
  let users = JSON.parse(localStorage.getItem('reg')) || [];

  const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

  const [username, setUsername] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatchPwd, setValidMatchPwd] = useState(false);
  const [matchPwdFocus, setMatchPwdFocus] = useState(false);

  // Check Username
  useEffect(() => {
    const result = USER_REGEX.test(username);
    setValidName(result);
  }, [USER_REGEX, username]);

  // Check email
  useEffect(() => {
    const result = EMAIL_REGEX.test(email);

    setValidEmail(result);
  }, [EMAIL_REGEX, email]);

  // Check password
  useEffect(() => {
    const result = PWD_REGEX.test(password);

    setValidPwd(result);
    const match = password === matchPwd;
    setValidMatchPwd(match);
  }, [PWD_REGEX, matchPwd, password]);

  // Submit Register
  const handleRegister = (e) => {
    e.preventDefault();

    const newUser = {
      username,
      email,
      password,
      matchPwd,
    };

    users.push(newUser);

    localStorage.setItem('reg', JSON.stringify(users));

    setSuccessOrError({
      title: 'Successfully registered',
      message: 'You are now registered',
      registration: true,
    });
  };

  return (
    <>
      {successOrError && <SucceedOrFailed />}
      <div className={classes.registration}>
        <Link to="/login-page" className={classes['registration__btn']}>
          <Button>Back</Button>
        </Link>
        <h2 className={classes['registration__title']}>Sign Up</h2>

        <form
          onSubmit={handleRegister}
          className={classes['registration__form']}
        >
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            onFocus={() => setUserFocus(true)}
            onBlur={() => setUserFocus(false)}
          />
          {userFocus && !validName && (
            <p className={classes['registration__form-invalid']}>
              4 to 24 characters. Must begin with a letter. Letters, numbers,
              underscores, hyphens allowed.
            </p>
          )}

          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
          {emailFocus && !validEmail && (
            <p className={classes['registration__form-invalid']}>
              folow the example: example@something.com
            </p>
          )}

          <label htmlFor="pwd">Password:</label>
          <input
            id="pwd"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            onFocus={() => setPwdFocus(true)}
            onBlur={() => setPwdFocus(false)}
          />
          {pwdFocus && !validPwd && (
            <p className={classes['registration__form-invalid']}>
              8 to 24 characters. Must include uppercase and lowercase letters,
              a number and a special character.{' '}
              <span> Allowed special characters: ! @ # $ & </span>
            </p>
          )}

          <label htmlFor="confirm">Confirm Password:</label>
          <input
            id="confirm"
            type="password"
            value={matchPwd}
            onChange={(e) => setMatchPwd(e.target.value)}
            required
            onFocus={() => setMatchPwdFocus(true)}
            onBlur={() => setMatchPwdFocus(false)}
          />
          {matchPwdFocus && !validMatchPwd && (
            <p className={classes['registration__form-invalid']}>
              Repeat the password. Must match the first password input field.
            </p>
          )}

          <Button className={classes['registration__form-btn']}>Sign Up</Button>
        </form>
      </div>
    </>
  );
};

export default Registration;
