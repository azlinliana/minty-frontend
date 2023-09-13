import Modal from 'react-bootstrap/Modal'

function SelenggaraModal(props) {
  const { modalTitle, modalContent, modalFooter, isModalOpen, closeModal} = props;
  
  return(
    <>
      <Modal show={isModalOpen} onHide={closeModal} backdrop="static" keyboard={false}>
        <Modal.Header closeButton>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {modalContent}
        </Modal.Body>

        <Modal.Footer>
          {modalFooter}
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default SelenggaraModal