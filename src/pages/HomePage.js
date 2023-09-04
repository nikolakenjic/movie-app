import React from 'react';
import HomeRow from '../components/HomeRow';
import useWindowScroll from '../hooks/useWindowScroll';
import requests from '../utils/request';
import ScrollButton from '../UI/ScrollButton';

const HomePage = () => {
  const windowScroll = useWindowScroll();

  return (
    <>
      <HomeRow title="Trending Now" fetchUrl={requests.fetchTrending} />
      <HomeRow title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <HomeRow title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <HomeRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <HomeRow title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <HomeRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <HomeRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

      {windowScroll > 180 && <ScrollButton />}
    </>
  );
};

export default HomePage;
