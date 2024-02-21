import React from "react";
import Table from "react-bootstrap/Table";

// Helper function to render cells based on data type
const renderCell = (data) => {
  if (typeof data === "object" && data !== null) {
    return data.total || "0";
  }
  return data || "0";
};

function PendapatanVSPerbelanjaanSumberPengusaha({
  pendapatanVSPerbelanjaanData,
}) {
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

  // ------------ BE --------------
  // Extract data from props
  const { sahabat, isiRumah, baki, jumlah } = pendapatanVSPerbelanjaanData;

  // Combine keys from "pendapatan" and "perbelanjaan" within "isiRumah"
  const isiRumahKeys = isiRumah
    ? Array.from(
        new Set([
          ...Object.keys(isiRumah.pendapatan),
          ...Object.keys(isiRumah.perbelanjaan),
        ])
      )
    : [];

  // Dynamic header keys for "Kod," "Sahabat," and combined keys from "pendapatan" and "perbelanjaan" within "isiRumah"
  const allKeys = Array.from(
    new Set(["Kod", ...(sahabat ? ["Sahabat"] : []), ...isiRumahKeys])
  );

  // Extract pendapatan and perbelanjaan values for Sahabat
  const sahabatPendapatan = sahabat ? sahabat.pendapatan : {};
  const sahabatPerbelanjaan = sahabat ? sahabat.perbelanjaan : {};

  // Extract baki values for Sahabat and isiRumah
  const bakiSahabat = baki ? baki.bakiSahabat : {};
  const bakiIsiRumah = baki ? baki.bakiIsiRumah : {};

  // Extract jumlah value for total pendapatan, total perbelanjaan, and overallMinus
  const totalPendapatan = jumlah ? jumlah.totalPendapatan : {};
  const totalPerbelanjaan = jumlah ? jumlah.totalPerbelanjaan : {};
  const overallMinus = jumlah ? jumlah.overallMinus : {};

  return (
    <>
      <div className="laporan-table-container">
        <div className="laporan-table-header">
          <h1>Bahagian F: Maklumat Kumulatif Pendapatan vs Perbelanjaan</h1>
        </div>

        <Table responsive striped bordered className="laporan-table-styling">
          <thead>
            <tr>
              {allKeys.map((key) => (
                <th key={key}>{key !== "Kod" ? `${key} (RM)` : key}</th>
              ))}
              <th>Jumlah (RM)</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>PENDAPATAN</td>
              <td>{renderCell(formatMoney(sahabatPendapatan))}</td>
              {/* Loop through isiRumah for Pendapatan */}
              {isiRumahKeys.map((key) => (
                <td key={key}>
                  {renderCell(formatMoney(isiRumah.pendapatan[key]))}
                </td>
              ))}
              <td>{renderCell(formatMoney(totalPendapatan))}</td>
            </tr>
            <tr>
              <td>PERBELANJAAN</td>
              <td>{renderCell(formatMoney(sahabatPerbelanjaan))}</td>
              {/* Loop through isiRumah for Perbelanjaan */}
              {isiRumahKeys.map((key) => (
                <td key={key}>
                  {renderCell(formatMoney(isiRumah.perbelanjaan[key]))}
                </td>
              ))}
              <td>{renderCell(formatMoney(totalPerbelanjaan))}</td>
            </tr>
            <tr>
              <td>BAKI (RM)</td>
              <td>{renderCell(formatMoney(bakiSahabat))}</td>
              {/* Loop through bakiIsiRumah for each isi rumah */}
              {isiRumahKeys.map((key) => (
                <td key={key}>{renderCell(formatMoney(bakiIsiRumah[key]))}</td>
              ))}
              <td>{renderCell(formatMoney(overallMinus))}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default PendapatanVSPerbelanjaanSumberPengusaha;
