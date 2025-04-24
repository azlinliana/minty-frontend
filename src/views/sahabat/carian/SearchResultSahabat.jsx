import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../../assets/styles/styles_customers.css";
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
        <h1>Customer Search Result</h1>

        <Breadcrumb>
          <Breadcrumb.Item
            className="breadcrumb-previous-link"
            href="/carian-sahabat"
          >
            Customer Search
          </Breadcrumb.Item>

          <Breadcrumb.Item active>Customer Search Result</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      {/* <div key={sahabatData.noSahabat}> */}
      <div>
        <div className="search-result-id">
          {/* <p>Hasil Carian: {sahabatData.noKadPengenalanSahabat}</p> */}
          <p>Search Result: Customer ID</p>
        </div>

        <div className="customer-search-result-content">
          <div className="customer-details-container">
            <div className="customer-search-result-title">
              <h2>Customer Details</h2>
            </div>

            <Container fluid>
              {/* Nama sahabat */}
              <Row>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>Name</Form.Label>

                    <Form.Control type="text" value="Customer Name" disabled />
                  </Form.Group>
                </Col>
              </Row>

              {/* No. kad pengenalan sahabat */}
              <Row>
                <Col xs={6}>
                  <Form.Group className="customer-search-spacing">
                    <Form.Label>Customer ID</Form.Label>

                    <Form.Control type="text" value="Customer ID" disabled />
                  </Form.Group>
                </Col>

                <Col xs={6}>
                  <Form.Group className="customer-search-spacing">
                    <Form.Label>Customer Num.</Form.Label>

                    <Form.Control type="text" value="Customer Num." disabled />
                  </Form.Group>
                </Col>
              </Row>

              {/* Wilayah sahabat */}
              <Row>
                <Col xs={6}>
                  <Form.Group className="customer-search-spacing">
                    <Form.Label>State</Form.Label>

                    <Form.Control type="text" value="State" disabled />
                  </Form.Group>
                </Col>

                <Col xs={6}>
                  <Form.Group className="customer-search-spacing">
                    <Form.Label>Branch</Form.Label>

                    <Form.Control type="text" value="Branch" disabled />
                  </Form.Group>
                </Col>
              </Row>

              {/* Blok sahabat */}
              <Row>
                <Col xs={6}>
                  <Form.Group className="customer-search-spacing">
                    <Form.Label>Block</Form.Label>

                    <Form.Control type="text" value="Block" disabled />
                  </Form.Group>
                </Col>

                <Col xs={6}>
                  <Form.Group className="customer-search-spacing">
                    <Form.Label>Center</Form.Label>

                    <Form.Control type="text" value="Center" disabled />
                  </Form.Group>
                </Col>
              </Row>

              {/* Kumpulan sahabat */}
              <Row>
                <Col xs={6}>
                  <Form.Group className="customer-search-spacing">
                    <Form.Label>Group</Form.Label>

                    <Form.Control type="text" value="Group" disabled />
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

        <div className="return-btn-container">
          <Button className="return-btn" onClick={goBack}>
            Back
          </Button>{" "}
        </div>
      </div>
    </>
  );
}

export default SearchResultSahabat;
