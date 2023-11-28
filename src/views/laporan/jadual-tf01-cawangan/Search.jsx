import React, { useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import ResultTf01ByCawangan from "./SearchResult";
import "../Laporan.css";

function SearchTf01ByCawangan() {
  // ----------FE----------
  const [
    isSearchResultTf01CawanganVisible,
    setIsSearchResultTf01CawanganVisible,
  ] = useState(false);

  const handleSearchResultTf01CawanganVisibility = () => {
    setIsSearchResultTf01CawanganVisible(!isSearchResultTf01CawanganVisible);
  };

  return (
    <>
      <div className="pageTitle">
        <h1>Jadual TF01 Mengikut Cawangan</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="previousLink" href="#">
            Senarai Laporan
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Jadual TF01 Mengikut Cawangan
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="searchSection">
        <div className="searchHeader">
          <h2>Senarai Sahabat Mengikut Cawangan, Blok, Pusat dan Pulangan</h2>
        </div>

        <div className="searchBarSection">
          <Container className="container-fluid searchBar">
            <Row>
              {/* Wilayah */}
              <Col xs={12} md={6}>
                <div>
                  <Form.Label>Wilayah</Form.Label>
                  <Form.Select>
                    <option>-Sila Pilih-</option>
                    <option value="PERAK">PERAK</option>
                    <option value="NEGERI SEMBILAN/MELAKA">
                      NEGERI SEMBILAN/MELAKA
                    </option>
                    <option value="SABAH">SABAH</option>
                    <option value="PAHANG">PAHANG</option>
                    <option value="KELANTAN">KELANTAN</option>
                    <option value="KEDAH">KEDAH</option>
                    <option value="SELANGOR/KUALA LUMPUR">
                      SELANGOR/KUALA LUMPUR
                    </option>
                    <option value="TERENGGANU">TERENGGANU</option>
                    <option value="JOHOR">JOHOR</option>
                  </Form.Select>
                </div>
              </Col>

              {/* Cawangan */}
              <Col xs={12} md={6}>
                <div>
                  <Form.Label>Cawangan</Form.Label>
                  <Form.Select>
                    <option>-Sila Pilih-</option>
                    <option value="GERIK">GERIK</option>
                    <option value="IPOH">IPOH</option>
                    <option value="KERIAN">KERIAN</option>
                    <option value="KINTA">KINTA</option>
                    <option value="KUALA KANGSAR">KUALA KANGSAR</option>
                    <option value="LENGGONG">LENGGONG</option>
                    <option value="MANJUNG">MANJUNG</option>
                    <option value="MINI TANJUNG MALIM">
                      MINI TANJUNG MALIM
                    </option>
                    <option value="SELAMA">SELAMA</option>
                    <option value="SERI ISKANDAR">SERI ISKANDAR</option>
                    <option value="TAIPING">TAIPING</option>
                    <option value="SELAMA">TAPAH</option>
                    <option value="SELAMA">TELUK INTAN</option>
                  </Form.Select>
                </div>
              </Col>
            </Row>
            <div className="cariBtnPlacement">
              <Button
                className="cariBtn"
                onClick={handleSearchResultTf01CawanganVisibility}
              >
                Cari
              </Button>{" "}
            </div>
          </Container>

          <div className="searchResultContainer">
            {isSearchResultTf01CawanganVisible && <ResultTf01ByCawangan />}
          </div>

          <div className="kembaliBtnPlacement">
            <Button className="kembaliBtn">Kembali</Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchTf01ByCawangan;
