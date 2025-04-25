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
      <div className="report-table-container">
        <div className="report-table-header">
          <h1>Section A: Basic Information</h1>
        </div>

        <Table responsive striped bordered className="report-table-styling">
          <tbody>
            <tr>
              <th>Item</th>
              <td>
                : {maklumatAsasData?.aktiviti?.dimensi?.kodDimensi || "-"} -
              </td>
            </tr>

            <tr>
              <th>IC</th>
              <td>
                : {maklumatAsasData?.sahabat?.noKadPengenalanSahabat || "-"}
              </td>
            </tr>

            <tr>
              <th>Customer Name</th>
              <td>: {maklumatAsasData?.sahabat?.namaSahabat || "-"}</td>
            </tr>

            <tr>
              <th>Husband Name</th>
              <td>: {maklumatAsasData?.suamiSahabat || "-"}</td>
            </tr>

            <tr>
              <th>Branch</th>
              <td>
                : {maklumatAsasData?.sahabat?.cawangan?.namaCawangan || "-"}
              </td>
            </tr>

            <tr>
              <th>Centre</th>
              <td>: {maklumatAsasData?.sahabat?.pusat?.namaPusat || "-"}</td>
            </tr>

            <tr>
              <th>Dimension</th>
              <td>
                : {maklumatAsasData?.aktiviti?.dimensi?.kodDimensi || "-"}
              </td>
            </tr>

            <tr>
              <th>Cumulative Loan</th>
              <td>: {formatMoney(maklumatAsasData?.kumulatifPJM) || "-"}</td>
            </tr>

            <tr>
              <th>Fund</th>
              <td>
                : {maklumatAsasData?.aktiviti?.pengurusDanaAktiviti || "-"}
              </td>
            </tr>

            <tr>
              <th>Project</th>
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
