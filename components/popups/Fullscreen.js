import React from 'react';
import Modal from 'react-bootstrap/Modal';
import SummaryDashboardPopupView from '../summaryDashboardPopupView/summaryDashboardPopupView';

function FullScreenModal(props) {
  return (
    <>
      <Modal
        className='modal-fullscreen'
        {...props}
      >
        <Modal.Header closeButton>
            <Modal.Title><img className='me-2' src='../../icons/nav-dashboard-active.png' />Summary Dasboard</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <SummaryDashboardPopupView></SummaryDashboardPopupView>
        </Modal.Body>
    </Modal>
    </>
  );
}

export default FullScreenModal;