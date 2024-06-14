import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../../assets/styles/styles_sahabat.css";
import IndexPembiayaan from "../pembiayaan/Index";
import { Breadcrumb, Container, Row, Col, Form, Button } from "react-bootstrap";

function SearchResultSahabat() {
  // __________________________________ Frontend __________________________________
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }; // Back button

  // ___________________________________ Backend __________________________________
  // Display sahabat search result
  const location = useLocation();

  const resultSahabat = location.state.resultSahabat;

  return (
    <>
      <div className="page-title">
        <h1>Hasil Carian Sahabat</h1>

        <Breadcrumb>
          <Breadcrumb.Item
            className="breadcrumb-previous-link"
            href="/carian-sahabat"
          >
            Carian Sahabat
          </Breadcrumb.Item>

          <Breadcrumb.Item active>Hasil Carian Sahabat</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      {resultSahabat.map((sahabatData) => (
        <div key={sahabatData.noSahabat}>
          <div className="search-result-id">
            <p>Hasil Carian: {sahabatData.noKadPengenalanSahabat}</p>
          </div>

          <div className="hasil-carian-sahabat-content">
            <div>
              <div className="hasil-carian-sahabat-title">
                <h2>Maklumat Sahabat</h2>
              </div>

              <Container fluid>
                <Row>
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label>Nama</Form.Label>

                      <Form.Control
                        type="text"
                        value={sahabatData.namaSahabat}
                        disabled
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={6}>
                    <Form.Group className="sahabat-carian-spacing">
                      <Form.Label>No. Kad Pengenalan</Form.Label>

                      <Form.Control
                        type="text"
                        value={sahabatData.noKadPengenalanSahabat}
                        disabled
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={6}>
                    <Form.Group className="sahabat-carian-spacing">
                      <Form.Label>No. Sahabat</Form.Label>

                      <Form.Control
                        type="text"
                        value={sahabatData.noSahabat}
                        disabled
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={6}>
                    <Form.Group className="sahabat-carian-spacing">
                      <Form.Label>Wilayah</Form.Label>

                      <Form.Control
                        type="text"
                        value={sahabatData.namaWilayah}
                        disabled
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={6}>
                    <Form.Group className="sahabat-carian-spacing">
                      <Form.Label>Cawangan</Form.Label>

                      <Form.Control
                        type="text"
                        value={sahabatData.namaCawangan}
                        disabled
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={6}>
                    <Form.Group className="sahabat-carian-spacing">
                      <Form.Label>Blok</Form.Label>

                      <Form.Control
                        type="text"
                        value={sahabatData.namaBlok}
                        disabled
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={6}>
                    <Form.Group className="sahabat-carian-spacing">
                      <Form.Label>Pusat</Form.Label>

                      <Form.Control
                        type="text"
                        value={sahabatData.namaPusat}
                        disabled
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={6}>
                    <Form.Group className="sahabat-carian-spacing">
                      <Form.Label>Kumpulan</Form.Label>

                      <Form.Control
                        type="text"
                        value={sahabatData.namaKumpulan}
                        disabled
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="page-content-div">
              <hr />
            </div>

            <IndexPembiayaan
              resultSahabat={resultSahabat}
              sahabatId={sahabatData.id}
            />
          </div>

          <div className="kembali-btn-container">
            <Button className="kembali-btn" onClick={goBack}>
              Kembali
            </Button>{" "}
          </div>
        </div>
      ))}
    </>
  );
}

export default SearchResultSahabat;
