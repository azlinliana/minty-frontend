import React from "react";
import { Table } from "react-bootstrap";

function PendapatanKumulatifSumber() {
  return (
    <>
      <div className="tableSection">
        <div className="sectionHeader">
          <h1>
            Bahagian D: Maklumat Pendapatan (Kumulatif) Mengikut Sumber dan
            Pengusaha
          </h1>
        </div>
        <Table responsive striped bordered className="laporanTable">
          <thead>
            <tr>
              <th>Sumber</th>
              <th>Sahabat (RM)</th>
              <th>Suami (RM)</th>
              <th>Anak (RM)</th>
              <th>Jumlah (RM)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A1 – MODAL AIM</td>
              <td>834.00</td>
              <td>884.00</td>
              <td>-</td>
              <td>1,718.00</td>
            </tr>
            <tr>
              <td>A6 – HASIL SEWAAN</td>
              <td>350.00</td>
              <td>-</td>
              <td>-</td>
              <td>350.00</td>
            </tr>
            <tr>
              <td>A10 – ANAK</td>
              <td>1,580.00</td>
              <td>3,130.00</td>
              <td>-</td>
              <td>3,130.00</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default PendapatanKumulatifSumber;
