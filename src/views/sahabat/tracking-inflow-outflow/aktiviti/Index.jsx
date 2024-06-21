import React, { useState, useEffect } from "react";
import "../../../../assets/styles/styles_sahabat.css";
import CreateAktiviti from "./Create";
import EditAktiviti from "./Edit";
import { Button, Table } from "react-bootstrap";
import { useAktivitiStore } from "../../../../store/sahabat/aktiviti-store";
import {
  useProjekAktivitiStore,
  useSelenggaraStore,
} from "../../../../store/options-store";

function IndexAktiviti({
  sahabatId,
  pembiayaanId,
  pembiayaanSahabatsData,
  onDataAvailableChange,
}) {
  // ___________________________________ Backend __________________________________
  // ============================== Dropdown Options ==============================
  // Display aktiviti, keterangan aktiviti, and projek aktiviti options
  const [selectedAktiviti, setSelectedAktiviti] = useState("");

  const [selectedKeteranganAktiviti, setSelectedKeteranganAktiviti] =
    useState("");

  const [selectedProjekAktiviti, setSelectedProjekAktiviti] = useState("");

  const {
    aktivitiOptions,
    displayAktivitis,
    keteranganAktivitiOptions,
    displayKeteranganAktivitis,
    projekAktivitiOptions,
    displayProjekAktivitis,
  } = useProjekAktivitiStore((state) => ({
    aktivitiOptions: state.aktivitiOptions,
    displayAktivitis: state.displayAktivitis,
    keteranganAktivitiOptions: state.keteranganAktivitiOptions,
    displayKeteranganAktivitis: state.displayKeteranganAktivitis,
    projekAktivitiOptions: state.projekAktivitiOptions,
    displayProjekAktivitis: state.displayProjekAktivitis,
  }));

  useEffect(() => {
    displayAktivitis();
    displayKeteranganAktivitis();
    displayProjekAktivitis();
  }, [displayAktivitis, displayKeteranganAktivitis, displayProjekAktivitis]);

  // Display dimensi options
  const { dimensiOptions, displayDimensis } = useSelenggaraStore((state) => ({
    dimensiOptions: state.dimensiOptions,
    displayDimensis: state.displayDimensis,
  }));

  useEffect(() => {
    displayDimensis();
  }, [displayDimensis]);
  // ==============================================================================

  // List & delete aktiviti sahabat
  const { aktivitiSahabats, fetchAktivitiSahabats, deleteAktivitiSahabat } =
    useAktivitiStore((state) => ({
      aktivitiSahabats: state.aktivitiSahabats,
      fetchAktivitiSahabats: state.fetchAktivitiSahabats,
      deleteAktivitiSahabat: state.deleteAktivitiSahabat,
    }));

  useEffect(() => {
    fetchAktivitiSahabats(sahabatId, pembiayaanId);
  }, [fetchAktivitiSahabats, sahabatId, pembiayaanId]);

  return (
    <>
      <div>
        <h2>Maklumat Aktiviti Sahabat</h2>

        <div className="sahabat-pembiayaan-table-container">
          {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? (
            <div className="tambah-baru-btn-container">
              <CreateAktiviti
                sahabatId={sahabatId}
                pembiayaanId={pembiayaanId}
                selectedAktiviti={selectedAktiviti}
                setSelectedAktiviti={setSelectedAktiviti}
                selectedKeteranganAktiviti={selectedKeteranganAktiviti}
                setSelectedKeteranganAktiviti={setSelectedKeteranganAktiviti}
                setSelectedProjekAktiviti={setSelectedProjekAktiviti}
                aktivitiOptions={aktivitiOptions}
                keteranganAktivitiOptions={keteranganAktivitiOptions}
                projekAktivitiOptions={projekAktivitiOptions}
                dimensiOptions={dimensiOptions}
                onDataAvailableChange={onDataAvailableChange}
              />
            </div>
          ) : null}

          <Table responsive>
            <thead>
              <tr>
                <th>Bil.</th>
                <th>Aktiviti</th>
                <th>Keterangan Aktiviti</th>
                <th>Projek</th>
                <th>Dimensi</th>
                <th>Pengurus Dana</th>
                <th>Keterangan Lain-lain</th>
                <th>Jumlah Pinjaman (RM)</th>
                {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? (
                  <th>Tindakan</th>
                ) : null}
              </tr>
            </thead>

            <tbody>
              {aktivitiSahabats.length === 0 ? (
                <tr>
                  <td colSpan="9">
                    <center>
                      Tiada maklumat aktiviti untuk sahabat ini. Sila klik
                      butang "Tambah" untuk merekodkan aktiviti baharu.
                    </center>
                  </td>
                </tr>
              ) : (
                aktivitiSahabats.map((aktivitisData, key) => (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{aktivitisData.jenisKegiatan}</td>
                    <td>{aktivitisData.jenisKeteranganKegiatan}</td>
                    <td>{aktivitisData.jenisProjekKegiatan}</td>
                    <td>{aktivitisData.kodDimensi}</td>
                    <td>{aktivitisData.pengurusDanaAktiviti}</td>
                    <td>{aktivitisData.keteranganLainAktiviti}</td>
                    <td>{aktivitisData.jumlahPinjamanAktiviti}</td>
                    {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? (
                      <td>
                        <EditAktiviti
                          sahabatId={sahabatId}
                          pembiayaanId={pembiayaanId}
                          aktivitiId={aktivitisData.id}
                          aktivitiSahabat={aktivitisData}
                          selectedAktiviti={selectedAktiviti}
                          setSelectedAktiviti={setSelectedAktiviti}
                          selectedKeteranganAktiviti={
                            selectedKeteranganAktiviti
                          }
                          setSelectedKeteranganAktiviti={
                            setSelectedKeteranganAktiviti
                          }
                          setSelectedProjekAktiviti={setSelectedProjekAktiviti}
                          aktivitiOptions={aktivitiOptions}
                          keteranganAktivitiOptions={keteranganAktivitiOptions}
                          projekAktivitiOptions={projekAktivitiOptions}
                          dimensiOptions={dimensiOptions}
                        />

                        <Button
                          className="delete-btn"
                          onClick={() =>
                            deleteAktivitiSahabat(aktivitisData.id)
                          }
                        >
                          Padam
                        </Button>
                      </td>
                    ) : null}
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default IndexAktiviti;
