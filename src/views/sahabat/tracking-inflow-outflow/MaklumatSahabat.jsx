import React from "react";
import "../sahabat.css";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function MaklumatSahabat({dataSahabat}) {
  return(
    <div className="sahabatTrackingContent">
      <h2>Maklumat Sahabat</h2>

      <Card className="sahabatInfoCard">
        <Card.Body>
          <Container>
            <Row>
              <Col xs={12}>
                <Form.Group>
                  <Form.Label>Nama</Form.Label>
                  <Form.Control type="text" value={dataSahabat.namaSahabat} disabled />
                </Form.Group>
              </Col>
            </Row>

            <Row className="sahabatInfoSpacing">
              <Col xs={6}>
                <Form.Group>
                  <Form.Label>No. Kad Pengenalan</Form.Label>
                  <Form.Control type="text" value={dataSahabat.noKadPengenalanSahabat} disabled />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label>No. Sahabat</Form.Label>
                  <Form.Control type="text" value={dataSahabat.noSahabat} disabled />
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
