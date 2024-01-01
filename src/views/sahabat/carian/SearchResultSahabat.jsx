import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../sahabat.css";
import IndexPembiayaan from "../pembiayaan/Index";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function SearchResultSahabat() {
  // ----------FE----------
  // Display sahabat search result
  const location = useLocation();
  const resultSahabat = location.state.resultSahabat || [];

  // Back button
  const navigate = useNavigate();
  const goBack = () => {navigate(-1);}; // Back button

  return (
    <>
      <div className="pageTitle">
        <h1>Hasil Carian Sahabat</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="previousLink" href="#">Carian Sahabat</Breadcrumb.Item>
          <Breadcrumb.Item active>Hasil Carian Sahabat</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      {resultSahabat.map((dataSahabat) => (
        <div key={dataSahabat.id}>
          <div className="searchResultId"><p>Hasil Carian: {dataSahabat.noKadPengenalanSahabat}</p></div>

          <div className="hasilCarianContent">
            <div className="hasilCarianSahabat">
              <div className="hasilCarianSahabatTitle"><h2>Maklumat Sahabat</h2></div>

              <Container>
                <Row>
                  <Col xs={12}>
                    <Form.Group>
                      <Form.Label>Nama</Form.Label>
                      <Form.Control type="text" value={dataSahabat.namaSahabat} disabled />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12}>
                    <Form.Group className="carianSpacing">
                      <Form.Label>No. Kad Pengenalan</Form.Label>
                      <Form.Control type="text" value={dataSahabat.noKadPengenalanSahabat} disabled />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12}>
                    <Form.Group className="carianSpacing">
                      <Form.Label>No. Sahabat</Form.Label>
                      <Form.Control type="text" value={dataSahabat.noSahabat} disabled />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12}>
                    <Form.Group className="carianSpacing">
                      <Form.Label>Wilayah</Form.Label>
                      <Form.Control type="text" value={dataSahabat.wilayahId} disabled />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12}>
                    <Form.Group className="carianSpacing">
                      <Form.Label>Cawangan</Form.Label>
                      <Form.Control type="text" value={dataSahabat.cawanganId} disabled />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12}>
                    <Form.Group className="carianSpacing">
                      <Form.Label>Pusat</Form.Label>
                      <Form.Control type="text" value={dataSahabat.pusatId} disabled />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col xs={12}>
                    <Form.Group className="carianSpacing">
                      <Form.Label>Kumpulan</Form.Label>
                      <Form.Control type="text" value={dataSahabat.kumpulanSahabat} disabled />
                    </Form.Group>
                  </Col>
                </Row>
              </Container>
            </div>

            <div className="contentDiv"><hr /></div>

            <IndexPembiayaan resultSahabat={resultSahabat} sahabatId={dataSahabat.id}/>
          </div>
        </div>
      ))}

      <div className="kembaliBtnPlacement"><Button className="kembaliBtn" onClick={goBack}>Kembali</Button>{" "}</div>
    </>
  );
}

export default SearchResultSahabat;
