import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import CreateAktiviti from './Create';
import EditAktiviti from './Edit';
import DeletionAlert from "../../components/sweet-alert/DeletionAlert";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from 'axios';
import Swal from 'sweetalert2';

function IndexAktiviti() {
  return(
    <div>
      <h2>Maklumat Aktiviti Sahabat</h2>
      
      <div className="tableSection">
        <div className="tambahBtnPlacement"><CreateAktiviti /></div>

        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Aktiviti</th>
              <th>Keterangan Aktiviti</th>
              <th>Projek</th>
              <th>Dimensi</th>
              <th>Skim</th>
              <th>Pengurus Dana</th>
              <th>Jumlah Pinjaman</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <EditAktiviti />
                <Button variant="danger">Padam</Button>{' '}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default IndexAktiviti;