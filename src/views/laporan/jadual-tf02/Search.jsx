import React, { useState, useEffect, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import { Container, Row, Col, Form, Button, Breadcrumb } from "react-bootstrap";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import ResultTf02 from "./SearchResult";
import "../../../assets/styles/styles_laporan.css";
import axiosCustom from "../../../axios";

function SearchTf02() {
  // ------- FE ---------
  // Controls visibility of the reports
  const [isSearchResultJadualTf02Visible, setIsSearchResultJadualTf02Visible] =
    useState(false);

  // Form validation
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // ----------BE----------
  const [selectedCawangan, setSelectedCawangan] = useState("");

  const [cawanganOptions, setCawanganOptions] = useState([]);

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
            <Row>
              {/* Cawangan */}
              <Col xs={12} md={12}>
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
                          {cawanganOptions.map((cawangan) => (
                            <option key={cawangan.value} value={cawangan.value}>
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

            <div className="laporan-jadual-carian-btn-container">
              <Button
                className="laporan-jadual-carian-btn"
                onClick={handleSubmit(searchJadualTF02)}
              >
                Cari
              </Button>{" "}
            </div>
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
