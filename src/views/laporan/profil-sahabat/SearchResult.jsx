import React from "react";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

import "../Laporan.css";

function SearchResultProfilSahabat() {
  // ----------FE----------
  // Link pages
  const navigate = useNavigate();
  const clickLihat = () => navigate("/profil-sahabat");

  return (
    <>
      <div className="pageTitle">
        <h1>Carian Pembiayaan Sahabatn</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="previousLink" href="#">
            Senarai Laporan
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Carian Pembiayaan Sahabat</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="hasilCarianContent">
        <div className="hasilCarianSahabatTitle">
          <h2>Maklumat Sahabat</h2>
        </div>
        <Container>
          <Row>
            <Col xs={12}>
              <Form.Group>
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" defaultValue="" disabled />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
              <Form.Group className="carianSpacing">
                <Form.Label>No. Kad Pengenalan</Form.Label>
                <Form.Control type="text" defaultValue="" disabled />
              </Form.Group>
            </Col>
          </Row>
        </Container>

        <div className="carianPembiayaanSahabat">
          <Row>
            <Col xs={12}>
              <Form>
                <Form.Group>
                  <Form.Label>Pilih Jenis Pembiayaan</Form.Label>
                  <Form.Select aria-label="pembiayaanSelect">
                    <option value="pembiayaanSejahtera">i-Sejahtera</option>
                    <option value="pembiayaanEkonomi">i-Ekonomi</option>
                  </Form.Select>
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </div>
      </div>

      <div className="hasilCarianPembiayaan ">
        <div className="hasilCarianSahabatTitle">
          <h3>Hasil Carian: Pembiayaan i-Sejahtera</h3>
          <hr />
        </div>

        <div className="searchResultContainer">
          <Table responsive striped bordered>
            <thead>
              <tr>
                <th>Bil.</th>
                <th>Status</th>
                <th>Jenis Pembiayaan</th>
                <th>Tarikh Mula</th>
                <th>Tarikh Tamat</th>
                <th>Tindakan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Aktif</td>
                <td>i-Sejahtera</td>
                <td>27/11/2023</td>
                <td>28/11/2023</td>
                <td>
                  <Button className="viewBtn" onClick={clickLihat}>
                    Lihat
                  </Button>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default SearchResultProfilSahabat;
