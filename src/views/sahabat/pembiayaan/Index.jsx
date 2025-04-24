import React, { useState, useEffect } from "react";
import "../../../assets/styles/styles_customers.css";
import CreatePembiayaan from "./Create";
import EditPembiayaan from "./Edit";
import IndexMinggu from "../minggu/Index";
import { Card, Alert, Badge, Dropdown, DropdownButton } from "react-bootstrap";
import { TfiArrowCircleDown, TfiArrowCircleUp } from "react-icons/tfi";
import { useSkimPembiayaanStore } from "../../../store/options-store";
import { usePembiayaanStore } from "../../../store/sahabat/pembiayaan-store";

// function IndexPembiayaan({ sahabatData, sahabatId }) {
function IndexPembiayaan() {
  // __________________________________ Frontend __________________________________
  // Collapsible pembiayaan card
  const [isCardCollapsed, setIsCardCollapsed] = useState({});

  // const toggleCardCollapse = (pembiayaanId) => {
  //   setIsCardCollapsed((prev) => ({
  //     ...prev,
  //     [pembiayaanId]: !prev[pembiayaanId],
  //   }));
  // };

  // ___________________________________ Backend __________________________________
  const dummyPembiayaanSahabats = [
    { id: 1, statusPembiayaan: "ACTIVE" },
    { id: 2, statusPembiayaan: "COMPLETED" },
  ];
  // ============================== Dropdown Options ==============================
  // Display skim pembiayaan options
  // const { skimPembiayaanOptions, displaySkimPembiayaans } =
  //   useSkimPembiayaanStore((state) => ({
  //     skimPembiayaanOptions: state.skimPembiayaanOptions,
  //     displaySkimPembiayaans: state.displaySkimPembiayaans,
  //   }));

  // useEffect(() => {
  //   displaySkimPembiayaans();
  // }, [displaySkimPembiayaans]);
  // ==============================================================================

  // List & delete pembiayaan sahabat
  // const {
  //   pembiayaanSahabats,
  //   fetchPembiayaanSahabats,
  //   deletePembiayaanSahabat,
  // } = usePembiayaanStore();

  // useEffect(() => {
  //   fetchPembiayaanSahabats(sahabatId);
  // }, [fetchPembiayaanSahabats, sahabatId]);

  //  ============================== Backend & Frontend =============================
  // |    IndexPembiayaan, EditPembiayaan, IndexMinggu                              |
  // |    Hidden status pembiayaan case                                             |
  //  ===============================================================================
  // Pass state to IndexMinggu (Child) as a props for all pembiayaan sahabat data
  // Expecting the boolean data
  // const [
  //   checkIndexMingguConditionEachPembiayaan,
  //   setCheckIndexMingguConditionEachPembiayaan,
  // ] = useState([]);

  // const handleCheckIndexMingguConditionEachPembiayaan = (
  //   pembiayaanId,
  //   indexMingguCondition
  // ) => {
  //   setCheckIndexMingguConditionEachPembiayaan((prev) => {
  //     const updatedConditions = prev.filter(
  //       (condition) => condition.pembiayaanId !== pembiayaanId
  //     );

  //     return [
  //       ...updatedConditions,
  //       {
  //         pembiayaanId,
  //         conditionsResults: indexMingguCondition,
  //       },
  //     ];
  //   });
  // };

  return (
    <>
      <div>
        <h2>Maklumat Pembiayaan Sahabat</h2>

        {/* Hide tambah pembiayaan button */}
        {/* {pembiayaanSahabats.length === 0 ||
        (pembiayaanSahabats.length > 0 &&
          pembiayaanSahabats[pembiayaanSahabats.length - 1].statusPembiayaan ===
            "SELESAI") ? ( */}
        <div className="create-btn-container">
          {/* Create pembiayaan */}
          <CreatePembiayaan
          // sahabatId={sahabatId}
          // skimPembiayaanOptions={skimPembiayaanOptions}
          />
        </div>
        {/* ) : null} */}

        {/* Display pembiayaan sahabat list */}
        {/* {pembiayaanSahabats.length === 0 ? ( */}
        <Alert variant="secondary">
          There's no information on this customer payment. Click "Add Customer
          Type of Payment" button to record the payment.
        </Alert>
        {/* ) : ( */}
        {/* pembiayaanSahabats.map((pembiayaanSahabatsData, key) => ( */}
        <div
          className="card-pembiayaan-sahabat-container"
          // key={pembiayaanSahabatsData.id}
        >
          {/* <Card key={key}> */}
          <Card>
            <Card.Header as="h5" className="card-pembiayaan-sahabat-header">
              <div className="card-pembiayaan-sahabat-content">
                <div className="card-type-payment-header">Type of Payment</div>

                {/* <Badge
                      pill
                      bg={
                        pembiayaanSahabatsData.statusPembiayaan === "SELESAI"
                          ? "secondary"
                          : pembiayaanSahabatsData.statusPembiayaan === "AKTIF"
                          ? "primary"
                          : undefined
                      }
                      className="card-badge-status"
                    >
                      Status Pembiayaan
                    </Badge> */}
              </div>

              <div>
                <DropdownButton
                  align="end"
                  title="Status"
                  id="dropdown-menu-align-end"
                >
                  <Dropdown.Item eventKey="1">
                    {/* Edit pembiayaan */}
                    <EditPembiayaan
                    // sahabatId={sahabatId}
                    // pembiayaanId={pembiayaanSahabatsData.id}
                    // pembiayaanSahabat={pembiayaanSahabatsData}
                    // skimPembiayaanOptions={skimPembiayaanOptions}
                    // checkIndexMingguConditionEachPembiayaan={
                    //   checkIndexMingguConditionEachPembiayaan
                    // }
                    />
                  </Dropdown.Item>

                  {/* Delete pembiayaan */}
                  <Dropdown.Item
                    eventKey="2"
                    // onClick={() =>
                    //   deletePembiayaanSahabat(pembiayaanSahabatsData.id)
                    // }
                  >
                    Delete
                  </Dropdown.Item>
                </DropdownButton>

                <div
                  // onClick={() =>
                  //   toggleCardCollapse(pembiayaanSahabatsData.id)
                  // }
                  className="card-type-payment-arrow-position"
                >
                  {/* {isCardCollapsed[pembiayaanSahabatsData.id] ? ( */}
                  <span>
                    <TfiArrowCircleDown size={40} />
                  </span>
                  {/* ) : ( */}
                  <span>
                    <TfiArrowCircleUp size={40} />
                  </span>
                  {/* )} */}
                </div>
              </div>
            </Card.Header>

            {/* {isCardCollapsed[pembiayaanSahabatsData.id] ? null : (
                  <> */}
            <Card.Body
            // className={`${
            //   pembiayaanSahabatsData.statusPembiayaan === "SELESAI"
            //     ? "sc-type-payment-completed-indicator sc-completion-indicator"
            //     : ""
            // }`}
            >
              <Card.Title>List of Inflow/Outflow Tracking</Card.Title>

              {/* List minggu */}
              <IndexMinggu
              // sahabatData={sahabatData}
              // sahabatId={sahabatId}
              // pembiayaanId={pembiayaanSahabatsData.id}
              // pembiayaanSahabatsData={pembiayaanSahabatsData}
              // handleCheckIndexMingguConditionEachPembiayaan={
              //   handleCheckIndexMingguConditionEachPembiayaan
              // }
              />
            </Card.Body>
            {/* </>
                )} */}
          </Card>
        </div>
        {/* ))
        )} */}
      </div>
    </>
  );
}

export default IndexPembiayaan;
