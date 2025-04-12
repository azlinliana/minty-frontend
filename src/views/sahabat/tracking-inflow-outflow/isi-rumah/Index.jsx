import React, { useState, useEffect } from "react";
import "../../../../assets/styles/styles_sahabat.css";
import CreateTrackingIsiRumah from "./Create";
import EditTrackingIsiRumah from "./Edit";
import IndexTrackingInflowIsiRumah from "./inflow/Index";
import IndexTrackingOutflowIsiRumah from "./outflow/Index";
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
import { useIsiRumahStore } from "../../../../store/sahabat/isi-rumah-store";

// function IndexTrackingIsiRumah({
//   mingguId,
//   pembiayaanSahabatsData,
//   kodInflowOptions,
//   displayKodInflows,
//   kodOutflowOptions,
//   displayKodOutflows,
//   hubunganOptions,
//   displayHubungans,
// }) {
function IndexTrackingIsiRumah() {
  // __________________________________ Frontend __________________________________
  // Tab tracking isi rumah
  const [activeTab, setActiveTab] = useState({
    key: "tracking-inflow-isi-rumah",
    title: "Inflow",
  });

  const handleTabInflowOutflowIsiRumahChange = (key, title) => {
    setActiveTab({ key, title });
  };

  // ___________________________________ Backend __________________________________
  // ============================== Dropdown Options ==============================
  // useEffect(() => {
  //   displayHubungans();
  //   displayKodInflows();
  //   displayKodOutflows();
  // }, [displayHubungans, displayKodInflows, displayKodOutflows]);
  // ==============================================================================

  // List & delete isi rumah sahabat
  // const { isiRumahSahabats, fetchIsiRumahSahabats, deleteIsiRumahSahabat } =
  //   useIsiRumahStore((state) => ({
  //     isiRumahSahabats: state.isiRumahSahabats,
  //     fetchIsiRumahSahabats: state.fetchIsiRumahSahabats,
  //     deleteIsiRumahSahabat: state.deleteIsiRumahSahabat,
  //   }));

  // useEffect(() => {
  //   fetchIsiRumahSahabats(mingguId);
  // }, [fetchIsiRumahSahabats, mingguId]);

  return (
    <>
      <div>
        <h2>Maklumat Tracking Isi Rumah</h2>

        <div className="sahabat-pembiayaan-table-container">
          {/* {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? ( */}
            <div className="create-btn-container">
              <CreateTrackingIsiRumah
                // mingguId={mingguId}
                // hubunganOptions={hubunganOptions}
              />
            </div>
          {/* ) : null} */}

          {/* {isiRumahSahabats.length === 0 ? ( */}
            <Alert variant="secondary">
              Sahabat masih tiada maklumat isi rumah untuk minggu ini. Sila
              tambah isi rumah.
            </Alert>
          {/* ) : ( */}
            <Tabs id="tab-isi-rumah-sahabat" className="mb-3">
              {/* {isiRumahSahabats.map((isiRumahSahabatsData, key) => ( */}
                {/* <Tab key={key} eventKey={key} title={`Isi Rumah ${key + 1}`}> */}
                <Tab eventKey="1" title="Isi Rumah 1">                  <div>
                    {/* {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? ( */}
                      <div className="tabs-isi-rumah-actions-container">
                        <DropdownButton
                          align="end"
                          title="Status Isi Rumah"
                          id="dropdown-menu-align-end"
                        >
                          <Dropdown.Item eventKey="1">
                            <EditTrackingIsiRumah
                              // isiRumahId={isiRumahSahabatsData.id}
                              // isiRumahSahabat={isiRumahSahabatsData}
                              // hubunganOptions={hubunganOptions}
                            />
                          </Dropdown.Item>

                          <Dropdown.Item
                            eventKey="2"
                            // onClick={() =>
                            //   deleteIsiRumahSahabat(isiRumahSahabatsData.id)
                            // }
                          >
                            Padam
                          </Dropdown.Item>
                        </DropdownButton>
                      </div>
                    {/* ) : null} */}

                    <Card>
                      <Card.Body>
                        <Container>
                          <Row>
                            <Col xs={12}>
                              <Form.Group>
                                <Form.Label>Nama</Form.Label>

                                <Form.Control
                                  type="text"
                                  defaultValue="Nama Isi Rumah"
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
                                  defaultValue="No. Kad Pengenalan Isi Rumah"
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
                                  defaultValue="Hubungan Isi Rumah"
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
                    <div className="sc-tabs-table-inflow-outflow-margins">
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
                        <Tab
                          eventKey="tracking-inflow-isi-rumah"
                          title="Inflow"
                        >
                          <IndexTrackingInflowIsiRumah
                            // isiRumahId={isiRumahSahabatsData.id}
                            // pembiayaanSahabatsData={pembiayaanSahabatsData}
                            // kodInflowOptions={kodInflowOptions}
                          />
                        </Tab>

                        <Tab
                          eventKey="tracking-outflow-isi-rumah"
                          title="Outflow"
                        >
                          <IndexTrackingOutflowIsiRumah
                            // isiRumahId={isiRumahSahabatsData.id}
                            // pembiayaanSahabatsData={pembiayaanSahabatsData}
                            // kodOutflowOptions={kodOutflowOptions}
                          />
                        </Tab>
                      </Tabs>
                    </div>
                  </div>
                </Tab>
              {/* ))} */}
            </Tabs>
          {/* )} */}
        </div>
      </div>
    </>
  );
}

export default IndexTrackingIsiRumah;
