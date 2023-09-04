import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import DataContext from '../context/DataContext';
import classes from './Navlinks.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Logout from '../components/Logout';

const Navlinks = ({ className }) => {
  const { toggleMenu, setToggleMenu } = useContext(DataContext);

  return (
    <div className={`${classes['navbar__links']} ${className}`}>
      {toggleMenu && (
        <FontAwesomeIcon icon={faTimes} onClick={() => setToggleMenu(false)} />
      )}

      <NavLink
        to="/"
        end
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        onClick={() => setToggleMenu(false)}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        onClick={() => setToggleMenu(false)}
      >
        Movies
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        onClick={() => setToggleMenu(false)}
      >
        About
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? classes.active : undefined)}
        onClick={() => setToggleMenu(false)}
      >
        Contact
      </NavLink>

      {toggleMenu && <Logout />}
    </div>
  );
};

export default Navlinks;
