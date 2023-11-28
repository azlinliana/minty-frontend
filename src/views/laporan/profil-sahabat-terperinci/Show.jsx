import Breadcrumb from "react-bootstrap/Breadcrumb";

import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import "../Laporan.css";

function ShowProfilSahabatTerperinci() {
  return (
    <>
      <div className="pageTitle">
        <h1>Profil Sahabat Terperinci</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="previousLink" href="#">
            Senarai Laporan
          </Breadcrumb.Item>
          <Breadcrumb.Item className="previousLink" href="#">
            Carian Pembiayaan Sahabat Terperinci
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Laporan Profil Sahabat Terperinci
          </Breadcrumb.Item>
        </Breadcrumb>

        <div className="hasilCarian">
          <p>
            <strong>Hasil Carian:</strong> 821006086174
          </p>
        </div>
      </div>

      <div className="buttonContainer">
        <Button variant="primary">Cetak</Button>{" "}
      </div>

      {/* Bahagian A: Maklumat Asas */}
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

      {/* Bahagian B: Maklumat Kegiatan & Modal */}
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

      {/* Bahagian C: Maklumat Pendapatan (Kumulatif) dan Kegiatan */}
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

      {/* Bahagian D: Maklumat Pendapatan (Kumulatif) Mengikut Sumber dan Pengusaha */}
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

      {/* Bahagian E: Maklumat Perbelanjaan (Kumulatif) Mengikut Sumber dan Pengusaha */}
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

      {/* Bahagian F: Maklumat Kumulatif Pendapatan vs Perbelanjaan */}
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

export default ShowProfilSahabatTerperinci;
