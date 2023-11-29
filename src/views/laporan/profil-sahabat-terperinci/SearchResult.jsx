import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';

function SearchResultPembiayaanTerperinciSahabat() {
    // ------------ FE ---------------
    // Link pages
    const navigate = useNavigate();
    const clickLihat = () => navigate("/profil-sahabat-terperinci");

  return (
    <>
        <div className='hasilCarianPembiayaan'>
            <div className='hasilCarianSahabatTitle'>
                <h3>Hasil Carian: Pembiayaan i-Sejahtera</h3>
                <hr />
            </div>

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
                        <tr>
                            <td>1</td>
                            <td>Aktif</td>
                            <td>i-Sejahtera</td>
                            <td>28/11/2023</td>
                            <td>Tiada maklumat</td>
                            <td>
                                <Button className='viewBtn' onClick={clickLihat}>Lihat</Button>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Tamat</td>
                            <td>i-Sejahtera</td>
                            <td>27/11/2023</td>
                            <td>28/11/2023</td>
                            <td>
                        <Button className='viewBtn' onClick={clickLihat}>Lihat</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>

        </div>
    </>
  )
}

export default SearchResultPembiayaanTerperinciSahabat;
