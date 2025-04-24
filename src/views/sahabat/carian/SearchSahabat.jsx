import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../../assets/styles/styles_customers.css";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import axiosCustom from "../../../axios";

function SearchSahabat() {
  // ______________________________ Hook Declaration ______________________________
  const navigate = useNavigate();

  // __________________________________ Frontend __________________________________
  // Form validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // ___________________________________ Backend __________________________________
  // Search sahabat
  const handleSearchSahabat = async (noKadPengenalanSahabatInput) => {
    // try {
    //   const response = await axiosCustom.post(
    //     `sahabat/search`,
    //     noKadPengenalanSahabatInput
    //   );
    //   if (response.status === 200) {
    //     navigate("/hasil-carian-sahabat", {
    //       state: { resultSahabat: response.data },
    //     });
    //   } else {
    //     ErrorAlert(response);
    //   }
    // } catch (error) {
    //   ErrorAlert(error);
    // }
  };

  return (
    <>
      <div className="page-title">
        <h1>Search Customer</h1>
      </div>

      <Container className="customer-search-container">
        <Form className="customer-search-bar" onReset={reset}>
          <Row>
            {/* Search fo customer ID */}
            <Col xs={12} lg={10}>
              <Form.Group controlId="noKadPengenalanSahabat">
                <Form.Control
                  type="text"
                  placeholder="Enter customer ID"
                  {...register("noKadPengenalanSahabat", {
                    required: "Customer ID is required.",
                    pattern: {
                      value: /^\d{12}$/,
                      message: "Customer ID requires 12 digits.",
                    },
                  })}
                  aria-invalid={
                    errors.noKadPengenalanSahabat ? "true" : "false"
                  }
                />

                {/* Validate required field */}
                {errors.noKadPengenalanSahabat?.type === "required" && (
                  <small className="text-danger">
                    {errors.noKadPengenalanSahabat.message}
                  </small>
                )}

                {/* Validate pattern field */}
                {errors.noKadPengenalanSahabat?.type === "pattern" && (
                  <small className="text-danger">
                    {errors.noKadPengenalanSahabat.message}
                  </small>
                )}
              </Form.Group>
            </Col>

            <Col xs={12} lg={2} className="customer-search-button">
              <Form.Group>
                <div>
                  <Button
                    className="customer-search-btn"
                    onClick={handleSubmit(handleSearchSahabat)}
                  >
                    Cari
                  </Button>
                </div>
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </>
  );
}

export default SearchSahabat;
