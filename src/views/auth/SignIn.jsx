import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import ForgotPasswordModal from "./ForgotPasswordModal/ForgotPasswordModal";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";
import { RiEyeCloseLine } from "react-icons/ri";
import { BsEyeFill } from "react-icons/bs";
import mintyLogo from "../../assets/minty-logo.svg";
import "../../assets/styles/styles_auth.css";

function SignIn() {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalForgotPassword, setIsModalForgotPassword] = useState(false);
  const handleCloseModalForgotPassword = () => setIsModalForgotPassword(false);
  const handleIsModalForgotPassword = () => setIsModalForgotPassword(true);

  // Redirect user to another pages
  const clickForgotPasswordLink = [
    {
      label: "Redirect to another pages",
      variant: "primary",
      onClick: openLinkInNewTab,
    },
  ];

  function openLinkInNewTab() {
    window.open("", "_blank");
  }

  // Redirect to dashboard
  const navigate = useNavigate();

  function clickSignIn() {
    navigate("/dashboard");
  };

  // Form validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Show password
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="pg-container">
        <Container fluid="md" className="signin-container">
          <Row>
            <Col md={12} lg={6} className="signin-header">
              <img src={mintyLogo} alt="minty-logo" />

              <h1>Minty</h1>
            </Col>

            <Col md={12} lg={6} className="signin-form-container">
              <div className="signin-form-header">
                <h3>Minty</h3>
                <h2>Welcome</h2>
              </div>

              <Form onSubmit={handleSubmit()} onReset={reset}>
                <Form.Group className="mb-3">
                  <Form.Label className="form-label">Username</Form.Label>

                  <Form.Control
                    type="text"
                    {...register("username", { required: true })}
                    aria-invalid={errors.staffId ? "true" : "false"}
                    placeholder="Username"
                  />

                  {errors.username?.type === "required" && (
                    <small className="text-danger">
                      Username is required.
                    </small>
                  )}
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label className="form-label">
                    Password
                  </Form.Label>

                  <InputGroup>
                    <Form.Control
                      type={showPassword ? "text" : "password"}
                      {...register("password", { required: true })}
                      aria-invalid={errors.password ? "true" : "false"}
                      placeholder="Password"
                    />

                    <InputGroup.Text
                      style={{ cursor: "pointer" }}
                      onClick={toggleShowPassword}
                    >
                      {showPassword ? <BsEyeFill /> : <RiEyeCloseLine />}
                    </InputGroup.Text>
                  </InputGroup>

                  {errors.password?.type === "required" && (
                    <small className="text-danger">
                      Password is required.
                    </small>
                  )}
                </Form.Group>

                <Button
                  className="signin-submit-button"
                  onClick={handleSubmit(clickSignIn)}
                >
                  Sign In
                </Button>
              </Form>

              {/* Forgot password */}
              <div className="signin-cta">
                <p>
                  Forgot password?{" "}
                  <Link
                    to="#"
                    className="forgot-password-anchor"
                    onClick={handleIsModalForgotPassword}
                  >
                    Click here.
                  </Link>
                </p>

                <ForgotPasswordModal
                  show={isModalForgotPassword}
                  handleClose={handleCloseModalForgotPassword}
                  title="Forgot Password"
                  content={
                    <p>
                      {" "}
                      Please reset you password.
                    </p>
                  }
                  buttons={clickForgotPasswordLink}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default SignIn;
