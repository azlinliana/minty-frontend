import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/styles/styles_selenggara.css";
import CreateInflowCode from "./Create";
import EditWithoutDetailedInflowCode from "./Edit/EditWithoutDetailedInflowCode";
import EditWithDetailedInflowCode from "./Edit/EditWithDetailedInflowCode";
import { Breadcrumb, Button, Table } from "react-bootstrap";
import { useInflowCodeStore } from "../../../store/settings/inflow-code-store";

function IndexInflowCode() {
  // __________________________________ Frontend __________________________________
  const navigate = useNavigate();

  // Back button
  const goBack = () => {
    navigate(-1);
  };

  // ___________________________________ Backend _________________________________________________________
  // List, delete inflow code without inflow code terperinci & delete inflow code with inflow code terperinci
  // const {
  //   inflowCodes,
  //   fetchinflowCodes,
  //   deleteinflowCodeWithoutinflowCodeTerperinci,
  //   deleteinflowCodeWithinflowCodeTerperinci,
  // } = useinflowCodeStore((state) => ({
  //   inflowCodes: state.inflowCodes,
  //   fetchinflowCodes: state.fetchinflowCodes,
  //   deleteinflowCodeWithoutinflowCodeTerperinci:
  //     state.deleteinflowCodeWithoutinflowCodeTerperinci,
  //   deleteinflowCodeWithinflowCodeTerperinci:
  //     state.deleteinflowCodeWithinflowCodeTerperinci,
  // }));

  // useEffect(() => {
  //   fetchinflowCodes();
  // }, [fetchinflowCodes]);

  return (
    <>
      <div>
        <div className="page-title">
          <h1>Inflow Code</h1>

          <Breadcrumb>
            <Breadcrumb.Item
              className="breadcrumb-previous-link"
              href="settings"
            >
              Settings List
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Inflow Code</Breadcrumb.Item>
          </Breadcrumb>
        </div>

        <div className="selenggara-table-container">
          <div className="create-btn-container">
            <CreateInflowCode />
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
              {/* {inflowCodes.length === 0 ? ( */}
                <tr>
                  <td colSpan="8">
                    <center>
                    No inflow code information available. 
                    Please click the "Add" button to record a new inflow code.
                    </center>
                  </td>
                </tr>
              {/* ) : (
                inflowCodes.map((inflowCodesData, index) => ( */}
                  <React.Fragment 
                    // key={index}
                  >
                    {/* {inflowCodesData.kod_inflow_terperincis.length === 0 ? ( */}
                      {/* Render row for inflow code without inflow code terperinci */}
                      <tr>
                        <td>No.</td>
                        <td>Inflow Code</td>
                        <td>Inflow Code Description</td>
                        <td>Inflow Code Status</td>
                        <td>-</td>
                        <td>-</td>
                        <td>-</td>
                        <td>
                          <EditWithoutDetailedInflowCode
                            // inflowCode={inflowCodesData}
                          />

                          <Button
                            className="delete-btn"
                            // onClick={() =>
                            //   deleteinflowCodeWithoutinflowCodeTerperinci(
                            //     inflowCodesData.id
                            //   )
                            // }
                          >
                            Delete
                          </Button>{" "}
                        </td>
                      </tr>
                    {/* ) : ( */}
                      {/* // Render row for inflow code with inflow code terperinci */}
                      <tr>
                        <td
                          // rowSpan={
                          //   inflowCodesData.kod_inflow_terperincis.length + 1
                          // }
                        >
                          {/* {index + 1} */}
                        </td>
                        <td
                          // rowSpan={
                          //   inflowCodesData.kod_inflow_terperincis.length + 1
                          // }
                        >
                          Inflow Code
                        </td>
                        <td
                          // rowSpan={
                          //   inflowCodesData.kod_inflow_terperincis.length + 1
                          // }
                        >
                          Inflow Code Description
                        </td>
                        <td
                          // rowSpan={
                          //   inflowCodesData.kod_inflow_terperincis.length + 1
                          // }
                        >
                          Inflow Code Status
                        </td>
                      </tr>
                    {/* )} */}

                    {/* Displaying inflow code terperinci */}
                    {/* {inflowCodesData.kod_inflow_terperincis.map(
                      (inflowCodeTerperincisData, subIndex) => ( */}
                        <tr 
                          // key={subIndex}
                        >
                          <td>
                            Detailed Inflow Code
                          </td>
                          <td>Detailed Inflow Code Description</td>
                          <td>Detailed Inflow Code Status</td>
                          <td>
                            <EditWithDetailedInflowCode
                              // inflowCode={inflowCodesData}
                              // inflowCodeTerperinci={inflowCodeTerperincisData}
                            />

                            <Button
                              className="delete-btn"
                              // onClick={() =>
                              //   deleteinflowCodeWithinflowCodeTerperinci(
                              //     inflowCodeTerperincisData.id
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

          <div className="return-btn-container">
            <Button className="return-btn" onClick={goBack}>
              Back
            </Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexInflowCode;
