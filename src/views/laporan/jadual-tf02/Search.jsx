import React, { useState } from "react";
import React, { useState } from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ResultTf02 from "./SearchResult";
import "../Laporan.css";


function SearchTf02() {
  // ------- FE ---------
  // Controls visibility of the reports
  const [ isSearchResultJadualTf02Visible, setIsSearchResultJadualTf02Visible ] = useState(false);
  const handleSearchResultJadualTf02Visibility = () => {
    setIsSearchResultJadualTf02Visible(!isSearchResultJadualTf02Visible);
  }

  return (
    <>
      <div className="pageTitle">
        <h1>Jadual TF02</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="previousLink" href="#">
            Senarai Laporan
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Jadual TF02</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="searchSection">
        <div className="searchHeader">
          <h2>Analisa Penghantaran Per RM - Bulanan</h2>
        </div>

        <div className="searchBarSection">
          <Container className="container-fluid searchBar">
            <Row>
              {/* Cawangan */}
              <Col xs={12} md={12}>
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
              <Button className="cariBtn" onClick={handleSearchResultJadualTf02Visibility}>
                Cari
              </Button>{" "}
            </div>
          </Container>

          <div className="searchResultContainer">
            {isSearchResultJadualTf02Visible && <ResultTf02/>}
          </div>

          <div className="kembaliBtnPlacement">
            <Button className="kembaliBtn">Kembali</Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchTf02;
