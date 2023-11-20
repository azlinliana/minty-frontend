import React from "react";
import "../sahabat.css";
import EditMinggu from "../minggu/Edit";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function MaklumatMinggu() {
  return(
    <div className="sahabatTrackingContent">
      
      <h2>Maklumat Minggu</h2>

      <div className="editMingguBtnPlacement"><EditMinggu /></div>

      <Card>
        <Card.Body>
          <Container>
            <Row>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label className="trackWeek">Bilangan Minggu</Form.Label>
                  <Form.Control type="text" defaultValue="" disabled />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label className="trackWeek">Tarikh Borang Minggu</Form.Label>
                  <Form.Control type="text" defaultValue="" disabled />
                </Form.Group>
              </Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export default MaklumatMinggu;
