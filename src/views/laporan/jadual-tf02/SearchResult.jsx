import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import "../Laporan.css";

function ResultTf02() {
  return (
    <>
      <div className="searchResultContainer">
        <h3>Hasil Carian: Cawangan - Ipoh</h3>
        <div>
          <Table responsive striped bordered>
            <thead>
              <tr>
                <th>Bil.</th>
                <th>Nama Cawangan</th>
                <th>Nama Kakitangan</th>
                <th>Bil. Rekod Key-In Tracking</th>
                <th>Tarikh AKhir Key-In Tracking</th>
                <th>Jan</th>
                <th>Feb</th>
                <th>Mac</th>
                <th>Jumlah</th>
                <th>Skor</th>
                <th>April</th>
                <th>Mei</th>
                <th>Jun</th>
                <th>Skor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </Table>
        </div>

        <div className="downloadBtnPlacement">
          <Button className="downloadBtn">Download TF02</Button>{" "}
        </div>
      </div>
    </>
  );
}

export default ResultTf02;
