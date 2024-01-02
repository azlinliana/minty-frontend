import React, { useState, useEffect } from "react";
import "../../sahabat.css";
import CreateAktiviti from "./Create";
import EditAktiviti from "./Edit";
import ErrorAlert from "../../../components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../../components/sweet-alert/DeletionAlert";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Swal from "sweetalert2";

function IndexAktiviti({ sahabatId, pembiayaanId }) {
  // ----------BE----------
  // List aktiviti
  const [aktivitis, setAktivitis] = useState([]);
  const fetchAktivitis = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/sahabat/${sahabatId}/pembiayaan/${pembiayaanId}/aktiviti`);
      if (response.status === 200) {
        setAktivitis(response.data);
        handleAktivitisLength(response.data.length);
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  useEffect(() => {
    fetchAktivitis();
  }, []);

  // Delete aktiviti
  const deleteAktiviti = async (aktivitiId) => {
    // Function to delete aktiviti
    const performDeletion = async () => {
      try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/sahabat/aktiviti/${aktivitiId}`);
        if (response.status === 200) {
          setAktivitis((prevAktiviti) =>
            prevAktiviti.filter((aktiviti) => aktiviti.id !== aktivitiId)
          );
          // Show success message from the server
          Swal.fire('Dipadam!', response.data.message, 'success');
        }
      } 
      catch (error) {
        console.error('Ralat dalam memadam aktiviti sahabat', error);
      }
    };

    // Function to handle cancellation
    const cancelDeletion = () => {
      Swal.fire('Dibatalkan', 'Data anda selamat.', 'error');
    };

    // Display the deletion confirmation dialog
    DeletionAlert(performDeletion, cancelDeletion);
  };

  return (
    <>
      <div className="inputStepsContainer">
        <h2>Maklumat Aktiviti Sahabat</h2>

        <div className="tableSection">
          <div className="tambahBtnPlacement"><CreateAktiviti sahabatId={sahabatId} pembiayaanId={pembiayaanId} /></div>

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
                <tr><td colSpan="9"><center>Tiada maklumat aktiviti untuk sahabat ini. Sila klik butang "Tambah" untuk merekodkan aktiviti baharu.</center></td></tr>
              ) : (
                aktivitis.map((aktivitisData, key) => (
                  <tr key={key}>
                    <td>{key + 1}</td>
                    <td>{aktivitisData.kegiatan.jenisKegiatan}</td>
                    <td>{aktivitisData.keterangan_kegiatan.jenisKeteranganKegiatan}</td>
                    <td>{aktivitisData.projek_kegiatan.jenisProjekKegiatan}</td>
                    <td>{aktivitisData.dimensi.kodDimensi}</td>
                    <td>{aktivitisData.pengurusDanaAktiviti}</td>
                    <td>{aktivitisData.keteranganLainAktiviti || '-'}</td>
                    <td>{aktivitisData.jumlahPinjamanAktiviti}</td>
                    <td>
                      <EditAktiviti sahabatId={sahabatId} pembiayaanId={pembiayaanId} aktivitiId={aktivitisData.id} aktiviti={aktivitisData} />
                      <Button className="delBtn" onClick={() =>deleteAktiviti(aktivitisData.id)}>Padam</Button>
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
