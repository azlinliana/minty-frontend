import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../../../assets/styles/styles_laporan.css";
import MaklumatAsas from "./MaklumatAsas";
import MaklumatKegiatanModal from "./MaklumatKegiatanModal";
import MaklumatInflowOutflow from "./MaklumatInflowOutflow";
import RajahInflowOutflow from "./RajahInflowOutflow";
import { Button, Breadcrumb } from "react-bootstrap";
import { useProfilSahabatStore } from "../../../../store/laporan/profil-sahabat-store";
import ExcelJS from "exceljs";
import * as FileSaver from "file-saver";
import { useReactToPrint } from "react-to-print";

function ShowCustomerProfile() {
  // ______________________________ Hook Declaration ______________________________
  const navigate = useNavigate();
  const location = useLocation();

  // __________________________________ Frontend __________________________________
  // Back button
  const goBack = () => navigate(-1);

  // Get pembiayaan sahabat
  const { sahabatData, sahabatId, pembiayaanSahabatId } = location.state;

  // ___________________________________ Backend __________________________________
  // Fetch profil sahabat
  const { profilSahabat, fetchProfilSahabat } = useProfilSahabatStore();

  useEffect(() => {
    fetchProfilSahabat(sahabatId, pembiayaanSahabatId);
  }, [fetchProfilSahabat, sahabatId, pembiayaanSahabatId]);

  // ___________________________________ Export __________________________________
  // Click Eksport
  const prepareDataForExport = () => {
    if (!profilSahabat) return [];

    let exportData = [
      {
        Perkara: "ROTIF - JULAT SEDERHANA",
        "No Kad Pengenalan":
          profilSahabat.maklumatAsas.sahabat.noKadPengenalanSahabat,
        "Nama Sahabat": profilSahabat.maklumatAsas.sahabat.namaSahabat,
        "Nama Suami": profilSahabat.maklumatAsas.suamiSahabat,
        Cawangan: profilSahabat.maklumatAsas.sahabat.cawangan.namaCawangan,
        Dimensi: profilSahabat.maklumatAsas.aktiviti.dimensi.kodDimensi,
        "Kumulatif PJM": profilSahabat.maklumatAsas.kumulatifPJM,
        "Pengurusan Dana":
          profilSahabat.maklumatAsas.aktiviti.dimensi.kodDimensi,
        Projek: profilSahabat.maklumatAsas.aktiviti.kegiatan.jenisKegiatan,
        "Loan Cycle": profilSahabat.maklumatAsas.loanCycle,
        "Modal Pembiayaan AIM (RM)":
          profilSahabat.maklumatKegiatanModal.modalPembiayaanAIM,
        "Pendapatan daripada Modal (RM)":
          profilSahabat.maklumatKegiatanModal.pendapatanDaripadaModal,
        "Pulangan Per RM (RM)":
          profilSahabat.maklumatKegiatanModal.pulanganPerRM,
        Minggu: "", // Leave blank if not applicable
        "Inflow (RM)": "",
        "Outflow (RM)": "",
        "Bil. Minggu": "",
        "Bersih (RM)": "",
        "Pendapatan daripada A1 (RM)": "",
      },
    ];

    profilSahabat.maklumatInflowOutflowSahabat.rekodMingguanInflowOutflow.data.forEach(
      (record) => {
        exportData.push({
          Perkara: "", // Leave blank if not applicable
          "No Kad Pengenalan": "",
          "Nama Sahabat": "",
          "Nama Suami": "",
          Cawangan: "",
          Dimensi: "",
          "Kumulatif PJM": "",
          "Pengurusan Dana": "",
          Projek: "",
          "Loan Cycle": "",
          "Modal Pembiayaan AIM (RM)": "",
          "Pendapatan daripada Modal (RM)": "",
          "Pulangan Per RM (RM)": "",
          Minggu: record.minggu,
          "Inflow (RM)": record.inflow,
          "Outflow (RM)": record.outflow,
          "Bil. Minggu": "",
          "Bersih (RM)": "",
          "Pendapatan daripada A1 (RM)": "",
        });
      }
    );

    exportData.push({
      Perkara: "", // Leave blank if not applicable
      "No Kad Pengenalan": "",
      "Nama Sahabat": "",
      "Nama Suami": "",
      Cawangan: "",
      Dimensi: "",
      "Kumulatif PJM": "",
      "Pengurusan Dana": "",
      Projek: "",
      "Loan Cycle": "",
      "Modal Pembiayaan AIM (RM)": "",
      "Pendapatan daripada Modal (RM)": "",
      "Pulangan Per RM (RM)": "",
      Minggu: "",
      "Inflow (RM)":
        profilSahabat.maklumatInflowOutflowSahabat.rekodKumulatifInflowOutflow
          .kumulatifInflow,
      "Outflow (RM)":
        profilSahabat.maklumatInflowOutflowSahabat.rekodKumulatifInflowOutflow
          .kumaltifOutflow,
      "Bil. Minggu":
        profilSahabat.maklumatInflowOutflowSahabat.rekodKumulatifInflowOutflow
          .jumlahBilanganMinggu,
      "Bersih (RM)":
        profilSahabat.maklumatInflowOutflowSahabat.rekodKumulatifInflowOutflow
          .bersih,
      "Pendapatan daripada A1 (RM)":
        profilSahabat.maklumatInflowOutflowSahabat.rekodKumulatifInflowOutflow
          .pendapatanDaripadaA1,
    });

    return exportData;
  };

  const clickExportProfailSahabat = async () => {
    const apiData = prepareDataForExport();

    if (apiData.length === 0) {
      console.error("No data available for export.");
      return;
    }

    const fileName = `Profil Sahabat_${apiData[0]["No Kad Pengenalan"]}`;
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Profil Sahabat");

    // Define columns for the worksheet based on the keys of the first object in apiData
    worksheet.columns = Object.keys(apiData[0]).map((key) => ({
      header: key,
      key: key,
      width: 25, // Adjust width if needed
    }));

    // Add all rows from apiData to the worksheet
    apiData.forEach((data) => {
      worksheet.addRow(data);
    });

    // Adjust columns' width based on their content
    worksheet.columns.forEach((column) => {
      const maxLength = column.header.length + 5; // Add some padding
      column.width = Math.max(maxLength, column.width);
    });

    // Write the workbook to a buffer and save as a file
    const buffer = await workbook.xlsx.writeBuffer();
    const blob = new Blob([buffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    FileSaver.saveAs(blob, `${fileName}.xlsx`);
  };

  // ___________________________________ Export __________________________________
  // Click Cetak
  // Reference to the printable area
  const printRef = useRef();

  // Print handler using react-to-print
  const handlePrintProfailSahabat = useReactToPrint({
    content: () => printRef.current,
  });

  return (
    <>
      <div className="page-title">
        <h1>Profail Sahabat</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="breadcrumb-previous-link" href="#">
            Senarai Laporan
          </Breadcrumb.Item>
          <Breadcrumb.Item className="breadcrumb-previous-link" href="#">
            Carian Pembiayaan Sahabat
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Laporan Profail Sahabat</Breadcrumb.Item>
        </Breadcrumb>

        <div className="laporan-profil-sahabat-details">
          <p>
            <strong>Hasil Carian: {sahabatData.noKadPengenalanSahabat}</strong>
          </p>
        </div>
      </div>

      <div className="laporan-profil-sahabat-action-bts-container">
        <Button onClick={clickExportProfailSahabat}>Eksport</Button>{" "}
        <Button onClick={handlePrintProfailSahabat}>Cetak</Button>{" "}
      </div>

      {/* Printable area start */}
      <div ref={printRef} className="printable">
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
      </div>
      {/* Printable area end */}

      <div className="kembali-btn-container sc-kembali-btn-sahabat">
        <Button className="kembali-btn" onClick={goBack}>
          Kembali
        </Button>{" "}
      </div>
    </>
  );
}

export default ShowCustomerProfile;
