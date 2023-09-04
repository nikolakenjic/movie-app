import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import classes from './DetailFrame.module.css';

const DetailFrame = ({ URL, moviePath, alternativeURL, title, overview }) => {
  return (
    <div style={{ color: '#fff' }} className={classes['movie__detail']}>
      <Link to=".." relative="path">
        <Button className={classes['movie__detail-btn']}>Back</Button>
      </Link>

      <div className={classes['movie__detail-container']}>
        <img
          src={
            moviePath === null || moviePath === undefined ? alternativeURL : URL
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
        </div>
      </div>
    </div>
  );
};

export default DetailFrame;
