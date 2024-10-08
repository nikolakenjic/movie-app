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
  const [trailerUrl, setTrailerUrl] = useState('');
  const [trailerError, setTrailerError] = useState('');

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl('');
      setTrailerError('');
    } else {
      movieTrailer(movie?.title || movie?.original_title)
        .then((url) => {
          if (url) {
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
              url = 'https://' + url;
            }

            const urlParams = new URLSearchParams(new URL(url).search);
            setTrailerUrl(urlParams.get('v'));
            setTrailerError('');
          } else {
            setTrailerError('Trailer not available for this movie.');
          }
        })
        .catch((error) => {
          console.log(error);
          setTrailerError('Trailer not available for this movie.');
        });
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
            {trailerUrl ? 'Close' : 'Open'}
          </Button>

          {/* Display error message if trailer is not available */}
          {trailerError && (
            <p className={classes['movie__detail-container_error']}>
              {trailerError}
            </p>
          )}
        </div>
      </div>

      <div style={{ padding: '40px' }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  );
};

export default DetailFrame;
