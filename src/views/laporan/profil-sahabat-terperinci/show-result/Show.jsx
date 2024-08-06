import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MaklumatAsas from "./MaklumatAsas";
import MaklumatKegiatanModal from "./MaklumatKegiatanModal";
import PendapatanKumulatifKegiatan from "./PendapatanKumulatifKegiatan";
import PendapatanKumulatifSumberPengusaha from "./PendapatanKumulatifSumberPengusaha";
import PerbelanjaanKumulatifSumberPengusaha from "./PerbelanjaanKumulatifSumberPengusaha";
import PendapatanVSPerbelanjaanSumberPengusaha from "./PendapatanVSPerbelanjaanSumberPengusaha";
import { Breadcrumb, Button } from "react-bootstrap";
import ErrorAlert from "../../../components/sweet-alert/ErrorAlert";
import axiosCustom from "../../../../axios";
import "../../../../assets/styles/styles_laporan.css";
import { useProfilSahabatTerperinciStore } from "../../../../store/laporan/profil-sahabat-terperinci-store";

function ShowProfilSahabatTerperinci() {
  // __________________________________ Frontend __________________________________
  // Back button
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  // Get pembiayaan sahabat
  const location = useLocation();
  const { sahabatData, sahabatId, pembiayaanSahabatId } = location.state;

  // ___________________________________ Backend __________________________________
  // Fetch profil sahabat terperinci
  const { profilSahabatTerperinci, fetchProfilSahabatTerperinci } =
    useProfilSahabatTerperinciStore();

  useEffect(() => {
    fetchProfilSahabatTerperinci(sahabatId, pembiayaanSahabatId);
  }, [fetchProfilSahabatTerperinci, sahabatId, pembiayaanSahabatId]);

  return (
    <>
      <div className="page-title">
        <h1>Profil Sahabat Terperinci</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="breadcrumb-previous-link" href="#">
            Senarai Laporan
          </Breadcrumb.Item>
          <Breadcrumb.Item className="breadcrumb-previous-link" href="#">
            Carian Pembiayaan Sahabat Terperinci
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Laporan Profil Sahabat Terperinci
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="laporan-profil-sahabat-details">
          <p>
            <strong>Hasil Carian: {sahabatData.noKadPengenalanSahabat}</strong>
          </p>
        </div>
      </div>

      <div className="laporan-profil-sahabat-action-bts-container">
        <Button>Cetak</Button>{" "}
      </div>

      {/* Bahagian A: Maklumat Asas */}
      <MaklumatAsas maklumatAsasData={profilSahabatTerperinci.maklumatAsas} />

      {/* Bahagian B: Maklumat Kegiatan & Modal */}
      <MaklumatKegiatanModal
        maklumatKegiatanModalData={
          profilSahabatTerperinci.maklumatKegiatanModal
        }
      />

      {/* Bahagian C: Maklumat Pendapatan (Kumulatif) dan Kegiatan */}
      <PendapatanKumulatifKegiatan
        maklumatPendapatanKumulatifKegiatanData={
          profilSahabatTerperinci.maklumatPendapatanKumulatifKegiatan
        }
      />

      {/* Bahagian D: Maklumat Pendapatan (Kumulatif) Mengikut Sumber dan Pengusaha */}
      <PendapatanKumulatifSumberPengusaha
        pendapatanKumulatifSumberData={
          profilSahabatTerperinci.maklumatPendapatanKumulatifMengikutSumberPengusaha
        }
      />

      {/* Bahagian E: Maklumat Perbelanjaan (Kumulatif) Mengikut Sumber dan Pengusaha */}
      <PerbelanjaanKumulatifSumberPengusaha
        perbelanjaanKumulatifSumberData={
          profilSahabatTerperinci.maklumatPerbelanjaanKumulatifMengikutSumberPengusaha
        }
      />

      {/* Bahagian F: Maklumat Kumulatif Pendapatan vs Perbelanjaan */}
      <PendapatanVSPerbelanjaanSumberPengusaha
        pendapatanVSPerbelanjaanData={
          profilSahabatTerperinci.maklumatKumulatifPendapatanVSPerbelanjaan
        }
      />

      <div className="kembali-btn-container">
        <Button className="kembali-btn sc-kembali-btn-sahabat" onClick={goBack}>
          Kembali
        </Button>{" "}
      </div>
    </>
  );
}

export default ShowProfilSahabatTerperinci;
