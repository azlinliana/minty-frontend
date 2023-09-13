import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import React from 'react'

function ResultSahabat() {
  return(
    <>
      <div>
        <h1>Maklumat Inflow/Outflow Sahabat</h1>
        
        <Breadcrumb>
          <Breadcrumb.Item href="#">Inflow/Outflow</Breadcrumb.Item>
          <Breadcrumb.Item active>Maklumat Inflow/Outflow Sahabat</Breadcrumb.Item>
        </Breadcrumb>

        <p>Hasil Carian: 660828125772</p>
      </div>

      <div>
        <h2>Maklumat Sahabat</h2>

        <Container>
          <Row>
            <Col xs={12}>
              <Form.Group>
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" value="Rusiah binti Reduansa" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Form.Group>
                <Form.Label>No. Kad Pengenalan</Form.Label>
                <Form.Control type="text" value="660828125772" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Form.Group>
                <Form.Label>No. Sahabat</Form.Label>
                <Form.Control type="text" value="15601998" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Form.Group>
                <Form.Label>Wilayah</Form.Label>
                <Form.Control type="text" value="Sabah" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Form.Group>
                <Form.Label>Cawangan</Form.Label>
                <Form.Control type="text" value="Sabah" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Form.Group>
                <Form.Label>Pusat</Form.Label>
                <Form.Control type="text" value="An-Nur 2" />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Form.Group>
                <Form.Label>Kumpulan</Form.Label>
                <Form.Control type="text" value="Nur Jannah" />
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <h2>Maklumat Tracking Sahabat</h2>

        <Button variant="primary">Tambah Minggu</Button>{' '}

        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Minggu</th>
              <th>Jumlah Inflow (RM)</th>
              <th>Jumlah Outflow (RM)</th>
              <th>Tarikh Tracking</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
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
              <td>2</td>
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
              <td>3</td>
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
              <td>4</td>
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
  )
}

export default ResultSahabat