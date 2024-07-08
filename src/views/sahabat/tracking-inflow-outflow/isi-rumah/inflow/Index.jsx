import React, { useEffect } from "react";
import "../../../../../assets/styles/styles_sahabat.css";
import CreateTrackingInflowIsiRumah from "./Create";
import EditTrackingInflowIsiRumah from "./Edit";
import { Button, Table } from "react-bootstrap";
import { useInflowIsiRumahStore } from "../../../../../store/sahabat/inflow-isi-rumah-store";

function IndexTrackingInflowIsiRumah({
  isiRumahId,
  pembiayaanSahabatsData,
  kodInflowOptions,
}) {
  // ___________________________________ Backend __________________________________
  // List & delete inflow isi rumah
  const { inflowIsiRumahs, fetchInflowIsiRumahs, deleteInflowIsiRumah } =
    useInflowIsiRumahStore((state) => ({
      inflowIsiRumahs: state.inflowIsiRumahs[isiRumahId] || [],
      fetchInflowIsiRumahs: state.fetchInflowIsiRumahs,
      deleteInflowIsiRumah: state.deleteInflowIsiRumah,
    }));

  useEffect(() => {
    fetchInflowIsiRumahs(isiRumahId);
  }, [fetchInflowIsiRumahs, isiRumahId]);

  return (
    <>
      <div className="sahabat-pembiayaan-table-container">
        {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? (
          <div className="tambah-baru-btn-container">
            <CreateTrackingInflowIsiRumah
              isiRumahId={isiRumahId}
              kodInflowOptions={kodInflowOptions}
            />
          </div>
        ) : null}

        <Table bordered responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Kod Inflow</th>
              <th>Keterangan Kod Inflow</th>
              <th>Kod Inflow Terperinci</th>
              <th>Keterangan Kod Inflow Terperinci</th>
              <th>Maklumat Terperinci</th>
              <th>Amaun (RM)</th>
              {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? (
                <th>Tindakan</th>
              ) : null}
            </tr>
          </thead>

          <tbody>
            {inflowIsiRumahs.length === 0 ? (
              <tr>
                <td colSpan="8">
                  <center>
                    Tiada maklumat tracking inflow isi rumah sahabat. Sila klik
                    butang "Tambah" untuk merekodkan inflow isi rumah sahabat
                    baharu.
                  </center>
                </td>
              </tr>
            ) : (
              inflowIsiRumahs.map((inflowIsiRumahsData, index) => (
                <React.Fragment key={index}>
                  {inflowIsiRumahsData.kodInflowTerperinci.length === 0 ? (
                    // Render row for inflow isi rumah without kod inflow terperinci
                    <tr>
                      <td>{index + 1}</td>
                      <td>{inflowIsiRumahsData.kodInflow}</td>
                      <td>{inflowIsiRumahsData.keteranganKodInflow}</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>{inflowIsiRumahsData.amaunInflow}</td>
                      {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? (
                        <td>
                          {/* <EditTrackingInflowIsiRumah
                            isiRumahId={isiRumahId}
                            inflowIsiRumahId={inflowIsiRumahsData.id}
                            inflowIsiRumah={inflowIsiRumahsData}
                            kodInflowOptions={kodInflowOptions}
                          /> */}
                          <Button
                            className="delete-btn"
                            onClick={() =>
                              deleteInflowIsiRumah(isiRumahId, inflowIsiRumahsData.id)
                            }
                          >
                            Padam
                          </Button>{" "}
                        </td>
                      ) : null}
                    </tr>
                  ) : (
                    // Render row for inflow sahabat with kod inflow terperinci
                    <tr>
                      <td
                        rowSpan={
                          inflowIsiRumahsData.kodInflowTerperinci.length + 1
                        }
                      >
                        {index + 1}
                      </td>
                      <td
                        rowSpan={
                          inflowIsiRumahsData.kodInflowTerperinci.length + 1
                        }
                      >
                        {inflowIsiRumahsData.kodInflow}
                      </td>
                      <td
                        rowSpan={
                          inflowIsiRumahsData.kodInflowTerperinci.length + 1
                        }
                      >
                        {inflowIsiRumahsData.keteranganKodInflow}
                      </td>
                    </tr>
                  )}
                  {/* Displaying Kod Inflow Terperinci */}
                  {inflowIsiRumahsData.kodInflowTerperinci.map(
                    (kodInflowTerperincisData, subIndex) => (
                      // Render rows for kod inflow terperinci
                      <tr key={subIndex}>
                        <td>{kodInflowTerperincisData.kodInflowTerperinci}</td>
                        <td>
                          {
                            kodInflowTerperincisData.keteranganKodInflowTerperinci
                          }
                        </td>
                        <td>
                          {inflowIsiRumahsData.inflowIsiRumahTerperinci &&
                            inflowIsiRumahsData.inflowIsiRumahTerperinci
                              .length > 0 &&
                            inflowIsiRumahsData.inflowIsiRumahTerperinci
                              .filter((inflowTerperinci) => {
                                // Match id type: '"1"(string) === 1(integer)'
                                const kodId =
                                  inflowTerperinci.kodInflowTerperinciId;
                                const terperinciId =
                                  kodInflowTerperincisData.id;

                                return String(kodId) === String(terperinciId);
                              })
                              .map((inflowTerperinciData, innerIndex) => (
                                <React.Fragment key={innerIndex}>
                                  {
                                    inflowTerperinciData.keteranganInflowTerperinci
                                  }
                                </React.Fragment>
                              ))}
                        </td>

                        {/* Displaying Amaun and Tindakan for the first row only */}
                        {subIndex === 0 && (
                          <React.Fragment>
                            <td
                              rowSpan={
                                inflowIsiRumahsData.kodInflowTerperinci.length
                              }
                            >
                              {inflowIsiRumahsData.amaunInflow}
                            </td>

                            {pembiayaanSahabatsData.statusPembiayaan !==
                            "SELESAI" ? (
                              <td
                                rowSpan={
                                  inflowIsiRumahsData.kodInflowTerperinci.length
                                }
                              >
                                {/* <EditTrackingInflowIsiRumah
                                  isiRumahId={isiRumahId}
                                  inflowIsiRumahId={inflowIsiRumahsData.id}
                                  inflowIsiRumah={inflowIsiRumahsData}
                                  kodInflowOptions={kodInflowOptions}
                                /> */}
                                <Button
                                  className="delete-btn"
                                  onClick={() =>
                                    deleteInflowIsiRumah(isiRumahId, inflowIsiRumahsData.id)
                                  }
                                >
                                  Padam
                                </Button>{" "}
                              </td>
                            ) : null}
                          </React.Fragment>
                        )}
                      </tr>
                    )
                  )}
                </React.Fragment>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default IndexTrackingInflowIsiRumah;
