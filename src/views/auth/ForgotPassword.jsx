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
  background-image: url("https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
