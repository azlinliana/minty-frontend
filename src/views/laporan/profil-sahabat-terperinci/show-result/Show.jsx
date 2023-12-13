import React from "react";
import {useLocation} from 'react-router-dom';
import "../../Laporan.css";
import { Breadcrumb, Button } from "react-bootstrap";
import MaklumatAsas from "./MaklumatAsas";
import MaklumatKegiatanModal from "./MaklumatKegiatanModal";
import PendapatanKumulatifKegiatan from "./PendapatanKumulatifKegiatan";
import PendapatanKumulatifSumber from "./PendapatanKumulatifSumber";
import PerbelanjaanKumulatifSumber from "./PerbelanjaanKumulatifSumber";
import PendapatanVersusPerbelanjaan from "./PendapatanVersusPerbelanjaan";

function ShowProfilSahabatTerperinci() {
    // ------------ FE --------------
  // Get pembiayaan sahabat
  const location = useLocation();
  const {resultSahabat, sahabatId, pembiayaanSahabatId} = location.state;

  return(
    <div>
      <div className="pageTitle">
        <h1>Profil Sahabat Terperinci</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="previousLink" href="#">Senarai Laporan</Breadcrumb.Item>
          <Breadcrumb.Item className="previousLink" href="#">Carian Pembiayaan Sahabat Terperinci</Breadcrumb.Item>
          <Breadcrumb.Item active>Laporan Profil Sahabat Terperinci</Breadcrumb.Item>
        </Breadcrumb>

        <div className="hasilCarian"><p><strong>Hasil Carian: {resultSahabat.map((dataSahabat) => (dataSahabat.noKadPengenalanSahabat))}</strong></p></div>
      </div>

      <div className="buttonContainer">
        <Button variant="primary">Cetak</Button>{" "}
      </div>

      {/* Bahagian A: Maklumat Asas */}
      <MaklumatAsas sahabatId={sahabatId} pembiayaanSahabatId={pembiayaanSahabatId} />

      {/* Bahagian B: Maklumat Kegiatan & Modal */}
      <MaklumatKegiatanModal />

      {/* Bahagian C: Maklumat Pendapatan (Kumulatif) dan Kegiatan */}
      <PendapatanKumulatifKegiatan sahabatId={sahabatId} pembiayaanSahabatId={pembiayaanSahabatId} />

      {/* Bahagian D: Maklumat Pendapatan (Kumulatif) Mengikut Sumber dan Pengusaha */}
      <PendapatanKumulatifSumber />

      {/* Bahagian E: Maklumat Perbelanjaan (Kumulatif) Mengikut Sumber dan Pengusaha */}
      <PerbelanjaanKumulatifSumber />

      {/* Bahagian F: Maklumat Kumulatif Pendapatan vs Perbelanjaan */}
      <PendapatanVersusPerbelanjaan />
    </div>
  );
}

export default ShowProfilSahabatTerperinci;
