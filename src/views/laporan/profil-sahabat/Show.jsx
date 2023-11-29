import Breadcrumb from "react-bootstrap/Breadcrumb";

import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../Laporan.css";

function ShowProfilSahabat() {
  return (
    <>
      <div className="pageTitle">
        <h1>Profil Sahabat</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="previousLink">
            Senarai Laporan
          </Breadcrumb.Item>
          <Breadcrumb.Item className="previousLink" href="#">
            Carian Pembiayaan Sahabat
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Laporan Profil Sahabat</Breadcrumb.Item>
        </Breadcrumb>

        <div className="hasilCarian">
          <p>
            <strong>Hasil Carian:</strong> 821006086174
          </p>
        </div>
      </div>
      <div className="buttonContainer">
        <DropdownButton id="dropdown-basic-button" title="Pilih Eksport">
          <Dropdown.Item href="#/action-1">Eksport Inflow</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Eksport Outflow</Dropdown.Item>
        </DropdownButton>
        <Button>Cetak</Button>{" "}
      </div>

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

      {/* Bahagian B: Maklumat Kegiatan Modal */}
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

      {/* Bahagian C: Maklumat Inflow/Outflow Sahabat */}
      <div className="tableSection">
        <div className="sectionHeader">
          <h1>Bahagian C: Maklumat Inflow/Outflow Sahabat</h1>
        </div>

        <div className="tableBhgC">
          <Row>
            {/* Left Section */}
            <Col md={6}>
              <h2>Section 1</h2>
              <Table responsive striped bordered className="laporanTable">
                <tbody>
                  <tr>
                    <th>Minggu</th>
                    <th>Inflow (RM)</th>
                    <th>Outflow (RM)</th>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>620</td>
                    <td>563</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>1, 380</td>
                    <td>658</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>1, 230</td>
                    <td>508</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>1, 315</td>
                    <td>563</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>12, 960</td>
                    <td>513</td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td>890</td>
                    <td>553</td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td>760</td>
                    <td>563</td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td>2, 010</td>
                    <td>1, 293</td>
                  </tr>
                  <tr>
                    <td>9</td>
                    <td>1, 720</td>
                    <td>595</td>
                  </tr>
                  <tr>
                    <td>10</td>
                    <td>1, 970</td>
                    <td>683</td>
                  </tr>
                  <tr>
                    <td>11</td>
                    <td>850</td>
                    <td>713</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>1, 000</td>
                    <td>933</td>
                  </tr>
                  <tr>
                    <td>Jumlah (RM)</td>
                    <td>26, 705.00</td>
                    <td>8, 138.00</td>
                  </tr>
                </tbody>
              </Table>
            </Col>

            {/* Right Section */}
            <Col md={6}>
              <h2>Section 2</h2>
              <Table striped bordered className="laporanTable">
                <tbody>
                  <tr>
                    <th>Bil. Minggu</th>
                    <td>Inflow (RM)</td>
                    <td>Outflow (RM)</td>
                    <td>Bersih(RM)</td>
                    <td>Pendapatan daripada A1 (RM)</td>
                  </tr>
                  <tr>
                    <td>12</td>
                    <td>26, 705</td>
                    <td>8, 138</td>
                    <td>18, 567</td>
                    <td>9, 535</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </div>
      </div>

      {/* Bahagian D: Maklumat Inflow/Outflow Sahabat */}
      <div className="tableSection">
        <div className="sectionHeader">
          <h1>Bahagian D: Maklumat Inflow/Outflow Sahabat</h1>
        </div>
        Using chart.js & react-chartjs-2
      </div>
    </>
  );
}

export default ShowProfilSahabat;
