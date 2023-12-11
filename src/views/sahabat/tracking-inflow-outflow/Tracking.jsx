import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import "../sahabat.css";
import MaklumatSahabat from './MaklumatSahabat.jsx';
import MaklumatMinggu from './MaklumatMinggu.jsx';
import BorangTrackingMingguanSahabat from './BorangTrackingMingguanSahabat.jsx';
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";

function TrackingInflowOutflow() {
  // ----------FE----------
  const navigate = useNavigate();
  const goBack = () => {navigate(-1);}; // Back button

  // Get sahabat, minggu and pembiayaan information
  const location = useLocation();
  const {resultSahabat, sahabatId, pembiayaanId, mingguId} = location.state;
  
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

      {resultSahabat.map((dataSahabat) => (
        <MaklumatSahabat key={dataSahabat.id} dataSahabat={dataSahabat} />
      ))}

      <MaklumatMinggu sahabatId={sahabatId} pembiayaanId={pembiayaanId} mingguId={mingguId} />

      <BorangTrackingMingguanSahabat sahabatId={sahabatId} pembiayaanId={pembiayaanId} mingguId={mingguId} />
      
      <div className="kembaliBtnPlacement"><Button className="kembaliBtn" onClick={goBack}>Kembali</Button>{" "}</div>
    </div>
  );
}

export default TrackingInflowOutflow;
