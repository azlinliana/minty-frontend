import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/styles/styles_selenggara.css";
import CreateKodInflow from "./Create";
import EditWithoutKodInflowTerperinci from "./Edit/EditWithoutKodInflowTerperinci";
import EditWithKodInflowTerperinci from "./Edit/EditWithKodInflowTerperinci";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../components/sweet-alert/DeletionAlert";
import { Breadcrumb, Button, Table } from "react-bootstrap";
import axiosCustom from "../../../axios";
import Swal from "sweetalert2";

function IndexKodInflow() {
  // ----------FE----------
  // Back button
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  // ----------BE----------
  // List kod inflow
  const [kodInflows, setKodInflows] = useState([]);

  const fetchKodInflows = useCallback(async () => {
    try {
      const response = await axiosCustom.get(`/selenggara/kod-inflow`);

      if (response.status === 200) {
        setKodInflows(response.data);
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  }, []);

  useEffect(() => {
    fetchKodInflows();
  }, [fetchKodInflows]);

  // Delete kod inflow without kod inflow terperinci
  const deleteKodInflowWithoutKodInflowTerperinci = async (kodInflowId) => {
    // Function to delete kod inflow
    const performDeletion = async () => {
      try {
        const response = await axiosCustom.delete(
          `/selenggara/kod-inflow/${kodInflowId}`
        );

        if (response.status === 200) {
          setKodInflows((prevKodInflows) =>
            prevKodInflows.filter((kodInflow) => kodInflow.id !== kodInflowId)
          );
          // Show success message from the server
          Swal.fire("Dipadam!", response.data.message, "success");
        }
      } catch (error) {
        ErrorAlert(error);
      }
    };

    // // Function to handle cancellation
    const cancelDeletion = () => {
      Swal.fire("Dibatalkan", "Data anda selamat.", "error");
    };

    // // Display the deletion confirmation dialog
    DeletionAlert(performDeletion, cancelDeletion);
  };

  // Delete kod inflow with kod inflow terperinci
  const deleteKodInflowWithKodInflowTerperinci = async (kodInflowTerperinciId) => {
    console.log(kodInflowTerperinciId);
    // Function to delete dimensi
    const performDeletion = async () => {
      try {
        const response = await axiosCustom.delete(
          `/selenggara/kod-inflow-terperinci/${kodInflowTerperinciId}`
        );

        if (response.status === 200) {
          setKodInflows((prevKodInflowTerperincis) =>
            prevKodInflowTerperincis.filter(
              (kodInflowTerperinci) =>
                kodInflowTerperinci.id !== kodInflowTerperinciId
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
    <div>
      <div className="pageTitle">
        <h1>Kod Inflow</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="previousLink" href="#">
            Senarai Selenggara
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Kod Inflow</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="tableSection">
        <div className="tambahBtnPlacement">
          <CreateKodInflow />
        </div>

        <Table bordered responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Kod Inflow</th>
              <th>Keterangan Kod Inflow</th>
              <th>Status Kod Inflow</th>
              <th>Kod Inflow Terperinci</th>
              <th>Keterangan Kod Inflow Terperinci</th>
              <th>Status Kod Inflow Terperinci</th>
              <th>Tindakan</th>
            </tr>
          </thead>

          <tbody>
            {kodInflows.length === 0 ? (
              <tr>
                <td colSpan="8">
                  <center>
                    Tiada maklumat kod inflow. Sila klik butang "Tambah" untuk
                    merekodkan kod inflow baharu.
                  </center>
                </td>
              </tr>
            ) : (
              kodInflows.map((kodInflowsData, index) => (
                <React.Fragment key={index}>
                  {kodInflowsData.kod_inflow_terperincis.length === 0 ? (
                    // Render row for kod inflow without kod inflow terperinci
                    <tr>
                      <td>{index + 1}</td>
                      <td>{kodInflowsData.kodInflow}</td>
                      <td>{kodInflowsData.keteranganKodInflow}</td>
                      <td>{kodInflowsData.statusKodInflow}</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>
                        <EditWithoutKodInflowTerperinci
                          kodInflow={kodInflowsData}
                        />
                        <Button
                          className="delBtn"
                          variant="danger"
                          onClick={() =>
                            deleteKodInflowWithoutKodInflowTerperinci(
                              kodInflowsData.id
                            )
                          }
                        >
                          Padam
                        </Button>{" "}
                      </td>
                    </tr>
                  ) : (
                    // Render row for kod inflow with kod inflow terperinci
                    <tr>
                      <td
                        rowSpan={
                          kodInflowsData.kod_inflow_terperincis.length + 1
                        }
                      >
                        {index + 1}
                      </td>
                      <td
                        rowSpan={
                          kodInflowsData.kod_inflow_terperincis.length + 1
                        }
                      >
                        {kodInflowsData.kodInflow}
                      </td>
                      <td
                        rowSpan={
                          kodInflowsData.kod_inflow_terperincis.length + 1
                        }
                      >
                        {kodInflowsData.keteranganKodInflow}
                      </td>
                      <td
                        rowSpan={
                          kodInflowsData.kod_inflow_terperincis.length + 1
                        }
                      >
                        {kodInflowsData.statusKodInflow}
                      </td>
                    </tr>
                  )}

                  {/* Displaying kod inflow terperinci */}
                  {kodInflowsData.kod_inflow_terperincis.map(
                    (kodInflowTerperincisData, subIndex) => (
                      <tr key={subIndex}>
                        <td>{kodInflowTerperincisData.kodInflowTerperinci}</td>
                        <td>
                          {
                            kodInflowTerperincisData.keteranganKodInflowTerperinci
                          }
                        </td>
                        <td>
                          {kodInflowTerperincisData.statusKodInflowTerperinci}
                        </td>
                        <td>
                          <EditWithKodInflowTerperinci
                            kodInflow={kodInflowsData}
                            kodInflowTerperinci={kodInflowTerperincisData}
                          />
                          <Button
                            className="delBtn"
                            variant="danger"
                            onClick={() =>
                              deleteKodInflowWithKodInflowTerperinci(
                                kodInflowTerperincisData.id
                              )
                            }
                          >
                            Padam
                          </Button>{" "}
                        </td>
                      </tr>
                    )
                  )}
                </React.Fragment>
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
    </div>
  );
}

export default IndexKodInflow;
