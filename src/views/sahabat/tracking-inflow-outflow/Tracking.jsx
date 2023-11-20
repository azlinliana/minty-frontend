import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import EditMinggu from '../minggu/Edit';
import IndexAktiviti from '../aktiviti/Index';
import IndexTrackingSahabat from './sahabat/Index.jsx';
import IndexTrackingIsiRumah from './isi-rumah/Index.jsx';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import ErrorAlert from '../../components/sweet-alert/ErrorAlert.js';
import axios from 'axios';
import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Tabbed from "../../components/tab/Tab";
import IndexIsiRumah from "../isi-rumah/Index";
import {
  TabTrackingInflowOutflowSahabat,
  defaultActiveTabKeyTrackingInflowOutflowSahabat,
} from "../../components/tab/TabTrackingInflowOutflowSahabat.jsx";
import EditMinggu from "../minggu/Edit";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Stepper from "./Stepper.jsx";
import "../sahabat.css";

function TrackingInflowOutflow() {
  // ----------FE----------
  // Tab sahabat inflow/outflow
  const [
    activeTabTitleInflowOutflowSahabat,
    setActiveTabTitleInflowOutflowSahabat,
  ] = useState("Inflow"); // Initialize sahabat tab title

  // Function to handle tab change sahabat inflow/outflow
  const handleTabInflowOutflowSahabatChange = (key) => {
    const selectedTabInflowOutflowSahabat =
      TabTrackingInflowOutflowSahabat.find((tab) => tab.eventKey === key);

    if (selectedTabInflowOutflowSahabat) {
      setActiveTabTitleInflowOutflowSahabat(
        selectedTabInflowOutflowSahabat.title
      );
    }
  };

  // Back button
  const navigate = useNavigate();
  const goBack = () => {navigate(-1);}; // Back button

  // Get sahabat, minggu and pembiayaan information
  const location = useLocation();
  const {sahabatId, pembiayaanId, mingguId} = location.state;

  // ----------BE----------

  return (
    <div>
      <div className="pageTitle">
        <h1>Kemas Kini Tracking Sahabat</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="previousLink" href="#">
            Carian Sahabat
          </Breadcrumb.Item>
          <Breadcrumb.Item className="previousLink" href="#">
            Hasil Carian Sahabat
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Kemas Kini Tracking Sahabat</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      {/* Tracking Inflow/Outflow Sahabat */}
      <IndexTrackingSahabat mingguId={mingguId} />

      {/* Tracking Inflow/Outflow Isi Rumah */}
      <IndexTrackingIsiRumah mingguId={mingguId}/> 
      
      <div className="kembaliBtnPlacement"><Button className="kembaliBtn" onClick={goBack}>Kembali</Button>{" "}</div>
      <div className="sahabatTrackingContent">
        <h2>Maklumat Sahabat</h2>

        <Card className="sahabatInfoCard">
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

              <Row className="sahabatInfoSpacing">
                <Col xs={6}>
                  <Form.Group>
                    <Form.Label>No. Kad Pengenalan</Form.Label>
                    <Form.Control type="text" defaultValue="" disabled />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group>
                    <Form.Label>No. Sahabat</Form.Label>
                    <Form.Control type="text" defaultValue="" disabled />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </div>

      <div className="sahabatTrackingContent">
        <h2>Maklumat Minggu</h2>
        <div className="editMingguBtnPlacement">
          <EditMinggu />
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
                    <Form.Control type="text" defaultValue="" disabled />
                  </Form.Group>
                </Col>
                <Col xs={6}>
                  <Form.Group>
                    <Form.Label className="trackWeek">
                      Tarikh Borang Minggu
                    </Form.Label>
                    <Form.Control type="text" defaultValue="" disabled />
                  </Form.Group>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>

        <div className="progressBarContainer">
          <h2>Borang Tracking Mingguan Sahabat</h2>
          <Stepper />

          <div className="inputStepsContainer">
            <h2>
              Maklumat Tracking {activeTabTitleInflowOutflowSahabat} Sahabat
            </h2>

            <Tabbed
              tabs={TabTrackingInflowOutflowSahabat}
              defaultActiveTabKey={
                defaultActiveTabKeyTrackingInflowOutflowSahabat
              }
              onTabChange={handleTabInflowOutflowSahabatChange}
            />
          </div>
          <IndexIsiRumah />
        </div>
      </div>

      <div className="kembaliBtnPlacement">
        <Button className="kembaliBtn" onClick={goBack}>
          Kembali
        </Button>{" "}
      </div>
    </div>
  );
}

export default TrackingInflowOutflow;
