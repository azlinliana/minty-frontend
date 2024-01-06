import React, { useState, useEffect } from "react";
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
  const fetchInflowIsiRumahs = async () => {
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
      ErrorAlert(error);
    }
  };

  useEffect(() => {
    fetchInflowIsiRumahs();
    // const interval = setInterval(() => { // Set up recurring fetch every 5 second
    //   fetchInflowIsiRumahs();
    // }, 5000);
    // // Cleanup the interval when the component unmounts
    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

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
    <div className="tableSection">
      <div className="tambahBtnPlacement">
        <CreateTrackingInflowIsiRumah isiRumahId={isiRumahId} />
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
                  />
                  <Button
                    className="delBtn"
                    onClick={() => deleteInflowIsiRumah(inflowIsiRumahsData.id)}
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

export default IndexTrackingInflowIsiRumah;
