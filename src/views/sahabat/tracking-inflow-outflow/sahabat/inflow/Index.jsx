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
      <div className="sahabat-pembiayaan-table-container">
        {/* {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? ( */}
          <div className="tambahBtnPlacement">
            <CreateTrackingInflowSahabat
              // mingguId={mingguId}
              // kodInflowOptions={kodInflowOptions}
            />
          </div>
        {/* ) : null} */}

        <Table bordered responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Kod Inflow</th>
              <th>Keterangan Kod Inflow</th>
              <th>Kod Inflow Terperinci</th>
              <th>Keterangan Kod Inflow Terperinci</th>
              <th>Maklumat Terperinci</th>
              <th>Amaun (RM)</th>
              {/* {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? ( */}
                <th>Tindakan</th>
              {/* ) : null} */}
            </tr>
          </thead>

          <tbody>
            {/* {inflowSahabats.length === 0 ? ( */}
              <tr>
                <td colSpan="8">
                  <center>
                    Tiada maklumat tracking inflow sahabat. Sila klik butang
                    "Tambah" untuk merekodkan inflow sahabat baharu.
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
                      <td>Bil.</td>
                      <td>Kod Inflow</td>
                      <td>Keterangan Kod Inflow</td>
                      <td>-</td>
                      <td>-</td>
                      <td>-</td>
                      <td>Amaun Inflow</td>
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
                            Padam
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
                        Kod Inflow
                      </td>
                      <td
                        // rowSpan={
                        //   inflowSahabatsData.kodInflowTerperinci.length + 1
                        // }
                      >
                        KeteranganKodInflow
                      </td>
                    </tr>
                  {/* )} */}
                  {/* Displaying Kod Inflow Terperinci */}
                  {/* {inflowSahabatsData.kodInflowTerperinci.map( */}
                    {/* (kodInflowTerperincisData, subIndex) => ( */}
                      {/* // Render rows for kod inflow terperinci */}
                      {/* <tr key={subIndex}> */}
                      <tr>
                        <td>Kod Inflow Terperinci</td>
                        <td>Keterangan Kod Inflow Terperinci</td>
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
                                <React.Fragment>KeteranganInflowTerperinci</React.Fragment>
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
                              Amaun Inflow
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
                                  Padam
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
