import React, { useContext } from 'react';
import classes from './NavModal.module.css';
import ReactDOM from 'react-dom';
import Backdrop from '../UI/Backdrop';
import DataContext from '../context/DataContext';
import Navlinks from '../UI/Navlinks';

const NavModal = () => {
  const { setToggleMenu } = useContext(DataContext);

  const removeOverlay = () => {
    setToggleMenu(false);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop removeOverlay={removeOverlay} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Navlinks className={classes['toggle__menu-links']} />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default NavModal;
