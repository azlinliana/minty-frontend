import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import CreateDimensi from "./Create";
import EditDimensi from "./Edit";
import DeletionAlert from "../../components/sweet-alert/DeletionAlert";
import { Breadcrumb, Button, Table } from "react-bootstrap";
import Swal from "sweetalert2";
import axiosCustom from "../../../axios";
import "../../../assets/styles/styles_selenggara.css";

function IndexDimensi() {
  // ----------FE----------
  // Back button
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  // ----------BE----------
  // List dimensi
  const [dimensis, setDimensis] = useState([]);
  const fetchDimensis = async () => {
    try {
      const response = await axiosCustom.get("/selenggara/dimensi");

      if (response.status === 200) {
        setDimensis(response.data);
      } else {
        console.log(response);
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  useEffect(() => {
    fetchDimensis();
  }, []);

  // Delete dimensi
  const deleteDimensi = async (dimensiId) => {
    // Function to delete dimensi
    const performDeletion = async () => {
      try {
        const response = await axiosCustom.delete(
          `/selenggara/dimensi/${dimensiId}`
        );

        if (response.status === 200) {
          setDimensis((prevDimensis) =>
            prevDimensis.filter((dimensi) => dimensi.id !== dimensiId)
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
        <h1>Dimensi</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="previousLink" href="#">
            Senarai Selenggara
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Dimensi</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="tableSection">
        <div className="tambahBtnPlacement">
          <CreateDimensi />
        </div>

        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Kod Dimensi</th>
              <th>Keterangan Dimensi</th>
              <th>Status</th>
              <th>Tindakan</th>
            </tr>
          </thead>

          <tbody>
            {dimensis.length === 0 ? (
              <tr>
                <td colSpan="5">
                  <center>Tiada maklumat</center>
                </td>
              </tr>
            ) : (
              dimensis.map((dimensisData, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{dimensisData.kodDimensi}</td>
                  <td>{dimensisData.keteranganDimensi}</td>
                  <td>{dimensisData.statusDimensi}</td>
                  <td>
                    <EditDimensi dimensi={dimensisData} />
                    <Button
                      className="delBtn"
                      onClick={() => deleteDimensi(dimensisData.id)}
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

export default IndexDimensi;
