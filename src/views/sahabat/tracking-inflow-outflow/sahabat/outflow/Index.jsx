import React, { useEffect } from "react";
import "../../../../../assets/styles/styles_sahabat.css";
import CreateTrackingOutflowSahabat from "./Create";
import EditTrackingOutflowSahabat from "./Edit";
import { Button, Table } from "react-bootstrap";
import { useOutflowSahabatStore } from "../../../../../store/sahabat/outflow-sahabat-store";

function IndexTrackingOutflowSahabat({
  mingguId,
  pembiayaanSahabatsData,
  kodOutflowOptions,
}) {
  // ___________________________________ Backend __________________________________
  // List & delete outflow sahabat
  const { outflowSahabats, fetchOutflowSahabats, deleteOutflowSahabat } =
    useOutflowSahabatStore((state) => ({
      outflowSahabats: state.outflowSahabats,
      fetchOutflowSahabats: state.fetchOutflowSahabats,
      deleteOutflowSahabat: state.deleteOutflowSahabat,
    }));

  useEffect(() => {
    fetchOutflowSahabats(mingguId);
  }, [fetchOutflowSahabats, mingguId]);

  return (
    <>
      <div className="sahabat-pembiayaan-table-container">
        {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? (
          <div className="tambah-baru-btn-container">
            <CreateTrackingOutflowSahabat
              mingguId={mingguId}
              kodOutflowOptions={kodOutflowOptions}
            />
          </div>
        ) : null}

        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Kod Outflow</th>
              <th>Keterangan Kod Outflow</th>
              <th>Amaun (RM)</th>
              {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? (
                <th>Tindakan</th>
              ) : null}
            </tr>
          </thead>
          <tbody>
            {outflowSahabats.length === 0 ? (
              <tr>
                <td colSpan="5">
                  <center>
                    Tiada maklumat tracking outflow sahabat. Sila klik butang
                    "Tambah" untuk merekodkan outflow sahabat baharu.
                  </center>
                </td>
              </tr>
            ) : (
              outflowSahabats.map((outflowSahabatsData, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{outflowSahabatsData.kodOutflow}</td>
                  <td>
                    {outflowSahabatsData.keteranganKodOutflow}
                  </td>
                  <td>{outflowSahabatsData.amaunOutflow}</td>
                  {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? (
                    <td>
                      <EditTrackingOutflowSahabat
                        mingguId={mingguId}
                        outflowSahabatId={outflowSahabatsData.id}
                        outflowSahabat={outflowSahabatsData}
                        kodOutflowOptions={kodOutflowOptions}
                      />
                      <Button
                        className="delete-btn"
                        onClick={() =>
                          deleteOutflowSahabat(outflowSahabatsData.id)
                        }
                      >
                        Padam
                      </Button>{" "}
                    </td>
                  ) : null}
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default IndexTrackingOutflowSahabat;
