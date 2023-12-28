import React from "react";
import { Table } from "react-bootstrap";

function PendapatanVSPerbelanjaanSumberPengusaha({ pendapatanVSPerbelanjaanData }) {
  // ------------ BE --------------
  // Extract data from props
  

  return (
    <div>
      <div className="tableSection">
        <div className="sectionHeader"><h1>Bahagian F: Maklumat Kumulatif Pendapatan vs Perbelanjaan</h1></div>

        <Table responsive striped bordered className="laporanTable">
          <thead>
            <tr>
              <th>Kod</th>
              <th>Sahabat</th>
              <th>Suami</th>
              <th>Anak</th>
              <th>Jumlah(RM)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>PENDAPATAN</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>PERBELANJAAN</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>BAKI (RM)</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default PendapatanVSPerbelanjaanSumberPengusaha;
