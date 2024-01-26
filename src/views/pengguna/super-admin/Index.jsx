import React, { useState, useEffect } from "react";
import CreateSuperAdmin from "./Create";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import Table from "react-bootstrap/Table";
import axiosCustom from "../../../axios";

function IndexSuperAdmin() {
  // ----------BE----------
  // List dimensi
  const [superAdmins, setSuperAdmins] = useState([]);

  const fetchSuperAdmins = async () => {
    try {
      const response = await axiosCustom.get("/pengguna/super-admin");

      if (response.status === 200) {
        setSuperAdmins(response.data);
      } else {
        console.log(response);
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  useEffect(() => {
    fetchSuperAdmins();
  }, []);

  return (
    <>
      <div className="pageTitle">
        <h1>Senarai Super Admin</h1>
      </div>

      <div className="tableSection">
        <div className="tambahBtnPlacement"><CreateSuperAdmin /></div>

        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Id Kakitangan</th>
              <th>Nama Kakitangan</th>
              <th>Jawatan Kakitangan</th>
              <th>Unit Kakitangan</th>
              <th>Status</th>
              <th>Tindakan</th>
            </tr>
          </thead>

          <tbody>
            {superAdmins.length === 0 ? (
              <tr>
                <td colSpan={6}>
                  <center>
                    Tiada maklumat. Sila klik butang "Tambah" untuk merekodkan
                    super admin baharu.
                  </center>
                </td>
              </tr>
            ) : (
              superAdmins.map((superAdminsData, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{superAdminsData.idKakitangan}</td>
                  <td>{superAdminsData.namaKakitangan}</td>
                  <td>{superAdminsData.unitKakitangan}</td>
                  <td>{superAdminsData.jawatanKakitangan}</td>
                  <td></td>
                  <td></td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default IndexSuperAdmin;
