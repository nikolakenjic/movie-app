import React from 'react';
import { useParams } from 'react-router-dom';
import classes from './MovieDetail.module.css';
import DataContext from '../context/DataContext';
import { useContext } from 'react';
import MoviesRow from '../components/MoviesRow';
import DetailFrame from '../UI/DetailFrame';

const MovieDetail = () => {
  const { originalMovies, baseURL, alternativeURL } = useContext(DataContext);

  const { id } = useParams();
  const movie = originalMovies.find((movie) => movie.id === parseInt(id));
  const moviePath = movie.backdrop_path;
  const URL = baseURL + moviePath;

  if (!movie) {
    return <div style={{ textAlign: 'center', color: '#fff' }}>Loading..</div>;
  }

  return (
    <>
      <DetailFrame
        moviePath={moviePath}
        URL={URL}
        alternativeURL={alternativeURL}
        title={movie.title}
        overview={movie.overview}
      />
      <MoviesRow movies={originalMovies} />
    </>
  );
};

export default MovieDetail;
