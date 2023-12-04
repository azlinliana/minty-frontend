import React, { useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import SearchResultPembiayaanTerperinciSahabat from "./SearchResult";
import "../Laporan.css";

function SearchProfilSahabatTerperinci() {
  // ----------FE----------
  const [
    isSearchResultPembiayaanTerperinciSahabatVisible,
    setIsSearchResultPembiayaanSahabatTerperinciVisible,
  ] = useState(false);

  const handleSearchResultPembiayaanTerperinciVisibility = () => {
    setIsSearchResultPembiayaanSahabatTerperinciVisible(
      !isSearchResultPembiayaanTerperinciSahabatVisible
    );
  };

  return (
    <>
      <div className="pageTitle">
        <h1>Carian Pembiayaan Sahabat Terperinci</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="previousLink" href="#">
            Senarai Laporan
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Carian Pembiayaan Sahabat Terperinci
          </Breadcrumb.Item>
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
          <div className="hasilCarianSahabatTitle">
            <h3>Pilih Jenis Pembiayaan</h3>
          </div>
          <Container>
            <Row>
              <Col xs={12} xl={10}>
                <Form>
                  <Form.Group>
                    <Form.Select aria-label="pembiayaanSelect">
                      <option value="pembiayaanSejahtera">i-Sejahtera</option>
                      <option value="pembiayaanEkonomi">i-Ekonomi</option>
                    </Form.Select>
                  </Form.Group>
                </Form>
              </Col>
              <Col xs={12} xl={2}>
                <Button
                  onClick={handleSearchResultPembiayaanTerperinciVisibility}
                  className="cariPembiayaanBtn"
                >
                  Cari
                </Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <div className="hasilCarianPembiayaan">
        {isSearchResultPembiayaanTerperinciSahabatVisible && (
          <SearchResultPembiayaanTerperinciSahabat />
        )}
      </div>
    </>
  );
}

export default SearchProfilSahabatTerperinci;
