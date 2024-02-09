import React, { useState, useEffect, useCallback } from "react";
import "../../../assets/styles/styles_sahabat.css";
import CreatePembiayaan from "./Create";
import EditPembiayaan from "./Edit";
import IndexMinggu from "../minggu/Index";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import { Card, Alert, Badge, Dropdown, DropdownButton } from "react-bootstrap";
import { TfiArrowCircleDown, TfiArrowCircleUp } from "react-icons/tfi";
import axiosCustom from "../../../axios";

function IndexPembiayaan({ resultSahabat, sahabatId }) {
  // ----------FE----------
  // Collapsible pembiayaan card
  const [isCardCollapsed, setIsCardCollapsed] = useState({});

  const toggleCardCollapse = (pembiayaanId) => {
    setIsCardCollapsed((prev) => ({
      ...prev,
      [pembiayaanId]: !prev[pembiayaanId],
    }));
  };

  // ----------BE----------
  // List pembiayaan sahabat
  const [pembiayaanSahabats, setPembiayaanSahabats] = useState([]);

  const fetchPembiayaanSahabats = useCallback(async () => {
    try {
      const response = await axiosCustom.get(
        `/sahabat/pembiayaan/${sahabatId}`
      );

      if (response.status === 200) {
        setPembiayaanSahabats(response.data);
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  }, [sahabatId, setPembiayaanSahabats]);

  useEffect(() => {
    fetchPembiayaanSahabats();
  }, [fetchPembiayaanSahabats]);

  // ----------BE & FE-------------------------------
  // | IndexPembiayaan, EditPembiayaan, IndexMinggu |
  // | Hidden status pembiayaan case                |
  // ------------------------------------------------
  // Pass state to IndexMinggu (Child) as a props for all pembiayaan sahabat data - Expecting the boolean data
  const [checkIndexMingguConditionEachPembiayaan, setCheckIndexMingguConditionEachPembiayaan] = useState([]);

  const handleCheckIndexMingguConditionEachPembiayaan = (pembiayaanId, indexMingguCondition) => {
    setCheckIndexMingguConditionEachPembiayaan((prev) => {
      const updatedConditions = prev.filter((condition) => condition.pembiayaanId !== pembiayaanId);

      return [
        ...updatedConditions, 
        { 
          pembiayaanId, 
          conditionsResults: indexMingguCondition 
        }
      ];
    });
  }; 
  
  return (
    <>
      <div>
        <h2>Maklumat Pembiayaan Sahabat</h2>

        {/* Hide tambah button */}
        {pembiayaanSahabats.length === 0 ||
        (pembiayaanSahabats.length > 0 &&
          pembiayaanSahabats[pembiayaanSahabats.length - 1].statusPembiayaan ===
            "SELESAI") ? (
          <div className="tambahBtnPlacement">
            <CreatePembiayaan sahabatId={sahabatId} />
          </div>
        ) : null}

        {/* Display pembiayaan sahabat list */}
        {pembiayaanSahabats.length === 0 ? (
          <Alert variant="secondary">
            Tiada maklumat pembiayaan untuk sahabat ini. Sila klik butang
            "Tambah Pembiayaan" untuk merekodkan pembiayaan baharu.
          </Alert>
        ) : (
          pembiayaanSahabats.map((pembiayaanSahabatsData, key) => (
            <div className="cardSection" key={pembiayaanSahabatsData.id}>
              <Card key={key}>
                <Card.Header as="h5" className="cardHeader">
                  <div className="cardBody">
                    <div className="cardSkim">
                      {pembiayaanSahabatsData.skimPembiayaan}
                    </div>

                    <Badge
                      pill
                      bg={
                        pembiayaanSahabatsData.statusPembiayaan === "SELESAI"
                          ? "secondary"
                          : pembiayaanSahabatsData.statusPembiayaan === "AKTIF"
                          ? "primary"
                          : undefined
                      }
                    >
                      {pembiayaanSahabatsData.statusPembiayaan}
                    </Badge>
                  </div>

                  <div className="cardActions">
                    <DropdownButton
                      align="end"
                      title="Status"
                      id="dropdown-menu-align-end"
                      className="editLoanBtn"
                    >
                      <Dropdown.Item eventKey="1">
                        <EditPembiayaan
                          sahabatId={sahabatId}
                          pembiayaanId={pembiayaanSahabatsData.id}
                          pembiayaanSahabat={pembiayaanSahabatsData}
                          checkIndexMingguConditionEachPembiayaan={checkIndexMingguConditionEachPembiayaan}
                        />
                      </Dropdown.Item>

                      <Dropdown.Item eventKey="2">Padam</Dropdown.Item>
                    </DropdownButton>

                    <div
                      onClick={() =>
                        toggleCardCollapse(pembiayaanSahabatsData.id)
                      }
                      className="arrowPositioning"
                    >
                      {isCardCollapsed[pembiayaanSahabatsData.id] ? (
                        <span><TfiArrowCircleDown size={40} /></span>
                      ) : (
                        <span><TfiArrowCircleUp size={40} /></span>
                      )}
                    </div>
                  </div>
                </Card.Header>

                {isCardCollapsed[pembiayaanSahabatsData.id] ? null : (
                  <>
                    {/* Senarai minggu pembiayaan */}
                    <Card.Body
                      className={`${
                        pembiayaanSahabatsData.statusPembiayaan === "SELESAI"
                          ? "disabledContent"
                          : ""
                      }`}
                    >
                      <Card.Title>Senarai Tracking Inflow/Outflow</Card.Title>

                      <IndexMinggu
                        sahabatId={sahabatId}
                        pembiayaanId={pembiayaanSahabatsData.id}
                        pembiayaanSahabatsData={pembiayaanSahabatsData}
                        resultSahabat={resultSahabat}
                        handleCheckIndexMingguConditionEachPembiayaan={handleCheckIndexMingguConditionEachPembiayaan}
                      />
                    </Card.Body>
                  </>
                )}
              </Card>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default IndexPembiayaan;
