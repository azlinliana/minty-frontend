import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

function ResultSahabat() {
  // Displaying sahabat search result
  const location = useLocation();
  const results = location.state.results || [];

  // Modal Create Minggu
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // Link pages
  const navigate = useNavigate()
  const clickKemasKini = () => navigate('/tracking-inflow-outflow', { state: {results}});

  return(
    <>
      <div>
        <h1>Maklumat Inflow/Outflow Sahabat</h1>
        
        <Breadcrumb>
          <Breadcrumb.Item href="#">Inflow/Outflow</Breadcrumb.Item>
          <Breadcrumb.Item active>Maklumat Inflow/Outflow Sahabat</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      {results.map((data) => (
        <div key={data.id}>
          <>
            <p>Hasil Carian: {data.noKadPengenalan}</p>
          
            <h2>Maklumat Sahabat</h2>

            <Container>
              <Row>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>Nama</Form.Label>
                    <Form.Control type="text" defaultValue={data.nama} />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>No. Kad Pengenalan</Form.Label>
                    <Form.Control type="text" defaultValue={data.noKadPengenalan} />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>No. Sahabat</Form.Label>
                    <Form.Control type="text" defaultValue={data.noSahabat} />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>Wilayah</Form.Label>
                    <Form.Control type="text" defaultValue="" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>Cawangan</Form.Label>
                    <Form.Control type="text" defaultValue="" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>Pusat</Form.Label>
                    <Form.Control type="text" defaultValue="" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>Kumpulan</Form.Label>
                    <Form.Control type="text" defaultValue="" />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </>
        </div>
      ))}

      <div>
        <h2>Maklumat Tracking Sahabat</h2>

        {/* Modal start */}
        <Button variant="primary" onClick={handleShow}>Tambah Minggu</Button>{' '}

        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header closeButton>
            <Modal.Title>Tambah Minggu</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form>
                <Form.Label>Minggu</Form.Label>
                <Form.Control type="number" placeholder="Masukkan minggu ke berapa" autoFocus />
            </Form>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Batal</Button>{' '}
            
            <Button variant="primary">Tambah</Button>{' '}
          </Modal.Footer>
        </Modal>
        {/* Modal end */}

        <Alert variant="danger">Sila kemas kini maklumat untuk minggu 5. Klik butang "Kemas Kini" bagi minggu berkenaan.</Alert>

        <Table responsive>
          <thead>
            <tr>
              <th>Minggu</th>
              <th>Jumlah Inflow (RM)</th>
              <th>Jumlah Outflow (RM)</th>
              <th>Tarikh Tracking</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ color: 'red', fontWeight: 'bold' }}>5</td>
              <td style={{ color: 'red', fontWeight: 'bold' }}>Tiada maklumat</td>
              <td style={{ color: 'red', fontWeight: 'bold' }}>Tiada maklumat</td>
              <td style={{ color: 'red', fontWeight: 'bold' }}>Tiada maklumat</td>
              <td>
                <Button variant="warning" onClick={clickKemasKini}>Kemas Kini</Button>{' '}
                <Button variant="danger">Padam</Button>{' '}
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>3412.35</td>
              <td>1243.00</td>
              <td>03-07-2023</td>
              <td>
                <Button variant="warning">Kemas Kini</Button>{' '}
                <Button variant="danger">Padam</Button>{' '}
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>3412.35</td>
              <td>1243.00</td>
              <td>03-07-2023</td>
              <td>
                <Button variant="warning">Kemas Kini</Button>{' '}
                <Button variant="danger">Padam</Button>{' '}
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>3412.35</td>
              <td>1243.00</td>
              <td>03-07-2023</td>
              <td>
                <Button variant="warning">Kemas Kini</Button>{' '}
                <Button variant="danger">Padam</Button>{' '}
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>3412.35</td>
              <td>1243.00</td>
              <td>03-07-2023</td>
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

export default ResultSahabat