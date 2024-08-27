import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import classes from './Movies.module.css';
import DataContext from '../context/DataContext';
import SearchIcon from '@material-ui/icons/Search';
import Button from '../UI/Button';
import Card from '../UI/Card';
import useWindowScroll from '../hooks/useWindowScroll';
import ScrollButton from '../UI/ScrollButton';

const Movies = () => {
  const nameInputRef = useRef();
  const {
    movies,
    originalMovies,
    setMovies,
    isLoading,
    error,
    setSearchName,
    baseURL,
    filtered,
    setFiltered,
    alternativeURL,
    viewAll,
    setViewAll,
    activeFilter,
    setActiveFilter,
    showAll,
    setShowAll,
  } = useContext(DataContext);

  const windowScroll = useWindowScroll();

  // Search unique Year
  const uniqueYears = Array.from(
    new Set(movies.map((movie) => new Date(movie.release_date).getFullYear()))
  );

  // Search
  const handleSearch = (e) => {
    e.preventDefault();

    const searchValue = nameInputRef.current.value;

    setSearchName(searchValue);
  };

  // Movies List
  const moviesList = movies?.map((movie) => {
    const convertDate = (dateString) => {
      const parts = dateString.split('-');
      const day = parts[2];
      const month = parts[1];
      const year = parts[0];

      return `${day}.${month}.${year}`;
    };

    const convertedDate = convertDate(movie.release_date);
    const moviePath = movie.poster_path || movie.backdrop_path;
    const URL = baseURL + moviePath;

    return (
      <Link key={movie.id} to={`${movie.id}`}>
        <div
          className={classes['movie__container-card']}
          style={{
            '--dynamic-content': `"${
              movie.release_date === '' ? movie.title : convertedDate
            }"`,
          }}
        >
          <img src={moviePath === null ? alternativeURL : URL} alt="img" />
        </div>
      </Link>
    );
  });

  const handleFilterChange = (filterType) => {
    let filteredMovies = [...movies];

    switch (filterType) {
      case 'newest':
        filteredMovies.sort(
          (a, b) => new Date(b.release_date) - new Date(a.release_date)
        );
        setFiltered(true);
        setActiveFilter('newest');
        break;
      case 'oldest':
        filteredMovies.sort(
          (a, b) => new Date(a.release_date) - new Date(b.release_date)
        );
        setFiltered(true);
        setActiveFilter('oldest');
        break;
      case 'title':
        filteredMovies.sort((a, b) => a.title.localeCompare(b.title));
        setFiltered(false);
        setActiveFilter('title');
        break;
      case 'popularity':
        filteredMovies.sort((a, b) => b.popularity - a.popularity);
        setFiltered(false);
        setActiveFilter('popularity');
        break;
      default:
        break;
    }

    setMovies(filteredMovies);
  };

  const aditionalFilter = (selectedYear) => {
    if (selectedYear === 'all') {
      document.getElementById('yearSelect').value = '';
      setMovies([...originalMovies]);
      setViewAll(false);
      setActiveFilter('all');
      setShowAll(false);
    } else {
      // Filter movies based on the selected year
      const filteredMovies = originalMovies.filter(
        (movie) => new Date(movie.release_date).getFullYear() === selectedYear
      );
      setMovies(filteredMovies);
      setViewAll(true);
      setActiveFilter('');
      setShowAll(true);
    }
  };

  return (
    <div className={classes.movies}>
      <div className={classes['movies__info']}>
        <h1 className={classes['movies__title']}>Find your Favourite Movie.</h1>

        <form onSubmit={handleSearch} className={classes['movie__input']}>
          <input
            type="text"
            name="movie"
            id="movie"
            placeholder="Search"
            ref={nameInputRef}
            required
          />
          <button type="submit" className={classes['search__icon']}>
            <SearchIcon style={{ fontSize: 30 }} />
          </button>
        </form>
      </div>

      {/* Loading*********** */}
      {isLoading && (
        <h1 style={{ textAlign: 'center', color: '#fff' }}>Loading...</h1>
      )}

      {/* Error */}
      {error && (
        <h2 style={{ textAlign: 'center', color: '#e50914' }}>
          Error...Failed to fetch.
        </h2>
      )}

      {/* Movies List */}
      {movies.length > 0 && !isLoading && (
        <div className={classes.fixed}>
          {!viewAll && (
            <div className={classes['fixed__btns']}>
              <Button
                onClick={() => handleFilterChange('newest')}
                className={`${classes['movie__btn']} ${
                  activeFilter === 'newest' ? classes.clicked : ''
                }`}
              >
                Newest Release
              </Button>
              <Button
                onClick={() => handleFilterChange('oldest')}
                className={`${classes['movie__btn']} ${
                  activeFilter === 'oldest' ? classes.clicked : ''
                }`}
              >
                Oldest Release
              </Button>
              <Button
                onClick={() => handleFilterChange('title')}
                className={`${classes['movie__btn']} ${
                  activeFilter === 'title' ? classes.clicked : ''
                }`}
              >
                Title Name
              </Button>
              <Button
                onClick={() => handleFilterChange('popularity')}
                className={`${classes['movie__btn']} ${
                  activeFilter === 'popularity' ? classes.clicked : ''
                }`}
              >
                Popularity
              </Button>
            </div>
          )}

          {filtered && (
            <div className={classes['new__btns']}>
              {showAll && (
                <Button
                  onClick={() => aditionalFilter('all')}
                  className={`${classes['movie__btn']} ${
                    activeFilter === 'all' ? classes.clicked : ''
                  }`}
                >
                  All
                </Button>
              )}

              <h4>Select Year: </h4>
              <select
                id="yearSelect"
                onChange={(e) => aditionalFilter(parseInt(e.target.value))}
              >
                {(activeFilter === 'all' ||
                  activeFilter === 'newest' ||
                  activeFilter === 'oldest') && <option value=""></option>}

                {uniqueYears.map((year) => {
                  if (!isNaN(year)) {
                    return (
                      <option key={year} value={year}>
                        {year}
                      </option>
                    );
                  }
                  return null;
                })}
              </select>
            </div>
          )}
          <Card className={classes['movie__container']}>{moviesList}</Card>
          {windowScroll > 180 && <ScrollButton />}
        </div>
      )}
    </div>
  );
};

export default Movies;
