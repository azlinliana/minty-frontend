import React from "react";
import { Table } from "react-bootstrap";

function PerbelanjaanKumulatifSumber() {
  return (
    <>
      <div className="tableSection">
        <div className="sectionHeader">
          <h1>
            Bahagian E: Maklumat Perbelanjaan (Kumulatif) Mengikut Sumber dan
            Pengusaha
          </h1>
        </div>
        <Table responsive striped bordered className="laporanTable">
          <thead>
            <tr>
              <th>Kod</th>
              <th>Sahabat</th>
              <th>Suami</th>
              <th>Anak</th>
              <th>Jumlah (RM)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>B1 – MAKAN/MINUM</td>
              <td>120.00</td>
              <td>399.00</td>
              <td>-</td>
              <td>519.00</td>
            </tr>
            <tr>
              <td>B2 – BIL UTILITI</td>
              <td>62.00</td>
              <td>345.00</td>
              <td>-</td>
              <td>407.00</td>
            </tr>
            <tr>
              <td>B3 – BARANG DAPUR</td>
              <td>310.00</td>
              <td>460.00</td>
              <td>-</td>
              <td>770.00</td>
            </tr>
            <tr>
              <td>B4 – PAKAIAN</td>
              <td>114.00</td>
              <td>30.00</td>
              <td>-</td>
              <td>144.00</td>
            </tr>
            <tr>
              <td>B8 – BELANJA SEKOLAH</td>
              <td>-</td>
              <td>50.00</td>
              <td>-</td>
              <td>50.00</td>
            </tr>
            <tr>
              <td>B11 – BELANJA KENDERAAN</td>
              <td>60.00</td>
              <td>275.00</td>
              <td>-</td>
              <td>335.00</td>
            </tr>
            <tr>
              <td>B12 – BAIKI KEROSAKAN</td>
              <td>-</td>
              <td>20.00</td>
              <td>-</td>
              <td>20.00</td>
            </tr>
            <tr>
              <td>B13 – WANG SAKU</td>
              <td>-</td>
              <td>700.00</td>
              <td>-</td>
              <td>700.00</td>
            </tr>
            <tr>
              <td>B15 – BAYAR AIM</td>
              <td>2,370.00</td>
              <td>-</td>
              <td>-</td>
              <td>2,370.00</td>
            </tr>
            <tr>
              <td>B16 – PUSINGAN MODAL</td>
              <td>-</td>
              <td>468.00</td>
              <td>-</td>
              <td>468.00</td>
            </tr>
            <tr>
              <td>B19 – SEDEKAH</td>
              <td>315.00</td>
              <td>150.00 </td>
              <td>-</td>
              <td>465.00</td>
            </tr>
            <tr>
              <td>B20 – SIMPANAN /KUTU</td>
              <td>410.00</td>
              <td>-</td>
              <td>-</td>
              <td>410.00</td>
            </tr>
            <tr>
              <td>B23 – BELI BRG LETRIK</td>
              <td>422.00</td>
              <td>-</td>
              <td>-</td>
              <td>422.00</td>
            </tr>
            <tr>
              <td>Jumlah (RM)</td>
              <td>4,183.00</td>
              <td>2,897.00</td>
              <td>-</td>
              <td>7,080.00</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default PerbelanjaanKumulatifSumber;
