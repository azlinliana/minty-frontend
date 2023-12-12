import React, {useState, useEffect} from 'react';
import Table from "react-bootstrap/Table";
import ErrorAlert from '../../../components/sweet-alert/ErrorAlert';
import axios from 'axios';

function MaklumatAsas({sahabatId, pembiayaanSahabatId}) {
  // ------------ BE --------------
  // Fetch maklumat asas
  const [maklumatAsas, setMaklumatAsas] = useState([]);
  const getMaklumatAsas = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/laporan/profil-sahabat/maklumat-asas/${sahabatId}/${pembiayaanSahabatId}`);
      if (response.status === 200) {
        setMaklumatAsas(response.data);
      } else {
        ErrorAlert(response); // Error from the backend or unknown error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  useEffect(() => {
    getMaklumatAsas();
  });

  return (
    <div>
      <div className="tableSection">
        <div className="sectionHeader"><h1>Bahagian A: Maklumat Asas</h1></div>

        <Table responsive striped bordered className="laporanTable">
          <tbody>
            <tr>
              <th>Perkara</th>
              <td>: {maklumatAsas.aktiviti?.dimensi.kodDimensi} - JULAT TO BE DEFINED</td>
            </tr>

            <tr>
              <th>No IC</th>
              <td>: {maklumatAsas.sahabat?.noKadPengenalanSahabat}</td>
            </tr>

            <tr>
              <th>Nama Sahabat</th>
              <td>: {maklumatAsas.sahabat?.namaSahabat}</td>
            </tr>

            <tr>
              <th>Nama Suami</th>
              <td>: {maklumatAsas.suamiSahabat ?? '-'}</td>
            </tr>

            <tr>
              <th>Cawangan</th>
              <td>: {maklumatAsas.sahabat?.cawanganSahabat}</td>
            </tr>

            <tr>
              <th>Pusat</th>
              <td>: {maklumatAsas.sahabat?.pusatSahabat}</td>
            </tr>

            <tr>
              <th>Dimensi</th>
              <td>: {maklumatAsas.aktiviti?.dimensi.kodDimensi}</td>
            </tr>

            <tr>
              <th>Kumulatif PJM</th>
              <td>: {maklumatAsas.kumulatifPJM}</td>
            </tr>

            <tr>
              <th>Pengurusan Dana</th>
              <td>: {maklumatAsas.aktiviti?.pengurusDanaAktiviti}</td>
            </tr>

            <tr>
              <th>Projek</th>
              <td>: {maklumatAsas.aktiviti?.projekAktivitiId}</td>
            </tr>
            
            <tr>
              <th>Loan Cycle</th>
              <td>: {maklumatAsas.loanCycle}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default MaklumatAsas;
