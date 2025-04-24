import React from "react";
import { Card, Container, Row, Col, Form } from "react-bootstrap";
import "../../../assets/styles/styles_sahabat.css";

// function MaklumatSahabat({ sahabatData }) {
function MaklumatSahabat() {
  return (
    <div className="card-funding-customer-content">
      <h2>Customer Details</h2>

      <Card className="card-funding-customer-more-content">
        <Card.Body>
          <Container fluid>
            <Row>
              <Col xs={12}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value="Customer Name"
                    disabled
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row className="customer-search-spacing">
              <Col xs={6}>
                <Form.Group>
                  <Form.Label>Customer ID</Form.Label>
                  <Form.Control
                    type="text"
                    value="Customer ID"
                    disabled
                  />
                </Form.Group>
              </Col>
              <Col xs={6}>
                <Form.Group>
                  <Form.Label>Customer Num.</Form.Label>
                  <Form.Control
                    type="text"
                    value="Customer Num."
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
