import React from 'react';
import Modal from 'react-bootstrap/Modal';
import SummarySchool from '../summarySchool/summarySchool';

function FullScreenModal2(props) {
  return (
    <>
      <Modal
        className='modal-fullscreen bg-solid'
        {...props}
      >
        <Modal.Header closeButton>
            <Modal.Title><img className='me-2' src='../../icons/nav-schools-active.png' />Grammar Public School</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <SummarySchool />
        </Modal.Body>
    </Modal>
    </>
  );
}

export default FullScreenModal2;