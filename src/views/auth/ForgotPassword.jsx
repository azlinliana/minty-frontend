import { useState } from "react";
import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Auth.css";

const PageContainer = styled.div`
  background-color: #134074;
  width: 100%;
  min-height: 100vh;
`;

function ForgotPassword() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <PageContainer>
      <Container fluid="md" className="container">
        <Row className="forgotPasswordContainer rowReverse">
          {/* SIGN IN FORM CONTENT */}
          <Col md={12} lg={6} className="formContent">
            {/* FORM CONTENT HEADER */}
            <div className="formContentHeader">
              <h3>PBMR</h3>
              <h2>Reset Semula Kata Laluan</h2>
            </div>

            {/* FORM CONTENT */}
            <Form>
              <Form.Group className="mb-3" controlId="staffEmail">
                <Form.Label className="formLabel">Emel Kakitangan</Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="aidanazihah@aim.gov.my"
                />
                <Form.Control.Feedback type="invalid">
                  Sila masukkan Emel kakitangan anda
                </Form.Control.Feedback>
              </Form.Group>

              <Button className="submitButton" variant="primary" type="submit">
                Tetap Kata Laluan Baharu
              </Button>
            </Form>

            <div className="callToAction">
              {/* FORGOT PASSWORD CTA */}
              Ingin log masuk semula? Klik {<Link to="/">di sini.</Link>}
            </div>
          </Col>

          <Col md={12} lg={6} className="forgotPasswordHeader formHeader">
            {/* SIGN IN FORM HEADER */}
            <img src="" alt="aim-logo" />
            <h1>Program Berikhtiar Menambah Rezeki (PBMR)</h1>
          </Col>
        </Row>
      </Container>
    </PageContainer>
  );
}

export default ForgotPassword;
