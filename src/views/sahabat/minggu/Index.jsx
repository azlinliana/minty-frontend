import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/styles/styles_sahabat.css";
import CreateMinggu from "./Create";
import { Button, Table, Alert } from "react-bootstrap";
import { useMingguStore } from "../../../store/sahabat/minggu-store";

function IndexMinggu({
  sahabatData,
  sahabatId,
  pembiayaanId,
  pembiayaanSahabatsData,
  handleCheckIndexMingguConditionEachPembiayaan,
}) {
  // __________________________________ Frontend __________________________________
  const navigate = useNavigate();

  // Click Kemas Kini button
  const clickKemasKiniMinggu = (mingguId) => {
    navigate("/tracking-inflow-outflow", {
      state: {
        sahabatData,
        sahabatId,
        pembiayaanId,
        mingguId,
        pembiayaanSahabatsData,
      },
    });
  };

  // Click Lihat button
  const clickLihatMinggu = (mingguId) => {
    navigate("/tracking-inflow-outflow", {
      state: {
        sahabatData,
        sahabatId,
        pembiayaanId,
        mingguId,
        pembiayaanSahabatsData,
      },
    });
  };

  // ___________________________________ Backend __________________________________
  // List & delete minggu pembiayaan sahabat
  const {
    mingguPembiayaanSahabats,
    fetchMingguPembiayaanSahabats,
    deleteMingguPembiayaanSahabat,
  } = useMingguStore((state) => ({
    mingguPembiayaanSahabats: state.mingguPembiayaanSahabats[pembiayaanId] || [],
    fetchMingguPembiayaanSahabats: state.fetchMingguPembiayaanSahabats,
    deleteMingguPembiayaanSahabat: state.deleteMingguPembiayaanSahabat,
  }));

  useEffect(() => {
    fetchMingguPembiayaanSahabats(sahabatId, pembiayaanId);
  }, [fetchMingguPembiayaanSahabats, sahabatId, pembiayaanId]);

  //  ============================== Backend & Frontend =============================
  // |    IndexPembiayaan, EditPembiayaan, IndexMinggu                              |
  // |    Hidden status pembiayaan case                                             |
  //  ===============================================================================
  const [
    checkMingguPembiayaanSahabatLength,
    setCheckMingguPembiayaanSahabatLength,
  ] = useState(false); // Condition 1

  const [
    checkIncompleteMingguPembiayaanSahabats,
    setCheckIncompleteMingguPembiayaanSahabats,
  ] = useState(false); // Condition 2

  const [conditionsByPembiayaan, setConditionsByPembiayaan] = useState({});

  useEffect(() => {
    let isMounted = true;

    const checkConditions = () => {
      setCheckMingguPembiayaanSahabatLength(
        mingguPembiayaanSahabats.length === 0
      );

      setCheckIncompleteMingguPembiayaanSahabats(
        mingguPembiayaanSahabats.some(
          (minggu) =>
            minggu.totalInflow === "Tiada maklumat" ||
            minggu.totalOutflow === "Tiada maklumat"
        )
      );
    };

    checkConditions();

    const conditionsResults =
      checkMingguPembiayaanSahabatLength ||
      checkIncompleteMingguPembiayaanSahabats;

    // Update conditionsByPembiayaan with the conditions for the current pembiayaanId
    setConditionsByPembiayaan((prevConditions) => {
      return {
        ...prevConditions,
        [pembiayaanId]: conditionsResults,
      };
    });

    // Pass back the conditionsResults to the IndexPembiayaan (Parent)
    handleCheckIndexMingguConditionEachPembiayaan(
      pembiayaanId,
      conditionsResults
    );

    return () => {
      // Cleanup function to set isMounted to false when the component is unmounted
      isMounted = false;
    };
  }, []);

  return (
    <>
      <div className="sahabat-pembiayaan-table-container">
        {/* Hide tambah minggu button */}
        {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" && (
          <div className="tambah-baru-btn-container">
            <CreateMinggu 
              sahabatId={sahabatId} 
              pembiayaanId={pembiayaanId} 
            />
          </div>
        )}

        {mingguPembiayaanSahabats.some(
          (minggu) =>
            minggu.totalInflow === "Tiada maklumat" ||
            minggu.totalOutflow === "Tiada maklumat"
        ) && (
          <Alert variant="danger">
            Sila tambah maklumat untuk minggu{" "}
            <span className="sahabat-track-minggu-entry">
              {mingguPembiayaanSahabats
                .filter(
                  (minggu) =>
                    minggu.totalInflow === "Tiada maklumat" ||
                    minggu.totalOutflow === "Tiada maklumat"
                )
                .map((minggu) => minggu.bilanganMinggu)
                .sort((a, b) => a - b)
                .join(", ")}
            </span>
            . Klik butang "Kemas Kini" bagi minggu berkenaan.
          </Alert>
        )}

        <Table responsive>
          <thead>
            <tr>
              <th>Minggu</th>
              <th>Jumlah Inflow (RM)</th>
              <th>Jumlah Outflow (RM)</th>
              <th>Tarikh Tracking</th>
              <th>Tindakan</th>
            </tr>
          </thead>

          <tbody>
            {mingguPembiayaanSahabats.length === 0 ? (
              <tr>
                <td colSpan="5">
                  <center>
                    Tiada maklumat minggu tracking. Sila klik butang "Tambah
                    Minggu" untuk merekodkan minggu baharu.
                  </center>
                </td>
              </tr>
            ) : (
              mingguPembiayaanSahabats.map(
                (mingguPembiayaanSahabatsData, key) => (
                  <tr
                    key={key}
                    className={
                      mingguPembiayaanSahabatsData.totalOutflow ===
                      "Tiada maklumat"
                        ? "sc-tracking-minggu-warning"
                        : ""
                    }
                  >
                    <td className="sc-completion-indicator">
                      {mingguPembiayaanSahabatsData.bilanganMinggu}
                    </td>
                    <td className="sc-completion-indicator">
                      {mingguPembiayaanSahabatsData.totalInflow}
                    </td>
                    <td className="sc-completion-indicator">
                      {mingguPembiayaanSahabatsData.totalOutflow}
                    </td>
                    <td className="sc-completion-indicator">
                      {new Date(
                        mingguPembiayaanSahabatsData.tarikhBorangMinggu
                      ).toLocaleDateString("en-GB")}
                    </td>
                    <td>
                      {/* Conditionally render buttons based on pembiayaan status */}
                      {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? (
                        <>
                          {/* Render Edit button */}
                          <Button
                            className="edit-btn"
                            onClick={() =>
                              clickKemasKiniMinggu(
                                mingguPembiayaanSahabatsData.id
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
                                mingguPembiayaanSahabatsData.id
                              )
                            }
                          >
                            Padam
                          </Button>{" "}
                        </>
                      ) : (
                        // Render Lihat button when pembiayaan status is SELESAI
                        <Button
                          className="show-btn sc-show-btn-completed-pembiayaan"
                          onClick={() =>
                            clickLihatMinggu(mingguPembiayaanSahabatsData.id)
                          }
                        >
                          Lihat
                        </Button>
                      )}
                    </td>
                  </tr>
                )
              )
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default IndexMinggu;
