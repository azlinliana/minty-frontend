import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../../assets/styles/styles_laporan.css";
import SearchResultPembiayaanSahabat from "./SearchResult";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import {
  Breadcrumb,
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import axiosCustom from "../../../axios";

function SearchProfilSahabat() {
  // __________________________________ Frontend __________________________________
  // Back button
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  // Form validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // ___________________________________ Backend __________________________________
  // Display sahabat search result
  const location = useLocation();
  const resultSahabat = location.state.resultSahabat || [];

  // Display pembiayaan sahabat based on selected skim pembiayaan
  const [isSearchResultVisible, setIsSearchResultVisible] = useState(false);
  const handleSearchResultPembiayaanVisibility = () => {
    setIsSearchResultVisible(true);
  };

  // Get pembiayaan sahabat data
  const [pembiayaanSahabats, setPembiayaanSahabats] = useState([]);
  const [selectedSkimPembiayaan, setSelectedSkimPembiayaan] = useState(""); // Select skim pembiayaan from the dropdown

  const getPembiayaanSahabats = async (sahabatId) => {
    try {
      const response = await axiosCustom.get(
        `/laporan/profil-sahabat/pembiayaan/${sahabatId}`
      );
      if (response.status === 200) {
        setPembiayaanSahabats(response.data);
      } else {
        ErrorAlert(response); // Error from the backend or unknown error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  useEffect(() => {
    // Fetch skim pembiayaan sahabat with the correct sahabatId
    if (resultSahabat.length > 0) {
      const sahabatId = resultSahabat[0].id;
      getPembiayaanSahabats(sahabatId);
    }
  }, [resultSahabat, isSearchResultVisible]);

  return (
    <>
      <div className="page-title">
        <h1>Carian Pembiayaan Sahabat</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="breadcrumb-previous-link">
            Senarai Laporan
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Carian Pembiayaan Sahabat</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      {resultSahabat.map((dataSahabat) => (
        <React.Fragment key={dataSahabat.id}>
          <div>
            <div className="laporan-search-pg-header">
              <h2>Maklumat Sahabat</h2>
            </div>

            <div className="laporan-maklumat-sahabat-details-container">
              <Container fluid className="laporan-maklumat-sahabat-details">
                <Row>
                  <Col xs={12}>
                    <Form.Group controlId="namaSahabat">
                      <Form.Label className="form-label">Nama</Form.Label>

                      <Form.Control
                        type="text"
                        {...register("namaSahabat")}
                        value={dataSahabat.namaSahabat}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="sc-laporan-profil-sahabat-terperinci-spacing">
                  <Col xs={6}>
                    <Form.Group controlId="noKadPengenalanSahabat">
                      <Form.Label className="form-label">
                        No. Kad Pengenalan
                      </Form.Label>

                      <Form.Control
                        type="text"
                        value={dataSahabat.noKadPengenalanSahabat}
                        readOnly
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={6}>
                    <Form.Group controlId="noSahabat">
                      <Form.Label className="form-label">
                        No. Sahabat
                      </Form.Label>

                      <Form.Control
                        type="text"
                        value={dataSahabat.noSahabat}
                        readOnly
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>

          <div className="laporan-carian-skim-pembiayaan-sahabat-container">
            <div>
              <h3>Pilih Skim Pembiayaan</h3>
            </div>

            <Container fluid>
              {pembiayaanSahabats.length === 0 ? (
                <Alert variant="secondary">
                  Tiada maklumat pembiayaan untuk sahabat ini. Sila isi maklumat
                  tracking sahabat dahulu.
                </Alert>
              ) : (
                <Row>
                  <Form onReset={reset}>
                    <Col xs={12} xl={10}>
                      <Form.Group controlId="skimPembiayaanId" className="mb-3">
                        <Form.Label className="form-label">
                          Skim Pembiayaan
                        </Form.Label>

                        <Form.Control
                          as="select"
                          className="form-select"
                          {...register("skimPembiayaanId", {
                            required: "Sila pilih skim pembiayaan.",
                          })}
                          onChange={(e) => {
                            const selectedSkimPembiayaanId = e.target.value;
                            setSelectedSkimPembiayaan(selectedSkimPembiayaanId);
                          }}
                          aria-invalid={
                            errors.skimPembiayaanId ? "true" : "false"
                          }
                          defaultValue=""
                        >
                          <option value="" disabled>
                            --Pilih Skim Pembiayaan--
                          </option>
                          {[
                            ...new Set(
                              pembiayaanSahabats.map(
                                (pembiayaanSahabatsData) =>
                                  pembiayaanSahabatsData.skimPembiayaan
                              )
                            ),
                          ].map((skimPembiayaan, index) => (
                            <option key={index} value={skimPembiayaan}>
                              {skimPembiayaan}
                            </option>
                          ))}
                        </Form.Control>

                        {errors.skimPembiayaanId && (
                          <small className="text-danger">
                            {errors.skimPembiayaanId.message}
                          </small>
                        )}
                      </Form.Group>
                    </Col>

                    <Col xs={12} xl={2}>
                      <Button
                        onClick={handleSubmit(
                          handleSearchResultPembiayaanVisibility
                        )}
                        className="laporan-carian-skim-pembiayaan-sahabat-btn"
                      >
                        Cari
                      </Button>
                    </Col>
                  </Form>
                </Row>
              )}
            </Container>
          </div>

          {isSearchResultVisible && (
            <div className="laporan-hasil-carian-skim-pembiayaan-container">
              <SearchResultPembiayaanSahabat
                resultSahabat={resultSahabat}
                sahabatId={dataSahabat.id}
                pembiayaanSahabats={pembiayaanSahabats}
                selectedSkimPembiayaan={selectedSkimPembiayaan}
              />
            </div>
          )}
        </React.Fragment>
      ))}

      <div className="sc-kembali-btn-sahabat kembali-btn-container">
        <Button className="kembali-btn" onClick={goBack}>
          Kembali
        </Button>{" "}
      </div>
    </>
  );
}

export default SearchProfilSahabat;
