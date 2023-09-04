import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Registration from './components/Registration';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import MovieDetail from './pages/MovieDetail';
import Movies from './pages/Movies';
import RootLayout from './pages/RootLayout';
import PrivateRoutes from './utils/PrivateRoutes';
import Login from './components/Login';
import HomePageDetail from './pages/HomePageDetail';

const router = createBrowserRouter([
  {
    path: '',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <PrivateRoutes />,
        children: [
          { index: true, element: <HomePage /> },
          { path: ':id', element: <HomePageDetail /> },
          { path: 'movies', element: <Movies /> },
          { path: 'movies/:id', element: <MovieDetail /> },
          { path: 'about', element: <AboutPage /> },
          { path: 'contact', element: <ContactPage /> },
        ],
      },
    ],
  },
  { path: 'registration', element: <Registration /> },
  { path: 'login', element: <Login /> },
  { path: 'login-page', element: <LoginPage /> },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
