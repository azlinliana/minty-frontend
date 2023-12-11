import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import "../../Laporan.css";
import ErrorAlert from '../../../components/sweet-alert/ErrorAlert';
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";
import { Breadcrumb, Dropdown, DropdownButton, Button } from "react-bootstrap";
import MaklumatAsas from "./MaklumatAsas";
import MaklumatKegiatanModal from "./MaklumatKegiatanModal";
import MaklumatInflowOutflow from "./MaklumatInflowOutflow";
import RajahInflowOutflow from "./RajahInflowOutflow";
import axios from 'axios';

function ShowProfilSahabat() {
  // ------------ FE --------------
  // Get pembiayaan sahabat
  const location = useLocation();
  const {sahabatId, pembiayaanSahabatId} = location.state;

  return (
    <div>
      <div className="pageTitle">
        <h1>Profil Sahabat</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="previousLink" href="#">Senarai Laporan</Breadcrumb.Item>
          <Breadcrumb.Item className="previousLink" href="#">Carian Pembiayaan Sahabat</Breadcrumb.Item>
          <Breadcrumb.Item active>Laporan Profil Sahabat</Breadcrumb.Item>
        </Breadcrumb>

        <div className="hasilCarian"><p><strong>Hasil Carian:</strong></p></div>
      </div>

      <div className="buttonContainer">
        <DropdownButton id="dropdown-basic-button" title="Pilih Eksport">
          <Dropdown.Item href="#/action-1">Eksport Inflow</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Eksport Outflow</Dropdown.Item>
        </DropdownButton>
        <Button>Cetak</Button>{" "}
      </div>

      {/* Bahagian A: Maklumat Asas */}
      <MaklumatAsas sahabatId={sahabatId} />

      {/* Bahagian B: Maklumat Kegiatan Modal */}
      <MaklumatKegiatanModal sahabatId={sahabatId} pembiayaanSahabatId={pembiayaanSahabatId} />

      {/* Bahagian C: Maklumat Inflow/Outflow Sahabat */}
      <MaklumatInflowOutflow sahabatId={sahabatId} pembiayaanSahabatId={pembiayaanSahabatId} />

      {/* Bahagian D: Maklumat Inflow/Outflow Sahabat */}
      <RajahInflowOutflow />
    </div>
  );
}

export default ShowProfilSahabat;
