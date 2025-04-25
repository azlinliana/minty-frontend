import React from "react";
import Table from "react-bootstrap/Table";

function PendapatanKumulatifSumberPengusaha({ pendapatanKumulatifSumberData }) {
  if (!pendapatanKumulatifSumberData) {
    return null; // or display a loading indicator or error message
  }
  
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

  // ------------ BE --------------
  // Extract data from props
  const { sahabat, isiRumah, jumlah } = pendapatanKumulatifSumberData;

  // Dynamic header key for sumber, sahabat, and isi rumah
  const allKeys = Array.from(
    new Set([
      "Sumber",
      ...(sahabat ? ["Sahabat"] : []),
      ...(isiRumah ? Object.keys(isiRumah.data) : []),
    ])
  );

  // Dynamic sumber key based on kod inflow available in sahabat and isi rumah
  // Extract key from Sahabat
  const sahabatKeys = sahabat ? Object.keys(sahabat.data) : [];

  // Extract key from each isi rumah
  const isiRumahKeys = isiRumah ? Object.keys(isiRumah.data) : [];
  const allIsiRumahKeysSet = new Set();

  isiRumahKeys.forEach((category) => {
    const categoryKeys = Object.keys(isiRumah.data[category]);
    categoryKeys.forEach((key) => {
      allIsiRumahKeysSet.add(key);
    });
  });

  const allIsiRumahKeys = Array.from(allIsiRumahKeysSet);

  // Combine sahabatKeys and allIsiRumahKeys to get all keys for Sumber
  const allSumberKeysSet = new Set([...sahabatKeys, ...allIsiRumahKeys]);
  const allSumberKeys = Array.from(allSumberKeysSet);

  // Perform natural sort on the keys
  const naturalSort = (a, b) => {
    const numA = parseInt(a.match(/\d+/), 10) || 0;
    const numB = parseInt(b.match(/\d+/), 10) || 0;

    if (numA === numB) {
      return a.localeCompare(b);
    }

    return numA - numB;
  };

  const sortedKeys = allSumberKeys.sort(naturalSort);

  return (
    <>
      <div className="report-table-container">
        <div className="report-table-header">
          <h1>
            Section D: Cumulative Details According to Source and Entreprenuer
          </h1>
        </div>

        <Table responsive striped bordered className="report-table-styling">
          <thead>
            <tr>
              {allKeys.map((key) => (
                <th key={key}>{key !== "Sumber" ? `${key} (RM)` : key}</th>
              ))}
              <th>Total (RM)</th>
            </tr>
          </thead>

          <tbody>
            {sortedKeys.map((sumberKey) => (
              <tr key={sumberKey}>
                <td>{sumberKey}</td>
                <td>
                  {formatMoney(
                    sahabat && sahabat.data[sumberKey] !== undefined
                      ? sahabat.data[sumberKey]
                      : "-"
                  )}
                </td>
                {isiRumahKeys.map((category) => (
                  <td key={category}>
                    {formatMoney(
                      isiRumah &&
                        isiRumah.data[category] &&
                        isiRumah.data[category][sumberKey] !== undefined
                        ? isiRumah.data[category][sumberKey]
                        : "-"
                    )}
                  </td>
                ))}
                <td>
                  {formatMoney(
                    jumlah &&
                      jumlah.totalByKodInflow &&
                      jumlah.totalByKodInflow[sumberKey] !== undefined
                      ? jumlah.totalByKodInflow[sumberKey]
                      : "-"
                  )}
                </td>
              </tr>
            ))}

            <tr>
              <td>Total (RM)</td>
              <td>
                {formatMoney(
                  sahabat && sahabat.totalInflowSahabat !== undefined
                    ? sahabat.totalInflowSahabat
                    : "-"
                )}
              </td>
              {isiRumahKeys.map((category) => (
                <td key={category}>
                  {formatMoney(
                    isiRumah &&
                      isiRumah.totalInflowIsiRumah &&
                      isiRumah.totalInflowIsiRumah[category] !== undefined
                      ? isiRumah.totalInflowIsiRumah[category]
                      : "-"
                  )}
                </td>
              ))}
              <td>
                {formatMoney(
                  jumlah && jumlah.overallTotalInflow !== undefined
                    ? jumlah.overallTotalInflow
                    : "-"
                )}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default PendapatanKumulatifSumberPengusaha;
