import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  const auth = JSON.parse(localStorage.getItem('loggedInUser'));

  return auth ? <Outlet /> : <Navigate to="/welcome" />;
};

export default PrivateRoutes;
