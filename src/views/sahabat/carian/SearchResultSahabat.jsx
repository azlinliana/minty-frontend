import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import IndexPembiayaan from '../pembiayaan/Index';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";

function SearchResultSahabat() {
  // Display sahabat search result
  const location = useLocation();
  const resultSahabat = location.state.resultSahabat || [];

  // Link pages
  // const navigate = useNavigate();
  // const clickKemasKini = () => navigate('/tracking-inflow-outflow', { state: {results}});
  
  // Back button
  const navigate = useNavigate();
  const goBack = () => {navigate(-1);};

  return(
    <div>
      <div>
        <h1>Hasil Carian Sahabat</h1>
        
        <Breadcrumb>
          <Breadcrumb.Item href="#">Carian Sahabat</Breadcrumb.Item>
          <Breadcrumb.Item active>Hasil Carian Sahabat</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      {resultSahabat.map((dataSahabat) => (
        <div key={dataSahabat.id}>
          <div>
            <p>Hasil Carian: {dataSahabat.noKadPengenalanSahabat}</p>

            <h2>Maklumat Sahabat</h2>

            <Container>
              <Row>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>Nama</Form.Label>
                    <Form.Control type="text" defaultValue={dataSahabat.namaSahabat} disabled />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>No. Kad Pengenalan</Form.Label>
                    <Form.Control type="text" defaultValue={dataSahabat.noKadPengenalanSahabat} disabled />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>No. Sahabat</Form.Label>
                    <Form.Control type="text" defaultValue={dataSahabat.noSahabat} disabled />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>Wilayah</Form.Label>
                    <Form.Control type="text" defaultValue={dataSahabat.wilayahSahabat} disabled />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>Cawangan</Form.Label>
                    <Form.Control type="text" defaultValue={dataSahabat.cawanganSahabat} disabled />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>Pusat</Form.Label>
                    <Form.Control type="text" defaultValue={dataSahabat.pusatSahabat} disabled />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>Kumpulan</Form.Label>
                    <Form.Control type="text" defaultValue={dataSahabat.kumpulanSahabat} disabled />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </div>

          <div>
            <h2>Maklumat Pembiayaan Sahabat</h2>

            <IndexPembiayaan resultSahabat={resultSahabat} sahabatId={dataSahabat.id} />
          </div>
        </div>
      ))}

      <div className="kembaliBtnPlacement">
        <Button className="kembaliBtn" onClick={goBack}>Kembali</Button>{" "}
      </div>
    </div>
  );
}

export default SearchResultSahabat