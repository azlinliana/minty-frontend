import { useState } from 'react';

import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Table from 'react-bootstrap/Table'

function Dimensi() {
  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <h1>Dimensi</h1>

      <Breadcrumb>
        <Breadcrumb.Item href="#">Senarai Selenggara</Breadcrumb.Item>
        <Breadcrumb.Item active>Dimensi</Breadcrumb.Item>
      </Breadcrumb>
      
      {/* Modal Start */}
      <Button variant="primary" onClick={handleShow}>
        Tambah
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Dimensi</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Kod Dimensi</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukkan kod dimensi"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Keterangan</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Tambah
          </Button>
        </Modal.Footer>
      </Modal>
      {/* Modal End */}

      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Nama</th>
              <th>Keterangan</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td></td>
              <td></td>
              <td>
                <Button variant="warning">Kemas Kini</Button>{' '}
                <Button variant="danger">Padam</Button>{' '}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default Dimensi