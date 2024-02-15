import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../../../../assets/styles/styles_sahabat.css";
import CreateTrackingIsiRumah from "./Create";
import EditTrackingIsiRumah from "./Edit";
import IndexTrackingInflowIsiRumah from "./inflow/Index";
import IndexTrackingOutflowIsiRumah from "./outflow/Index";
import ErrorAlert from "../../../components/sweet-alert/ErrorAlert";
import {
  Tab,
  Tabs,
  Alert,
  Card,
  Container,
  Row,
  Col,
  Form,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import axiosCustom from "../../../../axios";

function IndexTrackingIsiRumah({ mingguId, pembiayaanSahabatsData }) {
  // ----------FE----------
  // Dynamic tab title
  const navigate = useNavigate();

  // Tab tracking isi rumah
  const [activeTab, setActiveTab] = useState({
    key: "tracking-inflow-isi-rumah",
    title: "Inflow",
  });

  const handleTabInflowOutflowIsiRumahChange = (key, title) => {
    setActiveTab({ key, title });
  };

  // ----------BE----------
  // List isi rumah sahabat
  const [isiRumahSahabats, setIsiRumahSahabats] = useState([]);

  const fetchIsiRumahSahabats = useCallback(async () => {
    try {
      const response = await axiosCustom.get(`/sahabat/isi-rumah/${mingguId}`);

      if (response.status === 200) {
        setIsiRumahSahabats(response.data);
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      if (
        error.response &&
        (error.response.status === 503 || error.response.status === 429)
      ) {
        // The server is not ready, ignore the error
        console.log("Server not ready, retry later.");
      } else {
        // Handle other errors
        ErrorAlert(error);
      }
    }
  }, [mingguId, setIsiRumahSahabats]);

  useEffect(() => {
    fetchIsiRumahSahabats();
  }, [fetchIsiRumahSahabats]);

  // Fetch hubungan data
  const [hubungansData, setHubungansData] = useState([]);

  const fetchHubungans = useCallback(async () => {
    try {
      const response = await axiosCustom.get(
        `/selenggara/hubungan/display-hubungan`
      );

      if (Array.isArray(response.data) && response.data.length > 0) {
        setHubungansData(response.data); // Display all kod inflow data
      } else {
        ErrorAlert(response.data);
      }
    } catch (error) {
      if (
        error.response &&
        (error.response.status === 503 || error.response.status === 429)
      ) {
        // The server is not ready, ignore the error
        console.log("Server not ready, retry later.");
      } else {
        // Handle other errors
        ErrorAlert(error);
      }
    }
  }, [setHubungansData]);

  useEffect(() => {
    fetchHubungans();
  }, [fetchHubungans]);

  return (
    <>
      <div className="inputStepsContainer">
        <h2>Maklumat Tracking Isi Rumah</h2>

        {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? (
          <div className="tambahBtnPlacement">
            <CreateTrackingIsiRumah
              mingguId={mingguId}
              hubungansData={hubungansData}
            />
          </div>
        ) : null}

        {isiRumahSahabats.length === 0 ? (
          <Alert variant="secondary">
            Sahabat masih tiada maklumat isi rumah untuk minggu ini. Sila tambah
            isi rumah.
          </Alert>
        ) : (
          <Tabs id="tab-isi-rumah-sahabat" className="mb-3">
            {isiRumahSahabats.map((isiRumahSahabatsData, key) => (
              <Tab key={key} eventKey={key} title={`Isi Rumah ${key + 1}`}>
                <div>
                  {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? (
                    <div className="isiRumahActionsPlacement">
                      <DropdownButton
                        align="end"
                        title="Status Isi Rumah"
                        id="dropdown-menu-align-end"
                      >
                        <Dropdown.Item eventKey="1">
                          <EditTrackingIsiRumah
                            mingguId={mingguId}
                            isiRumahSahabat={isiRumahSahabatsData}
                            hubungansData={hubungansData}
                          />
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2">Padam</Dropdown.Item>
                      </DropdownButton>
                    </div>
                  ) : null}

                  <Card>
                    <Card.Body>
                      <Container>
                        <Row>
                          <Col xs={12}>
                            <Form.Group>
                              <Form.Label>Nama</Form.Label>
                              <Form.Control
                                type="text"
                                defaultValue={isiRumahSahabatsData.namaIsiRumah}
                                disabled
                              />
                            </Form.Group>
                          </Col>
                        </Row>

                        <Row>
                          <Col xs={12}>
                            <Form.Group>
                              <Form.Label>No. Kad Pengenalan</Form.Label>
                              <Form.Control
                                type="text"
                                defaultValue={
                                  isiRumahSahabatsData.noKadPengenalanIsiRumah
                                }
                                disabled
                              />
                            </Form.Group>
                          </Col>
                        </Row>

                        <Row>
                          <Col xs={12}>
                            <Form.Group>
                              <Form.Label>Hubungan</Form.Label>
                              <Form.Control
                                type="text"
                                defaultValue={
                                  isiRumahSahabatsData.hubungan.kodHubungan
                                }
                                disabled
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                      </Container>
                    </Card.Body>
                  </Card>
                </div>

                <div>
                  <div className="tableInflowOutflowMargin">
                    <Tabs
                      id="tracking-inflow-outflow-isi-rumah"
                      className="mb-3"
                      activeKey={activeTab.key}
                      onSelect={(key) =>
                        handleTabInflowOutflowIsiRumahChange(
                          key,
                          key === "tracking-inflow-isi-rumah"
                            ? "Inflow"
                            : "Outflow"
                        )
                      }
                    >
                      <Tab eventKey="tracking-inflow-isi-rumah" title="Inflow">
                        <IndexTrackingInflowIsiRumah
                          isiRumahId={isiRumahSahabatsData.id}
                          pembiayaanSahabatsData={pembiayaanSahabatsData}
                        />
                      </Tab>

                      <Tab
                        eventKey="tracking-outflow-isi-rumah"
                        title="Outflow"
                      >
                        <IndexTrackingOutflowIsiRumah
                          isiRumahId={isiRumahSahabatsData.id}
                          pembiayaanSahabatsData={pembiayaanSahabatsData}
                        />
                      </Tab>
                    </Tabs>
                  </div>
                </div>
              </Tab>
            ))}
          </Tabs>
        )}
      </div>
    </>
  );
}

export default IndexTrackingIsiRumah;
