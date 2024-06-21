import React, { useEffect } from "react";
import "../../../assets/styles/styles_sahabat.css";
import EditMinggu from "../minggu/Edit";
import { Card, Container, Row, Col, Form } from "react-bootstrap";
import { useMingguStore } from "../../../store/sahabat/minggu-store";

function MaklumatMinggu({
  sahabatId,
  pembiayaanId,
  mingguId,
  pembiayaanSahabatsData,
}) {
  // __________________________________ Frontend __________________________________
  // Show minggu pembiayaan sahabat
  const { mingguPembiayaanSahabats, showMingguPembiayaanSahabat } =
    useMingguStore((state) => ({
      mingguPembiayaanSahabats: state.mingguPembiayaanSahabats,
      showMingguPembiayaanSahabat: state.showMingguPembiayaanSahabat,
    }));

  useEffect(() => {
    showMingguPembiayaanSahabat(sahabatId, pembiayaanId, mingguId);
  }, [showMingguPembiayaanSahabat, sahabatId, pembiayaanId, mingguId]);

  return (
    <div className="card-tambah-minggu-sahabat-content">
      <h2>Maklumat Minggu</h2>

      {mingguPembiayaanSahabats.id && (
        <>
          {/* Hide edit minggu button */}
          {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? (
            <div className="card-edit-minggu-btn">
              <EditMinggu
                sahabatId={sahabatId}
                pembiayaanId={pembiayaanId}
                mingguPembiayaanSahabat={mingguPembiayaanSahabats}
                mingguId={mingguPembiayaanSahabats.id}
              />
            </div>
          ) : null}

          <Card>
            <Card.Body>
              <Container fluid>
                <Row>
                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label className="card-track-minggu-simple">
                        Bilangan Minggu
                      </Form.Label>

                      <Form.Control
                        type="text"
                        defaultValue={
                          mingguPembiayaanSahabats.bilanganMinggu
                        }
                        disabled
                      />
                    </Form.Group>
                  </Col>

                  <Col xs={6}>
                    <Form.Group>
                      <Form.Label className="card-track-minggu-simple">
                        Tarikh Borang Minggu
                      </Form.Label>

                      <Form.Control
                        type="text"
                        defaultValue={new Date(
                          mingguPembiayaanSahabats.tarikhBorangMinggu
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
      )}
    </div>
  );
}

export default MaklumatMinggu;
