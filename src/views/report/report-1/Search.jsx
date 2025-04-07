import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "../../../assets/styles/styles_laporan.css";
import ResultReport1 from "./SearchResult";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import { Container, Breadcrumb, Row, Col, Form, Button } from "react-bootstrap";
import { useLokasiStore } from "../../../store/options-store";
import axiosCustom from "../../../axios";

function SearchReport1() {
  // __________________________________ Frontend __________________________________
  const [isSearchResultReport1Visible, setIsSearchResultReport1Visible] =
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
  const [resultReport1, setResultReport1] = useState([]);

  const searchJadualTF01 = async (jadualTF01Input) => {
    navigate('/laporan/carian-jadual-tf01');
    // try {
    //   const response = await axiosCustom.post(
    //     `/laporan/carian-jadual-tf01`,
    //     jadualTF01Input
    //   );

    //   if (response.status === 200) {
    //     setResultReport1(response.data);
    //     setIsSearchResultReport1Visible(true);
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
        <h1>Report 1</h1>
        
        <Breadcrumb>
          <Breadcrumb.Item className="breadcrumb-previous-link">
            Report List
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Report 1</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <div className="laporan-search-pg-header">
          <h2>Customer List Based on Branch, Block, Centre & Profit</h2>
        </div>

        <div className="jadual-search-bar-section">
          <Container fluid className="jadual-search-bar">
            <Form onReset={reset}>
              <Row>
                <Col xs={12} md={4}>
                  <div>
                    <Form.Group>
                      <Form.Label className="form-label">Region</Form.Label>

                      <Form.Control
                        as="select"
                        className="form-select"
                        {...register("kodWilayah", { required: true })}
                        onChange={(e) => {
                          setSelectedWilayah(e.target.value);
                        }}
                        aria-invalid={errors.kodWilayah ? "true" : "false"}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          --Choose Region--
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

                      {errors.kodWilayah?.type === "required" && (
                        <small className="text-danger">
                          Region is required.
                        </small>
                      )}
                    </Form.Group>
                  </div>
                </Col>

                <Col xs={12} md={4}>
                  <div>
                    <Form.Group>
                      <Form.Label className="form-label">Branch</Form.Label>

                      <Form.Control
                        as="select"
                        className="form-select"
                        {...register("kodCawangan", { required: true })}
                        onChange={(e) => {
                          setSelectedCawangan(e.target.value);
                        }}
                        aria-invalid={errors.kodCawangan ? "true" : "false"}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          --Choose Branch--
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

                      {errors.kodCawangan?.type === "required" && (
                        <small className="text-danger">
                          Branch is required.
                        </small>
                      )}
                    </Form.Group>
                  </div>
                </Col>

                <Col xs={12} md={4}>
                  <div>
                    <Form.Group>
                      <Form.Label className="form-label">Centre</Form.Label>

                      <Form.Control
                        as="select"
                        className="form-select"
                        {...register("kodPusat", { required: true })}
                        onChange={(e) => {
                          setSelectedPusat(e.target.value);
                        }}
                        aria-invalid={errors.kodPusat ? "true" : "false"}
                        defaultValue=""
                      >
                        <option value="" disabled>
                          --Choose Centre--
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

                      {errors.kodPusat?.type === "required" && (
                        <small className="text-danger">Centre is required.</small>
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
                Search
              </Button>{" "}
            </div>
          </Container>

          {/* {isSearchResultReport1Visible && ( */}
            <div className="laporan-search-result-container">
              <ResultReport1 
                resultReport1={resultReport1} 
              />
            </div>
          {/* )} */}

          <div className="kembali-btn-container">
            <Button className="kembali-btn">Back</Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchReport1;
