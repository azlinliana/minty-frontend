import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../Laporan.css";
import MaklumatAsas from "./MaklumatAsas";
import MaklumatKegiatanModal from "./MaklumatKegiatanModal";
import PendapatanKumulatifKegiatan from "./PendapatanKumulatifKegiatan";
import PendapatanKumulatifSumberPengusaha from "./PendapatanKumulatifSumberPengusaha";
import PerbelanjaanKumulatifSumberPengusaha from "./PerbelanjaanKumulatifSumberPengusaha";
import PendapatanVSPerbelanjaanSumberPengusaha from "./PendapatanVSPerbelanjaanSumberPengusaha";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import ErrorAlert from "../../../components/sweet-alert/ErrorAlert";
import axios from "axios";

function ShowProfilSahabatTerperinci() {
  // ------------ FE --------------
  // Back button
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  // Get pembiayaan sahabat
  const location = useLocation();
  const { resultSahabat, sahabatId, pembiayaanSahabatId } = location.state;

  // ------------ BE --------------
  // Fetch profil sahabat terperinci
  const [profilSahabatTerperinci, setProfilSahabatTerperinci] = useState({});
  const getProfilSahabatTerperinci = async () => {
    try {
      const response = await axiosCustom.get(
        `/laporan/profil-sahabat-terperinci/${sahabatId}/${pembiayaanSahabatId}`
      );
      if (response.status === 200) {
        setProfilSahabatTerperinci(response.data);
      } else {
        ErrorAlert(response); // Error from the backend or unknown error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  useEffect(() => {
    getProfilSahabatTerperinci();
  }, [profilSahabatTerperinci]);

  return (
    <>
      <div className="pageTitle">
        <h1>Profil Sahabat Terperinci</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="previousLink" href="#">
            Senarai Laporan
          </Breadcrumb.Item>
          <Breadcrumb.Item className="previousLink" href="#">
            Carian Pembiayaan Sahabat Terperinci
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Laporan Profil Sahabat Terperinci
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="hasilCarian">
          <p>
            <strong>
              Hasil Carian:{" "}
              {resultSahabat.map(
                (dataSahabat) => dataSahabat.noKadPengenalanSahabat
              )}
            </strong>
          </p>
        </div>
      </div>

      <div className="buttonContainer">
        <Button variant="primary">Cetak</Button>{" "}
      </div>

      {/* Bahagian A: Maklumat Asas */}
      <MaklumatAsas
        maklumatAsasData={profilSahabatTerperinci.maklumatAsas || {}}
      />

      {/* Bahagian B: Maklumat Kegiatan & Modal */}
      <MaklumatKegiatanModal
        maklumatKegiatanModalData={
          profilSahabatTerperinci.maklumatKegiatanModal || {}
        }
      />

      {/* Bahagian C: Maklumat Pendapatan (Kumulatif) dan Kegiatan */}
      <PendapatanKumulatifKegiatan
        maklumatPendapatanKumulatifKegiatanData={
          profilSahabatTerperinci.maklumatPendapatanKumulatifKegiatan || {}
        }
      />

      {/* Bahagian D: Maklumat Pendapatan (Kumulatif) Mengikut Sumber dan Pengusaha */}
      <PendapatanKumulatifSumberPengusaha
        pendapatanKumulatifSumberData={
          profilSahabatTerperinci.maklumatPendapatanKumulatifMengikutSumberPengusaha ||
          {}
        }
      />

      {/* Bahagian E: Maklumat Perbelanjaan (Kumulatif) Mengikut Sumber dan Pengusaha */}
      <PerbelanjaanKumulatifSumberPengusaha
        perbelanjaanKumulatifSumberData={
          profilSahabatTerperinci.maklumatPerbelanjaanKumulatifMengikutSumberPengusaha ||
          {}
        }
      />

      {/* Bahagian F: Maklumat Kumulatif Pendapatan vs Perbelanjaan */}
      <PendapatanVSPerbelanjaanSumberPengusaha
        pendapatanVSPerbelanjaanData={
          profilSahabatTerperinci.maklumatKumulatifPendapatanVSPerbelanjaan ||
          {}
        }
      />

      <div className="kembaliBtnPlacement">
        <Button className="kembaliBtn" onClick={goBack}>
          Kembali
        </Button>{" "}
      </div>
    </>
  );
}

export default ShowProfilSahabatTerperinci;
