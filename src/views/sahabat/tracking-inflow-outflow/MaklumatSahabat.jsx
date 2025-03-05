import React from "react";
import { Card, Container, Row, Col, Form } from "react-bootstrap";
import "../../../assets/styles/styles_sahabat.css";

// function MaklumatSahabat({ sahabatData }) {
function MaklumatSahabat() {
  return (
    <div className="card-tambah-minggu-sahabat-content">
      <h2>Maklumat Sahabat</h2>

      <Card className="card-tambah-minggu-sahabat-more-content">
        <Card.Body>
          <Container fluid>
            <Row>
              <Col xs={12}>
                <Form.Group>
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    type="text"
                    value="Nama Sahabat"
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="sahabat-carian-spacing">
              <Col xs={6}>
                <Form.Group>
                  <Form.Label>No. Kad Pengenalan</Form.Label>
                  <Form.Control
                    type="text"
                    value="No Kad Pengenalan Sahabat"
                    disabled
                  />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label>No. Sahabat</Form.Label>
                  <Form.Control
                    type="text"
                    value="No Sahabat"
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MaklumatSahabat;
