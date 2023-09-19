import React from "react";
import "./Auth.css";
import styled from "styled-components";
import backgroundImage from "../../assets/background-img.png";
import aimLogo from "../../assets/aim-logo.svg";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ForgotPasswordModal from "./ForgotPasswordModal/ForgotPasswordModal";

// BACKGROUND STYLING FOR THIS PAGE ROUTE
const PageContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function SignIn() {
  // FORM VERIFICATION
  // Ensure that the input fields are filled
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  // MODAL DISPLAY
  // useState hook to manage modal dislay's visibility
  const [showModal1, setShowModal1] = useState(false);
  const handleCloseModal1 = () => setShowModal1(false);
  const handleShowModal1 = () => setShowModal1(true);

  const buttons1 = [
    {
      label: "Ke e-Penyelenggaraan",
      variant: "primary",
      onClick: openLinkInNewTab,
    },
  ];

  // to redirect users to e-Penyelenggaraan
  function openLinkInNewTab() {
    window.open("https://epenv3.aim.gov.my/", "_blank");
  }

  return (
    <PageContainer>
      <Container fluid="md" className="container">
        <Row className="signInContainer">
          <Col md={12} lg={6} className="signInHeader formHeader">
            {/* SIGN IN FORM HEADER */}
            <img src={aimLogo} alt="aim-logo" />
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
            <Form onSubmit={handleSubmit(onSubmit)}>
              <Form.Group className="mb-3" controlId="staffId">
                <Form.Label className="formLabel">Id Kakitangan</Form.Label>
                <Controller
                  name="staffId"
                  control={control}
                  defaultValue=""
                  rules={{ required: "ID kakitangan diperlukan" }}
                  render={({ field }) => (
                    <Form.Control type="text" placeholder="123456" {...field} />
                  )}
                />
                {errors.staffId && (
                  <Form.Text className="text-danger">
                    {errors.staffId.message}
                  </Form.Text>
                )}
              </Form.Group>

              <Form.Group className="mb-3" controlId="staffPassword">
                <Form.Label className="formLabel">Kata Laluan</Form.Label>
                <Controller
                  name="staffPassword"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Kata laluan diperlukan" }}
                  render={({ field }) => (
                    <Form.Control
                      type="password"
                      placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                      {...field}
                    />
                  )}
                />
                {errors.staffPassword && (
                  <Form.Text className="text-danger">
                    {errors.staffPassword.message}
                  </Form.Text>
                )}
              </Form.Group>

              <Button className="submitButton" variant="primary" type="submit">
                Log Masuk
              </Button>
            </Form>

            <div className="callToAction">
              <p>
                Terlupa kata laluan?{" "}
                <Link to="#" onClick={handleShowModal1}>
                  Klik di sini.
                </Link>
              </p>

              <ForgotPasswordModal
                show={showModal1}
                handleClose={handleCloseModal1}
                title="Tetap Semula Kata Laluan"
                content={
                  <p>
                    Sila tetapkan kata laluan anda semula melalui
                    e-Penyelenggaraan.
                  </p>
                }
                buttons={buttons1}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </PageContainer>
  );
}

export default SignIn;
