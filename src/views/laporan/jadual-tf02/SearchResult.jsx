import { Button, Table, Container } from "react-bootstrap";
import "../../../assets/styles/styles_laporan.css";

function ResultTf02({ resultTf02 }) {
  return (
    <>
      <div className="laporan-search-result-container">
        <h3>Hasil Carian: Cawangan - Ipoh</h3>
        <div>
          <Table responsive striped bordered>
            <thead>
              <tr>
                <th>Bil.</th>
                <th>Nama Cawangan</th>
                <th>Nama Kakitangan</th>
                <th>Bil. Rekod Key-In Tracking</th>
                <th>Tarikh Akhir Key-In Tracking</th>
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
              {resultTf02.length === 0 ? (
                <tr>
                  <td colSpan={14}>
                    <center>Tiada maklumat.</center>
                  </td>
                </tr>
              ) : (
                resultTf02.map((resultTf02Data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{resultTf02Data.namaCawangan}</td>
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
                ))
              )}
            </tbody>
          </Table>
        </div>
      </div>

      <Container fluid className="download-btn-container">
        <div>
          <Button>Muat Turun TF02</Button>{" "}
        </div>
      </Container>
    </>
  );
}

export default ResultTf02;
