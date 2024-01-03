import React from 'react';
import Table from "react-bootstrap/Table";

function MaklumatAsas({ maklumatAsasData }) {
  return (
    <>
      <div className="tableSection">
        <div className="sectionHeader">
          <h1>Bahagian A: Maklumat Asas</h1>
        </div>

        <Table responsive striped bordered className="laporanTable">
          <tbody>
            <tr>
              <th>1.</th>
              <th>Perkara</th>
              <td>: {maklumatAsasData?.aktiviti?.dimensi?.kodDimensi || '-'} - JULAT SEDERHANA</td>
            </tr>
            <tr>
              <th>2.</th>
              <th>No IC</th>
              <td>: {maklumatAsasData?.sahabat?.noKadPengenalanSahabat || '-'}</td>
            </tr>
            <tr>
              <th>3.</th>
              <th>Nama Sahabat</th>
              <td>: {maklumatAsasData?.sahabat?.namaSahabat || '-'}</td>
            </tr>
            <tr>
              <th>4.</th>
              <th>Nama Suami</th>
              <td>: {maklumatAsasData?.suamiSahabat || '-'}</td>
            </tr>
            <tr>
              <th>5.</th>
              <th>Cawangan</th>
              <td>: {maklumatAsasData?.sahabat?.cawangan?.namaCawangan || '-'}</td>
            </tr>
            <tr>
              <th>6.</th>
              <th>Blok</th>
              <td>: </td>
            </tr>
            <tr>
              <th>7.</th>
              <th>Pusat</th>
              <td>: {maklumatAsasData?.sahabat?.pusat?.namaPusat || '-'}</td>
            </tr>
            <tr>
              <th>8.</th>
              <th>Nama PC Cawangan</th>
              <td>: </td>
            </tr>
            <tr>
              <th>9.</th>
              <th>Nama PA Pusat</th>
              <td>: </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default MaklumatAsas;
