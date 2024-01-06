import React, { useState, useEffect } from "react";
import "../../../sahabat.css";
import CreateTrackingInflowSahabat from "./Create";
import EditTrackingInflowSahabat from "./Edit";
import ErrorAlert from "../../../../components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../../../components/sweet-alert/DeletionAlert";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axiosCustom from "../../../../../axios";
import Swal from "sweetalert2";

function IndexTrackingInflowSahabat({ mingguId }) {
  // ----------BE----------
  const [inflowSahabats, setInflowSahabats] = useState([]);

  // List inflow sahabat
  const fetchInflowSahabats = async () => {
    try {
      const response = await axiosCustom.get(
        `/sahabat/inflow-sahabat/${mingguId}`
      );
      if (response.status === 200) {
        setInflowSahabats(response.data);
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  useEffect(() => {
    fetchInflowSahabats();
    // const interval = setInterval(() => { // Set up recurring fetch every 5 second
    //   fetchInflowSahabats();
    // }, 5000);
    // // Cleanup the interval when the component unmounts
    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  // Delete inflow sahabat
  const deleteInflowSahabat = async (inflowSahabatId) => {
    // Function to delete inflow sahabat
    const performDeletion = async () => {
      try {
        const response = await axiosCustom.delete(
          `/sahabat/inflow-sahabat/${inflowSahabatId}`
        );
        if (response.status === 200) {
          setInflowSahabats((prevInflowSahabats) =>
            prevInflowSahabats.filter(
              (inflowSahabat) => inflowSahabat.id !== inflowSahabatId
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
        <CreateTrackingInflowSahabat mingguId={mingguId} />
      </div>

      <Table responsive>
        <thead>
          <tr>
            <th>Bil.</th>
            <th>Kod Inflow</th>
            <th>Keterangan Kod Inflow</th>
            <th>Kod Inflow Terperinci</th>
            <th>Keterangan Kod Inflow Terperinci</th>
            <th>Maklumat Terperinci</th>
            <th>Amaun (RM)</th>
            <th>Tindakan</th>
          </tr>
        </thead>
        <tbody>
          {inflowSahabats.length === 0 ? (
            <tr>
              <td colSpan="7">
                <center>
                  Tiada maklumat tracking inflow sahabat. Sila klik butang
                  "Tambah" untuk merekodkan inflow sahabat baharu.
                </center>
              </td>
            </tr>
          ) : (
            inflowSahabats.map((inflowSahabatsData, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{inflowSahabatsData.kod_inflow.kodInflow}</td>
                <td>{inflowSahabatsData.kod_inflow.keteranganKodInflow}</td>
                {/* Displaying Kod Inflow Terperinci */}
                {inflowSahabatsData.kod_inflow.kod_inflow_terperincis.length ===
                0 ? (
                  <React.Fragment>
                    <td>-</td>
                    <td>-</td>
                  </React.Fragment>
                ) : (
                  inflowSahabatsData.kod_inflow.kod_inflow_terperincis.map(
                    (terperinci, index) => (
                      <React.Fragment key={index}>
                        <td>{terperinci.kodInflowTerperinci}</td>
                        <td>{terperinci.keteranganKodInflowTerperinci}</td>
                      </React.Fragment>
                    )
                  )
                )}
                <td>{inflowSahabatsData.keteranganKodInflow}</td>
                <td>{inflowSahabatsData.amaunInflow}</td>
                <td>{inflowSahabatsData.keteranganKodInflow}</td>
                <td>{inflowSahabatsData.amaunInflow}</td>
                <td>
                  <EditTrackingInflowSahabat
                    mingguId={mingguId}
                    inflowSahabatId={inflowSahabatsData.id}
                    inflowSahabat={inflowSahabatsData}
                  />
                  <Button
                    className="delBtn"
                    onClick={() => deleteInflowSahabat(inflowSahabatsData.id)}
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

export default IndexTrackingInflowSahabat;
