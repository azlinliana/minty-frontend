import React, { useEffect } from "react";
import "../../../../../assets/styles/styles_sahabat.css";
import CreateTrackingInflowSahabat from "./Create";
import EditTrackingInflowSahabat from "./Edit";
import { Button, Table } from "react-bootstrap";
import { useInflowSahabatStore } from "../../../../../store/sahabat/inflow-sahabat-store";

// function IndexTrackingInflowSahabat({
//   mingguId,
//   pembiayaanSahabatsData,
//   kodInflowOptions,
// }) {
function IndexTrackingInflowSahabat({
  // mingguId,
  // pembiayaanSahabatsData,
  // kodInflowOptions,
}) {
  // ___________________________________ Backend __________________________________
  // List & delete inflow sahabat
  // const { inflowSahabats, fetchInflowSahabats, deleteInflowSahabat } =
  //   useInflowSahabatStore((state) => ({
  //     inflowSahabats: state.inflowSahabats,
  //     fetchInflowSahabats: state.fetchInflowSahabats,
  //     deleteInflowSahabat: state.deleteInflowSahabat,
  //   }));

  // useEffect(() => {
  //   fetchInflowSahabats(mingguId);
  // }, [fetchInflowSahabats, mingguId]);

  return (
    <>
      <div className="customer-payment-table-container">
        {/* {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? ( */}
          <div className="add-btn-placement">
            <CreateTrackingInflowSahabat
              // mingguId={mingguId}
              // kodInflowOptions={kodInflowOptions}
            />
          </div>
        {/* ) : null} */}

        <Table bordered responsive>
          <thead>
            <tr>
              <th>Num.</th>
              <th>Inflow Code</th>
              <th>Inflow Code Explanation</th>
              <th>Detailed Inflow Code</th>
              <th>Detailed Inflow Code Explanation</th>
              <th>Detailed Information</th>
              <th>Total (RM)</th>
              {/* {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? ( */}
                <th>Actions</th>
              {/* ) : null} */}
            </tr>
          </thead>

          <tbody>
            {/* {inflowSahabats.length === 0 ? ( */}
              <tr>
                <td colSpan="8">
                  <center>
                    There is no customer inflow tracking information. Click "Add" button to add a new record.
                  </center>
                </td>
              </tr>
            {/* ) : ( */}
              {/* inflowSahabats.map((inflowSahabatsData, index) => ( */}
                {/* <React.Fragment key={index}> */}
                <React.Fragment>
                  {/* {inflowSahabatsData.kodInflowTerperinci.length === 0 ? ( */}
                    {/* // Render row for inflow sahabat without kod inflow terperinci */}
                    <tr>
                      <td>Num.</td>
                      <td>Inflow Code</td>
                      <td>Inflow Code Explanation</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>Total Inflow</td>
                      {/* {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? ( */}
                        <td>
                          <EditTrackingInflowSahabat
                            // mingguId={mingguId}
                            // inflowSahabatId={inflowSahabatsData.id}
                            // inflowSahabat={inflowSahabatsData}
                            // kodInflowOptions={kodInflowOptions}
                          />
                          <Button
                            className="delete-btn"
                            // onClick={() =>
                            //   deleteInflowSahabat(inflowSahabatsData.id)
                            // }
                          >
                            Delete
                          </Button>{" "}
                        </td>
                      {/* ) : null} */}
                    </tr>
                  {/* ) : ( */}
                    {/* // Render row for inflow sahabat with kod inflow terperinci */}
                    <tr>
                      <td
                        // rowSpan={
                        //   inflowSahabatsData.kodInflowTerperinci.length + 1
                        // }
                      >
                        {/* {index + 1} */}
                      </td>
                      <td
                        // rowSpan={
                        //   inflowSahabatsData.kodInflowTerperinci.length + 1
                        // }
                      >
                        Inflow Code
                      </td>
                      <td
                        // rowSpan={
                        //   inflowSahabatsData.kodInflowTerperinci.length + 1
                        // }
                      >
                        Inflow Code Explanation
                      </td>
                    </tr>
                  {/* )} */}
                  {/* Displaying Kod Inflow Terperinci */}
                  {/* {inflowSahabatsData.kodInflowTerperinci.map( */}
                    {/* (kodInflowTerperincisData, subIndex) => ( */}
                      {/* // Render rows for kod inflow terperinci */}
                      {/* <tr key={subIndex}> */}
                      <tr>
                        <td>Detailed Inflow Code</td>
                        <td>Detailed Inflow Code Explanation</td>
                        <td>
                          {/* {inflowSahabatsData.inflowSahabatTerperinci &&
                            inflowSahabatsData.inflowSahabatTerperinci.length >
                              0 &&
                            inflowSahabatsData.inflowSahabatTerperinci
                              .filter((inflowTerperinci) => {
                                // Match id type: '"1"(string) === 1(integer)'
                                const kodId =
                                  inflowTerperinci.kodInflowTerperinciId;
                                const terperinciId =
                                  kodInflowTerperincisData.id;

                                return String(kodId) === String(terperinciId);
                              })
                              .map((inflowTerperinciData, innerIndex) => ( */}
                                {/* <React.Fragment key={innerIndex}> */}
                                <React.Fragment>Detailed Inflow Code Explanation</React.Fragment>
                              {/* ))} */}
                        </td>

                        {/* Displaying Amaun and Tindakan for the first row only */}
                        {/* {subIndex === 0 && ( */}
                          <React.Fragment>
                            <td
                              // rowSpan={
                              //   inflowSahabatsData.kodInflowTerperinci.length
                              // }
                            >
                              Total Inflow
                            </td>

                            {/* {pembiayaanSahabatsData.statusPembiayaan !==
                            "SELESAI" ? ( */}
                              <td
                                // rowSpan={
                                //   inflowSahabatsData.kodInflowTerperinci.length
                                // }
                              >
                                <EditTrackingInflowSahabat
                                  // mingguId={mingguId}
                                  // inflowSahabatId={inflowSahabatsData.id}
                                  // inflowSahabat={inflowSahabatsData}
                                  // kodInflowOptions={kodInflowOptions}
                                />
                                <Button
                                  className="delete-btn"
                                  // onClick={() =>
                                  //   deleteInflowSahabat(inflowSahabatsData.id)
                                  // }
                                >
                                  Delete
                                </Button>{" "}
                              </td>
                            {/* ) : null} */}
                          </React.Fragment>
                        {/* )} */}
                      </tr>
                    {/* )
                  )} */}
                </React.Fragment>
              {/* ))
            )} */}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default IndexTrackingInflowSahabat;
