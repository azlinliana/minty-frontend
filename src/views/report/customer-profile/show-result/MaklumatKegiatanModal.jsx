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
      <div className="report-table-container">
        <div className="report-table-header">
          <h1>Section B: Capital Activity Information</h1>
        </div>

        <Table responsive striped bordered className="report-table-styling">
          <thead>
            <tr>
              <th>Financing Capital (RM)</th>
              <th>Income from Capital (RM)</th>
              <th>Return Per RM (RM)</th>
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
