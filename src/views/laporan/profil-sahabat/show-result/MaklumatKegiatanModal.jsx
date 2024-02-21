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
          <h1>Bahagian B: Maklumat Kegiatan Modal</h1>
        </div>

        <Table responsive striped bordered className="laporan-table-styling">
          <thead>
            <tr>
              <th>Modal Pembiayaan AIM (RM)</th>
              <th>Pendapatan daripada Modal (RM)</th>
              <th>Pulangan Per RM (RM)</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                {formatMoney(maklumatKegiatanModalData?.modalPembiayaanAIM) ||
                  "-"}
              </td>
              <td>
                {formatMoney(
                  maklumatKegiatanModalData?.pendapatanDaripadaModal
                ) || "-"}
              </td>
              <td>{maklumatKegiatanModalData?.pulanganPerRM || "-"}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default MaklumatKegiatanModal;
