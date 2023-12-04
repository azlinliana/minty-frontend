import React from "react";
import { Table } from "react-bootstrap";

function PendapatanKumulatifKegiatan() {
  return (
    <>
      <div className="tableSection">
        <div className="sectionHeader">
          <h1>Bahagian C: Maklumat Pendapatan (Kumulatif) dan Kegiatan</h1>
        </div>

        <Table responsive striped bordered className="laporanTable">
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Nama</th>
              <th>Kod</th>
              <th>Inflows</th>
              <th>Pengusaha</th>
              <th>Kegiatan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>HAIRON BT RAMLI</td>
              <td>A1</td>
              <td>834</td>
              <td>Sahabat</td>
              <td>Tanam dan Jual Sayur</td>
            </tr>
            <tr>
              <td>2.</td>
              <td>HAIRON BT RAMLI</td>
              <td>A6</td>
              <td>700</td>
              <td>Sahabat</td>
              <td>Rumah Sewa</td>
            </tr>
            <tr>
              <td>3.</td>
              <td>HARUN BIN KULUB</td>
              <td>A1</td>
              <td>884</td>
              <td>Suami</td>
              <td>Kelapa</td>
              {/*Kod yang terlibat hanya A1 hingga A6 sahaja*/}
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default PendapatanKumulatifKegiatan;
