import { useState } from 'react';

import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function IndexTrackingInflow() {
  // Modal Create Inflow
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <div>
        <Button variant="primary" onClick={handleShow}>Tambah</Button>{' '}

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Tambah Inflow</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
                <Form.Label>Kod Inflow</Form.Label>
                <Form.Control type="text" placeholder="Pilih Kod Inflow" autoFocus />

                <Form.Label>Keterangan 1</Form.Label>
                <Form.Control type="text" placeholder="Masukkan keterangan 1" autoFocus />

                <Form.Label>Keterangan 2</Form.Label>
                <Form.Control type="text" placeholder="Masukkan keterangan 2" autoFocus />
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Batal</Button>{' '}
            
            <Button variant="primary">Tambah</Button>{' '}
          </Modal.Footer>
        </Modal>

        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Kod</th>
              <th>Amaun (RM)</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>A1</td>
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
  );
}

export default IndexTrackingInflow;