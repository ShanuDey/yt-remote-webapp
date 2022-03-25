import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ConfirmButton = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant='primary' onClick={handleShow}>
        {props.children}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.title || 'Confirm'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.body || 'Are you sure?'}</Modal.Body>
        <Modal.Footer>
          <Button
            variant='danger'
            onClick={() => {
              props.handleCancel(), handleClose();
            }}
          >
            {props.cancelButtonText || 'Cancel'}
          </Button>
          <Button
            variant='success'
            onClick={() => {
              props.handleOkay(), handleClose();
            }}
          >
            {props.okayButtonText || 'Save'}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ConfirmButton;
