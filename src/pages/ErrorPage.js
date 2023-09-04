import React from 'react';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      {/* <Navigation /> */}
      <main>
        <h1>An Error !!!</h1>
        <p>
          Back to <Link to="/">Home</Link>
        </p>
      </main>
    </>
  );
};

export default ErrorPage;
