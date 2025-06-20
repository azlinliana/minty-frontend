import React from "react";
import Table from "react-bootstrap/Table";

function MaklumatAsas({ maklumatAsasData }) {
  // ------------ FE --------------
  // Format money value
  const formatMoney = (value) => {
    return value !== null && !isNaN(value)
      ? parseFloat(value).toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      : "-";
  };
  
  return (
    <>
      <div className="laporan-table-container">
        <div className="laporan-table-header">
          <h1>Bahagian A: Maklumat Asas</h1>
        </div>

        <Table responsive striped bordered className="laporan-table-styling">
          <tbody>
            <tr>
              <th>Perkara</th>
              <td>
                : {maklumatAsasData?.aktiviti?.dimensi?.kodDimensi || "-"} -
                JULAT SEDERHANA
              </td>
            </tr>

            <tr>
              <th>No IC</th>
              <td>
                : {maklumatAsasData?.sahabat?.noKadPengenalanSahabat || "-"}
              </td>
            </tr>

            <tr>
              <th>Nama Sahabat</th>
              <td>: {maklumatAsasData?.sahabat?.namaSahabat || "-"}</td>
            </tr>

            <tr>
              <th>Nama Suami</th>
              <td>: {maklumatAsasData?.suamiSahabat || "-"}</td>
            </tr>

            <tr>
              <th>Cawangan</th>
              <td>
                : {maklumatAsasData?.sahabat?.cawangan?.namaCawangan || "-"}
              </td>
            </tr>

            <tr>
              <th>Pusat</th>
              <td>: {maklumatAsasData?.sahabat?.pusat?.namaPusat || "-"}</td>
            </tr>

            <tr>
              <th>Dimensi</th>
              <td>
                : {maklumatAsasData?.aktiviti?.dimensi?.kodDimensi || "-"}
              </td>
            </tr>

            <tr>
              <th>Kumulatif PJM</th>
              <td>: {formatMoney(maklumatAsasData?.kumulatifPJM) || "-"}</td>
            </tr>

            <tr>
              <th>Pengurusan Dana</th>
              <td>
                : {maklumatAsasData?.aktiviti?.pengurusDanaAktiviti || "-"}
              </td>
            </tr>

            <tr>
              <th>Projek</th>
              <td>
                : {maklumatAsasData?.aktiviti?.kegiatan?.jenisKegiatan || "-"}{" "}
                {" 》"}
                {maklumatAsasData?.aktiviti?.keterangan_kegiatan
                  ?.jenisKeteranganKegiatan || "-"}{" "}
                {" 》"}
                {maklumatAsasData?.aktiviti?.projek_kegiatan
                  ?.jenisProjekKegiatan || "-"}
              </td>
            </tr>

            <tr>
              <th>Loan Cycle</th>
              <td>: {maklumatAsasData?.loanCycle || "-"}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default MaklumatAsas;
