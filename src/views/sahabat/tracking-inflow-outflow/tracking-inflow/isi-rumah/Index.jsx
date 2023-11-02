import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import CreateTrackingInflowIsiRumah from './Create';
import EditTrackingInflowIsiRumah from './Edit';
import DeletionAlert from '../../../../components/sweet-alert/DeletionAlert';
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from 'axios';
import Swal from 'sweetalert2';

function IndexTrackingInflowIsiRumah() {
  return(
    <div className="tableSection">
      <div className="tambahBtnPlacement"><CreateTrackingInflowIsiRumah /></div>

      <Table responsive>
        <thead>
          <tr>
            <th>Bil.</th>
            <th>Kod Inflow</th>
            <th>Keterangan Inflow</th>
            <th>Amaun (RM)</th>
            <th>Tindakan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <EditTrackingInflowIsiRumah />
              <Button variant="danger">Padam</Button>{' '}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default IndexTrackingInflowIsiRumah;