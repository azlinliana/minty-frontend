import React from 'react'
import {useNavigate} from 'react-router-dom';
import {Table, Button} from 'react-bootstrap';

function SearchResultPembiayaanSahabat({pembiayaanSahabats, selectedSkimPembiayaan}) {
  // ------------ FE --------------
  // Link pages
  const navigate = useNavigate();
  const clickLihat = () => navigate("/profil-sahabat");

  // ------------ BE --------------
  // Filter pembiayaanSahabats based on selectedSkimPembiayaan
  const filteredPembiayaanSahabats = pembiayaanSahabats.filter(
    (pembiayaan) => pembiayaan.skimPembiayaan === selectedSkimPembiayaan
  );

  return (
    <div>
      <div className='hasilCarianSahabatTitle'><h3>Hasil Carian: Pembiayaan {selectedSkimPembiayaan}</h3></div>

      <div className='searchResultContainer'>
        <Table responsive striped bordered>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Status</th>
              <th>Jenis Pembiayaan</th>
              <th>Tarikh Mula</th>
              <th>Tarikh Tamat</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            {filteredPembiayaanSahabats.map((pembiayaan, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{pembiayaan.statusPembiayaan}</td>
                <td>{pembiayaan.skimPembiayaan}</td>
                <td><time dateTime={pembiayaan.created_at}>{new Date(pembiayaan.created_at).toLocaleDateString('en-GB')}</time></td>
                <td><time dateTime={pembiayaan.updated_at}>{new Date(pembiayaan.updated_at).toLocaleDateString('en-GB')}</time></td>
                <td><Button className='viewBtn' onClick={clickLihat}>Lihat</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default SearchResultPembiayaanSahabat;
