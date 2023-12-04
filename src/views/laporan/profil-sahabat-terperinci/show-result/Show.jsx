import React from "react";
import { Breadcrumb, Button } from "react-bootstrap";
import "../../Laporan.css";
import MaklumatAsas from "./MaklumatAsas";
import MaklumatKegiatanModal from "./MaklumatKegiatanModal";
import PendapatanKumulatifKegiatan from "./PendapatanKumulatifKegiatan";
import PendapatanKumulatifSumber from "./PendapatanKumulatifSumber";
import PerbelanjaanKumulatifSumber from "./PerbelanjaanKumulatifSumber";
import PendapatanVersusPerbelanjaan from "./PendapatanVersusPerbelanjaan";

function ShowProfilSahabatTerperinci() {
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
            <strong>Hasil Carian:</strong> 821006086174
          </p>
        </div>
      </div>

      <div className="buttonContainer">
        <Button variant="primary">Cetak</Button>{" "}
      </div>

      {/* Bahagian A: Maklumat Asas */}
      <MaklumatAsas />

      {/* Bahagian B: Maklumat Kegiatan & Modal */}
      <MaklumatKegiatanModal />

      {/* Bahagian C: Maklumat Pendapatan (Kumulatif) dan Kegiatan */}
      <PendapatanKumulatifKegiatan />

      {/* Bahagian D: Maklumat Pendapatan (Kumulatif) Mengikut Sumber dan Pengusaha */}
      <PendapatanKumulatifSumber />

      {/* Bahagian E: Maklumat Perbelanjaan (Kumulatif) Mengikut Sumber dan Pengusaha */}
      <PerbelanjaanKumulatifSumber />

      {/* Bahagian F: Maklumat Kumulatif Pendapatan vs Perbelanjaan */}
      <PendapatanVersusPerbelanjaan />
    </>
  );
}

export default ShowProfilSahabatTerperinci;
