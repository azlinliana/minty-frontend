import React, { useEffect } from "react";
import "../../../assets/styles/styles_sahabat.css";
import EditMinggu from "../minggu/Edit";
import { Card, Container, Row, Col, Form } from "react-bootstrap";
import { useMingguStore } from "../../../store/sahabat/minggu-store";

// function MaklumatMinggu({
//   sahabatId,
//   pembiayaanId,
//   mingguId,
//   pembiayaanSahabatsData,
// }) {
function MaklumatMinggu() {
  // __________________________________ Frontend __________________________________
  // Show minggu pembiayaan sahabat
  // const { currentMingguPembiayaanSahabat, showMingguPembiayaanSahabat } =
  //   useMingguStore((state) => ({
  //     currentMingguPembiayaanSahabat: state.currentMingguPembiayaanSahabat,
  //     showMingguPembiayaanSahabat: state.showMingguPembiayaanSahabat,
  //   }));

  // useEffect(() => {
  //   showMingguPembiayaanSahabat(sahabatId, pembiayaanId, mingguId);
  // }, [showMingguPembiayaanSahabat, sahabatId, pembiayaanId, mingguId]);

  return (
    <div className="card-funding-customer-content">
      <h2>Maklumat Minggu</h2>

      {/* {currentMingguPembiayaanSahabat && (
        <> */}
          {/* Hide edit minggu button */}
          {/* {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? ( */}
            <div className="card-edit-week-btn">
              <EditMinggu
                // sahabatId={sahabatId}
                // pembiayaanId={pembiayaanId}
                // mingguId={mingguId}
                // currentMingguPembiayaanSahabat={currentMingguPembiayaanSahabat}
              />
            </div>
          {/* ) : null} */}

          <Card>
            <Card.Body>
              <Container fluid>
                <Row>
                  {/* Num. of Week */}
                  <Col xs={6}>
                    <Form.Group controlId="bilanganMinggu">
                      <Form.Label className="card-track-week-simple">
                      Num. of Week
                      </Form.Label>

                      <Form.Control
                        type="number"
                        defaultValue="Num. of Week"
                        disabled
                      />
                    </Form.Group>
                  </Col>

                  {/* Tarikh borang minggu */}
                  <Col xs={6}>
                    <Form.Group controlId="tarikhBorangMinggu">
                      <Form.Label className="card-track-week-simple">
                        Date on Week Tracking Form
                      </Form.Label>

                      <Form.Control
                        type="date"
                        defaultValue="Date on Week Tracking Form"
                        disabled
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        {/* </>
      )} */}
    </div>
  );
}

export default MaklumatMinggu;
