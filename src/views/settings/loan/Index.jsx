import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/styles/styles_selenggara.css";
import CreateLoan from "./Create";
import EditLoan from "./Edit";
import { Breadcrumb, Button, Table } from "react-bootstrap";
import { useDimensiStore } from "../../../store/selenggara/dimensi-store";

function IndexLoan() {
  // __________________________________ Frontend __________________________________
  const navigate = useNavigate();

  // Back button
  const goBack = () => {
    navigate(-1);
  };

  // ___________________________________ Backend __________________________________
  // List & delete dimensi
  // const { dimensis, fetchDimensis, deleteDimensi } = useDimensiStore(
  //   (state) => ({
  //     dimensis: state.dimensis,
  //     fetchDimensis: state.fetchDimensis,
  //     deleteDimensi: state.deleteDimensi,
  //   })
  // );

  // useEffect(() => {
  //   fetchDimensis();
  // }, [fetchDimensis]);

  return (
    <>
      <div className="page-title">
        <h1>Loan</h1>

        <Breadcrumb>
          <Breadcrumb.Item
            className="breadcrumb-previous-link"
            href="selenggara"
          >
            Settings List
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Loan</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="selenggara-table-container">
        <div className="tambah-baru-btn-container">
          <CreateLoan />
        </div>

        <Table responsive>
          <thead>
            <tr>
              <th>No.</th>
              <th>Loan Code</th>
              <th>Loan Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {/* {dimensis.length === 0 ? ( */}
              <tr>
                <td colSpan="5">
                  <center>
                    No loan information available. 
                    Please click the "Add" button to record a new loan.
                  </center>
                </td>
              </tr>
            {/* ) : (
              dimensis.map((dimensisData, key) => ( */}
                <tr 
                  // key={key}
                >
                  <td>No.</td>
                  <td>Loan Code</td>
                  <td>Loan Description</td>
                  <td>Loan Status</td>
                  <td>
                    <EditLoan 
                      // dimensi={dimensisData} 
                    />
                    
                    <Button
                      className="delete-btn"
                      onClick={() => deleteDimensi(dimensisData.id)}
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
            Kembali
          </Button>{" "}
        </div>
      </div>
    </>
  );
}

export default IndexLoan;
