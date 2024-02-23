import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { Form, Button, Row, Col, Container } from "react-bootstrap";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import "../../../assets/styles/styles_sahabat.css";
import axiosCustom from "../../../axios";

function SearchSahabat() {
  // ----------FE----------
  // Form validation
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // ----------BE----------
  const navigate = useNavigate();

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
              <Form.Group>
                <Controller
                  id="noKadPengenalanSahabat"
                  name="noKadPengenalanSahabat"
                  control={control}
                  defaultValue=""
                  rules={{ required: "No. kad pengenalan sahabat diperlukan." }}
                  render={({ field: { onChange, value } }) => (
                    <Form.Control
                      className="carian-sahabat-input-field"
                      type="text"
                      maxLength={12}
                      onChange={onChange}
                      value={value}
                      placeholder="Masukkan no. kad pengenalan sahabat"
                      autoFocus
                    />
                  )}
                />
                {errors.noKadPengenalanSahabat && (
                  <small className="text-danger">
                    {errors.noKadPengenalanSahabat.message}
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
