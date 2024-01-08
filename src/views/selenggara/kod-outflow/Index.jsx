import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Selenggara.css";
import CreateKodOutflow from "./Create";
import EditKodOutflow from "./Edit";
import DeletionAlert from "../../components/sweet-alert/DeletionAlert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Swal from "sweetalert2";
import axiosCustom from "../../../axios";

function IndexKodOutflow() {
  // ----------FE----------
  // Back button
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  // ----------BE----------
  // List kod outflow
  const [kodOutflows, setKodOutflows] = useState([]);
  const fetchKodOutflows = async () => {
    try {
      const response = await axiosCustom.get(`/selenggara/kod-outflow`);

      if (response.status === 200) {
        setKodOutflows(response.data);
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  useEffect(() => {
    fetchKodOutflows();
  }, []);

  // Delete kod outflow
  const deleteKodOutflow = async (kodOutflowId) => {
    // Function to delete kod outflow
    const performDeletion = async () => {
      try {
        const response = await axiosCustom.delete(
          `/selenggara/kod-outflow/${kodOutflowId}`
        );

        if (response.status === 200) {
          setKodOutflows((prevKodOutflows) =>
            prevKodOutflows.filter(
              (kodOutflow) => kodOutflow.id !== kodOutflowId
            )
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
        <h1>Kod Outflow</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="previousLink" href="#">
            Senarai Selenggara
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Kod Outflow</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="tableSection">
        <div className="tambahBtnPlacement">
          <CreateKodOutflow />
        </div>

        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Kod Outflow</th>
              <th>Keterangan Kod Outflow</th>
              <th>Status</th>
              <th>Tindakan</th>
            </tr>
          </thead>

          <tbody>
            {kodOutflows.length === 0 ? (
              <tr>
                <td colSpan="6">
                  <center>
                    Tiada maklumat kod outflow. Sila klik butang "Tambah" untuk
                    merekodkan kod outflow baharu.
                  </center>
                </td>
              </tr>
            ) : (
              kodOutflows.map((kodOutflowsData, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{kodOutflowsData.kodOutflow}</td>
                  <td>{kodOutflowsData.keteranganKodOutflow}</td>
                  <td>{kodOutflowsData.statusKodOutflow}</td>
                  <td>
                    <EditKodOutflow kodOutflow={kodOutflowsData} />
                    <Button
                      className="delBtn"
                      variant="danger"
                      onClick={() => deleteKodOutflow(kodOutflowsData.id)}
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

export default IndexKodOutflow;
