import React from "react";
import { Button, Table, Container } from "react-bootstrap";
import "../../../assets/styles/styles_laporan.css";


function SearchResultReport1({ resultTF01 }) {
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
        <h3>Hasil Carian: Wilayah - , Cawangan - , Pusat -</h3>

        <div>
          <Table responsive striped bordered>
            <thead>
              <tr>
                <th>Bil.</th>
                <th>Nama Cawangan</th>
                <th>Nama Blok</th>
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
                <th>Pulangan Per RM (RM)</th>
                <th>Bil. Kali Pinjam</th>
                <th>Pengguna Modal</th>
                <th>Bil. Minggu Tracking</th>
                <th>Tarikh Akhir Tracking</th>
                <th>Julat Pulangan</th>
              </tr>
            </thead>

            <tbody>
              {resultTF01.length === 0 ? (
                <tr>
                  <td colSpan={22}>
                    <center>Tiada maklumat.</center>
                  </td>
                </tr>
              ) : (
                resultTF01.map((resultTF01Data, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{resultTF01Data.namaCawangan}</td>
                    <td></td>
                    <td>{resultTF01Data.namaPusat}</td>
                    <td>{resultTF01Data.noKadPengenalanSahabat}</td>
                    <td></td>
                    <td>{resultTF01Data.namaSahabat}</td>
                    <td>{resultTF01Data.dimensi.join(", ")}</td>
                    <td>{resultTF01Data.tulenCampuran}</td>
                    <td></td>
                    <td>{resultTF01Data.kegiatan.join(", ")}</td>
                    <td>{resultTF01Data.subKegiatan.join(", ")}</td>
                    <td></td>
                    <td>{formatMoney(resultTF01Data.pendapatanDaripadaAIM)}</td>
                    <td>
                      {formatMoney(
                        resultTF01Data.pendapatanDaripadaJumlahMasuk
                      )}
                    </td>
                    <td>
                      {formatMoney(
                        resultTF01Data.pendapatanDaripadaJumlahKeluar
                      )}
                    </td>
                    <td>{formatMoney(resultTF01Data.pulanganPerRM)}</td>
                    <td></td>
                    <td>{resultTF01Data.penggunaModal.join(", ")}</td>
                    <td>{resultTF01Data.bilanganMingguTracking}</td>
                    <td>
                      {new Date(
                        resultTF01Data.tarikhAkhirTracking
                      ).toLocaleDateString("en-GB")}
                    </td>
                    <td>{resultTF01Data.julatPulangan}</td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>{" "}
        </div>
      </div>

      <Container fluid className="download-btn-container">
        <div>
          <Button>Muat Turun TF01</Button>{" "}
        </div>
      </Container>
    </>
  );
}

export default SearchResultReport1;
