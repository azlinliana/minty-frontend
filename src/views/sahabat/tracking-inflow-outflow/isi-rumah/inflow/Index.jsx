import React, { useState, useEffect, useCallback } from "react";
import "../../../../../assets/styles/styles_sahabat.css";
import CreateTrackingInflowIsiRumah from "./Create";
import EditTrackingInflowIsiRumah from "./Edit";
import ErrorAlert from "../../../../components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../../../components/sweet-alert/DeletionAlert";
import { Button, Table } from "react-bootstrap";
import axiosCustom from "../../../../../axios";
import Swal from "sweetalert2";

function IndexTrackingInflowIsiRumah({ isiRumahId, pembiayaanSahabatsData, kodInflowsData }) {
  // ----------BE----------
  // List inflow isi rumah
  const [inflowIsiRumahs, setInflowIsiRumahs] = useState([]);

  const fetchInflowIsiRumahs = useCallback(async () => {
    try {
      const response = await axiosCustom.get(
        `/sahabat/inflow-isi-rumah/${isiRumahId}`
      );

      if (response.status === 200) {
        setInflowIsiRumahs(response.data);
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      if (
        error.response &&
        (error.response.status === 503 || error.response.status === 429)
      ) {
        // The server is not ready, ignore the error
        console.log("Server not ready, retry later.");
      } else {
        // Handle other errors
        ErrorAlert(error);
      }
    }
  }, [isiRumahId, setInflowIsiRumahs]);

  useEffect(() => {
    fetchInflowIsiRumahs();
  }, [fetchInflowIsiRumahs]);

  // Delete inflow isi rumah
  const deleteInflowIsiRumah = async (inflowIsiRumahId) => {
    // Function to delete inflow isi rumah
    const performDeletion = async () => {
      try {
        const response = await axiosCustom.delete(
          `/sahabat/inflow-isi-rumah/${inflowIsiRumahId}`
        );
        if (response.status === 200) {
          setInflowIsiRumahs((prevInflowIsiRumahs) =>
            prevInflowIsiRumahs.filter(
              (inflowIsiRumah) => inflowIsiRumah.id !== inflowIsiRumahId
            )
          );
          // Show success message from the server
          Swal.fire("Dipadam!", response.data.message, "success");
        }
      } catch (error) {
        console.error("Ralat dalam memadam dimensi", error);
      }
    };

    // Function to handle cancellation
    const cancelDeletion = () => {
      Swal.fire("Dibatalkan", "Data anda selamat.", "error");
    };

    // Display the deletion confirmation dialog
    DeletionAlert(performDeletion, cancelDeletion);
  };

  return (
    <>
      <div className="sahabat-pembiayaan-table-container">
        {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? (
          <div className="tambah-baru-btn-container">
            <CreateTrackingInflowIsiRumah
              isiRumahId={isiRumahId}
              kodInflowsData={kodInflowsData}
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
                  {inflowIsiRumahsData.kod_inflow.kod_inflow_terperincis
                    .length === 0 ? (
                    // Render row for inflow isi rumah without kod inflow terperinci
                    <tr>
                      <td>{index + 1}</td>
                      <td>{inflowIsiRumahsData.kod_inflow.kodInflow}</td>
                      <td>
                        {inflowIsiRumahsData.kod_inflow.keteranganKodInflow}
                      </td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>{inflowIsiRumahsData.amaunInflow}</td>
                      {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? (
                        <td>
                          <EditTrackingInflowIsiRumah
                            isiRumahId={isiRumahId}
                            inflowIsiRumahId={inflowIsiRumahsData.id}
                            inflowIsiRumah={inflowIsiRumahsData}
                            kodInflowsData={kodInflowsData}
                          />
                          <Button
                            className="delete-btn"
                            onClick={() =>
                              deleteInflowIsiRumah(inflowIsiRumahsData.id)
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
                          inflowIsiRumahsData.kod_inflow.kod_inflow_terperincis
                            .length + 1
                        }
                      >
                        {index + 1}
                      </td>
                      <td
                        rowSpan={
                          inflowIsiRumahsData.kod_inflow.kod_inflow_terperincis
                            .length + 1
                        }
                      >
                        {inflowIsiRumahsData.kod_inflow.kodInflow}
                      </td>
                      <td
                        rowSpan={
                          inflowIsiRumahsData.kod_inflow.kod_inflow_terperincis
                            .length + 1
                        }
                      >
                        {inflowIsiRumahsData.kod_inflow.keteranganKodInflow}
                      </td>
                    </tr>
                  )}
                  {/* Displaying Kod Inflow Terperinci */}
                  {inflowIsiRumahsData.kod_inflow.kod_inflow_terperincis.map(
                    (kodInflowTerperincisData, subIndex) => (
                      // Render rows for kod_inflow_terperincis
                      <tr key={subIndex}>
                        <td>{kodInflowTerperincisData.kodInflowTerperinci}</td>
                        <td>
                          {
                            kodInflowTerperincisData.keteranganKodInflowTerperinci
                          }
                        </td>
                        <td>
                          {inflowIsiRumahsData.inflow_isi_rumah_terperincis &&
                            inflowIsiRumahsData.inflow_isi_rumah_terperincis.length > 0 &&
                            inflowIsiRumahsData.inflow_isi_rumah_terperincis
                              .filter(
                                (inflowTerperinci) =>
                                  inflowTerperinci.kodInflowTerperinciId ===
                                  kodInflowTerperincisData.id
                              )
                              .map((inflowTerperinciData, innerIndex) => (
                                <React.Fragment key={innerIndex}>
                                  {inflowTerperinciData.keteranganInflowTerperinci}
                                </React.Fragment>
                              ))}
                        </td>

                        {/* Displaying Amaun and Tindakan for the first row only */}
                        {subIndex === 0 && (
                          <React.Fragment>
                            <td
                              rowSpan={
                                inflowIsiRumahsData.kod_inflow
                                  .kod_inflow_terperincis.length
                              }
                            >
                              {inflowIsiRumahsData.amaunInflow}
                            </td>

                            {pembiayaanSahabatsData.statusPembiayaan !==
                            "SELESAI" ? (
                              <td
                                rowSpan={
                                  inflowIsiRumahsData.kod_inflow
                                    .kod_inflow_terperincis.length
                                }
                              >
                                <EditTrackingInflowIsiRumah
                                  isiRumahId={isiRumahId}
                                  inflowIsiRumahId={inflowIsiRumahsData.id}
                                  inflowIsiRumah={inflowIsiRumahsData}
                                  kodInflowsData={kodInflowsData}
                                />
                                <Button
                                  className="delBtn"
                                  onClick={() =>
                                    deleteInflowIsiRumah(inflowIsiRumahsData.id)
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
