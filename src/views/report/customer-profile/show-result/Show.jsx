import React, { useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../../../../assets/styles/styles_report.css";
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
  // const { sahabatData, sahabatId, pembiayaanSahabatId } = location.state;

  // ___________________________________ Backend __________________________________
  // Fetch profil sahabat
  const { profilSahabat, fetchProfilSahabat } = useProfilSahabatStore();

  // useEffect(() => {
  //   fetchProfilSahabat(sahabatId, pembiayaanSahabatId);
  // }, [fetchProfilSahabat, sahabatId, pembiayaanSahabatId]);

  // ___________________________________ Export __________________________________
  // Click Eksport
  const prepareDataForExport = () => {
    if (!profilSahabat) return [];

    let exportData = [
      {
        Topic: "ROTIF - JULAT SEDERHANA",
        "ID":
          profilSahabat.maklumatAsas.sahabat.noKadPengenalanSahabat,
        "Nama Sahabat": profilSahabat.maklumatAsas.sahabat.namaSahabat,
        "Nama Suami": profilSahabat.maklumatAsas.suamiSahabat,
        Branch: profilSahabat.maklumatAsas.sahabat.cawangan.namaCawangan,
        Dimension: profilSahabat.maklumatAsas.aktiviti.dimensi.kodDimensi,
        "PJM Cummulative": profilSahabat.maklumatAsas.kumulatifPJM,
        "Fund Management":
          profilSahabat.maklumatAsas.aktiviti.dimensi.kodDimensi,
        Projek: profilSahabat.maklumatAsas.aktiviti.kegiatan.jenisKegiatan,
        "Loan Cycle": profilSahabat.maklumatAsas.loanCycle,
        "Payment Modal(RM)":
          profilSahabat.maklumatKegiatanModal.modalPembiayaanAIM,
        "Income from Modal (RM)":
          profilSahabat.maklumatKegiatanModal.pendapatanDaripadaModal,
        "Profit Per RM (RM)":
          profilSahabat.maklumatKegiatanModal.pulanganPerRM,
        Minggu: "", // Leave blank if not applicable
        "Inflow (RM)": "",
        "Outflow (RM)": "",
        "Week Num.": "",
        "Net (RM)": "",
        "Income from A1 (RM)": "",
      },
    ];

    profilSahabat.maklumatInflowOutflowSahabat.rekodMingguanInflowOutflow.data.forEach(
      (record) => {
        exportData.push({
          Perkara: "", // Leave blank if not applicable
          "ID": "",
          "Customer Name": "",
          "Nama Suami": "",
          Branch: "",
          Dimension: "",
          "PJM Cummulative": "",
          "Fund Management": "",
          Project: "",
          "Loan Cycle": "",
          "Payment Modal (RM)": "",
          "Income from Modal (RM)": "",
          "Profit Per RM (RM)": "",
          Minggu: record.minggu,
          "Inflow (RM)": record.inflow,
          "Outflow (RM)": record.outflow,
          "Week Num.": "",
          "Net (RM)": "",
          "Income from A1 (RM)": "",
        });
      }
    );

    exportData.push({
      Perkara: "", // Leave blank if not applicable
      "ID": "",
      "Customer Name": "",
      "Nama Suami": "",
      Branch: "",
      Dimension: "",
      "PJM Cummulative": "",
      "Fund Management": "",
      Project: "",
      "Loan Cycle": "",
      "Payment Modal (RM)": "",
      "Income from Modal (RM)": "",
      "Profit Per RM (RM)": "",
      Minggu: "",
      "Inflow (RM)":
        profilSahabat.maklumatInflowOutflowSahabat.rekodKumulatifInflowOutflow
          .kumulatifInflow,
      "Outflow (RM)":
        profilSahabat.maklumatInflowOutflowSahabat.rekodKumulatifInflowOutflow
          .kumaltifOutflow,
      "Week Num.":
        profilSahabat.maklumatInflowOutflowSahabat.rekodKumulatifInflowOutflow
          .jumlahBilanganMinggu,
      "Net (RM)":
        profilSahabat.maklumatInflowOutflowSahabat.rekodKumulatifInflowOutflow
          .bersih,
      "Income from A1 (RM)":
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

    const fileName = `Customer Profile_${apiData[0]["ID"]}`;
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Customer Profile");

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
        <h1>Customer Profile</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="breadcrumb-previous-link" href="#">
            Report List
          </Breadcrumb.Item>
          <Breadcrumb.Item className="breadcrumb-previous-link" href="#">
            Customer Profile List Financial
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Customer Profile Report</Breadcrumb.Item>
        </Breadcrumb>

        <div className="report-customer-details-details">
          <p>
            <strong>Search Result: Customer IC</strong>
          </p>
        </div>
      </div>

      <div className="report-customer-details-action-bts-container">
        <Button onClick={clickExportProfailSahabat}>Export</Button>{" "}
        <Button onClick={handlePrintProfailSahabat}>Print</Button>{" "}
      </div>

      {/* Printable area start */}
      <div ref={printRef} className="printable">
        {/* Bahagian A: Basic Information */}
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

      <div className="return-btn-container sc-return-btn-sahabat-customer">
        <Button className="return-btn" onClick={goBack}>
          Back
        </Button>{" "}
      </div>
    </>
  );
}

export default ShowCustomerProfile;
