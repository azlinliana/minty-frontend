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
      const response = await axios.get(`http://127.0.0.1:8000/api/laporan/profil-sahabat-terperinci/maklumat-asas/${sahabatId}/${pembiayaanSahabatId}`);
      if (response.status === 200) {
        setMaklumatAsas(response.data);
      } 
      else {
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
              <th>1.</th>
              <th>Perkara</th>
              <td>: {maklumatAsas.aktiviti?.dimensi.kodDimensi} - JULAT TO BE DEFINED</td>
            </tr>
            <tr>
              <th>2.</th>
              <th>No IC</th>
              <td>: {maklumatAsas.sahabat?.noKadPengenalanSahabat}</td>
            </tr>
            <tr>
              <th>3.</th>
              <th>Nama Sahabat</th>
              <td>: {maklumatAsas.sahabat?.namaSahabat}</td>
            </tr>
            <tr>
              <th>4.</th>
              <th>Nama Suami</th>
              <td>: {maklumatAsas.suamiSahabat ?? '-'}</td>
            </tr>
            <tr>
              <th>5.</th>
              <th>Cawangan</th>
              <td>: {maklumatAsas.sahabat?.cawanganSahabat}</td>
            </tr>
            <tr>
              <th>6.</th>
              <th>Blok</th>
              <td>: </td>
            </tr>
            <tr>
              <th>7.</th>
              <th>Pusat</th>
              <td>: {maklumatAsas.sahabat?.pusatSahabat}</td>
            </tr>
            <tr>
              <th>8.</th>
              <th>Nama PC Cawangan</th>
              <td>: </td>
            </tr>
            <tr>
              <th>9.</th>
              <th>Nama PA Pusat</th>
              <td>: </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default MaklumatAsas;
