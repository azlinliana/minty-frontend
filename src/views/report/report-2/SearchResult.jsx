import { Button, Table, Container } from "react-bootstrap";
import "../../../assets/styles/styles_report.css";

function SearchResultReport2({
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
      <div className="report-search-result-container">
        <div>
          <h3>
            Search Result: Region - {selectedWilayah.namaWilayah} , Branch -{" "}
            {selectedCawangan.namaCawangan}
          </h3>
        </div>

        <div>
          <Table responsive striped bordered>
            <thead>
              <tr>
                <th>No.</th>
                <th>Branch Name</th>
                <th>Block Name</th>
                <th>Centre Name</th>
                <th>Customer IC</th>
                <th>Customer Name</th>
                <th>Loan</th>
                <th>Activity</th>
                <th>Sub Activity</th>
                <th>Financing + Charge (RM)</th>
                <th>Capital Income (RM)</th>
                <th>Inflow Income (Inflow) (RM)</th>
                <th>Outflow Income (RM)</th>
                <th>Return Per RM (RM)</th>
                <th>No. of Times Borrowed</th>
                <th>Fund</th>
                <th>Week Tracking</th>
                <th>Last Date Tracking</th>
              </tr>
            </thead>

            <tbody>
              {/* {resultTf01ByCawangan.length === 0 ? ( */}
                <tr>
                  <td colSpan={21}>
                    <center>No data.</center>
                  </td>
                </tr>
              {/* ) : (
                resultTf01ByCawangan.map((resultTf01ByCawanganData, index) => ( */}
                  <tr 
                    // key={index}
                  >
                    <td>
                      {/* {index + 1} */}
                    </td>
                    <td>
                      {/* {resultTf01ByCawanganData.namaCawangan} */}
                    </td>
                    <td></td>
                    <td>
                      {/* {resultTf01ByCawanganData.namaPusat} */}
                    </td>
                    <td>
                      {/* {resultTf01ByCawanganData.noKadPengenalanSahabat} */}
                    </td>
                    <td>
                      {/* {resultTf01ByCawanganData.namaSahabat} */}
                    </td>
                    <td>
                      {/* {resultTf01ByCawanganData.dimensi.join(", ")} */}
                    </td>
                    <td>
                      {/* {resultTf01ByCawanganData.kegiatan.join(", ")} */}
                    </td>
                    <td>
                      {/* {resultTf01ByCawanganData.subKegiatan.join(", ")} */}
                    </td>
                    <td></td>
                    <td>
                      {/* {formatMoney(
                        resultTf01ByCawanganData.pendapatanDaripadaAIM
                      )} */}
                    </td>
                    <td>
                      {/* {formatMoney(
                        resultTf01ByCawanganData.pendapatanDaripadaJumlahMasuk
                      )} */}
                    </td>
                    <td>
                      {/* {formatMoney(
                        resultTf01ByCawanganData.pendapatanDaripadaJumlahKeluar
                      )} */}
                    </td>
                    <td>
                      {/* {formatMoney(resultTf01ByCawanganData.pulanganPerRM)} */}
                    </td>
                    <td></td>
                    <td>
                      {/* {resultTf01ByCawanganData.penggunaModal.join(", ")} */}
                    </td>
                    <td>
                      {/* {resultTf01ByCawanganData.bilanganMingguTracking} */}
                    </td>
                    <td>
                      {/* {new Date(
                        resultTf01ByCawanganData.tarikhAkhirTracking
                      ).toLocaleDateString("en-GB")} */}
                    </td>
                    <td>
                      {/* {resultTf01ByCawanganData.julatPulangan} */}
                    </td>
                  </tr>
                {/* ))
              )} */}
            </tbody>
          </Table>
        </div>
      </div>

      <Container fluid className="download-btn-container">
        <div>
          <Button>Download Report 2</Button>
        </div>
      </Container>
    </>
  );
}

export default SearchResultReport2;
