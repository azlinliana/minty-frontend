import React, { useState, useEffect, useCallback } from "react";
import CreateAktiviti from "./Create";
import EditAktiviti from "./Edit";
import ErrorAlert from "../../../components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../../components/sweet-alert/DeletionAlert";
import { Button, Table } from "react-bootstrap";
import axiosCustom from "../../../../axios";
import Swal from "sweetalert2";
import "../../../../assets/styles/styles_sahabat.css";

function IndexAktiviti({ sahabatId, pembiayaanId }) {
  // ----------BE----------
  // List aktiviti
  const [aktivitis, setAktivitis] = useState([]);

  const fetchAktivitis = useCallback(async () => {
    try {
      const response = await axiosCustom.get(
        `/sahabat/${sahabatId}/pembiayaan/${pembiayaanId}/aktiviti`
      );

      if (response.status === 200) {
        setAktivitis(response.data);
      } else {
        console.log(response);
        ErrorAlert(response); // Error from the backend or unknow error from the server side
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
  }, [sahabatId, pembiayaanId, setAktivitis]);

  useEffect(() => {
    fetchAktivitis();
  }, [fetchAktivitis]);

  // Fetch kegiatan, keterangan kegiatan, and projek kegiatan

  const [kegiatanOptions, setKegiatanOptions] = useState([]);
  const [keteranganKegiatanOptions, setKeteranganKegiatanOptions] = useState([]);
  const [projekKegiatanOptions, setProjekKegiatanOptions] = useState([]);

  // Fetch kegiatan
  const fetchKegiatans = useCallback(async () => {
    try {
      const response = await axiosCustom.get(
        `/selenggara/kegiatan/display-kegiatan`
      );

      if (Array.isArray(response.data)) {
        setKegiatanOptions(
          response.data.map((kegiatan) => ({
            value: kegiatan.id,
            label: kegiatan.jenisKegiatan,
          }))
        );

        // fetchKegiatans();
      } else {
        ErrorAlert(response.data);
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
  }, [setKegiatanOptions]);

  useEffect(() => {
    fetchKegiatans();
  }, [fetchKegiatans]);

  // Fetch keterangan kegiatan
  const fetchKeteranganKegiatans = useCallback(async () => {
    try {
      const response = await axiosCustom.get(
        `/selenggara/keterangan-kegiatan/display-keterangan-kegiatan`
      );

      if (Array.isArray(response.data)) {
        setKeteranganKegiatanOptions(
          response.data.map((keteranganKegiatan) => ({
            value: keteranganKegiatan.id,
            label: keteranganKegiatan.jenisKeteranganKegiatan,
            kegiatanId: keteranganKegiatan.kegiatanId,
          }))
        );
      } else {
        ErrorAlert(response.data);
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
  }, [setKeteranganKegiatanOptions]);

  useEffect(() => {
    fetchKeteranganKegiatans();
  }, [fetchKeteranganKegiatans]);

  // Fetch projek kegiatan
  const fetchProjekKegiatans = useCallback(async () => {
    try {
      const response = await axiosCustom.get(
        `/selenggara/projek-kegiatan/display-projek-kegiatan`
      );

      if (Array.isArray(response.data)) {
        setProjekKegiatanOptions(
          response.data.map((projekKegiatan) => ({
            value: projekKegiatan.id,
            label: projekKegiatan.jenisProjekKegiatan,
            kegiatanId: projekKegiatan.kegiatanId,
            keteranganKegiatanId: projekKegiatan.keteranganKegiatanId,
          }))
        );
      } else {
        ErrorAlert(response.data);
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
  }, [setProjekKegiatanOptions]);

  useEffect(() => {
    fetchProjekKegiatans();
  }, [fetchProjekKegiatans]);

  // Fetch kod dimensi
  const [kodDimensisData, setKodDimensisData] = useState([]);

  const fetchKodDimensi = useCallback(async () => {
    try {
      const response = await axiosCustom.get(`/selenggara/dimensi/display-dimensi`);
      
      if (Array.isArray(response.data)) {
        setKodDimensisData(response.data); // Display all kod inflow data
      } else {
        ErrorAlert(response.data);
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
  }, [setKodDimensisData]);

  useEffect(() => {
    fetchKodDimensi();
  }, [fetchKodDimensi]);

  // Delete aktiviti
  const deleteAktiviti = async (aktivitiId) => {
    // Function to delete aktiviti
    const performDeletion = async () => {
      try {
        const response = await axiosCustom.delete(
          `/sahabat/aktiviti/${aktivitiId}`
        );

        if (response.status === 200) {
          setAktivitis((prevAktiviti) =>
            prevAktiviti.filter((aktiviti) => aktiviti.id !== aktivitiId)
          );
          // Show success message from the server
          Swal.fire("Dipadam!", response.data.message, "success");
        }
      } catch (error) {
        console.error("Ralat dalam memadam aktiviti sahabat", error);
      }
    };

    // Function to handle cancellation
    const cancelDeletion = () => {
      Swal.fire("Dibatalkan", "Data anda selamat.", "error");
    };

    // Display the deletion confirmation dialog
    DeletionAlert(performDeletion, cancelDeletion);
  };

  return (
    <>
      <div className="inputStepsContainer">
        <h2>Maklumat Aktiviti Sahabat</h2>

        <div className="tableSection">
          <div className="tambahBtnPlacement">
            <CreateAktiviti
              sahabatId={sahabatId}
              pembiayaanId={pembiayaanId}
              kegiatanOptions={kegiatanOptions}
              keteranganKegiatanOptions={keteranganKegiatanOptions}
              projekKegiatanOptions={projekKegiatanOptions}
              kodDimensisData={kodDimensisData}
            />
          </div>

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
                <th>Jumlah Pinjaman</th>
                <th>Tindakan</th>
              </tr>
            </thead>

            <tbody>
              {aktivitis.length === 0 ? (
                <tr>
                  <td colSpan="9">
                    <center>
                      Tiada maklumat aktiviti untuk sahabat ini. Sila klik
                      butang "Tambah" untuk merekodkan aktiviti baharu.
                    </center>
                  </td>
                </tr>
              ) : (
                aktivitis.map((aktivitisData, key) => (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{aktivitisData.kegiatan.jenisKegiatan}</td>
                    <td>
                      {
                        aktivitisData.keterangan_kegiatan
                          .jenisKeteranganKegiatan
                      }
                    </td>
                    <td>{aktivitisData.projek_kegiatan.jenisProjekKegiatan}</td>
                    <td>{aktivitisData.dimensi.kodDimensi}</td>
                    <td>{aktivitisData.pengurusDanaAktiviti}</td>
                    <td>{aktivitisData.keteranganLainAktiviti || "-"}</td>
                    <td>{aktivitisData.jumlahPinjamanAktiviti}</td>
                    <td>
                      <EditAktiviti
                        sahabatId={sahabatId}
                        pembiayaanId={pembiayaanId}
                        aktivitiId={aktivitisData.id}
                        aktiviti={aktivitisData}
                        kegiatanOptions={kegiatanOptions}
                        keteranganKegiatanOptions={keteranganKegiatanOptions}
                        projekKegiatanOptions={projekKegiatanOptions}
                        kodDimensisData={kodDimensisData}
                      />
                      <Button
                        className="delBtn"
                        onClick={() => deleteAktiviti(aktivitisData.id)}
                      >
                        Padam
                      </Button>
                    </td>
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
