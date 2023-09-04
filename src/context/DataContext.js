import { createContext, useState, useEffect } from 'react';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [searchName, setSearchName] = useState('');
  const [movies, setMovies] = useState([]);
  const [originalMovies, setOriginalMovies] = useState([]);
  const [filtered, setFiltered] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [auth, setAuth] = useState(false);
  const [viewAll, setViewAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState('');
  const [showAll, setShowAll] = useState(false);

  const [successOrError, setSuccessOrError] = useState(null);

  const [toggleMenu, setToggleMenu] = useState(false);

  const baseURL = 'https://image.tmdb.org/t/p/original';
  const alternativeURL =
    'https://images.unsplash.com/photo-1478720568477-152d9b164e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';
  const alternative2URL =
    'https://images.unsplash.com/photo-1486693326701-1ea88c6e2af3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80';

  // API key ********************************
  const API_KEY = '21475c067722582a4215d2d5564f158e';
  const smallURL = 'https://api.themoviedb.org/3';
  const URL = `${smallURL}/search/movie?query=${searchName}&api_key=${API_KEY}`;

  useEffect(() => {
    setIsLoading(true);
    setError(false);

    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setMovies(data.results);
        setOriginalMovies(data.results);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setError(true);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [URL]);

  // Scroll
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <DataContext.Provider
      value={{
        API_KEY,
        smallURL,
        searchName,
        setSearchName,
        movies,
        setMovies,
        originalMovies,
        setOriginalMovies,
        baseURL,
        isLoading,
        error,
        auth,
        setAuth,
        filtered,
        setFiltered,
        alternativeURL,
        alternative2URL,
        viewAll,
        setViewAll,
        activeFilter,
        setActiveFilter,
        showAll,
        setShowAll,
        successOrError,
        setSuccessOrError,
        toggleMenu,
        setToggleMenu,
        handleScroll,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
