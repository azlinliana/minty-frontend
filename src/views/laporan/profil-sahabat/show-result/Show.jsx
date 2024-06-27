import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MaklumatAsas from "./MaklumatAsas";
import MaklumatKegiatanModal from "./MaklumatKegiatanModal";
import MaklumatInflowOutflow from "./MaklumatInflowOutflow";
import RajahInflowOutflow from "./RajahInflowOutflow";
import { Button, Breadcrumb, Dropdown, DropdownButton } from "react-bootstrap";
import ErrorAlert from "../../../components/sweet-alert/ErrorAlert";
import axiosCustom from "../../../../axios";
import "../../../../assets/styles/styles_laporan.css";

function ShowProfilSahabat() {
  // __________________________________ Frontend __________________________________
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
      const response = await axiosCustom.get(
        `/laporan/profil-sahabat/${sahabatId}/${pembiayaanSahabatId}`
      );
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
      <div className="page-title">
        <h1>Profil Sahabat</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="breadcrumb-previous-link" href="#">
            Senarai Laporan
          </Breadcrumb.Item>
          <Breadcrumb.Item className="breadcrumb-previous-link" href="#">
            Carian Pembiayaan Sahabat
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Laporan Profil Sahabat</Breadcrumb.Item>
        </Breadcrumb>

        <div className="laporan-profil-sahabat-details">
          <p>
            <strong>
              Hasil Carian:{" "}
              {resultSahabat.map(
                (sahabatData) => sahabatData.noKadPengenalanSahabat
              )}
            </strong>
          </p>
        </div>
      </div>

      <div className="laporan-profil-sahabat-action-bts-container">
        <DropdownButton id="dropdown-basic-button" title="Pilih Eksport">
          <Dropdown.Item href="#/action-1">Eksport Inflow</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Eksport Outflow</Dropdown.Item>
        </DropdownButton>
        <Button>Cetak</Button>{" "}
      </div>

      {/* Bahagian A: Maklumat Asas */}
      <MaklumatAsas maklumatAsasData={profilSahabat.maklumatAsas} />

      {/* Bahagian B: Maklumat Kegiatan Modal */}
      <MaklumatKegiatanModal
        maklumatKegiatanModalData={profilSahabat.maklumatKegiatanModal}
      />

      {/* Bahagian C: Maklumat Inflow/Outflow Sahabat */}
      <MaklumatInflowOutflow
        maklumatInflowOutflowSahabatData={
          profilSahabat.maklumatInflowOutflowSahabat
        }
      />

      {/* Bahagian D: Maklumat Inflow/Outflow Sahabat */}
      <RajahInflowOutflow
        grafInflowOutflowSahabatData={
          profilSahabat.maklumatInflowOutflowSahabat?.grafInflowOutflow
        }
      />

      <div className="kembali-btn-container sc-kembali-btn-sahabat">
        <Button className="kembali-btn" onClick={goBack}>
          Kembali
        </Button>{" "}
      </div>
    </>
  );
}

export default ShowProfilSahabat;
