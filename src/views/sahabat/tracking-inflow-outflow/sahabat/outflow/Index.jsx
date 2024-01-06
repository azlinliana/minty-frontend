import React, { useState, useEffect, useCallback } from "react";
import "../../../sahabat.css";
import CreateTrackingOutflowSahabat from "./Create";
import EditTrackingOutflowSahabat from "./Edit";
import ErrorAlert from "../../../../components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../../../components/sweet-alert/DeletionAlert";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axiosCustom from "../../../../../axios";
import Swal from "sweetalert2";

function IndexTrackingOutflowSahabat({ mingguId }) {
  // ----------BE----------
  const [outflowSahabats, setOutflowSahabats] = useState([]);

  // List outflow sahabat
  const fetchOutflowSahabats = useCallback(async () => {
    try {
      const response = await axiosCustom.get(
        `/sahabat/outflow-sahabat/${mingguId}`
      );
      if (response.status === 200) {
        setOutflowSahabats(response.data);
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      if (error.response && (error.response.status === 503 || error.response.status === 429)) {
        // The server is not ready, ignore the error
        console.log("Server not ready, retry later.");
      } else {
        // Handle other errors
        ErrorAlert(error);
      }  
    }
  }, [mingguId, setOutflowSahabats]);

  useEffect(() => {
    fetchOutflowSahabats();
  }, [fetchOutflowSahabats]);

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
      if (error.response && (error.response.status === 503 || error.response.status === 429)) {
        // The server is not ready, ignore the error
        console.log("Server not ready, retry later.");
      } else {
        // Handle other errors
        ErrorAlert(error);
      }  
    }
  }, [setKodOutflowsData]);

  useEffect(() => {
    fetchKodOutflows();
  }, [fetchKodOutflows]);

  // Delete outflow sahabat
  const deleteOutflowSahabat = async (outflowSahabatId) => {
    // Function to delete outflow sahabat
    const performDeletion = async () => {
      try {
        const response = await axiosCustom.delete(
          `/sahabat/outflow-sahabat/${outflowSahabatId}`
        );
        if (response.status === 200) {
          setOutflowSahabats((prevOutflowSahabats) =>
            prevOutflowSahabats.filter(
              (outflowSahabat) => outflowSahabat.id !== outflowSahabatId
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
          <CreateTrackingOutflowSahabat 
            mingguId={mingguId} 
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
            {outflowSahabats.length === 0 ? (
              <tr>
                <td colSpan="5">
                  <center>
                    Tiada maklumat tracking outflow sahabat. Sila klik butang
                    "Tambah" untuk merekodkan outflow sahabat baharu.
                  </center>
                </td>
              </tr>
            ) : (
              outflowSahabats.map((outflowSahabatsData, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{outflowSahabatsData.kod_outflow.kodOutflow}</td>
                  <td>{outflowSahabatsData.kod_outflow.keteranganKodOutflow}</td>
                  <td>{outflowSahabatsData.amaunOutflow}</td>
                  <td>
                    <EditTrackingOutflowSahabat
                      mingguId={mingguId}
                      outflowSahabatId={outflowSahabatsData.id}
                      outflowSahabat={outflowSahabatsData}
                      kodOutflowsData={kodOutflowsData}
                    />
                    <Button
                      className="delBtn"
                      onClick={() => deleteOutflowSahabat(outflowSahabatsData.id)}
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

export default IndexTrackingOutflowSahabat;
