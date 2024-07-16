import React, { useEffect } from "react";
import "../../../../../assets/styles/styles_sahabat.css";
import CreateTrackingOutflowIsiRumah from "./Create";
import EditTrackingOutflowIsiRumah from "./Edit";
import { Button, Table } from "react-bootstrap";
import { useOutflowIsiRumahStore } from "../../../../../store/sahabat/outflow-isi-rumah-store";

function IndexTrackingOutflowIsiRumah({ isiRumahId, pembiayaanSahabatsData, kodOutflowOptions }) {
  // ___________________________________ Backend __________________________________
  // List & delete outflow isi rumah sahabat
  const { outflowIsiRumahs, fetchOutflowIsiRumahs, deleteOutflowIsiRumah } =
    useOutflowIsiRumahStore((state) => ({
      outflowIsiRumahs: state.outflowIsiRumahs[isiRumahId] || [],
      fetchOutflowIsiRumahs: state.fetchOutflowIsiRumahs,
      deleteOutflowIsiRumah: state.deleteOutflowIsiRumah,
    }));

  useEffect(() => {
    fetchOutflowIsiRumahs(isiRumahId);
  }, [fetchOutflowIsiRumahs, isiRumahId]);

  return (
    <>
      <div className="sahabat-pembiayaan-table-container">
        {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? (
          <div className="tambah-baru-btn-container">
            <CreateTrackingOutflowIsiRumah
              isiRumahId={isiRumahId}
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
            {outflowIsiRumahs.length === 0 ? (
              <tr>
                <td colSpan="7">
                  <center>
                    Tiada maklumat tracking outflow isi rumah sahabat. Sila klik
                    butang "Tambah" untuk merekodkan outflow isi rumah sahabat
                    baharu.
                  </center>
                </td>
              </tr>
            ) : (
              outflowIsiRumahs.map((outflowIsiRumahsData, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{outflowIsiRumahsData.kodOutflow}</td>
                  <td>
                    {outflowIsiRumahsData.keteranganKodOutflow}
                  </td>
                  <td>{outflowIsiRumahsData.amaunOutflow}</td>
                  {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? (
                    <td>
                      <EditTrackingOutflowIsiRumah
                        isiRumahId={isiRumahId}
                        outflowIsiRumahId={outflowIsiRumahsData.id}
                        outflowIsiRumah={outflowIsiRumahsData}
                        kodOutflowOptions={kodOutflowOptions}
                      />
                      <Button
                        className="delete-btn"
                        onClick={() =>
                          deleteOutflowIsiRumah(isiRumahId, outflowIsiRumahsData.id)
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

export default IndexTrackingOutflowIsiRumah;
