import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../../../assets/styles/styles_laporan.css";
import ResultTf02 from "./SearchResult";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import { Container, Row, Col, Form, Button, Breadcrumb } from "react-bootstrap";
import { useLokasiStore } from "../../../store/options-store";

import axiosCustom from "../../../axios";

function SearchTf02() {
  // __________________________________ Frontend __________________________________
  // Controls visibility of the reports
  const [isSearchResultJadualTf02Visible, setIsSearchResultJadualTf02Visible] =
    useState(false);

  // Form validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // ___________________________________ Backend __________________________________
  // Display cawangan options
  const { cawanganOptions, displayCawangans } = useLokasiStore((state) => ({
    cawanganOptions: state.cawanganOptions,
    displayCawangans: state.displayCawangans,
  }));

  useEffect(() => {
    displayCawangans();
  }, [displayCawangans]);

  // Search jadual TF02
  const [resultTf02, setResultTF02] = useState([]);
  const searchJadualTF02 = async (jadualTF02Input) => {
    try {
      const response = await axiosCustom.post(
        `/laporan/carian-jadual-tf02`,
        jadualTF02Input
      );
      if (response.status === 200) {
        setResultTF02(response.data);
        setIsSearchResultJadualTf02Visible(true);
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
        <h1>Jadual TF02</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="breadcrumb-previous-link" href="#">
            Senarai Laporan
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Jadual TF02</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <div className="laporan-search-pg-header">
          <h2>Analisa Penghantaran Per RM - Bulanan</h2>
        </div>

        <div className="jadual-search-bar-section">
          <Container fluid className="jadual-search-bar">
            <Form onReset={reset}>
              <Row>
                {/* Cawangan */}
                <Col xs={12} md={12}>
                  <div>
                    <Form.Group>
                      <Form.Label className="form-label">Cawangan</Form.Label>

                      <Form.Control
                        as="select"
                        className="form-select"
                        {...register("cawanganId", { required: true })}
                        onChange={(e) => {}}
                        aria-invalid={errors.cawanganId ? "true" : "false"}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          --Pilih Cawangan--
                        </option>
                        {cawanganOptions.map((cawangan) => (
                          <option
                            key={cawangan.id}
                            value={cawangan.kodCawangan}
                          >
                            {cawangan.namaCawangan}
                          </option>
                        ))}
                      </Form.Control>

                      {errors.cawanganId?.type === "required" && (
                        <small className="text-danger">
                          Cawangan diperlukan.
                        </small>
                      )}
                    </Form.Group>
                  </div>
                </Col>
              </Row>

              <div className="laporan-jadual-carian-btn-container">
                <Button
                  className="laporan-jadual-carian-btn"
                  onClick={handleSubmit(searchJadualTF02)}
                >
                  Cari
                </Button>{" "}
              </div>
            </Form>
          </Container>

          {isSearchResultJadualTf02Visible && (
            <div className="laporan-search-result-container">
              <ResultTf02 resultTf02={resultTf02} />
            </div>
          )}

          <div className="kembali-btn-container">
            <Button className="kembali-btn">Kembali</Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchTf02;
