import React, { useState, useEffect } from "react";
import "../../../sahabat.css";
import CreateTrackingOutflowIsiRumah from "./Create";
import EditTrackingOutflowIsiRumah from "./Edit";
import ErrorAlert from "../../../../components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../../../components/sweet-alert/DeletionAlert";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axiosCustom from "../../../../../axios";
import Swal from "sweetalert2";

function IndexTrackingOutflowIsiRumah({ isiRumahId }) {
  // ----------BE----------
  // List outflow isi rumah sahabat
  const [outflowIsiRumahs, setOutflowIsiRumahs] = useState([]);
  const fetchOutflowIsiRumahs = async () => {
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
      ErrorAlert(error);
    }
  };

  useEffect(() => {
    fetchOutflowIsiRumahs();
    // const interval = setInterval(() => { // Set up recurring fetch every 5 second
    //   fetchOutflowIsiRumahs();
    // }, 5000);
    // // Cleanup the interval when the component unmounts
    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

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
    <div className="tableSection">
      <div className="tambahBtnPlacement">
        <CreateTrackingOutflowIsiRumah isiRumahId={isiRumahId} />
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
                <td>{outflowIsiRumahsData.kod_outflow.keteranganKodOutflow}</td>
                <td>{outflowIsiRumahsData.amaunOutflow}</td>
                <td>
                  <EditTrackingOutflowIsiRumah
                    isiRumahId={isiRumahId}
                    outflowIsiRumahId={outflowIsiRumahsData.id}
                    outflowIsiRumah={outflowIsiRumahsData}
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
  );
}

export default IndexTrackingOutflowIsiRumah;
