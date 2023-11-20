import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CreateMinggu from "./Create";
import ErrorAlert from '../../components/sweet-alert/ErrorAlert';
import DeletionAlert from "../../components/sweet-alert/DeletionAlert";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

function IndexMinggu({sahabatId, pembiayaanId}) {
  // ----------FE----------
  // Navigate to tracking pages along with sahabat, pembiayaan and minggu data
  const navigate = useNavigate();
  const clickKemasKiniMinggu = (mingguId) => {
    navigate('/tracking-inflow-outflow', {state: {sahabatId, pembiayaanId, mingguId}});
  };

  // ----------BE----------

  return(
    <div>
      <div className="tableSection">
        <div className="tambahBtnPlacement"><CreateMinggu sahabatId={sahabatId} pembiayaanId={pembiayaanId} /></div>

        {mingguPembiayaanSahabats.some(
          (minggu) =>
            minggu.totalInflow === 'Tiada maklumat' || minggu.totalOutflow === 'Tiada maklumat') 
            && (
              <Alert variant="danger">
                Sila tambah maklumat untuk minggu{' '}
                {mingguPembiayaanSahabats
                  .filter(
                    (minggu) =>
                      minggu.totalInflow === 'Tiada maklumat' || minggu.totalOutflow === 'Tiada maklumat'
                  )
                  .map((minggu) => minggu.bilanganMinggu)
                  .sort((a, b) => a - b) // Add this line for sorting in ascending order
                  .join(', ')}
                . Klik butang "Kemas Kini" bagi minggu berkenaan.
              </Alert>
            )
        } 

        <Alert variant="danger">
          Sila tambah maklumat untuk{" "}
          <span className="trackingMinggu">minggu 5</span>. Klik butang "Kemas
          Kini" bagi minggu berkenaan.
        </Alert>

        <Table responsive>
          <thead>
            <tr>
              <th>Minggu</th>
              <th>Jumlah Inflow (RM)</th>
              <th>Jumlah Outflow (RM)</th>
              <th>Tarikh Tracking</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            {mingguPembiayaanSahabats.length === 0 ? (
              <tr><td colSpan="5"><center>Tiada maklumat minggu tracking. Sila klik butang "Tambah Minggu" untuk merekodkan minggu baharu.</center></td></tr>
            ) : (
              mingguPembiayaanSahabats.map((mingguPembiayaanSahabatsData, key) => (
                <tr key={key}>
                  <td>{mingguPembiayaanSahabatsData.bilanganMinggu}</td>
                  <td>{mingguPembiayaanSahabatsData.totalInflow}</td>
                  <td>{mingguPembiayaanSahabatsData.totalOutflow}</td>
                  <td>{new Date(mingguPembiayaanSahabatsData.tarikhBorangMinggu).toLocaleDateString('en-GB')}</td>
                  <td>
                    <Button variant="warning" onClick={() => clickKemasKiniMinggu(mingguPembiayaanSahabatsData.id)}>Kemas Kini</Button>{" "}
                    <Button variant="danger">Padam</Button>{" "}
                  </td>
                </tr>
              ))              
            )}
            {/* {mingguPembiayaanSahabats.length > 0 ? ( */}
            {/* // When there is data */}
            {/* mingguPembiayaanSahabats.map((mingguPembiayaanSahabatsData, key) => ( */}
            <tr className="warningRow">
              <td>{/* {mingguPembiayaanSahabatsData.bilanganMinggu} */}</td>
              <td>Tiada maklumat</td>
              <td>Tiada maklumat</td>
              <td>Tiada maklumat</td>
              <td>
                <Button className="editBtn" onClick={clickLihat}>
                  Kemas Kini
                </Button>{" "}
                <Button className="delBtn">Padam</Button>{" "}
              </td>
            </tr>
            <tr className="completeRow">
              <td>{/* {mingguPembiayaanSahabatsData.bilanganMinggu} */}</td>
              <td>Tiada maklumat</td>
              <td>Tiada maklumat</td>
              <td>Tiada maklumat</td>
              <td>
                <Button className="editBtn" onClick={clickLihat}>
                  Kemas Kini
                </Button>{" "}
                <Button className="delBtn">Padam</Button>{" "}
              </td>
            </tr>
            {/* )) */}
            {/* ) : ( */}
            {/* // If no minggu for pembiayaan sahabat */}
            <tr>
              <td colSpan="5">
                <center>
                  Tiada maklumat tracking. Sila klik butang "Tambah Minggu"
                  untuk merekodkan minggu baharu.
                </center>
              </td>
            </tr>
            {/* )} */}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default IndexMinggu;
