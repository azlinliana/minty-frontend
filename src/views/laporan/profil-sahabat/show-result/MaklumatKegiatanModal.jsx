import React from "react";
import { Table } from "react-bootstrap";

function MaklumatKegiatanModal() {
  return (
    <>
      <div className="tableSection">
        <div className="sectionHeader">
          <h1>Bahagian B: Maklumat Kegiatan Modal</h1>
        </div>

        <Table responsive striped bordered className="laporanTable">
          <thead>
            <tr>
              <th>Modal Pembiayaan AIM (RM)</th>
              <th>Pendapatan daripada Modal (RM)</th>
              <th>Pulangan Per RM (RM)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>11000</td>
              <td>9535</td>
              <td>0.87</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default MaklumatKegiatanModal;
