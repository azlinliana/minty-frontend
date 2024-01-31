import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Auth.css";
import styled from "styled-components";
import ForgotPasswordModal from "./ForgotPasswordModal/ForgotPasswordModal";
import ErrorAlert from "../components/sweet-alert/ErrorAlert";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { RiEyeCloseLine } from "react-icons/ri";

import { BsEyeFill } from "react-icons/bs";
import backgroundImage from "../../assets/background-img.png";
import aimLogo from "../../assets/aim-logo.svg";
import axiosCustom from "../../axios";

// Background styling for this page route
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
  // ----------FE----------
  // Modal
  const [isModalForgotPassword, setIsModalForgotPassword] = useState(false);
  const handleCloseModalForgotPassword = () => setIsModalForgotPassword(false);
  const handleIsModalForgotPassword = () => setIsModalForgotPassword(true);

  // Redirect user to e-Penyelenggaraan
  const clickForgotPasswordLink = [
    {
      label: "Ke e-Penyelenggaraan",
      variant: "primary",
      onClick: openLinkInNewTab,
    },
  ];

  function openLinkInNewTab() {
    window.open("https://epenv3.aim.gov.my/", "_blank");
  }

  // Form validation
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // Show password
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // ----------BE----------
  const navigate = useNavigate();

  const handleSignIn = async (signInInput) => {
    try {
      const response = await axiosCustom.post(
        `/auth/login`, 
        signInInput
      );

      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);

        navigate("/carian-sahabat");
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error); // Error related to API response or client side
    }
  };

  return (
    <>
      <PageContainer>
        <Container fluid="md" className="signInContainer">
          <Row>
            <Col md={12} lg={6} className="signInHeader formHeader">
              <img src={aimLogo} alt="aim-logo" />

              <h1>Program Berikhtiar Menambah Rezeki (PBMR)</h1>
            </Col>

            <Col md={12} lg={6} className="formContent">
              <div className="formContentHeader">
                <h3>PBMR</h3>

                <h2>Selamat Datang</h2>
              </div>

              <Form onSubmit={handleSubmit(handleSignIn)} onReset={reset}>
                <Form.Group className="mb-3">
                  <Form.Label className="form-label">Id Kakitangan</Form.Label>

                  <Form.Control
                    type="text"
                    {...register("idKakitangan", { required: true })}
                    aria-invalid={errors.staffId ? "true" : "false"}
                    placeholder="Masukkan id kakitangan"
                  />

                  {errors.idKakitangan?.type === "required" && (
                    <small className="text-danger">
                      Id kakitangan diperlukan.
                    </small>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="form-label">Kata Laluan Kakitangan</Form.Label>

                  <InputGroup>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      {...register("kataLaluanKakitangan", { required: true })}
                      aria-invalid={errors.password ? "true" : "false"}
                      placeholder="Masukkan kata laluan"
                    />

                    <InputGroup.Text
                      className="showPasswordButton"
                      style={{ cursor: "pointer" }}
                      onClick={toggleShowPassword}
                    >
                      {showPassword ? <BsEyeFill /> : <RiEyeCloseLine />}
                    </InputGroup.Text>
                  </InputGroup>

                  {errors.kataLaluanKakitangan?.type === "required" && (
                    <small className="text-danger">
                      Kata laluan diperlukan.
                    </small>
                  )}
                </Form.Group>

                <Button
                  className="submitButton"
                  variant="outline-primary"
                  onClick={handleSubmit(handleSignIn)}
                >
                  Log Masuk
                </Button>
              </Form>

              {/* Forgot password */}
              <div className="callToAction">
                <p>
                  Terlupa kata laluan?{" "}
                  <Link
                    to="#"
                    className="forgotPasswordLink"
                    onClick={handleIsModalForgotPassword}
                  >
                    Klik di sini.
                  </Link>
                </p>

                <ForgotPasswordModal
                  show={isModalForgotPassword}
                  handleClose={handleCloseModalForgotPassword}
                  title="Tetap Semula Kata Laluan"
                  content={
                    <p>
                      {" "}
                      Sila tetapkan kata laluan anda semula melalui
                      e-Penyelenggaraan.
                    </p>
                  }
                  buttons={clickForgotPasswordLink}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </PageContainer>
    </>
  );
}

export default SignIn;
