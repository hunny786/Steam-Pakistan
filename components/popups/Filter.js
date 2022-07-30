import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

function FilterModal(props) {
  return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
            <Modal.Title>Filter</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className='row'>
                <div className='col-12'>
                    <Form.Select className='mb-2' aria-label="Default select example">
                        <option>Select Filter</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </Form.Select>
                </div>
            </div>
          </form>
        </Modal.Body>
      </Modal>
  );
}

export default FilterModal;