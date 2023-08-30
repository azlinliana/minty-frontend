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

function SignIn() {
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
        <Row className="signInContainer">
          <Col md={12} lg={6} className="signInHeader formHeader">
            {/* SIGN IN FORM HEADER */}
            <img src="" alt="aim-logo" />
            <h1>Program Berikhtiar Menambah Rezeki (PBMR)</h1>
          </Col>

          {/* SIGN IN FORM CONTENT */}
          <Col md={12} lg={6} className="formContent">
            {/* FORM CONTENT HEADER */}
            <div className="formContentHeader">
              <h3>PBMR</h3>
              <h2>Selamat Datang</h2>
            </div>

            {/* FORM CONTENT */}
            <Form>
              <Form.Group className="mb-3" controlId="staffId">
                <Form.Label className="formLabel">Id Kakitangan</Form.Label>
                <Form.Control required type="text" placeholder="123456" />
                <Form.Control.Feedback type="invalid">
                  Sila masukkan Id kakitangan anda
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" controlId="signInStaffPassword">
                <Form.Label className="formLabel">Kata Laluan</Form.Label>
                <Form.Control
                  required
                  type="password"
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                />
                <Form.Control.Feedback type="invalid">
                  Sila masukkan kata laluan anda
                </Form.Control.Feedback>
              </Form.Group>

              <Button className="submitButton" variant="primary" type="submit">
                Log Masuk
              </Button>
            </Form>

            <div className="callToAction">
              {/* FORGOT PASSWORD CTA */}
              Terlupa kata laluan? Klik{" "}
              {<Link to="/forgotpassword">di sini.</Link>}
            </div>
          </Col>
        </Row>
      </Container>
    </PageContainer>
  );
}

export default SignIn;
