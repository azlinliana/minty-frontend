import React, { useState, useEffect, useCallback } from "react";
import CreateTrackingOutflowIsiRumah from "./Create";
import EditTrackingOutflowIsiRumah from "./Edit";
import ErrorAlert from "../../../../components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../../../components/sweet-alert/DeletionAlert";
import { Button, Table } from "react-bootstrap";
import axiosCustom from "../../../../../axios";
import Swal from "sweetalert2";
import "../../../../../assets/styles/styles_sahabat.css";

function IndexTrackingOutflowIsiRumah({ isiRumahId }) {
  // ----------BE----------
  // List outflow isi rumah sahabat
  const [outflowIsiRumahs, setOutflowIsiRumahs] = useState([]);

  const fetchOutflowIsiRumahs = useCallback(async () => {
    try {
      const response = await axiosCustom.get(
        `/sahabat/outflow-isi-rumah/${isiRumahId}`
      );

      if (response.status === 200) {
        setOutflowIsiRumahs(response.data);
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
  }, [isiRumahId, setOutflowIsiRumahs]);

  useEffect(() => {
    fetchOutflowIsiRumahs();
  }, [fetchOutflowIsiRumahs]);

  // Fetch kod outflow data
  const [kodOutflowsData, setKodOutflowsData] = useState([]);

  const fetchKodOutflows = useCallback(async () => {
    try {
      const response = await axiosCustom.get(
        `/selenggara/kod-outflow/display-kod-outflow`
      );
      if (Array.isArray(response.data) && response.data.length > 0) {
        setKodOutflowsData(response.data); // Display all kod inflow data
      } else {
        ErrorAlert(response.data);
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
  }, []);

  useEffect(() => {
    fetchKodOutflows();
  }, [fetchKodOutflows]);

  // Delete outflow isi rumah
  const deleteOutflowIsiRumah = async (outflowIsiRumahId) => {
    // Function to delete outflow isi rumah
    const performDeletion = async () => {
      try {
        const response = await axiosCustom.delete(
          `/sahabat/outflow-isi-rumah/${outflowIsiRumahId}`
        );
        if (response.status === 200) {
          setOutflowIsiRumahs((prevOutflowIsiRumahs) =>
            prevOutflowIsiRumahs.filter(
              (outflowIsiRumah) => outflowIsiRumah.id !== outflowIsiRumahId
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
      <div className="tableSection">
        <div className="tambahBtnPlacement">
          <CreateTrackingOutflowIsiRumah
            isiRumahId={isiRumahId}
            kodOutflowsData={kodOutflowsData}
          />
        </div>

        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Kod Outflow</th>
              <th>Keterangan Kod Outflow</th>
              <th>Amaun (RM)</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            {outflowIsiRumahs.length === 0 ? (
              <tr>
                <td colSpan="7">
                  <center>
                    Tiada maklumat tracking outflow isi rumah sahabat. Sila klik
                    butang "Tambah" untuk merekodkan outflow isi rumah sahabat
                    baharu.
                  </center>
                </td>
              </tr>
            ) : (
              outflowIsiRumahs.map((outflowIsiRumahsData, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{outflowIsiRumahsData.kod_outflow.kodOutflow}</td>
                  <td>
                    {outflowIsiRumahsData.kod_outflow.keteranganKodOutflow}
                  </td>
                  <td>{outflowIsiRumahsData.amaunOutflow}</td>
                  <td>
                    <EditTrackingOutflowIsiRumah
                      isiRumahId={isiRumahId}
                      outflowIsiRumahId={outflowIsiRumahsData.id}
                      outflowIsiRumah={outflowIsiRumahsData}
                      kodOutflowsData={kodOutflowsData}
                    />
                    <Button
                      className="delBtn"
                      onClick={() =>
                        deleteOutflowIsiRumah(outflowIsiRumahsData.id)
                      }
                    >
                      Padam
                    </Button>{" "}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default IndexTrackingOutflowIsiRumah;
