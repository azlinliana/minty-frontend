import React from "react";
import Table from "react-bootstrap/Table";

function MaklumatAsas({ maklumatAsasData }) {
  return (
    <>
      <div className="laporan-table-container">
        <div className="laporan-table-header">
          <h1>Section A: Basic Information</h1>
        </div>

        <Table responsive striped bordered className="laporan-table-styling">
          <tbody>
            <tr>
              <th>1.</th>
              <th>Item</th>
              <td>
                : {maklumatAsasData?.aktiviti?.dimensi?.kodDimensi || "-"} -
                Mid Range
              </td>
            </tr>
            <tr>
              <th>2.</th>
              <th>IC</th>
              <td>
                : {maklumatAsasData?.sahabat?.noKadPengenalanSahabat || "-"}
              </td>
            </tr>
            <tr>
              <th>3.</th>
              <th>Customer Name</th>
              <td>: {maklumatAsasData?.sahabat?.namaSahabat || "-"}</td>
            </tr>
            <tr>
              <th>4.</th>
              <th>Husband Name</th>
              <td>: {maklumatAsasData?.suamiSahabat || "-"}</td>
            </tr>
            <tr>
              <th>5.</th>
              <th>Branch</th>
              <td>
                : {maklumatAsasData?.sahabat?.cawangan?.namaCawangan || "-"}
              </td>
            </tr>
            <tr>
              <th>6.</th>
              <th>Block</th>
              <td>: </td>
            </tr>
            <tr>
              <th>7.</th>
              <th>Centre</th>
              <td>: {maklumatAsasData?.sahabat?.pusat?.namaPusat || "-"}</td>
            </tr>
            <tr>
              <th>8.</th>
              <th>Branch PIC Name</th>
              <td>: </td>
            </tr>
            <tr>
              <th>9.</th>
              <th>Centre PIC Name</th>
              <td>: </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default MaklumatAsas;
