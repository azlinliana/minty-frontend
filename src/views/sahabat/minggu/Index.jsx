import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CreateMinggu from "./Create";
import EditMinggu from "./Edit";
import DeletionAlert from "../../components/sweet-alert/DeletionAlert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import Swal from "sweetalert2";

function IndexMinggu() {
  // ----------FE----------
  // Link pages
  const navigate = useNavigate();
  const clickLihat = () => navigate("/tracking-inflow-outflow");

  // ----------BE----------

  return (
    <div>
      <div className="tableSection">
        <div className="tambahBtnPlacement">
          <CreateMinggu />
        </div>

        <Alert variant="danger">
          Sila tambah maklumat untuk minggu 5. Klik butang "Lihat" bagi minggu
          berkenaan.
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
