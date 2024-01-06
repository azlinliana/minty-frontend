import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Selenggara.css";
import CreateHubungan from "./Create";
import EditHubungan from "./Edit";
import DeletionAlert from "../../components/sweet-alert/DeletionAlert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import Swal from "sweetalert2";
import axiosInstance from "../../../axios";

function IndexHubungan() {
  // ----------FE----------
  // Back button
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  // ----------BE----------
  // List hubungan
  const [hubungans, setHubungans] = useState([]);
  const fetchHubungans = async () => {
    try {
      const response = await axiosInstance.get("/selenggara/hubungan");

      if (response.status === 200) {
        setHubungans(response.data);
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  useEffect(() => {
    fetchHubungans();
  }, []);

  // Delete hubungan
  const deleteHubungan = async (hubunganId) => {
    // Function to delete hubungan
    const performDeletion = async () => {
      try {
        const response = await axiosCustom.delete(
          `/selenggara/hubungan/${hubunganId}`
        );

        if (response.status === 200) {
          setHubungans((prevHubungans) =>
            prevHubungans.filter((hubungan) => hubungan.id !== hubunganId)
          );
          // Show success message from the server
          Swal.fire("Dipadam!", response.data.message, "success");
        }
      } catch (error) {
        ErrorAlert(error);
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
      <div className="pageTitle">
        <h1>Hubungan</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="previousLink" href="#">
            Senarai Selenggara
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Hubungan</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="tableSection">
        <div className="tambahBtnPlacement">
          <CreateHubungan />
        </div>

        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Kod Hubungan</th>
              <th>Keterangan Kod Hubungan</th>
              <th>Status</th>
              <th>Tindakan</th>
            </tr>
          </thead>

          <tbody>
            {hubungans.length === 0 ? (
              <tr>
                <td colSpan="5">
                  <center>Tiada maklumat</center>
                </td>
              </tr>
            ) : (
              hubungans.map((hubungansData, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{hubungansData.kodHubungan}</td>
                  <td>{hubungansData.keteranganHubungan}</td>
                  <td>{hubungansData.statusHubungan}</td>
                  <td>
                    <EditHubungan hubungan={hubungansData} />
                    <Button
                      className="delBtn"
                      onClick={() => deleteHubungan(hubungansData.id)}
                    >
                      Padam
                    </Button>{" "}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>

        <div className="kembaliBtnPlacement">
          <Button className="kembaliBtn" onClick={goBack}>
            Kembali
          </Button>{" "}
        </div>
      </div>
    </>
  );
}

export default IndexHubungan;
