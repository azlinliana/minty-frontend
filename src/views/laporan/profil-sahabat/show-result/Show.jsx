import React from "react";
import { Breadcrumb, Dropdown, DropdownButton, Button } from "react-bootstrap";
import MaklumatAsas from "./MaklumatAsas";
import MaklumatKegiatanModal from "./MaklumatKegiatanModal";
import MaklumatInflowOutflow from "./MaklumatInflowOutflow";
import RajahInflowOutflow from "./RajahInflowOutflow";
import "../../Laporan.css";

function ShowProfilSahabat() {
  return (
    <>
      <div className="pageTitle">
        <h1>Profil Sahabat</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="previousLink" href="#">
            Senarai Laporan
          </Breadcrumb.Item>
          <Breadcrumb.Item className="previousLink" href="#">
            Carian Pembiayaan Sahabat
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Laporan Profil Sahabat</Breadcrumb.Item>
        </Breadcrumb>

        <div className="hasilCarian">
          <p>
            <strong>Hasil Carian:</strong> 821006086174
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
      <MaklumatAsas />

      {/* Bahagian B: Maklumat Kegiatan Modal */}
      <MaklumatKegiatanModal />

      {/* Bahagian C: Maklumat Inflow/Outflow Sahabat */}
      <MaklumatInflowOutflow />

      {/* Bahagian D: Maklumat Inflow/Outflow Sahabat */}
      <RajahInflowOutflow />
    </>
  );
}

export default ShowProfilSahabat;
