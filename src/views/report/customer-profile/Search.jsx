import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../../assets/styles/styles_report.css";
import SearchResultPembiayaanSahabat from "./SearchResult";
import {
  Breadcrumb,
  Container,
  Row,
  Col,
  Form,
  Button,
  Alert,
} from "react-bootstrap";
import { useLaporanStore } from "../../../store/laporan/laporan-store";

function SearchCustomerProfile() {
  // ______________________________ Hook Declaration ______________________________
  const navigate = useNavigate();
  const location = useLocation();

  // __________________________________ Frontend __________________________________
  // Back button
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
  const sahabatData = location.state.resultSahabat[0];
  const sahabatId = sahabatData.id;

  // List pembiayaan asscociated with sahabat
  const { pembiayaanSahabats, fetchPembiayaanProfilSahabat } = useLaporanStore();

  useEffect(() => {
    fetchPembiayaanProfilSahabat(sahabatId);
  }, [fetchPembiayaanProfilSahabat, sahabatId]);

  // Select skim pembiayaan from the dropdown
  const [selectedSkimPembiayaan, setSelectedSkimPembiayaan] = useState("");

  // Display pembiayaan sahabat based on selected skim pembiayaan
  const [isSearchResultVisible, setIsSearchResultVisible] = useState(false);

  const handleSearchResultPembiayaanVisibility = () => {
    setIsSearchResultVisible(true);
  };

  return (
    <>
      <div className="page-title">
        <h1>Search Customer Payment</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="breadcrumb-previous-link">
            List of Reports
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Search Customer Payment</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <React.Fragment key={sahabatData.noSahabat}>
        {/* Sahabat information */}
        <div>
          <div className="report-search-pg-header">
            <h2>Customer Details</h2>
          </div>

          <div className="report-customer-details-container">
            <Container fluid className="report-customer-details">
              <Row>
                <Col xs={12}>
                  <Form.Group controlId="namaSahabat">
                    <Form.Label className="form-label">Name</Form.Label>

                    <Form.Control
                      type="text"
                      {...register("namaSahabat")}
                      value={sahabatData.namaSahabat}
                      readOnly
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="sc-report-detailed-customer-profile-spacing">
                <Col xs={6}>
                  <Form.Group controlId="noKadPengenalanSahabat">
                    <Form.Label className="form-label">
                      Customer ID
                    </Form.Label>

                    <Form.Control
                      type="text"
                      value={sahabatData.noKadPengenalanSahabat}
                      readOnly
                    />
                  </Form.Group>
                </Col>

                <Col xs={6}>
                  <Form.Group controlId="noSahabat">
                    <Form.Label className="form-label">Customer Num.</Form.Label>

                    <Form.Control
                      type="text"
                      value={sahabatData.noSahabat}
                      readOnly
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

        {/* Pembiayaan sahabat */}
        <div className="report-search-customer-payment-container">
          <div>
            <h3>Select Payment Scheme</h3>
          </div>

          <Container fluid>
            {pembiayaanSahabats.length === 0 ? (
              <Alert variant="secondary">
                There's no information on this customer's payment. Please fill in the details required first.
              </Alert>
            ) : (
              <Row>
                <Form onReset={reset}>
                  <Col xs={12} xl={10}>
                    {/* Skim pembiayaan */}
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
                          --Select Payment Scheme--
                        </option>
                        {[
                          ...new Set(
                            pembiayaanSahabats.map(
                              (pembiayaanSahabatsData) =>
                                pembiayaanSahabatsData.namaSkimPembiayaan
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
                      className="report-search-customer-payment-btn"
                    >
                      Find
                    </Button>
                  </Col>
                </Form>
              </Row>
            )}
          </Container>
        </div>

        {isSearchResultVisible && (
          <div className="report-search-result-payment-container">
            <SearchResultPembiayaanSahabat
              sahabatData={sahabatData}
              sahabatId={sahabatId}
              pembiayaanSahabats={pembiayaanSahabats}
              selectedSkimPembiayaan={selectedSkimPembiayaan}
            />
          </div>
        )}
      </React.Fragment>

      <div className="sc-return-btn-customer return-btn-container">
        <Button className="return-btn" onClick={goBack}>
          Back
        </Button>{" "}
      </div>
    </>
  );
}

export default SearchCustomerProfile;
