import React, {useState, useEffect} from 'react';
import "../Laporan.css";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function SearchResultTF01({resultTF01}) {
  return (
    <>
      <div className="searchResultContainer">
        <h3>Hasil Carian: Wilayah - Perak, Cawangan - Ipoh, Pusat - Ainul Hayat</h3>

        <div>
          <Table responsive striped bordered>
            <thead>
              <tr>
                <th>Bil.</th>
                <th>Nama Cawangan</th>
                <th>Nama Blok</th>
                <th>Nama Pusat</th>
                <th>No. KP Sahabat</th>
                <th>No. Kakitangan</th>
                <th>Nama Sahabat/Sampel</th>
                <th>Dimensi</th>
                <th>Tulen/Campuran</th>
                <th>Julat</th>
                <th>Kegiatan</th>
                <th>Sub Kegiatan</th>
                <th>Pembiayaan + Caj (RM)</th>
                <th>Pendapatan dari AIM (A1) (RM)</th>
                <th>Pendapatan dari Jumlah Masuk (Inflow) (RM)</th>
                <th>Pendapatan dari Jumlah Keluar (Outflow) (RM)</th>
                <th>Pulangan Per RM</th>
                <th>Bilangna Kali Pinjam</th>
                <th>Pengguna Modal</th>
                <th>Bil. Minggu Tracking</th>
                <th>Tarikh Last Tracking</th>
                <th>Julat Pulangan</th>
              </tr>
            </thead>
            <tbody>
              {resultTF01.length === 0 ? (
                <tr><td colSpan={22}><center>Tiada maklumat.</center></td></tr>
              ) : (
                resultTF01.map((resultTF01Data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{resultTF01Data.namaCawangan}</td>
                    <td></td>
                    <td>{resultTF01Data.namaPusat}</td>
                    <td>{resultTF01Data.noKadPengenalanSahabat}</td>
                    <td></td>
                    <td>{resultTF01Data.namaSahabat}</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>{" "}
        </div>
      </div>

      <div className="downloadBtnPlacement"><div className="downloadBtn"><Button variant="primary">Muat Turun TF01</Button>{" "}</div></div>
    </>
  );
}

export default SearchResultTF01;
