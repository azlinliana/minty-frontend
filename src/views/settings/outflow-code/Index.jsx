import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/styles/styles_settings.css";
import CreateOutflowCode from "./Create";
import EditOutflowCode from "./Edit";
import { Breadcrumb, Button, Table } from "react-bootstrap";
import { useOutflowCodeStore } from "../../../store/settings/outflow-code-store";

function IndexOutflowCode() {
  // __________________________________ Frontend __________________________________
  const navigate = useNavigate();

  // Back button
  const goBack = () => {
    navigate(-1);
  };

  // ___________________________________ Backend __________________________________
  // List & delete outflow code
  // const { outflowCodes, fetchOutflowCodes, deleteOutflowCode } = useoutflowCodeStore(
  //   (state) => ({
  //     outflowCodes: state.outflowCodes,
  //     fetchoutflowCodes: state.fetchoutflowCodes,
  //     deleteoutflowCode: state.deleteoutflowCode,
  //   })
  // );

  // useEffect(() => {
  //   fetchoutflowCodes();
  // }, [fetchoutflowCodes]);

  return (
    <>
      <div className="page-title">
        <h1>Outflow Code</h1>

        <Breadcrumb>
          <Breadcrumb.Item
            className="breadcrumb-previous-link"
            href="settings"
          >
            Settings List
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Outflow Code</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="settings-table-container">
        <div className="create-btn-container">
          <CreateOutflowCode />
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
            {/* {outflowCodes.length === 0 ? ( */}
              <tr>
                <td colSpan="6">
                  <center>
                    No outflow code information available. 
                    Please click the "Add" button to record a new outflow code.
                  </center>
                </td>
              </tr>
            {/* ) : (
              outflowCodes.map((outflowCodesData, index) => ( */}
                <tr 
                  // key={index}
                >
                  <td>No.</td>
                  <td>Outflow Code</td>
                  <td>Outflow Code Description</td>
                  <td>Outflow Code Status</td>
                  <td>
                    <EditOutflowCode 
                      // outflowCode={outflowCodesData} 
                    />
                    
                    <Button
                      className="delete-btn"
                      // onClick={() => deleteoutflowCode(outflowCodesData.id)}
                    >
                      Delete
                    </Button>{" "}
                  </td>
                </tr>
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
    </>
  );
}

export default IndexOutflowCode;
