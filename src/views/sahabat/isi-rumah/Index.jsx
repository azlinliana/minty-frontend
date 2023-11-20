import React, { useState, useEffect } from "react";
import Tabbed from "../../components/tab/Tab";
import {
  TabTrackingInflowOutflowIsiRumah,
  defaultActiveTabKeyTrackingInflowOutflowIsiRumah,
} from "../../components/tab/TabTrackingInflowOutflowIsiRumah.jsx";
import CreateIsiRumah from "./Create";
import EditIsiRumah from "./Edit";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Alert from "react-bootstrap/Alert";
import { FaPlus } from "react-icons/fa";
import axios from "axios";
import "../sahabat.css";

function IndexIsiRumah() {
  // ----------FE----------
  // Tab sahabat isi rumah
  const [
    activeTabTitleInflowOutflowIsiRumah,
    setActiveTabTitleInflowOutflowIsiRumah,
  ] = useState("Inflow"); // Initialize isi rumah tab title

  // Function to handle tab change sahabat inflow/outflow
  const handleTabInflowOutflowIsiRumahChange = (key) => {
    const selectedTabInflowOutflowIsiRumah =
      TabTrackingInflowOutflowIsiRumah.find((tab) => tab.eventKey === key);

    if (selectedTabInflowOutflowIsiRumah) {
      setActiveTabTitleInflowOutflowIsiRumah(
        selectedTabInflowOutflowIsiRumah.title
      );
    }
  };

  // ----------BE----------

  return (
    <div className="inputStepsContainer">
      <h2>Maklumat {activeTabTitleInflowOutflowIsiRumah} Tracking Isi Rumah</h2>

      <div className="tambahBtnPlacement">
        <CreateIsiRumah />
      </div>

      <Alert variant="secondary">
        Sahabat masih tiada maklumat isi rumah untuk minggu ini. Sila tambah isi
        rumah.
      </Alert>

      <Tabs defaultActiveKey="tab1" id="tab-example">
        <Tab eventKey="tab1" title="Isi Rumah 1">
          <div>
            <div className="isiRumahActionsPlacement">
              <DropdownButton
                align="end"
                title="Status Isi Rumah"
                id="dropdown-menu-align-end"
              >
                <Dropdown.Item eventKey="1">
                  <EditIsiRumah />
                </Dropdown.Item>
                <Dropdown.Item eventKey="2">Padam</Dropdown.Item>
              </DropdownButton>
            </div>

            <Card>
              <Card.Body>
                <Container>
                  <Row>
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label>Nama</Form.Label>
                        <Form.Control type="text" defaultValue="" disabled />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label>No. Kad Pengenalan</Form.Label>
                        <Form.Control type="text" defaultValue="" disabled />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={12}>
                      <Form.Group>
                        <Form.Label>Hubungan</Form.Label>
                        <Form.Control type="text" defaultValue="" disabled />
                      </Form.Group>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
            <div className="tableInflowOutflowMargin">
              <Tabbed
                tabs={TabTrackingInflowOutflowIsiRumah}
                defaultActiveTabKey={
                  defaultActiveTabKeyTrackingInflowOutflowIsiRumah
                }
                onTabChange={handleTabInflowOutflowIsiRumahChange}
              />
            </div>
          </div>
        </Tab>
      </Tabs>

      {/* <Tabs defaultActiveKey={0} id="isiRumahTabs">
        {isiRumahPembiayaanSahabats.map((isiRumah, index) => (
          <Tab eventKey={index} title={`Isi Rumah ${index + 1}`}>
          
            <Tabbed tabs={TabTrackingInflowOutflowIsiRumah} defaultActiveTabKey={defaultActiveTabKeyTrackingInflowOutflowIsiRumah} onTabChange={handleTabInflowOutflowIsiRumahChange}/>
          </Tab>
        ))}
      </Tabs> */}
    </div>
  );
}

export default IndexIsiRumah;
