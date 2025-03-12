import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/styles/styles_selenggara.css";
import CreateRelationship from "./Create";
import EditRelationship from "./Edit";
import { Breadcrumb, Button, Table } from "react-bootstrap";
import { useHubunganStore } from "../../../store/selenggara/hubungan-store";

function IndexRelationship() {
  // __________________________________ Frontend __________________________________
  const navigate = useNavigate();

  // Back button
  const goBack = () => {
    navigate(-1);
  };

  // ___________________________________ Backend __________________________________
  // List & delete hubungan
  // const { hubungans, fetchHubungans, deleteHubungan } = useHubunganStore(
  //   (state) => ({
  //     hubungans: state.hubungans,
  //     fetchHubungans: state.fetchHubungans,
  //     deleteHubungan: state.deleteHubungan,
  //   })
  // );

  // useEffect(() => {
  //   fetchHubungans();
  // }, [fetchHubungans]);

  return (
    <>
      <div className="page-title">
        <h1>Relationship</h1>

        <Breadcrumb>
          <Breadcrumb.Item
            className="breadcrumb-previous-link"
            href="selenggara"
          >
            Settings List
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Relationship</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="selenggara-table-container">
        <div className="tambah-baru-btn-container">
          <CreateRelationship />
        </div>

        <Table responsive>
          <thead>
            <tr>
              <th>No.</th>
              <th>Relationship Code</th>
              <th>Relationship Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {/* {hubungans.length === 0 ? ( */}
              <tr>
                <td colSpan="5">
                  <center>
                    No relationship information available. 
                    Please click the "Add" button to record a new relationship.
                  </center>
                </td>
              </tr>
            {/* ) : (
              hubungans.map((hubungansData, key) => ( */}
                <tr 
                  // key={key}
                >
                  <td>No.</td>
                  <td>Relationship Code</td>
                  <td>Relationship Description</td>
                  <td>Relationship Status</td>
                  <td>
                    <EditRelationship 
                      // hubungan={hubungansData} 
                    />
                    
                    <Button
                      className="delete-btn"
                      // onClick={() => deleteHubungan(hubungansData.id)}
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

export default IndexRelationship;
