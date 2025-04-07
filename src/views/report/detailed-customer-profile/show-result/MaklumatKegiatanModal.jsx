import React from "react";
import Table from "react-bootstrap/Table";

function MaklumatKegiatanModal({ maklumatKegiatanModalData }) {
  // ------------ FE --------------
  // Format money value
  const formatMoney = (value) => {
    return value !== null && !isNaN(value)
      ? parseFloat(value).toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      : "-";
  };

  return (
    <>
      <div className="laporan-table-container">
        <div className="laporan-table-header">
          <h1>Section B: Activity & Capital Information</h1>
        </div>

        <Table responsive striped bordered className="laporan-table-styling">
          <tbody>
            <tr>
              <th>1.</th>
              <th>Joined Date</th>
              <td>: </td>
            </tr>
            <tr>
              <th>2.</th>
              <th>Tracking Week</th>
              <td>: {maklumatKegiatanModalData?.bilMingguTracking || "-"}</td>
            </tr>
            <tr>
              <th>3.</th>
              <th>Total Cumulative Financing (RM)</th>
              <td>: </td>
            </tr>
            <tr>
              <th>4.</th>
              <th>Total Cumulative Financing + Charge (RM)</th>
              <td>
                :{" "}
                {formatMoney(
                  maklumatKegiatanModalData?.jumlahPembiayaanCajTerkini
                ) || "-"}
              </td>
            </tr>
            <tr>
              <th>5.</th>
              <th>Project / Sub Activity</th>
              <td>
                :{" "}
                {maklumatKegiatanModalData?.projekSubKegiatan?.kegiatan
                  ?.jenisKegiatan || "-"}{" "}
                {" 》"}
                {maklumatKegiatanModalData?.projekSubKegiatan
                  ?.keterangan_kegiatan?.jenisKeteranganKegiatan || "-"}{" "}
                {" 》"}
                {maklumatKegiatanModalData?.projekSubKegiatan?.projek_kegiatan
                  ?.jenisProjekKegiatan || "-"}
              </td>
            </tr>
            <tr>
              <th>6.</th>
              <th>Fund</th>
              <td>
                :{" "}
                {maklumatKegiatanModalData?.penggunaDana
                  ? maklumatKegiatanModalData.penggunaDana.map(
                      (item, index) => (
                        <span key={index}>
                          {item}
                          {index <
                            maklumatKegiatanModalData.penggunaDana.length - 1 &&
                            ", "}
                        </span>
                      )
                    )
                  : "-"}
              </td>
            </tr>
            <tr>
              <th>7.</th>
              <th>Capital Income (RM)</th>
              <td>
                :{" "}
                {formatMoney(maklumatKegiatanModalData?.pendapatanDariA1) ||
                  "-"}
              </td>
            </tr>
            <tr>
              <th>8.</th>
              <th>Return Per RM (RM)</th>
              <td>: {maklumatKegiatanModalData?.pulanganPerRM || "-"}</td>
            </tr>
            <tr>
              <th>9.</th>
              <th>Loan Cycle</th>
              <td>: {maklumatKegiatanModalData?.loanCycle || "-"}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default MaklumatKegiatanModal;
