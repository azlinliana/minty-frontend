import React, { useState, useEffect, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import { Container, Breadcrumb, Row, Col, Form, Button } from "react-bootstrap";
import ResultTf01ByCawangan from "./SearchResult";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import "../../../assets/styles/styles_laporan.css";
import axiosCustom from "../../../axios";

function SearchTf01ByCawangan() {
  // -------- FE ---------
  // Controls the visibility of reports
  const [
    isSearchResultTf01CawanganVisible,
    setIsSearchResultTf01CawanganVisible,
  ] = useState(false);

  // Form validation
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // ----------BE----------
  const [selectedWilayah, setSelectedWilayah] = useState("");
  const [selectedCawangan, setSelectedCawangan] = useState("");

  const [wilayahOptions, setWilayahOptions] = useState([]);
  const [cawanganOptions, setCawanganOptions] = useState([]);

  // Fetch wilayah
  const fetchWilayahs = useCallback(async () => {
    try {
      const response = await axiosCustom.get(
        `/selenggara/wilayah/display-wilayah`
      );

      if (Array.isArray(response.data) && response.data.length > 0) {
        setWilayahOptions(
          response.data.map((wilayah) => ({
            value: wilayah.id,
            label: wilayah.namaWilayah,
          }))
        );

        fetchCawangans();
      } else {
        ErrorAlert(response.data);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  }, [setWilayahOptions]);

  useEffect(() => {
    fetchWilayahs();
  }, [fetchWilayahs]);

  // Fetch cawangan
  const fetchCawangans = useCallback(async () => {
    try {
      const response = await axiosCustom.get(
        `/selenggara/cawangan/display-cawangan`
      );

      if (Array.isArray(response.data) && response.data.length > 0) {
        setCawanganOptions(
          response.data.map((cawangan) => ({
            value: cawangan.id,
            label: cawangan.namaCawangan,
            wilayahId: cawangan.wilayahId,
          }))
        );
      } else {
        ErrorAlert(response.data);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  }, [setCawanganOptions]);

  useEffect(() => {
    fetchCawangans();
  }, [fetchCawangans]);

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
            <Form onSubmit={handleSubmit} onReset={reset}>
              <Row>
                <Col xs={12} md={6}>
                  <div>
                    <Form.Group>
                      <Form.Label>Wilayah</Form.Label>
                      <Controller
                        id="wilayahId"
                        name="wilayahId"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Wilayah diperlukan." }}
                        render={({ field: { onChange } }) => (
                          <Form.Select
                            onChange={(e) => {
                              setSelectedWilayah(e.target.value);
                              onChange(e);
                            }}
                            defaultValue=""
                          >
                            <option value="" disabled>
                              --Pilih Wilayah--
                            </option>
                            {wilayahOptions.map((wilayah) => (
                              <option key={wilayah.value} value={wilayah.value}>
                                {wilayah.label}
                              </option>
                            ))}
                          </Form.Select>
                        )}
                      />
                      {errors.wilayahId && (
                        <small className="text-danger">
                          {errors.wilayahId.message}
                        </small>
                      )}
                    </Form.Group>
                  </div>
                </Col>

                <Col xs={12} md={6}>
                  <div>
                    <Form.Group>
                      <Form.Label>Cawangan</Form.Label>
                      <Controller
                        id="cawanganId"
                        name="cawanganId"
                        control={control}
                        defaultValue=""
                        rules={{ required: "Cawangan diperlukan." }}
                        render={({ field: { onChange } }) => (
                          <Form.Select
                            onChange={(e) => {
                              setSelectedCawangan(e.target.value);
                              onChange(e);
                            }}
                            defaultValue=""
                          >
                            <option value="" disabled>
                              --Pilih Cawangan--
                            </option>
                            {cawanganOptions
                              .filter(
                                (item) =>
                                  selectedWilayah &&
                                  item.wilayahId === Number(selectedWilayah)
                              )
                              .map((cawangan) => (
                                <option
                                  key={cawangan.value}
                                  value={cawangan.value}
                                >
                                  {cawangan.label}
                                </option>
                              ))}
                          </Form.Select>
                        )}
                      />
                      {errors.cawanganId && (
                        <small className="text-danger">
                          {errors.cawanganId.message}
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
