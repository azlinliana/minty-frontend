import React from "react";
import { Table } from "react-bootstrap";

function MaklumatAsas() {
  return (
    <>
      <div className="tableSection">
        <div className="sectionHeader">
          <h1>Bahagian A: Maklumat Asas</h1>
        </div>

        <Table responsive striped bordered className="laporanTable">
          <tbody>
            <tr>
              <th>1.</th>
              <th>Perkara</th>
              <td>: ROTIF - Julat Sederhana</td>
            </tr>
            <tr>
              <th>2.</th>
              <th>No IC</th>
              <td>: 601009086028</td>
            </tr>
            <tr>
              <th>3.</th>
              <th>Nama Sahabat</th>
              <td>: HAIRON BINTI RAMLI</td>
            </tr>
            <tr>
              <th>4.</th>
              <th>Nama Suami</th>
              <td>: HARUN BIN KULUB</td>
            </tr>
            <tr>
              <th>5.</th>
              <th>Cawangan</th>
              <td>: TAIPING</td>
            </tr>
            <tr>
              <th>6.</th>
              <th>Blok</th>
              <td>: KAMUNTING</td>
            </tr>
            <tr>
              <th>7.</th>
              <th>Pusat</th>
              <td>: SITI KHATIJAH</td>
            </tr>
            <tr>
              <th>8.</th>
              <th>Nama PC Cawangan</th>
              <td>: MOHD ZARUL ABDULLAH</td>
            </tr>
            <tr>
              <th>9.</th>
              <th>Nama PA Pusat</th>
              <td>: AZWANI BINTI IBRAHIM</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default MaklumatAsas;
