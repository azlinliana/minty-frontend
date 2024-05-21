import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../../../assets/styles/styles_laporan.css";
import ResultTf01ByCawangan from "./SearchResult";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import { Container, Breadcrumb, Row, Col, Form, Button } from "react-bootstrap";
import { useLokasiStore } from "../../../store/options-store";

import axiosCustom from "../../../axios";

function SearchTf01ByCawangan() {
  // __________________________________ Frontend __________________________________
  // Controls the visibility of reports
  const [
    isSearchResultTf01CawanganVisible,
    setIsSearchResultTf01CawanganVisible,
  ] = useState(false);

  // Form validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // ___________________________________ Backend __________________________________
  const [selectedWilayah, setSelectedWilayah] = useState("");
  const [selectedCawangan, setSelectedCawangan] = useState("");

  // Display wilayah & cawangan options
  const { wilayahOptions, displayWilayahs, cawanganOptions, displayCawangans } = useLokasiStore((state) => ({
    wilayahOptions: state.wilayahOptions,
    displayWilayahs: state.displayWilayahs,
    cawanganOptions: state.cawanganOptions,
    displayCawangans: state.displayCawangans,
  }));

  useEffect(() => {
    displayWilayahs();
    displayCawangans();
  }, [displayWilayahs, displayCawangans]);

  // Search jadual TF01 by cawangan
  const [resultTf01ByCawangan, setResultTF01ByCawangan] = useState([]);

  const searchJadualTF01ByCawangan = async (jadualTF01ByCawanganInput) => {
    try {
      const response = await axiosCustom.post(
        `/laporan/carian-jadual-tf01-mengikut-cawangan`,
        jadualTF01ByCawanganInput
      );
      if (response.status === 200) {
        setResultTF01ByCawangan(response.data);
        setIsSearchResultTf01CawanganVisible(true);
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
        <h1>Jadual TF01 Mengikut Cawangan</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="breadcrumb-previous-link">
            Senarai Laporan
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Jadual TF01 Mengikut Cawangan
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <div className="laporan-search-pg-header">
          <h2>Senarai Sahabat Mengikut Cawangan, Blok, Pusat dan Pulangan</h2>
        </div>

        <div className="jadual-search-bar-section">
          <Container fluid className="jadual-search-bar">
            <Form onReset={reset}>
              <Row>
                <Col xs={12} md={6}>
                  <div>
                    <Form.Group>
                      <Form.Label className="form-label">Wilayah</Form.Label>

                      <Form.Control
                        as="select"
                        className="form-select"
                        {...register("wilayahId", { required: true })}
                        onChange={(e) => {
                          setSelectedWilayah(e.target.value);
                        }}
                        aria-invalid={errors.wilayahId ? "true" : "false"}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          --Pilih Wilayah--
                        </option>
                        {wilayahOptions
                          // Sort wilayah options alphabetically by namaWilayah
                          .sort((a, b) =>
                            a.namaWilayah.localeCompare(b.namaWilayah)
                          )
                          .map((wilayah) => (
                            <option key={wilayah.id} value={wilayah.kodWilayah}>
                              {wilayah.namaWilayah}
                            </option>
                          ))}
                      </Form.Control>

                      {errors.wilayahId?.type === "required" && (
                        <small className="text-danger">
                          Wilayah diperlukan.
                        </small>
                      )}
                    </Form.Group>
                  </div>
                </Col>

                <Col xs={12} md={6}>
                  <div>
                    <Form.Group>
                      <Form.Label className="form-label">Cawangan</Form.Label>

                      <Form.Control
                        as="select"
                        className="form-select"
                        {...register("cawanganId", { required: true })}
                        onChange={(e) => {
                          setSelectedCawangan(e.target.value);
                        }}
                        aria-invalid={errors.cawanganId ? "true" : "false"}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          --Pilih Cawangan--
                        </option>
                        {cawanganOptions
                          // Filter options based on the selected wilayah
                          .filter(
                            (item) =>
                              selectedWilayah &&
                              item.wilayahId === selectedWilayah
                          )
                          // Sort the filtered cawanganOptions alphabetically by namaCawangan
                          .sort((a, b) =>
                            a.namaCawangan.localeCompare(b.namaCawangan)
                          )
                          .map((cawangan) => (
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
            </Form>

            <div className="laporan-jadual-carian-btn-container">
              <Button
                className="laporan-jadual-carian-btn"
                onClick={handleSubmit(searchJadualTF01ByCawangan)}
              >
                Cari
              </Button>{" "}
            </div>
          </Container>

          {isSearchResultTf01CawanganVisible && (
            <div className="laporan-search-result-container">
              <ResultTf01ByCawangan
                resultTf01ByCawangan={resultTf01ByCawangan}
              />
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

export default SearchTf01ByCawangan;
