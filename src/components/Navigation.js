import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useContext } from 'react';
import Navlinks from '../UI/Navlinks';
import Logout from './Logout';
import classes from './Navigation.module.css';
import DataContext from '../context/DataContext';
import NavModal from './NavModal';
import useWindowSize from '../hooks/useWindowSize';
import logo from '../images/logo-4.png';

const Navigation = () => {
  const { toggleMenu, setToggleMenu } = useContext(DataContext);
  const { width } = useWindowSize();

  if (width > 770) {
    setToggleMenu(false);
  }

  return (
    <header className={classes.header}>
      <img src={logo} alt="logo" className={classes.logo} />

      <nav>
        {width > 770 ? (
          <div className={classes.navbar}>
            <Navlinks />
            <Logout />
          </div>
        ) : (
          <div className={classes['toggle__show']}>
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setToggleMenu(true)}
              className={classes['toggle__show-icon']}
            />

            {toggleMenu && <NavModal />}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;
