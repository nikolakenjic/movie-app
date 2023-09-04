import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import DataContext from '../context/DataContext';
import Backdrop from '../UI/Backdrop';
import Modal from '../UI/Modal';

const SucceedOrFailed = () => {
  const { successOrError, setSuccessOrError } = useContext(DataContext);

  const removeOverlay = () => {
    setSuccessOrError(null);
  };

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop removeOverlay={removeOverlay} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDOM.createPortal(
        <Modal {...successOrError} removeOverlay={removeOverlay} />,
        document.getElementById('overlay-root')
      )}
    </>
  );
};

export default SucceedOrFailed;
