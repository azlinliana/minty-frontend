import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../../assets/styles/styles_sahabat.css";
import IndexPembiayaan from "../pembiayaan/Index";
import { Breadcrumb, Container, Row, Col, Form, Button } from "react-bootstrap";

function SearchResultSahabat() {
  // _______________________________ Hook Declaration _______________________________
  const navigate = useNavigate();
  const location = useLocation();

  // ___________________________________ Frontend ___________________________________
  const goBack = () => {
    navigate(-1);
  }; // Back button

  // ____________________________________ Backend ___________________________________
  // Display sahabat search result
  // const sahabatData = location.state.resultSahabat[0];
  // const sahabatId = sahabatData.id;

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

      {/* <div key={sahabatData.noSahabat}> */}
      <div>
        <div className="search-result-id">
          {/* <p>Hasil Carian: {sahabatData.noKadPengenalanSahabat}</p> */}
          <p>Hasil Carian: No Kad Pengenalan Sahabat</p>
        </div>

        <div className="hasil-carian-sahabat-content">
          <div>
            <div className="hasil-carian-sahabat-title">
              <h2>Maklumat Sahabat</h2>
            </div>

            <Container fluid>
              {/* Nama sahabat */}
              <Row>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>Nama</Form.Label>

                    <Form.Control
                      type="text"
                      value="Nama Sahabat"
                      disabled
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* No. kad pengenalan sahabat */}
              <Row>
                <Col xs={6}>
                  <Form.Group className="sahabat-carian-spacing">
                    <Form.Label>No. Kad Pengenalan</Form.Label>

                    <Form.Control
                      type="text"
                      value="No Kad Pengenalan Sahabat"
                      disabled
                    />
                  </Form.Group>
                </Col>

                <Col xs={6}>
                  <Form.Group className="sahabat-carian-spacing">
                    <Form.Label>No. Sahabat</Form.Label>

                    <Form.Control
                      type="text"
                      value="No Sahabat"
                      disabled
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* Wilayah sahabat */}
              <Row>
                <Col xs={6}>
                  <Form.Group className="sahabat-carian-spacing">
                    <Form.Label>Wilayah</Form.Label>

                    <Form.Control
                      type="text"
                      value="Nama Wilayah"
                      disabled
                    />
                  </Form.Group>
                </Col>

                <Col xs={6}>
                  <Form.Group className="sahabat-carian-spacing">
                    <Form.Label>Cawangan</Form.Label>

                    <Form.Control
                      type="text"
                      value="Nama Cawangan"
                      disabled
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* Blok sahabat */}
              <Row>
                <Col xs={6}>
                  <Form.Group className="sahabat-carian-spacing">
                    <Form.Label>Blok</Form.Label>

                    <Form.Control
                      type="text"
                      value="Nama Blok"
                      disabled
                    />
                  </Form.Group>
                </Col>

                <Col xs={6}>
                  <Form.Group className="sahabat-carian-spacing">
                    <Form.Label>Pusat</Form.Label>

                    <Form.Control
                      type="text"
                      value="Nama Pusat"
                      disabled
                    />
                  </Form.Group>
                </Col>
              </Row>

              {/* Kumpulan sahabat */}
              <Row>
                <Col xs={6}>
                  <Form.Group className="sahabat-carian-spacing">
                    <Form.Label>Kumpulan</Form.Label>

                    <Form.Control
                      type="text"
                      value="Nama Kumpulan"
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

          {/* List pembiayaan */}
          <IndexPembiayaan
            // sahabatData={sahabatData}
            // sahabatId={sahabatId}
          />
        </div>

        <div className="kembali-btn-container">
          <Button className="kembali-btn" onClick={goBack}>
            Kembali
          </Button>{" "}
        </div>
      </div>
    </>
  );
}

export default SearchResultSahabat;
