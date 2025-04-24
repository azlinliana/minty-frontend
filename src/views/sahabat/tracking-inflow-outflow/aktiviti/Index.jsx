import React, { useState, useEffect } from "react";
import "../../../../assets/styles/styles_customers.css";
import CreateAktiviti from "./Create";
import EditAktiviti from "./Edit";
import { Button, Table } from "react-bootstrap";
import { useAktivitiStore } from "../../../../store/sahabat/aktiviti-store";

// function IndexAktiviti({
//   sahabatId,
//   pembiayaanId,
//   pembiayaanSahabatsData,
//   onDataAvailableChange,
//   aktivitiOptions,
//   displayAktivitis,
//   keteranganAktivitiOptions,
//   displayKeteranganAktivitis,
//   projekAktivitiOptions,
//   displayProjekAktivitis,
//   dimensiOptions,
//   displayDimensis,
// }) {
function IndexAktiviti() {
  // ___________________________________ Backend __________________________________
  // ============================== Dropdown Options ==============================
  // Display aktiviti, keterangan aktiviti, and projek aktiviti options
  const [selectedAktiviti, setSelectedAktiviti] = useState("");

  const [selectedKeteranganAktiviti, setSelectedKeteranganAktiviti] =
    useState("");

  const [selectedProjekAktiviti, setSelectedProjekAktiviti] = useState("");

  // useEffect(() => {
  //   displayAktivitis();
  //   displayKeteranganAktivitis();
  //   displayProjekAktivitis();
  //   displayDimensis();
  // }, [
  //   displayAktivitis,
  //   displayKeteranganAktivitis,
  //   displayProjekAktivitis,
  //   displayDimensis,
  // ]);
  // ==============================================================================

  // List & delete aktiviti sahabat
  // const { aktivitiSahabats, fetchAktivitiSahabats, deleteAktivitiSahabat } =
  //   useAktivitiStore((state) => ({
  //     aktivitiSahabats: state.aktivitiSahabats,
  //     fetchAktivitiSahabats: state.fetchAktivitiSahabats,
  //     deleteAktivitiSahabat: state.deleteAktivitiSahabat,
  //   }));

  // useEffect(() => {
  //   fetchAktivitiSahabats(sahabatId, pembiayaanId);
  // }, [fetchAktivitiSahabats, sahabatId, pembiayaanId]);

  return (
    <>
      <div>
        <h2>Maklumat Aktiviti Sahabat</h2>

        <div className="customer-payment-table-container">
          {/* {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? ( */}
          <div className="create-btn-container">
            <CreateAktiviti
            // sahabatId={sahabatId}
            // pembiayaanId={pembiayaanId}
            // selectedAktiviti={selectedAktiviti}
            // setSelectedAktiviti={setSelectedAktiviti}
            // selectedKeteranganAktiviti={selectedKeteranganAktiviti}
            // setSelectedKeteranganAktiviti={setSelectedKeteranganAktiviti}
            // selectedProjekAktiviti={selectedProjekAktiviti}
            // setSelectedProjekAktiviti={setSelectedProjekAktiviti}
            // aktivitiOptions={aktivitiOptions}
            // keteranganAktivitiOptions={keteranganAktivitiOptions}
            // projekAktivitiOptions={projekAktivitiOptions}
            // dimensiOptions={dimensiOptions}
            // onDataAvailableChange={onDataAvailableChange}
            />
          </div>
          {/* ) : null} */}

          <Table responsive>
            <thead>
              <tr>
                <th>Num.</th>
                <th>Activity</th>
                <th>Activity Explanation</th>
                <th>Project</th>
                <th>Dimension</th>
                <th>Customer Funding</th>
                <th>Other Explanation</th>
                <th>Total Loan (RM)</th>
                {/* {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? ( */}
                <th>Action</th>
                {/* ) : null} */}
              </tr>
            </thead>

            <tbody>
              {/* {aktivitiSahabats.length === 0 ? ( */}
              <tr>
                <td colSpan="9">
                  <center>
                    There is no information on customer's activity. Click "Add"
                    button to record a new activity.
                  </center>
                </td>
              </tr>
              {/* ) : ( */}
              {/* aktivitiSahabats.map((aktivitisData, key) => ( */}
              {/* <tr key={key}> */}
              <tr>
                <td>Num.</td>
                <td>Activity</td>
                <td>Activity Explanation</td>
                <td>Type of Project Activity</td>
                <td>Dimension Code</td>
                <td>Customer Funding Activity</td>
                <td>Other Explanation for Activity</td>
                <td>Activity Total Loan</td>
                {/* {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? ( */}
                <td>
                  <EditAktiviti
                  // sahabatId={sahabatId}
                  // pembiayaanId={pembiayaanId}
                  // aktivitiId={aktivitisData.id}
                  // aktivitiSahabat={aktivitisData}
                  // selectedAktiviti={selectedAktiviti}
                  // setSelectedAktiviti={setSelectedAktiviti}
                  // selectedKeteranganAktiviti={
                  //   selectedKeteranganAktiviti
                  // }
                  // setSelectedKeteranganAktiviti={
                  //   setSelectedKeteranganAktiviti
                  // }
                  // setSelectedProjekAktiviti={setSelectedProjekAktiviti}
                  // aktivitiOptions={aktivitiOptions}
                  // keteranganAktivitiOptions={keteranganAktivitiOptions}
                  // projekAktivitiOptions={projekAktivitiOptions}
                  // dimensiOptions={dimensiOptions}
                  />

                  <Button
                    className="delete-btn"
                    // onClick={() =>
                    //   deleteAktivitiSahabat(aktivitisData.id)
                    // }
                  >
                    Delete
                  </Button>
                </td>
                {/* ) : null} */}
              </tr>
              {/* )) */}
              {/* )} */}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default IndexAktiviti;
