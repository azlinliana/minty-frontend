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
            <th>Kod Inflow</th>
            <th>Keterangan Inflow</th>
            <th>Amaun (RM)</th>
            <th>Tindakan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>A1</td>
            <td>1</td>
            <td>RM</td>
            <td>
              <EditTrackingInflowSahabat />
              <Button className="delBtn" variant="danger">
                Padam
              </Button>{" "}
            </td>
          </tr>
          {/* Nested row for "Phone" */}
          <tr>
            <td rowspan="2">2</td>
            <td rowspan="2">A2</td>
            <td>555-1234</td>
            <td rowspan="2">RM</td>
            <td rowspan="2">
              <EditTrackingInflowSahabat />
              <Button className="delBtn" variant="danger">
                Padam
              </Button>{" "}
            </td>
          </tr>
          {/* Another nested row for "Phone" */}
          <tr>
            <td>555-8745</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default IndexTrackingInflowSahabat;
