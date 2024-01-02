import React from "react";
import Table from "react-bootstrap/Table";

function MaklumatKegiatanModal({ maklumatKegiatanModalData }) {
  console.log(maklumatKegiatanModalData);
  return (
    <>
      <div className="tableSection">
        <div className="sectionHeader">
          <h1>Bahagian B: Maklumat Kegiatan & Modal</h1>
        </div>

        <Table responsive striped bordered className="laporanTable">
          <tbody>
            <tr>
              <th>1.</th>
              <th>Tarikh Masuk AIM</th>
              <td>: </td>
            </tr>
            <tr>
              <th>2.</th>
              <th>Bil. Minggu Tracking</th>
              <td>: {maklumatKegiatanModalData?.bilMingguTracking || '-'}</td>
            </tr>
            <tr>
              <th>3.</th>
              <th>Jumlah Pembiayaan Kumulatif (RM)</th>
              <td>: </td>
            </tr>
            <tr>
              <th>4.</th>
              <th>Jum Pembiayaan + Caj Terkini (RM)</th>
              <td>: {maklumatKegiatanModalData?.jumlahPembiayaanCajTerkini || '-'}</td>
            </tr>
            <tr>
              <th>5.</th>
              <th>Projek / Sub Kegiatan</th>
              <td>: </td>
            </tr>
            <tr>
              <th>6.</th>
              <th>Pengguna Dana</th>
              <td>: {maklumatKegiatanModalData?.penggunaDana
                ? maklumatKegiatanModalData.penggunaDana.map((item, index) => (
                    <span key={index}>{item}{index < maklumatKegiatanModalData.penggunaDana.length - 1 && ', '}</span>
                  ))
                : '-'
              }
              </td>
            </tr>
            <tr>
              <th>7.</th>
              <th>Pendapatan dari A1 (RM)</th>
              <td>: {maklumatKegiatanModalData?.pendapatanDariA1 || '-'}</td>
            </tr>
            <tr>
              <th>8.</th>
              <th>Pulangan Per RM</th>
              <td>: {maklumatKegiatanModalData?.pulanganPerRM || '-'}</td>
            </tr>
            <tr>
              <th>9.</th>
              <th>Loan Cycle</th>
              <td>: {maklumatKegiatanModalData?.loanCycle || '-'}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default MaklumatKegiatanModal;
