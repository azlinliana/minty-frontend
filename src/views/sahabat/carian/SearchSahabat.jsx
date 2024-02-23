import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../../assets/styles/styles_sahabat.css";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import axiosCustom from "../../../axios";

function SearchSahabat() {
  const navigate = useNavigate();

  // ----------FE----------
  // Form validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // ----------BE----------

  const searchNoKadPengenalanSahabat = async (noKadPengenalanSahabatInput) => {
    try {
      const response = await axiosCustom.get(
        `/sahabat/search/${noKadPengenalanSahabatInput.noKadPengenalanSahabat}`
      );

      if (response.status === 200) {
        navigate("/hasil-carian-sahabat", {
          state: { resultSahabat: response.data },
        }); // Set response data as a state
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error); // Error related to API response or client side
    }
  };

  return (
    <>
      <div className="page-title">
        <h1>Carian Sahabat</h1>
      </div>

      <Container fluid className="sahabat-search-container">
        <Form
          className="sahabat-search-bar"
          onSubmit={handleSubmit(searchNoKadPengenalanSahabat)}
          onReset={reset}
        >
          <Row>
            <Col xs={12} lg={10}>
              <Form.Group controlId="noKadPengenalanSahabat">
                <Form.Control
                  type="text"
                  maxLength={12}
                  placeholder="Masukkan no. kad pengenalan sahabat"
                  {...register("noKadPengenalanSahabat", { required: true })}
                  aria-invalid={
                    errors.noKadPengenalanSahabat ? "true" : "false"
                  }
                />

                {errors.noKadPengenalanSahabat?.type === "required" && (
                  <small className="text-danger">
                    No. kad pengenalan sahabat diperlukan.
                  </small>
                )}
              </Form.Group>
            </Col>

            <Col xs={12} lg={2} className="sahabat-search-button">
              <Form.Group>
                <div>
                  <Button
                    className="carian-sahabat-search-btn"
                    onClick={handleSubmit(searchNoKadPengenalanSahabat)}
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
