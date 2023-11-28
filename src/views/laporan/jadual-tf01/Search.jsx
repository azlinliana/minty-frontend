import React, { useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import SearchResultTF01 from "./SearchResult";
import "../Laporan.css";

function SearchTf01() {
  // ----------FE----------
  const [isSearchResultJadualTf01Visible, setIsSearchResultJadualTf01Visible] =
    useState(false);

  const handleSearchResultJadualTf01Visibility = () => {
    setIsSearchResultJadualTf01Visible(!isSearchResultJadualTf01Visible);
  };

  return (
    <>
      <div className="pageTitle">
        <h1>Jadual TF01</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="previousLink" href="#">
            Senarai Laporan
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Jadual TF01</Breadcrumb.Item>
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
              <Col xs={12} md={4}>
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
              <Col xs={12} md={4}>
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

              {/* Pusat */}
              <Col xs={12} md={4}>
                <div>
                  <Form.Label>Pusat</Form.Label>
                  <Form.Select>
                    <option>-Sila Pilih-</option>
                    <option value="AINUL ASMA">AINUL ASMA</option>
                    <option value="AINUL HAYAT">AINUL HAYAT</option>
                    <option value="AINUL NURA">AINUL NURA</option>
                    <option value="AINUL SOFIA">AINUL SOFIA</option>
                    <option value="AINUL YASMIN">AINUL YASMIN</option>
                    <option value="AL-ANSAR">AL-ANSAR</option>
                    <option value="AL-BARAQAH">AL-BARAQAH</option>
                    <option value="AL-HIJIRIAH">AL-HIJIRIAH</option>
                    <option value="AL-QAUSAR">AL-QAUSAR</option>
                  </Form.Select>
                </div>
              </Col>
            </Row>
            <div className="cariBtnPlacement">
              <Button
                className="cariBtn"
                onClick={handleSearchResultJadualTf01Visibility}
              >
                Cari
              </Button>{" "}
            </div>
          </Container>

          <div className="searchResultContainer">
            {isSearchResultJadualTf01Visible && <SearchResultTF01 />}
          </div>

          <div className="kembaliBtnPlacement">
            <Button className="kembaliBtn">Kembali</Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchTf01;
