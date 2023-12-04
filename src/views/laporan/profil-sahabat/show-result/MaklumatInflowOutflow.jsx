import React from "react";
import { Table, Row, Col } from "react-bootstrap";

function MaklumatInflowOutflow() {
  return (
    <>
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
    </>
  );
}

export default MaklumatInflowOutflow;
