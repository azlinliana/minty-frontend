import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CreateTrackingOutflowIsiRumah from "./Create";
import EditTrackingOutflowIsiRumah from "./Edit";
import DeletionAlert from "../../../../components/sweet-alert/DeletionAlert";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from "axios";
import Swal from "sweetalert2";

function IndexTrackingOutflowIsiRumah() {
  return (
    <div className="tableSection">
      <div className="tambahBtnPlacement">
        <CreateTrackingOutflowIsiRumah />
      </div>

      <Table responsive>
        <thead>
          <tr>
            <th>Bil.</th>
            <th>Kod Outflow</th>
            <th>Keterangan Outflow</th>
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
              <EditTrackingOutflowIsiRumah />
              <Button className="delBtn">Padam</Button>{" "}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default IndexTrackingOutflowIsiRumah;
