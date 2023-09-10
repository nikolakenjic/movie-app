import React, { useContext, useState } from 'react';
import classes from './Registration.module.css';
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';
import Button from '../UI/Button';
import { useEffect } from 'react';
import SucceedOrFailed from './SucceedOrFailed';
import FormInput from '../UI/FormInput';
import ShowPassword from '../UI/ShowPassword';

const Login = () => {
  const { successOrError, setSuccessOrError } = useContext(DataContext);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [isButtonDisabled, setIsBtnDisabled] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('reg'));

    const logUser = users?.find(
      (user) =>
        user.username === username &&
        user.email === email &&
        user.password === password
    );

    if (logUser) {
      localStorage.setItem('loggedInUser', JSON.stringify(logUser));
      setSuccessOrError({
        title: 'Success',
      });
    } else {
      setSuccessOrError({
        title: 'Faild: To login',
        message: 'You must input correct username, email or password',
        error: true,
      });
    }
  };

  const togglePassword = (e) => {
    const x = document.getElementById('password');
    x.type = x.type === 'password' ? 'text' : 'password';
  };

  useEffect(() => {
    const handleDisable = () => {
      return !(username && email && password);
    };
    setIsBtnDisabled(handleDisable());
  }, [email, password, username]);

  return (
    <>
      {successOrError && <SucceedOrFailed />}
      <div className={classes.registration}>
        <Link to="/login-page">
          <Button className={classes['registration__btn']}>Back</Button>
        </Link>
        <h2 className={classes['registration__title']}>Login</h2>

        <form className={classes['registration__form']} onSubmit={handleLogin}>
          <FormInput
            id="user"
            title="Username:"
            type="text"
            valueName={username}
            setValue={setUsername}
          />

          <FormInput
            id="e-mail"
            title="Email:"
            type="email"
            valueName={email}
            setValue={setEmail}
          />

          <FormInput
            id="password"
            title="Password:"
            type="password"
            valueName={password}
            setValue={setPassword}
          />
          {password.length > 0 && (
            <ShowPassword togglePassword={togglePassword} />
          )}

          <Button
            className={`${classes['registration__form-btn']} ${
              isButtonDisabled ? classes.disabled : ''
            }`}
            disabled={isButtonDisabled}
          >
            Login
          </Button>
        </form>
      </div>
    </>
  );
};

export default Login;
