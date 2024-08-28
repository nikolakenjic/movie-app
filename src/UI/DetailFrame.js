import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import classes from './DetailFrame.module.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const DetailFrame = ({
  URL2,
  moviePath,
  alternativeURL,
  title,
  overview,
  movie,
}) => {
  console.log('Movie', movie);
  const [trailerUrl, setTrailerUrl] = useState('');

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.title || '')
        .then((url) => {
          if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
          }

          const urlParams = new URLSearchParams(new URL(url).search);
          console.log(urlParams);

          setTrailerUrl(urlParams.get('v'));
        })
        .catch((error) => console.log(error));
    }
  };

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div style={{ color: '#fff' }} className={classes['movie__detail']}>
      <Link to=".." relative="path">
        <Button className={classes['movie__detail-btn']}>Back</Button>
      </Link>

      <div className={classes['movie__detail-container']}>
        <img
          src={
            moviePath === null || moviePath === undefined
              ? alternativeURL
              : URL2
          }
          alt="movie"
          className={classes['movie__detail-container_img']}
        />

        <div className={classes['movie__detail-container_info']}>
          <h2 className={classes['movie__detail-container_info-title']}>
            {title}
          </h2>
          <p className={classes['movie__detail-container_info-description']}>
            {overview}
          </p>
          <Button
            className={classes['movie__detail-btn']}
            onClick={() => handleClick(movie)}
          >
            {trailerUrl ? 'Close Trailer' : 'Open Trailer'}
          </Button>
        </div>
      </div>

      <div style={{ padding: '40px' }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default DetailFrame;
