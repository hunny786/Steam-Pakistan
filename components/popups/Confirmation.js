import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function ConfirmationModal(props) {
  return (
    <>
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
            <Modal.Title>Confirmation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className='row'>
                <div className='col-12'>
                    <p>Are you sure you want to Approve?</p>
                </div>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="success">Yes</Button>
        </Modal.Footer>
    </Modal>
    </>
  );
}

export default ConfirmationModal;