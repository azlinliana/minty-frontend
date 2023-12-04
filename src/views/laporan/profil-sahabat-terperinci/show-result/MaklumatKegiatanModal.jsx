import React from "react";
import { Table } from "react-bootstrap";

function MaklumatKegiatanModal() {
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
              <td>: 12/02/2016</td>
            </tr>
            <tr>
              <th>2.</th>
              <th>Bil. Minggu Tracking</th>
              <td>: 10</td>
            </tr>
            <tr>
              <th>3.</th>
              <th>Jumlah Pembiayaan Kumulatif (RM)</th>
              <td>: 45,698.00</td>
            </tr>
            <tr>
              <th>4.</th>
              <th>Jum Pembiayaan + Caj Terkini (RM)</th>
              <td>: 5,375.00</td>
            </tr>
            <tr>
              <th>5.</th>
              <th>Projek / Sub Kegiatan</th>
              <td>: Tanam Sayur dan Kelapa </td>
            </tr>
            <tr>
              <th>6.</th>
              <th>Pengguna Dana</th>
              <td>: PS </td>
            </tr>
            <tr>
              <th>7.</th>
              <th>Pendapatan dari A1 (RM)</th>
              <td>: 1,713.00</td>
            </tr>
            <tr>
              <th>8.</th>
              <th>Pulangan Per RM</th>
              <td>: 0.32</td>
            </tr>
            <tr>
              <th>9.</th>
              <th>Loan Cycle</th>
              <td>: 7</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default MaklumatKegiatanModal;
