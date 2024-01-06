import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Link } from "react-router-dom";
import "./Auth.css";
import ForgotPasswordModal from "./ForgotPasswordModal/ForgotPasswordModal";
import styled from "styled-components";
import backgroundImage from "../../assets/background-img.png";
import aimLogo from "../../assets/aim-logo.svg";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ErrorAlert from "../components/sweet-alert/ErrorAlert";
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
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

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
        console.log(response.data.token);
        navigate("/search-sahabat");
      } else {
        console.log(response);
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      console.log(error);
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
                  <Form.Label className="formLabel" htmlFor="idKakitangan">
                    Id Kakitangan
                  </Form.Label>
                  <Controller
                    type="text"
                    id="idKakitangan"
                    name="idKakitangan"
                    control={control}
                    defaultValue=""
                    rules={{ required: "ID kakitangan diperlukan." }}
                    render={({ field: { onChange, value } }) => (
                      <Form.Control
                        type="text"
                        onChange={onChange}
                        value={value}
                        placeholder="Masukkan id kakitangan"
                        autoFocus
                      />
                    )}
                  />
                  {errors.idKakitangan && (
                    <Form.Text className="text-danger">
                      {errors.idKakitangan.message}
                    </Form.Text>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label
                    className="formLabel"
                    htmlFor="passwordKakitangan"
                  >
                    Kata Laluan
                  </Form.Label>
                  <Controller
                    type="password"
                    id="kataLaluanKakitangan"
                    name="kataLaluanKakitangan"
                    control={control}
                    defaultValue=""
                    rules={{ required: "Kata laluan diperlukan" }}
                    render={({ field: { onChange, value } }) => (
                      <Form.Control
                        type="password"
                        onChange={onChange}
                        placeholder="Masukkan kata laluan"
                        value={value}
                        autoFocus
                      />
                    )}
                  />
                  {errors.kataLaluanKakitangan && (
                    <Form.Text className="text-danger">
                      {errors.kataLaluanKakitangan.message}
                    </Form.Text>
                  )}
                </Form.Group>

                <Button
                  className="submitButton"
                  variant="primary"
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
