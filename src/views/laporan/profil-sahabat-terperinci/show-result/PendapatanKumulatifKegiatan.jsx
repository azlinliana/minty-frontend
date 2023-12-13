import React, {useState, useEffect} from 'react';
import ErrorAlert from '../../../components/sweet-alert/ErrorAlert';
import {Table} from "react-bootstrap";
import axios from 'axios';

function PendapatanKumulatifKegiatan({sahabatId, pembiayaanSahabatId}) {
  // Fetch maklumat pendapatan kumulatif kegiatan sahabat
  const [maklumatPendapatanKumulatifKegiatanSahabats, setMaklumatPendapatanKumulatifKegiatanSahabats] = useState([]);
  const fetchMaklumatPendapatanKumulatifKegiatanSahabats = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/laporan/profil-sahabat-terperinci/maklumat-pendapatan-kumulatif-kegiatan-sahabat/${sahabatId}/${pembiayaanSahabatId}`);
      if (response.status === 200) {
        setMaklumatPendapatanKumulatifKegiatanSahabats(response.data.sahabat || []);
      }
      else {
        ErrorAlert(response); // Error from the backend or unknown error from the server side
      }
    } 
    catch (error) {
      ErrorAlert(error);
    }
  };
  
  useEffect(() => {
    fetchMaklumatPendapatanKumulatifKegiatanSahabats();
  }, [sahabatId, pembiayaanSahabatId]);

  // Fetch maklumat pendapatan kumulatif kegiatan isi rumah
  const [maklumatPendapatanKumulatifKegiatanIsiRumahs, setMaklumatPendapatanKumulatifKegiatanIsiRumahs] = useState([]);
  const fetchMaklumatPendapatanKumulatifKegiatanIsiRumahs = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/laporan/profil-sahabat-terperinci/maklumat-pendapatan-kumulatif-kegiatan-isi-rumah/${sahabatId}/${pembiayaanSahabatId}`);
      if (response.status === 200) {
        setMaklumatPendapatanKumulatifKegiatanIsiRumahs(response.data.isiRumah || []);
      }
      else {
        ErrorAlert(response); // Error from the backend or unknown error from the server side
      }
    } 
    catch (error) {
      ErrorAlert(error);
    }
  };
  
  useEffect(() => {
    fetchMaklumatPendapatanKumulatifKegiatanIsiRumahs();
  }, [sahabatId, pembiayaanSahabatId]);

  return(
    <div>
      <div className="tableSection">
        <div className="sectionHeader"><h1>Bahagian C: Maklumat Pendapatan (Kumulatif) dan Kegiatan</h1></div>

        <Table responsive striped bordered className="laporanTable">
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Nama</th>
              <th>Kod</th>
              <th>Inflows</th>
              <th>Pengusaha</th>
              <th>Kegiatan</th>
            </tr>
          </thead>
          <tbody>
            {/* Sahabat */}
            {maklumatPendapatanKumulatifKegiatanSahabats.map((maklumatPendapatanKumulatifKegiatanSahabatsData, sahabatIndex) => (
              <tr key={sahabatIndex}>
                <td>{sahabatIndex + 1}</td>
                <td>{maklumatPendapatanKumulatifKegiatanSahabatsData.namaSahabat}</td>
                <td>{maklumatPendapatanKumulatifKegiatanSahabatsData.kodInflow}</td>
                <td>{maklumatPendapatanKumulatifKegiatanSahabatsData.cumulativeTotalInflow}</td>
                <td>{maklumatPendapatanKumulatifKegiatanSahabatsData.pengusaha}</td>
                <td>{maklumatPendapatanKumulatifKegiatanSahabatsData.kegiatan}</td>
              </tr>
            ))}

            {/* Isi Rumah */}
            {maklumatPendapatanKumulatifKegiatanIsiRumahs.map((isiRumahData, isiRumahIndex) => (
              <tr key={isiRumahIndex}>
                <td>{maklumatPendapatanKumulatifKegiatanSahabats.length + isiRumahIndex + 1}</td>
                <td>{isiRumahData[0].namaIsiRumah}</td>
                <td>{isiRumahData[0].kodInflow}</td>
                <td>{isiRumahData[0].cumulativeTotalInflow}</td>
                <td>{isiRumahData[0].pengusaha}</td>
                <td>{isiRumahData[0].kegiatan}</td>
              </tr>
            ))}
          </tbody>
        </Table>

        <p>**Kod yang terlibat hanya A1 hingga A6 sahaja</p>
      </div>
    </div>
  );
}

export default PendapatanKumulatifKegiatan;
