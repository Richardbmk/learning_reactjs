import React, { useEffect } from 'react';

const Modal = ({ modalContent, closeModal }) => {

  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 1000);
  })

  return (
    <div className='modal'>
      <h4>{modalContent}</h4>
    </div>
  );
};

export default Modal;
