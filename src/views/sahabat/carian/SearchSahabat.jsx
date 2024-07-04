import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../../assets/styles/styles_sahabat.css";
import { Container, Form, Row, Col, Button } from "react-bootstrap";
import { useSahabatStore } from "../../../store/sahabat/sahabat-store";

function SearchSahabat() {
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
  const { sahabats, searchSahabat } = useSahabatStore((state) => ({
    sahabats: state.sahabats,
    searchSahabat: state.searchSahabat,
  }));

  // Pass input and navigate to the hasil carian sahabat page with the sahabat data
  const [searchComplete, setSearchComplete] = useState(false);

  const handleSearchSahabat = async (searchSahabatData) => {
    await searchSahabat(searchSahabatData);

    setSearchComplete(true);
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (searchComplete && sahabats.length > 0) {
      navigate("/hasil-carian-sahabat", {
        state: { resultSahabat: sahabats },
      });
    }
  }, [sahabats, searchComplete, navigate]);

  return (
    <>
      <div className="page-title">
        <h1>Carian Sahabat</h1>
      </div>

      <Container fluid className="sahabat-search-container">
        <Form className="sahabat-search-bar" onReset={reset}>
          <Row>
            {/* Carian no. kad pengenalan sahabat */}
            <Col xs={12} lg={10}>
              <Form.Group controlId="noKadPengenalanSahabat">
                <Form.Control
                  type="text"
                  placeholder="Masukkan no. kad pengenalan sahabat"
                  {...register("noKadPengenalanSahabat", {
                    required: "No. kad pengenalan sahabat diperlukan.",
                    pattern: {
                      value: /^\d{12}$/,
                      message:
                        "No. kad pengenalan sahabat perlu mengandungi 12 digit.",
                    },
                  })}
                  aria-invalid={
                    errors.noKadPengenalanSahabat ? "true" : "false"
                  }
                />

                {/* Validate required field */}
                {errors.noKadPengenalanSahabat?.type === "required" && (
                  <small className="text-danger">
                    No. kad pengenalan sahabat diperlukan.
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
            
            <Col xs={12} lg={2} className="sahabat-search-button">
              <Form.Group>
                <div>
                  <Button
                    className="carian-sahabat-search-btn"
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
