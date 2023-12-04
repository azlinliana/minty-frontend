import React from "react";
import { Table } from "react-bootstrap";

function PendapatanVersusPerbelanjaan() {
  return (
    <>
      <div className="tableSection">
        <div className="sectionHeader">
          <h1>Bahagian F: Maklumat Kumulatif Pendapatan vs Perbelanjaan</h1>
        </div>

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
              <td>2,764.00</td>
              <td>6,434.00</td>
              <td>-</td>
              <td>9,198.00</td>
            </tr>
            <tr>
              <td>PERBELANJAAN</td>
              <td>4,183.00</td>
              <td>2,897.00</td>
              <td>-</td>
              <td>7,080.00</td>
            </tr>
            <tr>
              <td>BAKI (RM)</td>
              <td>1,419.00</td>
              <td>3,537.00</td>
              <td>-</td>
              <td>2,118.00</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default PendapatanVersusPerbelanjaan;
