import React, {useState, useEffect} from 'react';
import ErrorAlert from '../../../components/sweet-alert/ErrorAlert';
import {Table} from "react-bootstrap";
import axios from "axios";

function MaklumatKegiatanModal({sahabatId, pembiayaanSahabatId}) {
  // ------------ BE --------------
  // Get maklumat kegiatan modal
  const [maklumatKegiatanModal, setMaklumatKegiatanModal] = useState([]);
  const getMaklumatKegiatanModal = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/laporan/profil-sahabat/maklumat-kegiatan-modal/${sahabatId}/${pembiayaanSahabatId}`);
      if (response.status === 200) {
        setMaklumatKegiatanModal(response.data);
      } else {
        ErrorAlert(response); // Error from the backend or unknown error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  useEffect(() => {
    getMaklumatKegiatanModal();
  });

  return (
    <div>
      <div className="tableSection">
        <div className="sectionHeader"><h1>Bahagian B: Maklumat Kegiatan Modal</h1></div>

        <Table responsive striped bordered className="laporanTable">
          <thead>
            <tr>
              <th>Modal Pembiayaan AIM (RM)</th>
              <th>Pendapatan daripada Modal (RM)</th>
              <th>Pulangan Per RM (RM)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{maklumatKegiatanModal.modalPembiayaanAIM}</td>
              <td>{maklumatKegiatanModal.pendapatanDaripadaModal}</td>
              <td>{maklumatKegiatanModal.pulanganPerRM}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default MaklumatKegiatanModal;
