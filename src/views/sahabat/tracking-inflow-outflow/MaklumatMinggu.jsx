import React, { useState, useEffect } from "react";
import "../../../assets/styles/styles_sahabat.css";
import EditMinggu from "../minggu/Edit";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import { Card, Container, Row, Col, Form } from "react-bootstrap";
import axiosCustom from "../../../axios";

function MaklumatMinggu({ sahabatId, pembiayaanId, mingguId, pembiayaanSahabatsData }) {
  // ----------BE----------
  // Show minggu pembiayaan sahabat
  const [showMingguPembiayaanSahabat, setshowMingguPembiayaanSahabat] = useState([]);

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
  }, []);

  return (
    <div className="sahabatTrackingContent">
      <h2>Maklumat Minggu</h2>

      {showMingguPembiayaanSahabat.id ? (
        <>
          {/* Hide edit minggu button */}
          {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? (
            <div className="editMingguBtnPlacement">
              <EditMinggu
                sahabatId={sahabatId}
                pembiayaanId={pembiayaanId}
                mingguPembiayaanSahabat={showMingguPembiayaanSahabat}
                mingguId={showMingguPembiayaanSahabat.id}
              />
            </div>
          ) : null}

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
