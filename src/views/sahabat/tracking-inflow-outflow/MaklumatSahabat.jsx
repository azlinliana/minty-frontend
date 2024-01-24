import React from "react";
import { Card, Container, Row, Col, Form } from "react-bootstrap";
import "../../../assets/styles/styles_sahabat.css";

function MaklumatSahabat({ dataSahabat }) {
  return (
    <div className="sahabatTrackingContent">
      <h2>Maklumat Sahabat</h2>

      <Card className="sahabatInfoCard">
        <Card.Body>
          <Container>
            <Row>
              <Col xs={12}>
                <Form.Group>
                  <Form.Label>Nama</Form.Label>
                  <Form.Control
                    type="text"
                    value={dataSahabat.namaSahabat}
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="sahabatInfoSpacing">
              <Col xs={6}>
                <Form.Group>
                  <Form.Label>No. Kad Pengenalan</Form.Label>
                  <Form.Control
                    type="text"
                    value={dataSahabat.noKadPengenalanSahabat}
                    disabled
                  />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label>No. Sahabat</Form.Label>
                  <Form.Control
                    type="text"
                    value={dataSahabat.noSahabat}
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
