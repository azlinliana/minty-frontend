import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CreateTrackingInflowSahabat from "./Create";
import EditTrackingInflowSahabat from "./Edit";
import DeletionAlert from "../../../../components/sweet-alert/DeletionAlert";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Swal from "sweetalert2";
import axios from "axios";

function IndexTrackingInflowSahabat() {
  // ----------FE----------

  // ----------BE----------

  return (
    <div className="tableSection">
      <div className="tambahBtnPlacement">
        <CreateTrackingInflowSahabat />
      </div>

      <Table responsive>
        <thead>
          <tr>
            <th>Bil.</th>
            <th rowSpan={2} className="rowCategory">
              Kod Inflow
            </th>
            <th>Keterangan Inflow</th>
            <th>Amaun (RM)</th>
            <th>Tindakan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>A1</td>
            <div className="multipleRows">
              <tr>
                <td>1</td>
              </tr>
              <tr>
                <td>2</td>
              </tr>
            </div>
            <td></td>
            <td>
              <EditTrackingInflowSahabat />
              <Button className="delBtn" variant="danger">
                Padam
              </Button>{" "}
            </td>
          </tr>
          {/* Bil 2 */}
          <tr>
            <td>1</td>
            <td>A1</td>
            <div className="multipleRows">
              <tr>
                <td>1</td>
              </tr>
              <tr>
                <td>2</td>
              </tr>
            </div>
            <td></td>
            <td>
              <EditTrackingInflowSahabat />
              <Button className="delBtn" variant="danger">
                Padam
              </Button>{" "}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default IndexTrackingInflowSahabat;
