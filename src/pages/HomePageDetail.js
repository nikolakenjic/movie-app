import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import DataContext from '../context/DataContext';
import DetailFrame from '../UI/DetailFrame';
import HomeRow from '../components/HomeRow';
import classes from './HomePageDetail.module.css';

const HomePageDetail = () => {
  const { API_KEY, smallURL, baseURL, alternativeURL } =
    useContext(DataContext);
  const { id } = useParams();
  const location = useLocation();
  const fetchUrl = location?.state;

  const [movie, setMovie] = useState(null);
  const moviePath = movie?.backdrop_path;
  const URL = baseURL + moviePath;

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const response = await fetch(
        `${smallURL}/movie/${id}?api_key=${API_KEY}`
      );
      const data = await response.json();
      setMovie(data);
    };
    fetchMovieDetails();
  }, [API_KEY, id, smallURL]);

  if (!movie) {
    return <div style={{ textAlign: 'center', color: '#fff' }}>Loading..</div>;
  }

  return (
    <>
      <DetailFrame
        URL={URL}
        alternativeURL={alternativeURL}
        moviePath={moviePath}
        title={movie.title}
        overview={movie.overview}
      />
      <HomeRow fetchUrl={fetchUrl} className={classes['home__page-detail']} />
    </>
  );
};

export default HomePageDetail;
