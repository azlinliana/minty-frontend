import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../../../assets/styles/styles_laporan.css";
import ResultTF01 from "./SearchResult";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import { Container, Breadcrumb, Row, Col, Form, Button } from "react-bootstrap";
import { useLokasiStore } from "../../../store/options-store";
import axiosCustom from "../../../axios";

function SearchTf01() {
  // __________________________________ Frontend __________________________________
  const [isSearchResultTf01Visible, setIsSearchResultTf01Visible] =
    useState(false);

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
  const [selectedPusat, setSelectedPusat] = useState("");

  // Display wilayah, cawangan & pusat options
  const {
    wilayahOptions,
    displayWilayahs,
    cawanganOptions,
    displayCawangans,
    pusatOptions,
    displayPusats,
  } = useLokasiStore();

  useEffect(() => {
    displayWilayahs();
    displayCawangans();
    displayPusats();
  }, [displayWilayahs, displayCawangans, displayPusats]);

  // Search jadual TF01
  const [resultTF01, setResultTF01] = useState([]);

  const searchJadualTF01 = async (jadualTF01Input) => {
    try {
      const response = await axiosCustom.post(
        `/laporan/carian-jadual-tf01`,
        jadualTF01Input
      );

      if (response.status === 200) {
        setResultTF01(response.data);
        setIsSearchResultTf01Visible(true);
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
        <h1>Jadual TF01</h1>
        <Breadcrumb>
          <Breadcrumb.Item className="breadcrumb-previous-link">
            Senarai Laporan
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Jadual TF01</Breadcrumb.Item>
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
                <Col xs={12} md={4}>
                  <div>
                    <Form.Group>
                      <Form.Label className="form-label">Wilayah</Form.Label>

                      <Form.Control
                        as="select"
                        className="form-select"
                        {...register("kodWilayah", { required: true })}
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

                <Col xs={12} md={4}>
                  <div>
                    <Form.Group>
                      <Form.Label className="form-label">Cawangan</Form.Label>

                      <Form.Control
                        as="select"
                        className="form-select"
                        {...register("kodCawangan", { required: true })}
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

                <Col xs={12} md={4}>
                  <div>
                    <Form.Group>
                      <Form.Label className="form-label">Pusat</Form.Label>

                      <Form.Control
                        as="select"
                        className="form-select"
                        {...register("kodPusat", { required: true })}
                        onChange={(e) => {
                          setSelectedPusat(e.target.value);
                        }}
                        aria-invalid={errors.pusatId ? "true" : "false"}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          --Pilih Pusat--
                        </option>
                        {pusatOptions
                          // Filter options based on the selected cawangan
                          .filter(
                            (item) =>
                              selectedCawangan &&
                              item.kodCawangan === selectedCawangan
                          )
                          // Sort the filtered cawanganOptions alphabetically by namaCawangan
                          .sort((a, b) => a.namaPusat.localeCompare(b.namPusat))
                          .map((pusat) => (
                            <option key={pusat.id} value={pusat.kodPusat}>
                              {pusat.namaPusat}
                            </option>
                          ))}
                      </Form.Control>

                      {errors.pusatId?.type === "required" && (
                        <small className="text-danger">Pusat diperlukan.</small>
                      )}
                    </Form.Group>
                  </div>
                </Col>
              </Row>
            </Form>

            <div className="laporan-jadual-carian-btn-container">
              <Button
                className="laporan-jadual-carian-btn"
                onClick={handleSubmit(searchJadualTF01)}
              >
                Cari
              </Button>{" "}
            </div>
          </Container>

          {isSearchResultTf01Visible && (
            <div className="laporan-search-result-container">
              <ResultTF01 resultTF01={resultTF01} />
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

export default SearchTf01;
