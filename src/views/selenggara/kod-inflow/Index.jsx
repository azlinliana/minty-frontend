import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/styles/styles_selenggara.css";
import CreateKodInflow from "./Create";
import EditWithoutKodInflowTerperinci from "./Edit/EditWithoutKodInflowTerperinci";
import EditWithKodInflowTerperinci from "./Edit/EditWithKodInflowTerperinci";
import { Breadcrumb, Button, Table } from "react-bootstrap";
import { useKodInflowStore } from "../../../store/selenggara/kod-inflow-store";

function IndexKodInflow() {
  // __________________________________ Frontend __________________________________
  const navigate = useNavigate();

  // Back button
  const goBack = () => {
    navigate(-1);
  };

  // ___________________________________ Backend _________________________________________________________
  // List, delete kod inflow without kod inflow terperinci & delete kod inflow with kod inflow terperinci
  const {
    kodInflows,
    fetchKodInflows,
    deleteKodInflowWithoutKodInflowTerperinci,
    deleteKodInflowWithKodInflowTerperinci,
  } = useKodInflowStore((state) => ({
    kodInflows: state.kodInflows,
    fetchKodInflows: state.fetchKodInflows,
    deleteKodInflowWithoutKodInflowTerperinci:
      state.deleteKodInflowWithoutKodInflowTerperinci,
    deleteKodInflowWithKodInflowTerperinci:
      state.deleteKodInflowWithKodInflowTerperinci,
  }));

  useEffect(() => {
    fetchKodInflows();
  }, [fetchKodInflows]);

  return (
    <>
      <div>
        <div className="page-title">
          <h1>Kod Inflow</h1>

          <Breadcrumb>
            <Breadcrumb.Item
              className="breadcrumb-previous-link"
              href="selenggara"
            >
              Senarai Selenggara
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Kod Inflow</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="selenggara-table-container">
          <div className="tambah-baru-btn-container">
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
                            className="delete-btn"
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
                          <td>
                            {kodInflowTerperincisData.kodInflowTerperinci}
                          </td>
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
                              className="delete-btn"
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

          <div className="kembali-btn-container">
            <Button className="kembali-btn" onClick={goBack}>
              Kembali
            </Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexKodInflow;
