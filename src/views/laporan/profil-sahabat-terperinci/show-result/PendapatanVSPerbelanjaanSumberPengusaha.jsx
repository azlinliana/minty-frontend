import React from "react";
import Table from "react-bootstrap/Table";

// Helper function to render cells based on data type
const renderCell = (data) => {
  if (typeof data === "object" && data !== null) {
    return data.total || "0";
  }
  return data || "0";
};

function PendapatanVSPerbelanjaanSumberPengusaha({ pendapatanVSPerbelanjaanData }) {
  // ------------ BE --------------
  // Extract data from props
  const { sahabat, isiRumah, baki, jumlah } = pendapatanVSPerbelanjaanData;

  // Combine keys from "pendapatan" and "perbelanjaan" within "isiRumah"
  const isiRumahKeys = isiRumah
    ? Array.from(new Set([...Object.keys(isiRumah.pendapatan), ...Object.keys(isiRumah.perbelanjaan)]))
    : [];

  // Dynamic header keys for "Kod," "Sahabat," and combined keys from "pendapatan" and "perbelanjaan" within "isiRumah"
  const allKeys = Array.from(new Set(["Kod", ...(sahabat ? ["Sahabat"] : []), ...isiRumahKeys]));

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
      <div className="tableSection">
        <div className="sectionHeader">
          <h1>Bahagian F: Maklumat Kumulatif Pendapatan vs Perbelanjaan</h1>
        </div>

        <Table responsive striped bordered className="laporanTable">
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
              <td>{renderCell(sahabatPendapatan)}</td>
              {/* Loop through isiRumah for Pendapatan */}
              {isiRumahKeys.map((key) => (
                <td key={key}>{renderCell(isiRumah.pendapatan[key])}</td>
              ))}
              <td>{renderCell(totalPendapatan)}</td>
            </tr>
            <tr>
              <td>PERBELANJAAN</td>
              <td>{renderCell(sahabatPerbelanjaan)}</td>
              {/* Loop through isiRumah for Perbelanjaan */}
              {isiRumahKeys.map((key) => (
                <td key={key}>{renderCell(isiRumah.perbelanjaan[key])}</td>
              ))}
              <td>{renderCell(totalPerbelanjaan)}</td>
            </tr>
            <tr>
              <td>BAKI (RM)</td>
              <td>{renderCell(bakiSahabat)}</td>
              {/* Loop through bakiIsiRumah for each isi rumah */}
              {isiRumahKeys.map((key) => (
                <td key={key}>{renderCell(bakiIsiRumah[key])}</td>
              ))}
              <td>{renderCell(overallMinus)}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default PendapatanVSPerbelanjaanSumberPengusaha;
