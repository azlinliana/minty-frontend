import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/styles/styles_sahabat.css";
import CreateMinggu from "./Create";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../components/sweet-alert/DeletionAlert";
import { Button, Table, Alert } from "react-bootstrap";
import axiosCustom from "../../../axios";
import Swal from "sweetalert2";

function IndexMinggu({
  resultSahabat,
  sahabatId,
  pembiayaanId,
  pembiayaanSahabatsData,
  handleCheckIndexMingguConditionEachPembiayaan,
}) {
  // ----------FE----------
  const navigate = useNavigate();

  // Click Kemas Kini button
  const clickKemasKiniMinggu = (mingguId) => {
    navigate("/tracking-inflow-outflow", {
      state: {
        resultSahabat,
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
        resultSahabat,
        sahabatId,
        pembiayaanId,
        mingguId,
        pembiayaanSahabatsData,
      },
    });
  };

  // ----------BE----------
  // List minggu pembiayaan sahabat
  const [mingguPembiayaanSahabats, setMingguPembiayaanSahabats] = useState([]);

  const fetchMingguPembiayaanSahabats = useCallback(async () => {
    try {
      const response = await axiosCustom.get(
        `/sahabat/${sahabatId}/pembiayaan/${pembiayaanId}/minggu`
      );

      if (response.status === 200) {
        setMingguPembiayaanSahabats(response.data);
      } else {
        ErrorAlert(response); // Error from the backend or unknown error from the server side
      }
    } catch (error) {
      if (
        error.response &&
        (error.response.status === 503 || error.response.status === 429)
      ) {
        // The server is not ready, ignore the error
        console.log("Server not ready, retry later.");
      } else {
        // Handle other errors
        ErrorAlert(error);
      }
    }
  }, [sahabatId, pembiayaanId, setMingguPembiayaanSahabats]);

  useEffect(() => {
    fetchMingguPembiayaanSahabats();
  }, [fetchMingguPembiayaanSahabats]);

  // Delete minggu
  const deleteMingguPembiayaanSahabats = async (mingguPembiayaanSahabatId) => {
    // Function to delete minggu
    const performDeletion = async () => {
      try {
        const response = await axiosCustom.delete(
          `/sahabat/minggu/${mingguPembiayaanSahabatId}`
        );

        if (response.status === 200) {
          setMingguPembiayaanSahabats((prevMingguPembiayaanSahabats) =>
            prevMingguPembiayaanSahabats.filter(
              (mingguPembiayaanSahabat) =>
                mingguPembiayaanSahabat.id !== mingguPembiayaanSahabatId
            )
          );
          // Show success message from the server
          Swal.fire("Dipadam!", response.data.message, "success");
        }
      } catch (error) {
        console.error("Ralat dalam memadam dimensi", error);
      }
    };

    // Function to handle cancellation
    const cancelDeletion = () => {
      Swal.fire("Dibatalkan", "Data anda selamat.", "error");
    };

    // Display the deletion confirmation dialog
    DeletionAlert(performDeletion, cancelDeletion);
  };

  // ----------BE & FE-------------------------------
  // | IndexPembiayaan, EditPembiayaan, IndexMinggu |
  // | Hidden status pembiayaan case                |
  // ------------------------------------------------
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
  }, [mingguPembiayaanSahabats, pembiayaanId]);

  return (
    <>
      <div className="sahabat-pembiayaan-table-container">
        {/* Hide tambah minggu button */}
        {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" && (
          <div className="tambah-baru-btn-container">
            <CreateMinggu sahabatId={sahabatId} pembiayaanId={pembiayaanId} />
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
                              deleteMingguPembiayaanSahabats(
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
