import React from "react";
import { Table } from "react-bootstrap";

function MaklumatAsas() {
  return (
    <>
      {/* Bahagian A: Maklumat Asas */}
      <div className="tableSection">
        <div className="sectionHeader">
          <h1>Bahagian A: Maklumat Asas</h1>
        </div>

        <Table responsive striped bordered className="laporanTable">
          <tbody>
            <tr>
              <th>Perkara</th>
              <td>: ROTIF</td>
            </tr>
            <tr>
              <th>No IC</th>
              <td>: 821006086174</td>
            </tr>
            <tr>
              <th>Nama Sahabat</th>
              <td>: NOR HASIMAH BINTI NOR RASHID</td>
            </tr>
            <tr>
              <th>Nama Suami</th>
              <td>: HALIM BIN ABDULLAH</td>
            </tr>
            <tr>
              <th>Cawangan</th>
              <td>: 026 - KUALA KANGSAR</td>
            </tr>
            <tr>
              <th>Pusat</th>
              <td>: 02600034 - HIJAU</td>
            </tr>
            <tr>
              <th>Dimensi</th>
              <td>: ROTIF</td>
            </tr>
            <tr>
              <th>Kumulatif PJM</th>
              <td>: 11000</td>
            </tr>
            <tr>
              <th>Pengurusan Dana</th>
              <td>: FM - Fund Manager</td>
            </tr>
            <tr>
              <th>Projek</th>
              <td>: Pembuatan Proses Makanan Kering</td>
            </tr>
            <tr>
              <th>Loan Cycle</th>
              <td>: Pembuatan Proses Makanan Kering</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default MaklumatAsas;
