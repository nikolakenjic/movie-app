import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import DataContext from '../context/DataContext';
import RowFrame from '../UI/RowFrame';
import classes from './MovieRow.module.css';

const MoviesRow = ({ movies }) => {
  const { baseURL, alternative2URL } = useContext(DataContext);

  const moviesList = movies?.map((movie) => {
    const moviePath = movie.poster_path;
    const URL = baseURL + moviePath;

    return (
      <Link to={`/movies/${movie.id}`} key={movie.id}>
        <img
          src={moviePath === null ? alternative2URL : URL}
          alt="movie"
          className={classes['movie__row-container_img']}
        />
      </Link>
    );
  });

  return (
    <RowFrame className={classes['movie__row-container']}>
      {moviesList}
    </RowFrame>
  );
};

export default MoviesRow;
