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

function TrackingInflowOutflow() {
  // ----------FE----------
  const navigate = useNavigate();
  const goBack = () => {navigate(-1);}; // Back button

  // Get sahabat, minggu and pembiayaan information
  const location = useLocation();
  const {sahabatId, pembiayaanId, mingguId} = location.state;

  // ----------BE----------

  return(
    <div>
      <div>
        <h1>Kemas Kini Tracking Sahabat</h1>
        
        <Breadcrumb>
          <Breadcrumb.Item href="#">Carian Sahabat</Breadcrumb.Item>
          <Breadcrumb.Item href="#">Hasil Carian Sahabat</Breadcrumb.Item>
          <Breadcrumb.Item active>Kemas Kini Tracking Sahabat</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      {/* Tracking Inflow/Outflow Sahabat */}
      <IndexTrackingSahabat mingguId={mingguId} />

      {/* Tracking Inflow/Outflow Isi Rumah */}
      <IndexTrackingIsiRumah mingguId={mingguId}/> 
      
      <div className="kembaliBtnPlacement"><Button className="kembaliBtn" onClick={goBack}>Kembali</Button>{" "}</div>
    </div>
  );
}

export default TrackingInflowOutflow;