import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../../assets/styles/styles_sahabat.css";
import IndexPembiayaan from "../pembiayaan/Index";
import { Breadcrumb, Container, Row, Col, Form, Button } from "react-bootstrap";

function SearchResultSahabat() {
  const location = useLocation();

  const navigate = useNavigate();

  // ----------FE----------
  const resultSahabat = location.state.resultSahabat || []; // Display sahabat search result

  const goBack = () => { navigate(-1); }; // Back button

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

      {resultSahabat.map((dataSahabat) => (
        <div key={dataSahabat.id}>
          <div className="search-result-id">
            <p>Hasil Carian: {dataSahabat.noKadPengenalanSahabat}</p>
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
                        value={dataSahabat.namaSahabat}
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
                        value={dataSahabat.noKadPengenalanSahabat}
                        disabled
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={6}>
                    <Form.Group className="sahabat-carian-spacing">
                      <Form.Label>No. Sahabat</Form.Label>

                      <Form.Control
                        type="text"
                        value={dataSahabat.noSahabat}
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
                        value={dataSahabat.wilayahId}
                        disabled
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={6}>
                    <Form.Group className="sahabat-carian-spacing">
                      <Form.Label>Cawangan</Form.Label>

                      <Form.Control
                        type="text"
                        value={dataSahabat.cawanganId}
                        disabled
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={6}>
                    <Form.Group className="sahabat-carian-spacing">
                      <Form.Label>Pusat</Form.Label>

                      <Form.Control
                        type="text"
                        value={dataSahabat.pusatId}
                        disabled
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={6}>
                    <Form.Group className="sahabat-carian-spacing">
                      <Form.Label>Kumpulan</Form.Label>

                      <Form.Control
                        type="text"
                        value={dataSahabat.kumpulanSahabat}
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
              sahabatId={dataSahabat.id}
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
