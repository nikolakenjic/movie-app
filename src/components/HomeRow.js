import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import RowFrame from '../UI/RowFrame';
import classes from './HomeRow.module.css';

const HomeRow = ({ fetchUrl, title, className }) => {
  const [homeMovie, setHomeMovie] = useState([]);

  const URL = 'https://api.themoviedb.org/3';
  const baseURL2 = 'https://image.tmdb.org/t/p/original';

  useEffect(() => {
    const fetchHomeMovie = async () => {
      const response = await fetch(`${URL}${fetchUrl}`);
      const data = await response.json();
      setHomeMovie(data.results);
    };
    fetchHomeMovie();
  }, [fetchUrl]);

  const homeMovieList = homeMovie?.map((movie) => {
    return (
      <Link
        key={movie.id}
        to={`/${movie.id}`}
        state={fetchUrl}
        className={classes['home__row-container']}
      >
        <img
          src={`${baseURL2}${movie.poster_path}`}
          alt="img"
          className={classes['home__row-img']}
        />
      </Link>
    );
  });

  return (
    <>
      <h2 className={classes['home__row-title']}>{title}</h2>
      <RowFrame className={`${classes['home__row']} ${className}`}>
        {homeMovieList}
      </RowFrame>
      ;
    </>
  );
};

export default HomeRow;
