import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ConfirmButton = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleNoButton = () => {
    if (props.handleNo) {
      props.handleNo();
    }
    handleClose();
  };

  const handleYesButton = () => {
    if (props.handleYes) {
      props.handleYes();
    }
    handleClose();
  };

  return (
    <>
      <Button
        variant={props.variant}
        className={props.className}
        onClick={handleShow}
      >
        {props.children}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title || 'Confirm'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body || 'Are you sure?'}</Modal.Body>
        <Modal.Footer>
          <Button variant='danger' onClick={handleNoButton}>
            {props.noButtonText || 'No'}
          </Button>
          <Button variant='success' onClick={handleYesButton}>
            {props.yesButtonText || 'Yes'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmButton;
