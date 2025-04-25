import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../../../assets/styles/styles_report.css";
import MaklumatAsas from "./MaklumatAsas";
import MaklumatKegiatanModal from "./MaklumatKegiatanModal";
import PendapatanKumulatifKegiatan from "./PendapatanKumulatifKegiatan";
import PendapatanKumulatifSumberPengusaha from "./PendapatanKumulatifSumberPengusaha";
import PerbelanjaanKumulatifSumberPengusaha from "./PerbelanjaanKumulatifSumberPengusaha";
import PendapatanVSPerbelanjaanSumberPengusaha from "./PendapatanVSPerbelanjaanSumberPengusaha";
import { Breadcrumb, Button } from "react-bootstrap";
import { useProfilSahabatTerperinciStore } from "../../../../store/laporan/profil-sahabat-terperinci-store";
import { useReactToPrint } from "react-to-print";

function ShowDetailedCustomerProfile() {
  // __________________________________ Frontend __________________________________
  // Back button
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  // Get pembiayaan sahabat
  const location = useLocation();
  // const { sahabatData, sahabatId, pembiayaanSahabatId } = location.state;

  // ___________________________________ Backend __________________________________
  // Fetch profil sahabat terperinci
  // const { profilSahabatTerperinci, fetchProfilSahabatTerperinci } =
  //   useProfilSahabatTerperinciStore();

  // useEffect(() => {
  //   fetchProfilSahabatTerperinci(sahabatId, pembiayaanSahabatId);
  // }, [fetchProfilSahabatTerperinci, sahabatId, pembiayaanSahabatId]);

  // Reference to the printable area
  const printRef = useRef();

  // Print handler using react-to-print
  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <>
      <div className="page-title">
        <h1>Detailed Customer Profile</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="breadcrumb-previous-link" href="#">
            Report List
          </Breadcrumb.Item>
          <Breadcrumb.Item className="breadcrumb-previous-link" href="#">
            Detailed Customer Profile List Financial
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Detailed Customer Profile Report
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="report-customer-profile-details">
          <p>
            <strong>Search Result: Customer IC</strong>
          </p>
        </div>
      </div>

      <div className="report-customer-profile-action-bts-container">
        <Button onClick={handlePrint}>Print</Button>{" "}
      </div>

      {/* Printable area start */}
      <div ref={printRef} className="printable">
        {/* Bahagian A: Maklumat Asas */}
        <MaklumatAsas
        // maklumatAsasData={profilSahabatTerperinci.maklumatAsas}
        />

        {/* Bahagian B: Maklumat Kegiatan & Modal */}
        <MaklumatKegiatanModal
        // maklumatKegiatanModalData={
        //   profilSahabatTerperinci.maklumatKegiatanModal
        // }
        />

        {/* Bahagian C: Maklumat Pendapatan (Kumulatif) dan Kegiatan */}
        <PendapatanKumulatifKegiatan
        // maklumatPendapatanKumulatifKegiatanData={
        //   profilSahabatTerperinci.maklumatPendapatanKumulatifKegiatan
        // }
        />

        {/* Bahagian D: Maklumat Pendapatan (Kumulatif) Mengikut Sumber dan Pengusaha */}
        <PendapatanKumulatifSumberPengusaha
        // pendapatanKumulatifSumberData={
        //   profilSahabatTerperinci.maklumatPendapatanKumulatifMengikutSumberPengusaha
        // }
        />

        {/* Bahagian E: Maklumat Perbelanjaan (Kumulatif) Mengikut Sumber dan Pengusaha */}
        <PerbelanjaanKumulatifSumberPengusaha
        // perbelanjaanKumulatifSumberData={
        //   profilSahabatTerperinci.maklumatPerbelanjaanKumulatifMengikutSumberPengusaha
        // }
        />

        {/* Bahagian F: Maklumat Kumulatif Pendapatan vs Perbelanjaan */}
        <PendapatanVSPerbelanjaanSumberPengusaha
        // pendapatanVSPerbelanjaanData={
        //   profilSahabatTerperinci.maklumatKumulatifPendapatanVSPerbelanjaan
        // }
        />
      </div>
      {/* Printable area end */}

      <div className="return-btn-container">
        <Button
          className="return-btn sc-return-btn-sahabat-customer"
          onClick={goBack}
        >
          Back
        </Button>{" "}
      </div>
    </>
  );
}

export default ShowDetailedCustomerProfile;
