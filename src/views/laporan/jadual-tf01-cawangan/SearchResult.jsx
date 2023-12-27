import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import "../Laporan.css";

function ResultTf01ByCawangan({resultTf01ByCawangan}) {
  console.log(resultTf01ByCawangan);
  return (
    <>
      <div className="searchResultContainer">
        <h3>Hasil Carian: Wilayah - Perak, Cawangan - Ipoh, Pusat - Ainul Hayat</h3>

        <div>
          <Table responsive striped bordered>
            <thead>
              <tr>
                <th>Bil.</th>
                <th>Nama Cawangan</th>
                <th>Nama Pusat</th>
                <th>No. KP Sahabat</th>
                <th>No. Kakitangan</th>
                <th>Nama Sahabat/Sampel</th>
                <th>Dimensi</th>
                <th>Tulen/Campuran</th>
                <th>Julat</th>
                <th>Kegiatan</th>
                <th>Sub Kegiatan</th>
                <th>Pembiayaan + Caj (RM)</th>
                <th>Pendapatan dari AIM (A1) (RM)</th>
                <th>Pendapatan dari Jumlah Masuk (Inflow) (RM)</th>
                <th>Pendapatan dari Jumlah Keluar (Outflow) (RM)</th>
                <th>Pulangan Per RM</th>
                <th>Bilangna Kali Pinjam</th>
                <th>Pengguna Modal</th>
                <th>Bil. Minggu Tracking</th>
                <th>Tarikh Last Tracking</th>
                <th>Julat Pulangan</th>
              </tr>
            </thead>
            <tbody>
              {resultTf01ByCawangan.length === 0 ? (
                <tr><td colSpan={21}><center>Tiada maklumat.</center></td></tr>
              ): (
                resultTf01ByCawangan.map((resultTf01ByCawanganData, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{resultTf01ByCawanganData.namaCawangan}</td>
                    <td>{resultTf01ByCawanganData.namaPusat}</td>
                    <td>{resultTf01ByCawanganData.noKadPengenalanSahabat}</td>
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
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                ))
              )
              }
            </tbody>
          </Table>
        </div>

        <div className="downloadBtnPlacement"><Button className="downloadBtn">Muat Turun TF01 - Cawangan</Button>{" "}</div>
      </div>
    </>
  );
}

export default ResultTf01ByCawangan;
