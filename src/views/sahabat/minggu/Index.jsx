import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/styles/styles_sahabat.css";
import CreateMinggu from "./Create";
import { Button, Table, Alert } from "react-bootstrap";
import { useMingguStore } from "../../../store/sahabat/minggu-store";

// function IndexMinggu({
//   sahabatData,
//   sahabatId,
//   pembiayaanId,
//   pembiayaanSahabatsData,
//   handleCheckIndexMingguConditionEachPembiayaan,
// }) {
function IndexMinggu() {
  // __________________________________ Frontend __________________________________
  const navigate = useNavigate();

  // Click Kemas Kini button
  // const clickKemasKiniMinggu = (mingguId) => {
  //   navigate("/tracking-inflow-outflow", {
  //     state: {
  //       sahabatData,
  //       sahabatId,
  //       pembiayaanId,
  //       mingguId,
  //       pembiayaanSahabatsData,
  //     },
  //   });
  // };

  const clickKemasKiniMinggu = () => {
    navigate("/tracking-inflow-outflow");
  };

  // Click Lihat button
  // const clickLihatMinggu = (mingguId) => {
  //   navigate("/tracking-inflow-outflow", {
  //     state: {
  //       sahabatData,
  //       sahabatId,
  //       pembiayaanId,
  //       mingguId,
  //       pembiayaanSahabatsData,
  //     },
  //   });
  // };

  const clickLihatMinggu = () => {
    navigate("/tracking-inflow-outflow");
  };

  // ___________________________________ Backend __________________________________
  // List & delete minggu pembiayaan sahabat
  // const {
  //   mingguPembiayaanSahabats,
  //   fetchMingguPembiayaanSahabats,
  //   deleteMingguPembiayaanSahabat,
  // } = useMingguStore((state) => ({
  //   mingguPembiayaanSahabats: state.mingguPembiayaanSahabats[pembiayaanId] || [],
  //   fetchMingguPembiayaanSahabats: state.fetchMingguPembiayaanSahabats,
  //   deleteMingguPembiayaanSahabat: state.deleteMingguPembiayaanSahabat,
  // }));

  // useEffect(() => {
  //   fetchMingguPembiayaanSahabats(sahabatId, pembiayaanId);
  // }, [fetchMingguPembiayaanSahabats, sahabatId, pembiayaanId]);

  //  ============================== Backend & Frontend =============================
  // |    IndexPembiayaan, EditPembiayaan, IndexMinggu                              |
  // |    Hidden status pembiayaan case                                             |
  //  ===============================================================================
  // const [
  //   checkMingguPembiayaanSahabatLength,
  //   setCheckMingguPembiayaanSahabatLength,
  // ] = useState(false); // Condition 1

  // const [
  //   checkIncompleteMingguPembiayaanSahabats,
  //   setCheckIncompleteMingguPembiayaanSahabats,
  // ] = useState(false); // Condition 2

  // const [conditionsByPembiayaan, setConditionsByPembiayaan] = useState({});

  // useEffect(() => {
  //   let isMounted = true;

  //   const checkConditions = () => {
  //     setCheckMingguPembiayaanSahabatLength(
  //       mingguPembiayaanSahabats.length === 0
  //     );

  //     setCheckIncompleteMingguPembiayaanSahabats(
  //       mingguPembiayaanSahabats.some(
  //         (minggu) =>
  //           minggu.totalInflow === "Tiada maklumat" ||
  //           minggu.totalOutflow === "Tiada maklumat"
  //       )
  //     );
  //   };

  //   checkConditions();

  //   const conditionsResults =
  //     checkMingguPembiayaanSahabatLength ||
  //     checkIncompleteMingguPembiayaanSahabats;

  //   // Update conditionsByPembiayaan with the conditions for the current pembiayaanId
  //   setConditionsByPembiayaan((prevConditions) => {
  //     return {
  //       ...prevConditions,
  //       [pembiayaanId]: conditionsResults,
  //     };
  //   });

  //   // Pass back the conditionsResults to the IndexPembiayaan (Parent)
  //   handleCheckIndexMingguConditionEachPembiayaan(
  //     pembiayaanId,
  //     conditionsResults
  //   );

  //   return () => {
  //     // Cleanup function to set isMounted to false when the component is unmounted
  //     isMounted = false;
  //   };
  // }, []);

  return (
    <>
      <div className="customer-payment-table-container">
        {/* Hide tambah minggu button */}
        {/* {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" && ( */}
          <div className="create-btn-container">
            <CreateMinggu 
              // sahabatId={sahabatId} 
              // pembiayaanId={pembiayaanId} 
            />
          </div>
        {/* )} */}

        {/* {mingguPembiayaanSahabats.some(
          (minggu) =>
            minggu.totalInflow === "Tiada maklumat" ||
            minggu.totalOutflow === "Tiada maklumat"
        ) && ( */}
          <Alert variant="danger">
            Add the week's information{" "}
            <span className="customer-track-week-entry">
              {/* {mingguPembiayaanSahabats
                .filter(
                  (minggu) =>
                    minggu.totalInflow === "Tiada maklumat" ||
                    minggu.totalOutflow === "Tiada maklumat"
                )
                .map((minggu) => minggu.bilanganMinggu)
                .sort((a, b) => a - b)
                .join(", ")} */}
            </span>
            . Click "Edit" button for the week.
          </Alert>
        {/* )} */}

        <Table responsive>
          <thead>
            <tr>
              <th>Week</th>
              <th>Total Inflow (RM)</th>
              <th>Total Outflow (RM)</th>
              <th>Tracking Date</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {/* {mingguPembiayaanSahabats.length === 0 ? ( */}
              <tr>
                <td colSpan="5">
                  <center>
                    No information on the week tracking. Click "Add Week" button to record a new week.
                  </center>
                </td>
              </tr>
            {/* ) : ( */}
              {/* mingguPembiayaanSahabats.map(
                (mingguPembiayaanSahabatsData, key) => ( */}
                  <tr
                    // key={key}
                    // className={
                    //   mingguPembiayaanSahabatsData.totalOutflow ===
                    //   "Tiada maklumat"
                    //     ? "sc-tracking-minggu-warning"
                    //     : ""
                    // }
                  >
                    <td className="sc-completion-indicator">
                      Num. of Week
                    </td>
                    <td className="sc-completion-indicator">
                      Total Inflow
                    </td>
                    <td className="sc-completion-indicator">
                      Total Outflow
                    </td>
                    <td className="sc-completion-indicator">
                      {/* {new Date(
                        mingguPembiayaanSahabatsData.tarikhBorangMinggu
                      ).toLocaleDateString("en-GB")} */}
                        Date on Week Form
                    </td>
                    <td>
                      {/* Conditionally render buttons based on pembiayaan status */}
                      {/* {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? (
                        <> */}
                          {/* Render Edit button */}
                          <Button
                            className="edit-btn"
                            onClick={() =>
                              clickKemasKiniMinggu(
                                // mingguPembiayaanSahabatsData.id
                              )
                            }
                          >
                            Edit
                          </Button>{" "}
                          {/* Render Padam button */}
                          <Button
                            className="delete-btn"
                            onClick={() =>
                              deleteMingguPembiayaanSahabat(
                                // mingguPembiayaanSahabatsData.id
                              )
                            }
                          >
                            Delete
                          </Button>{" "}
                        {/* </>
                      ) : ( */}
                        {/* Render Lihat button when pembiayaan status is SELESAI */}
                        <Button
                          className="show-btn sc-show-btn-completed-payment"
                          onClick={() =>
                            clickLihatMinggu(
                              // mingguPembiayaanSahabatsData.id
                            )
                          }
                        >
                          View
                        </Button>
                      {/* )} */}
                    </td>
                  </tr>
                {/* )
              )
            )} */}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default IndexMinggu;
