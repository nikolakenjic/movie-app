import React from 'react';
import { useParams } from 'react-router-dom';
import DataContext from '../context/DataContext';
import { useContext } from 'react';
import MoviesRow from '../components/MoviesRow';
import DetailFrame from '../UI/DetailFrame';
import Spinner from '../UI/Spinner';

const MovieDetail = () => {
  const { originalMovies, baseURL, alternativeURL } = useContext(DataContext);

  const { id } = useParams();
  const movie = originalMovies.find((movie) => movie.id === parseInt(id));
  const moviePath = movie.backdrop_path;
  const URL = baseURL + moviePath;

  if (!movie) {
    return <Spinner />;
  }

  return (
    <>
      <DetailFrame
        moviePath={moviePath}
        URL2={URL}
        alternativeURL={alternativeURL}
        title={movie.title}
        overview={movie.overview}
        movie={movie}
      />
      <MoviesRow movies={originalMovies} />
    </>
  );
};

export default MovieDetail;
