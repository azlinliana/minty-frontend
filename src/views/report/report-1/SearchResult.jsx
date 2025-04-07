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
        <h3>Search Result: Region - , Branch - , Centre -</h3>

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
                <th>Staff Id</th>
                <th>Loan</th>
                {/* <th>Tulen/Campuran</th> */}
                <th>Range</th>
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
                <th>Return Range</th>
              </tr>
            </thead>

            <tbody>
              {/* {resultTF01.length === 0 ? ( */}
                <tr>
                  <td colSpan={22}>
                    <center>No data.</center>
                  </td>
                </tr>
              {/* ) : ( */}
                {/* resultTF01.map((resultTF01Data, index) => ( */}
                  <tr 
                    // key={index}
                  >
                    <td>
                      {/* {index + 1} */}
                    </td>
                    <td>
                      {/* {resultTF01Data.namaCawangan} */}
                    </td>
                    <td></td>
                    <td>
                      {/* {resultTF01Data.namaPusat} */}
                    </td>
                    <td>
                      {/* {resultTF01Data.noKadPengenalanSahabat} */}
                    </td>
                    <td>
                      {/* {resultTF01Data.namaSahabat} */}
                    </td>
                    <td></td>
                    <td>
                      {/* {resultTF01Data.dimensi.join(", ")} */}
                    </td>
                    <td>
                      {/* {resultTF01Data.tulenCampuran} */}
                    </td>
                    <td></td>
                    <td>
                      {/* {resultTF01Data.kegiatan.join(", ")} */}
                    </td>
                    <td>
                      {/* {resultTF01Data.subKegiatan.join(", ")} */}
                    </td>
                    <td></td>
                    <td>
                      {/* {formatMoney(resultTF01Data.pendapatanDaripadaAIM)} */}
                    </td>
                    <td>
                      {/* {formatMoney(
                        resultTF01Data.pendapatanDaripadaJumlahMasuk
                      )} */}
                    </td>
                    <td>
                      {/* {formatMoney(
                        resultTF01Data.pendapatanDaripadaJumlahKeluar
                      )} */}
                    </td>
                    <td>
                      {/* {formatMoney(resultTF01Data.pulanganPerRM)} */}
                    </td>
                    <td></td>
                    <td>
                      {/* {resultTF01Data.penggunaModal.join(", ")} */}
                    </td>
                    <td>
                      {/* {resultTF01Data.bilanganMingguTracking} */}
                    </td>
                    <td>
                      {/* {new Date(
                        resultTF01Data.tarikhAkhirTracking
                      ).toLocaleDateString("en-GB")} */}
                    </td>
                    <td>
                      {/* {resultTF01Data.julatPulangan} */}
                    </td>
                  </tr>
                {/* ))
              )} */}
            </tbody>
          </Table>{" "}
        </div>
      </div>

      <Container fluid className="download-btn-container">
        <div>
          <Button>Download Report 1</Button>{" "}
        </div>
      </Container>
    </>
  );
}

export default SearchResultReport1;
