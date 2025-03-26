import { Button, Table, Container } from "react-bootstrap";
import "../../../assets/styles/styles_laporan.css";

function ResultTf01ByCawangan({
  resultTf01ByCawangan,
  selectedWilayah,
  selectedCawangan,
}) {
  // Format money value
  const formatMoney = (value) => {
    return value !== null && !isNaN(value)
      ? parseFloat(value).toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      : "-";
  };
  return (
    <>
      <div className="laporan-search-result-container">
        <div>
          <h3>
            Hasil Carian: Wilayah - {selectedWilayah.namaWilayah} , Cawangan -{" "}
            {selectedCawangan.namaCawangan}
          </h3>
        </div>

        <div>
          <Table responsive striped bordered>
            <thead>
              <tr>
                <th>Bil.</th>
                <th>Nama Cawangan</th>
                <th>Nama Blok</th>
                <th>Nama Pusat</th>
                <th>No. KP Sahabat</th>
                <th>Nama Sahabat/Sampel</th>
                <th>Dimensi</th>
                <th>Kegiatan</th>
                <th>Sub Kegiatan</th>
                <th>Pembiayaan + Caj (RM)</th>
                <th>Pendapatan dari AIM (A1) (RM)</th>
                <th>Pendapatan dari Jumlah Masuk (Inflow) (RM)</th>
                <th>Pendapatan dari Jumlah Keluar (Outflow) (RM)</th>
                <th>Pulangan Per RM (RM)</th>
                <th>Bil. Kali Pinjam</th>
                <th>Pengguna Modal</th>
                <th>Bil. Minggu Tracking</th>
                <th>Tarikh Akhir Tracking</th>
              </tr>
            </thead>

            <tbody>
              {resultTf01ByCawangan.length === 0 ? (
                <tr>
                  <td colSpan={21}>
                    <center>Tiada maklumat.</center>
                  </td>
                </tr>
              ) : (
                resultTf01ByCawangan.map((resultTf01ByCawanganData, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{resultTf01ByCawanganData.namaCawangan}</td>
                    <td></td>
                    <td>{resultTf01ByCawanganData.namaPusat}</td>
                    <td>{resultTf01ByCawanganData.noKadPengenalanSahabat}</td>
                    <td>{resultTf01ByCawanganData.namaSahabat}</td>
                    <td>{resultTf01ByCawanganData.dimensi.join(", ")}</td>
                    <td>{resultTf01ByCawanganData.kegiatan.join(", ")}</td>
                    <td>{resultTf01ByCawanganData.subKegiatan.join(", ")}</td>
                    <td></td>
                    <td>
                      {formatMoney(
                        resultTf01ByCawanganData.pendapatanDaripadaAIM
                      )}
                    </td>
                    <td>
                      {formatMoney(
                        resultTf01ByCawanganData.pendapatanDaripadaJumlahMasuk
                      )}
                    </td>
                    <td>
                      {formatMoney(
                        resultTf01ByCawanganData.pendapatanDaripadaJumlahKeluar
                      )}
                    </td>
                    <td>
                      {formatMoney(resultTf01ByCawanganData.pulanganPerRM)}
                    </td>
                    <td></td>
                    <td>{resultTf01ByCawanganData.penggunaModal.join(", ")}</td>
                    <td>{resultTf01ByCawanganData.bilanganMingguTracking}</td>
                    <td>
                      {new Date(
                        resultTf01ByCawanganData.tarikhAkhirTracking
                      ).toLocaleDateString("en-GB")}
                    </td>
                    <td>{resultTf01ByCawanganData.julatPulangan}</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </div>

      <Container fluid className="download-btn-container">
        <div>
          <Button>Muat Turun TF01 - Cawangan</Button>
        </div>
      </Container>
    </>
  );
}

export default ResultTf01ByCawangan;
