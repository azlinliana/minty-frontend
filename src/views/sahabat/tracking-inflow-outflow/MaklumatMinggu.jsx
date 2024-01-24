import React, { useState, useEffect } from "react";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import EditMinggu from "../minggu/Edit";
import { Card, Container, Row, Col, Form } from "react-bootstrap";
import axiosCustom from "../../../axios";
import "../../../assets/styles/styles_sahabat.css";

function MaklumatMinggu({ sahabatId, pembiayaanId, mingguId }) {
  // ----------BE----------
  // Show minggu pembiayaan sahabat
  const [showMingguPembiayaanSahabat, setshowMingguPembiayaanSahabat] =
    useState([]);
  const getMingguPembiayaanSahabat = async () => {
    try {
      const response = await axiosCustom.get(
        `/sahabat/${sahabatId}/pembiayaan/${pembiayaanId}/minggu/${mingguId}`
      );
      if (response.status === 200) {
        setshowMingguPembiayaanSahabat(response.data);
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  useEffect(() => {
    getMingguPembiayaanSahabat();
    // const interval = setInterval(() => { // Set up recurring fetch every 5 second
    //   getMingguPembiayaanSahabat();
    // }, 5000);
    // // Cleanup the interval when the component unmounts
    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  return (
    <div className="sahabatTrackingContent">
      <h2>Maklumat Minggu</h2>

      {showMingguPembiayaanSahabat.id ? (
        <>
          <div className="editMingguBtnPlacement">
            <EditMinggu
              sahabatId={sahabatId}
              pembiayaanId={pembiayaanId}
              mingguPembiayaanSahabat={showMingguPembiayaanSahabat}
              mingguId={showMingguPembiayaanSahabat.id}
            />
          </div>

          <Card>
            <Card.Body>
              <Container>
                <Row>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label className="trackWeek">
                        Bilangan Minggu
                      </Form.Label>
                      <Form.Control
                        type="text"
                        defaultValue={
                          showMingguPembiayaanSahabat.bilanganMinggu
                        }
                        disabled
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label className="trackWeek">
                        Tarikh Borang Minggu
                      </Form.Label>
                      <Form.Control
                        type="text"
                        defaultValue={new Date(
                          showMingguPembiayaanSahabat.tarikhBorangMinggu
                        ).toLocaleDateString("en-GB")}
                        disabled
                      />
                    </Form.Group>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </>
      ) : (
        <Container>
          <p>Tiada maklumat minggu pembiayaan sahabat ini.</p>
        </Container>
      )}
    </div>
  );
}

export default MaklumatMinggu;
