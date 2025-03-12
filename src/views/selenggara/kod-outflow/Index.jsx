import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/styles/styles_selenggara.css";
import CreateKodOutflow from "./Create";
import EditKodOutflow from "./Edit";
import { Breadcrumb, Button, Table } from "react-bootstrap";
import { useKodOutflowStore } from "../../../store/selenggara/kod-outflow-store";

function IndexKodOutflow() {
  // __________________________________ Frontend __________________________________
  const navigate = useNavigate();

  // Back button
  const goBack = () => {
    navigate(-1);
  };

  // ___________________________________ Backend __________________________________
  // List & delete kod outflow
  // const { kodOutflows, fetchKodOutflows, deleteKodOutflow } = useKodOutflowStore(
  //   (state) => ({
  //     kodOutflows: state.kodOutflows,
  //     fetchKodOutflows: state.fetchKodOutflows,
  //     deleteKodOutflow: state.deleteKodOutflow,
  //   })
  // );

  // useEffect(() => {
  //   fetchKodOutflows();
  // }, [fetchKodOutflows]);

  return (
    <>
      <div className="page-title">
        <h1>Outflow Code</h1>

        <Breadcrumb>
          <Breadcrumb.Item
            className="breadcrumb-previous-link"
            href="selenggara"
          >
            Settings List
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Outflow Code</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="selenggara-table-container">
        <div className="tambah-baru-btn-container">
          <CreateKodOutflow />
        </div>

        <Table responsive>
          <thead>
            <tr>
              <th>No.</th>
              <th>Outflow Code</th>
              <th>Outflow Code Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {/* {kodOutflows.length === 0 ? ( */}
              <tr>
                <td colSpan="6">
                  <center>
                    No outflow code information available. 
                    Please click the "Add" button to record a new outflow code.
                  </center>
                </td>
              </tr>
            {/* ) : (
              kodOutflows.map((kodOutflowsData, index) => ( */}
                <tr 
                  // key={index}
                >
                  <td>No.</td>
                  <td>Outflow Code</td>
                  <td>Outflow Code Description</td>
                  <td>Outflow Code Status</td>
                  <td>
                    <EditKodOutflow 
                      // kodOutflow={kodOutflowsData} 
                    />
                    
                    <Button
                      className="delete-btn"
                      // onClick={() => deleteKodOutflow(kodOutflowsData.id)}
                    >
                      Delete
                    </Button>{" "}
                  </td>
                </tr>
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
    </>
  );
}

export default IndexKodOutflow;
