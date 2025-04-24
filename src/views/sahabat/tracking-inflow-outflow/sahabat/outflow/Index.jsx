import React, { useEffect } from "react";
import "../../../../../assets/styles/styles_customers.css";
import CreateTrackingOutflowSahabat from "./Create";
import EditTrackingOutflowSahabat from "./Edit";
import { Button, Table } from "react-bootstrap";
import { useOutflowSahabatStore } from "../../../../../store/sahabat/outflow-sahabat-store";

// function IndexTrackingOutflowSahabat({
//   mingguId,
//   pembiayaanSahabatsData,
//   kodOutflowOptions,
// }) {
function IndexTrackingOutflowSahabat() {
  // ___________________________________ Backend __________________________________
  // List & delete outflow sahabat
  // const { outflowSahabats, fetchOutflowSahabats, deleteOutflowSahabat } =
  //   useOutflowSahabatStore((state) => ({
  //     outflowSahabats: state.outflowSahabats,
  //     fetchOutflowSahabats: state.fetchOutflowSahabats,
  //     deleteOutflowSahabat: state.deleteOutflowSahabat,
  //   }));

  // useEffect(() => {
  //   fetchOutflowSahabats(mingguId);
  // }, [fetchOutflowSahabats, mingguId]);

  return (
    <>
      <div className="sahabat-pembiayaan-table-container">
        {/* {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? ( */}
        <div className="create-btn-container">
          <CreateTrackingOutflowSahabat
          // mingguId={mingguId}
          // kodOutflowOptions={kodOutflowOptions}
          />
        </div>
        {/* ) : null} */}

        <Table responsive>
          <thead>
            <tr>
              <th>Num.</th>
              <th>Outflow Code</th>
              <th>Outflow Code Explanation</th>
              <th>Total Outflow (RM)</th>
              {/* {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? ( */}
              <th>Actions</th>
              {/* ) : null} */}
            </tr>
          </thead>
          <tbody>
            {/* {outflowSahabats.length === 0 ? ( */}
            <tr>
              <td colSpan="5">
                <center>
                  There is no information on customer outflow tracking. Click
                  "Add" button to create a new record.
                </center>
              </td>
            </tr>
            {/* ) : ( */}
            {/* outflowSahabats.map((outflowSahabatsData, key) => ( */}
            {/* <tr key={key}> */}
            <tr>
              <td>Num.</td>
              <td>Outflow Code</td>
              <td>Outflow Code Explanation</td>
              <td>Outflow Total</td>
              {/* {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? ( */}
              <td>
                <EditTrackingOutflowSahabat
                // mingguId={mingguId}
                // outflowSahabatId={outflowSahabatsData.id}
                // outflowSahabat={outflowSahabatsData}
                // kodOutflowOptions={kodOutflowOptions}
                />
                <Button
                  className="delete-btn"
                  // onClick={() =>
                  //   deleteOutflowSahabat(outflowSahabatsData.id)
                  // }
                >
                  Delete
                </Button>{" "}
              </td>
              {/* ) : null} */}
            </tr>
            {/* )) */}
            {/* )} */}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default IndexTrackingOutflowSahabat;
