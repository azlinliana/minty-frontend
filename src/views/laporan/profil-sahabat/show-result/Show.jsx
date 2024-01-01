import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import "../../Laporan.css";
import MaklumatAsas from "./MaklumatAsas";
import MaklumatKegiatanModal from "./MaklumatKegiatanModal";
import MaklumatInflowOutflow from "./MaklumatInflowOutflow";
import RajahInflowOutflow from "./RajahInflowOutflow";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import ErrorAlert from '../../../components/sweet-alert/ErrorAlert';
import axios from 'axios';

function ShowProfilSahabat() {
  // ------------ FE --------------
  // Back button
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  // Get pembiayaan sahabat
  const location = useLocation();
  const { resultSahabat, sahabatId, pembiayaanSahabatId } = location.state;

  // ------------ BE --------------
  // Fetch profil sahabat
  const [profilSahabat, setProfilSahabat] = useState({});
  const getProfilSahabat = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/laporan/profil-sahabat/${sahabatId}/${pembiayaanSahabatId}`);
      if (response.status === 200) {
        setProfilSahabat(response.data);
      } else {
        ErrorAlert(response); // Error from the backend or unknown error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  useEffect(() => {
    getProfilSahabat();
  }, []);

  return (
    <>
      <div className="pageTitle">
        <h1>Profil Sahabat</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="previousLink" href="#">Senarai Laporan</Breadcrumb.Item>
          <Breadcrumb.Item className="previousLink" href="#">Carian Pembiayaan Sahabat</Breadcrumb.Item>
          <Breadcrumb.Item active>Laporan Profil Sahabat</Breadcrumb.Item>
        </Breadcrumb>

        <div className="hasilCarian">
          <p>
            <strong>Hasil Carian: {resultSahabat.map((dataSahabat) => (dataSahabat.noKadPengenalanSahabat))}
            </strong>
          </p>
        </div>
      </div>

      <div className="buttonContainer">
        <DropdownButton id="dropdown-basic-button" title="Pilih Eksport">
          <Dropdown.Item href="#/action-1">Eksport Inflow</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Eksport Outflow</Dropdown.Item>
        </DropdownButton>

        <Button>Cetak</Button>{" "}
      </div>

      {/* Bahagian A: Maklumat Asas */}
      <MaklumatAsas maklumatAsasData={profilSahabat.maklumatAsas} />

      {/* Bahagian B: Maklumat Kegiatan Modal */}
      <MaklumatKegiatanModal maklumatKegiatanModalData={profilSahabat.maklumatKegiatanModal} />

      {/* Bahagian C: Maklumat Inflow/Outflow Sahabat */}
      <MaklumatInflowOutflow maklumatInflowOutflowSahabatData={profilSahabat.maklumatInflowOutflowSahabat} />

      {/* Bahagian D: Maklumat Inflow/Outflow Sahabat */}
      <RajahInflowOutflow grafInflowOutflowSahabatData={profilSahabat.maklumatInflowOutflowSahabat?.grafInflowOutflow} />

      <div className="kembaliBtnPlacement">
        <Button className="kembaliBtn" onClick={goBack}>Kembali</Button>{" "}
      </div>
    </>
  );
}

export default ShowProfilSahabat;
