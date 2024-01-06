import React, { useState, useEffect, useCallback } from "react";
import "../../../sahabat.css";
import CreateTrackingInflowIsiRumah from "./Create";
import EditTrackingInflowIsiRumah from "./Edit";
import ErrorAlert from "../../../../components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../../../components/sweet-alert/DeletionAlert";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axiosCustom from "../../../../../axios";
import Swal from "sweetalert2";

function IndexTrackingInflowIsiRumah({ isiRumahId }) {
  // ----------BE----------
  // List inflow isi rumah sahabat
  const [inflowIsiRumahs, setInflowIsiRumahs] = useState([]);

  const fetchInflowIsiRumahs = useCallback(async () => {
    try {
      const response = await axiosCustom.get(`/sahabat/inflow-isi-rumah/${isiRumahId}`);

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

  // Fetch kod inflow data
  const [kodInflowsData, setKodInflowsData] = useState([]);

  const fetchKodInflows = useCallback(async () => {
    try {
      const response = await axiosCustom.get(`/selenggara/kod-inflow/display-kod-inflow`);

      if (Array.isArray(response.data) && response.data.length > 0) {
        setKodInflowsData(response.data); // Display all kod inflow data
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
  }, [setKodInflowsData]);

  useEffect(() => {
    fetchKodInflows();
  }, [fetchKodInflows]);

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
      <div className="tableSection">
        <div className="tambahBtnPlacement">
          <CreateTrackingInflowIsiRumah
            isiRumahId={isiRumahId}
            kodInflowsData={kodInflowsData}
          />
        </div>

        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Kod Inflow</th>
              <th>Keterangan Kod Inflow</th>
              <th>Kod Inflow Terperinci</th>
              <th>Maklumat Terperinci</th>
              <th>Amaun (RM)</th>
              <th>Tindakan</th>
            </tr>
          </thead>

          <tbody>
            {inflowIsiRumahs.length === 0 ? (
              <tr>
                <td colSpan="7">
                  <center>
                    Tiada maklumat tracking inflow isi rumah sahabat. Sila klik
                    butang "Tambah" untuk merekodkan inflow isi rumah sahabat
                    baharu.
                  </center>
                </td>
              </tr>
            ) : (
              inflowIsiRumahs.map((inflowIsiRumahsData, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{inflowIsiRumahsData.kod_inflow.kodInflow}</td>
                  <td>{inflowIsiRumahsData.kod_inflow.keteranganKodInflow}</td>
                  <td></td>
                  <td>{inflowIsiRumahsData.keteranganKodInflow}</td>
                  <td>{inflowIsiRumahsData.amaunInflow}</td>
                  <td>
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
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default IndexTrackingInflowIsiRumah;
