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
  // const {
  //   kodInflows,
  //   fetchKodInflows,
  //   deleteKodInflowWithoutKodInflowTerperinci,
  //   deleteKodInflowWithKodInflowTerperinci,
  // } = useKodInflowStore((state) => ({
  //   kodInflows: state.kodInflows,
  //   fetchKodInflows: state.fetchKodInflows,
  //   deleteKodInflowWithoutKodInflowTerperinci:
  //     state.deleteKodInflowWithoutKodInflowTerperinci,
  //   deleteKodInflowWithKodInflowTerperinci:
  //     state.deleteKodInflowWithKodInflowTerperinci,
  // }));

  // useEffect(() => {
  //   fetchKodInflows();
  // }, [fetchKodInflows]);

  return (
    <>
      <div>
        <div className="page-title">
          <h1>Inflow Code</h1>

          <Breadcrumb>
            <Breadcrumb.Item
              className="breadcrumb-previous-link"
              href="selenggara"
            >
              Settings List
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Inflow Code</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="selenggara-table-container">
          <div className="tambah-baru-btn-container">
            <CreateKodInflow />
          </div>

          <Table bordered responsive>
            <thead>
              <tr>
                <th>No.</th>
                <th>Inflow Code</th>
                <th>Inflow Code Description</th>
                <th>Inflow Code Status</th>
                <th>Detailed Inflow Code</th>
                <th>Detailed Inflow Code Description</th>
                <th>Detailed Inflow Code Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {/* {kodInflows.length === 0 ? ( */}
                <tr>
                  <td colSpan="8">
                    <center>
                    No inflow code information available. 
                    Please click the "Add" button to record a new inflow code.
                    </center>
                  </td>
                </tr>
              {/* ) : (
                kodInflows.map((kodInflowsData, index) => ( */}
                  <React.Fragment 
                    // key={index}
                  >
                    {/* {kodInflowsData.kod_inflow_terperincis.length === 0 ? ( */}
                      {/* Render row for kod inflow without kod inflow terperinci */}
                      <tr>
                        <td>No.</td>
                        <td>Inflow Code</td>
                        <td>Inflow Code Description</td>
                        <td>Inflow Code Status</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>
                          <EditWithoutKodInflowTerperinci
                            // kodInflow={kodInflowsData}
                          />

                          <Button
                            className="delete-btn"
                            // onClick={() =>
                            //   deleteKodInflowWithoutKodInflowTerperinci(
                            //     kodInflowsData.id
                            //   )
                            // }
                          >
                            Delete
                          </Button>{" "}
                        </td>
                      </tr>
                    {/* ) : ( */}
                      {/* // Render row for kod inflow with kod inflow terperinci */}
                      <tr>
                        <td
                          // rowSpan={
                          //   kodInflowsData.kod_inflow_terperincis.length + 1
                          // }
                        >
                          {/* {index + 1} */}
                        </td>
                        <td
                          // rowSpan={
                          //   kodInflowsData.kod_inflow_terperincis.length + 1
                          // }
                        >
                          Inflow Code
                        </td>
                        <td
                          // rowSpan={
                          //   kodInflowsData.kod_inflow_terperincis.length + 1
                          // }
                        >
                          Inflow Code Description
                        </td>
                        <td
                          // rowSpan={
                          //   kodInflowsData.kod_inflow_terperincis.length + 1
                          // }
                        >
                          Inflow Code Status
                        </td>
                      </tr>
                    {/* )} */}

                    {/* Displaying kod inflow terperinci */}
                    {/* {kodInflowsData.kod_inflow_terperincis.map(
                      (kodInflowTerperincisData, subIndex) => ( */}
                        <tr 
                          // key={subIndex}
                        >
                          <td>
                            Detailed Inflow Code
                          </td>
                          <td>Detailed Inflow Code Description</td>
                          <td>Detailed Inflow Code Status</td>
                          <td>
                            <EditWithKodInflowTerperinci
                              // kodInflow={kodInflowsData}
                              // kodInflowTerperinci={kodInflowTerperincisData}
                            />

                            <Button
                              className="delete-btn"
                              // onClick={() =>
                              //   deleteKodInflowWithKodInflowTerperinci(
                              //     kodInflowTerperincisData.id
                              //   )
                              // }
                            >
                              Delete
                            </Button>{" "}
                          </td>
                        </tr>
                      {/* )
                    )} */}
                  </React.Fragment>
                {/* ))
              )} */}
            </tbody>
          </Table>

          <div className="kembali-btn-container">
            <Button className="kembali-btn" onClick={goBack}>
              Back
            </Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexKodInflow;
