import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import "../sahabat.css";
import EditMinggu from '../minggu/Edit.jsx';
import MaklumatSahabat from './MaklumatSahabat.jsx';
import MaklumatMinggu from './MaklumatMinggu.jsx';
import BorangTrackingMingguanSahabat from './BorangTrackingMingguanSahabat.jsx';
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stepper from "./Stepper.jsx";

function TrackingInflowOutflow() {
  // ----------FE----------
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
          <Breadcrumb.Item className="previousLink" href="#">Carian Sahabat</Breadcrumb.Item>
          <Breadcrumb.Item className="previousLink" href="#">Hasil Carian Sahabat</Breadcrumb.Item>
          <Breadcrumb.Item active>Kemas Kini Tracking Sahabat</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <MaklumatSahabat />

      <MaklumatMinggu />

      <BorangTrackingMingguanSahabat />
      
      <div className="kembaliBtnPlacement"><Button className="kembaliBtn" onClick={goBack}>Kembali</Button>{" "}</div>
    </div>
  );
}

export default TrackingInflowOutflow;
