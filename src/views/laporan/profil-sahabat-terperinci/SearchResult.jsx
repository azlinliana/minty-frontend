import React from "react";
import {useNavigate} from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";

function SearchResultPembiayaanTerperinciSahabat({resultSahabat, sahabatId, pembiayaanSahabats, selectedSkimPembiayaan}) {
  // ----------FE----------
  // Navigate to profil sahabat terperinci along with sahabat and pembiayaan data
  const navigate = useNavigate();
  const clickLihatPembiayaan = (pembiayaanSahabatId) => {
    navigate('/profil-sahabat-terperinci', {state: {resultSahabat, sahabatId, pembiayaanSahabatId}});
  };

  // ------------ BE --------------
  // Filter pembiayaanSahabats based on selectedSkimPembiayaan
  const filteredPembiayaanSahabats = pembiayaanSahabats.filter(
    (pembiayaan) => pembiayaan.skimPembiayaan === selectedSkimPembiayaan
  );

  return (
    <div>
      <div className="hasilCarianPembiayaan ">
        <div className="hasilCarianSahabatTitle">
          <h3>Hasil Carian: Pembiayaan {selectedSkimPembiayaan}</h3>
          <hr />
        </div>

        <div className="searchResultContainer">
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
              {filteredPembiayaanSahabats.map((pembiayaanSahabatsData, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{pembiayaanSahabatsData.statusPembiayaan}</td>
                  <td>{pembiayaanSahabatsData.skimPembiayaan}</td>
                  <td><time dateTime={pembiayaanSahabatsData.created_at}>{new Date(pembiayaanSahabatsData.created_at).toLocaleDateString('en-GB')}</time></td>
                  <td><time dateTime={pembiayaanSahabatsData.updated_at}>{new Date(pembiayaanSahabatsData.updated_at).toLocaleDateString('en-GB')}</time></td>
                  <td><Button className='viewBtn' onClick={() => clickLihatPembiayaan(pembiayaanSahabatsData.id)}>Lihat</Button></td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default SearchResultPembiayaanTerperinciSahabat;
