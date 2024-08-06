import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Table } from "react-bootstrap";

function SearchResultPembiayaanSahabat({
  sahabatData,
  sahabatId,
  pembiayaanSahabats,
  selectedSkimPembiayaan,
}) {
  // ______________________________ Hook Declaration ______________________________
  const navigate = useNavigate();

  // _____________________________ Frontend & Backend _____________________________
  // Navigate to profil sahabat along with sahabat and pembiayaan data
  const clickLihatPembiayaan = (pembiayaanSahabatId) => {
    navigate("/profil-sahabat/", {
      state: { sahabatData, sahabatId, pembiayaanSahabatId },
    });
  };

  // ___________________________________ Backend __________________________________
  // Filter pembiayaanSahabats based on selectedSkimPembiayaan
  const filteredPembiayaanSahabats = pembiayaanSahabats.filter(
    (pembiayaan) => pembiayaan.namaSkimPembiayaan  === selectedSkimPembiayaan
  );

  return (
    <>
      <div>
        <div>
          <h3>Hasil Carian: Pembiayaan {selectedSkimPembiayaan}</h3>
          <hr />
        </div>

        <div>
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
              {filteredPembiayaanSahabats.map(
                (pembiayaanSahabatsData, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{pembiayaanSahabatsData.statusPembiayaan}</td>
                    <td>{pembiayaanSahabatsData.namaSkimPembiayaan}</td>
                    <td>
                      <time dateTime={pembiayaanSahabatsData.tarikhMula}>
                        {new Date(
                          pembiayaanSahabatsData.tarikhMula
                        ).toLocaleDateString("en-GB")}
                      </time>
                    </td>
                    <td>
                      <time dateTime={pembiayaanSahabatsData.tarikhTamat}>
                        {new Date(
                          pembiayaanSahabatsData.tarikhTamat
                        ).toLocaleDateString("en-GB")}
                      </time>
                    </td>
                    <td>
                      <Button
                        className="view-skim-pembiayaan-sahabat-btn"
                        onClick={() =>
                          clickLihatPembiayaan(pembiayaanSahabatsData.id)
                        }
                      >
                        Lihat
                      </Button>
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default SearchResultPembiayaanSahabat;
