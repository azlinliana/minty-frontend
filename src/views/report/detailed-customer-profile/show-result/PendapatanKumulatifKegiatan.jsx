import React from "react";
import Table from "react-bootstrap/Table";

function PendapatanKumulatifKegiatan({
  maklumatPendapatanKumulatifKegiatanData,
}) {
  // ------------ FE --------------
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
      <div className="laporan-table-container">
        <div className="laporan-table-header">
          <h1>Section C: Cumulative Income & Activity</h1>
        </div>

        <Table responsive striped bordered className="laporan-table-styling">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Code</th>
              <th>Inflows</th>
              <th>Entrepreneur</th>
              <th>Activity</th>
            </tr>
          </thead>

          <tbody>
            {/* Sahabat */}
            {/* {maklumatPendapatanKumulatifKegiatanData?.sahabat &&
              maklumatPendapatanKumulatifKegiatanData.sahabat.map(
                (sahabatData, sahabatIndex) => ( */}
                  <tr 
                    // key={sahabatIndex}
                  >
                    <td>
                      {/* {sahabatIndex + 1} */}
                    </td>
                    <td>
                      {/* {sahabatData.namaSahabat} */}
                    </td>
                    <td>
                      {/* {sahabatData.kodInflow} */}
                    </td>
                    <td>
                      {/* {formatMoney(sahabatData.cumulativeTotalInflow)} */}
                    </td>
                    <td>
                      {/* {sahabatData.pengusaha} */}
                    </td>
                    <td>
                      {/* {sahabatData.kegiatan} */}
                    </td>
                  </tr>
                {/* )
              )} */}

            {/* Isi Rumah */}
            {/* {maklumatPendapatanKumulatifKegiatanData?.isiRumah &&
              maklumatPendapatanKumulatifKegiatanData.isiRumah.map(
                (isiRumahData, isiRumahIndex) => ( */}
                  <tr 
                    // key={isiRumahIndex}
                  >
                    <td>
                      {/* {maklumatPendapatanKumulatifKegiatanData.sahabat.length +
                        isiRumahIndex +
                        1} */}
                    </td>
                    <td>
                      {/* {isiRumahData[0].namaIsiRumah} */}
                    </td>
                    <td>
                      {/* {isiRumahData[0].kodInflow} */}
                    </td>
                    <td>
                      {/* {formatMoney(isiRumahData[0].cumulativeTotalInflow)} */}
                    </td>
                    <td>
                      {/* {isiRumahData[0].pengusaha} */}
                    </td>
                    <td>
                      {/* {isiRumahData[0].kegiatan} */}
                    </td>
                  </tr>
                {/* )
              )} */}
          </tbody>
        </Table>

        <div className="sc-laporan-penerangan-kod">
          <p>**Only applicable to certain code</p>
        </div>
      </div>
    </>
  );
}

export default PendapatanKumulatifKegiatan;
