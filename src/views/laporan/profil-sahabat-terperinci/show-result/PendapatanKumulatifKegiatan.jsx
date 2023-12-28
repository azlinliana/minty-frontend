import React, {useState, useEffect} from 'react';
import ErrorAlert from '../../../components/sweet-alert/ErrorAlert';
import {Table} from "react-bootstrap";
import axios from 'axios';

function PendapatanKumulatifKegiatan({maklumatPendapatanKumulatifKegiatanData}) {
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
            {maklumatPendapatanKumulatifKegiatanData?.sahabat && maklumatPendapatanKumulatifKegiatanData.sahabat.map((sahabatData, sahabatIndex) => (
              <tr key={sahabatIndex}>
                <td>{sahabatIndex + 1}</td>
                <td>{sahabatData.namaSahabat}</td>
                <td>{sahabatData.kodInflow}</td>
                <td>{sahabatData.cumulativeTotalInflow}</td>
                <td>{sahabatData.pengusaha}</td>
                <td>{sahabatData.kegiatan}</td>
              </tr>
            ))}

            {/* Isi Rumah */}
            {maklumatPendapatanKumulatifKegiatanData?.isiRumah && maklumatPendapatanKumulatifKegiatanData.isiRumah.map((isiRumahData, isiRumahIndex) => (
              <tr key={isiRumahIndex}>
                <td>{maklumatPendapatanKumulatifKegiatanData.sahabat.length + isiRumahIndex + 1}</td>
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
