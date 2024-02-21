import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/styles/styles_pengguna.css";
import SearchSuperAdmin from "./Search";
import EditSuperAdmin from "./Edit";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../components/sweet-alert/DeletionAlert";
import { Breadcrumb, Button, Table } from "react-bootstrap";
import axiosCustom from "../../../axios";
import Swal from "sweetalert2";

function IndexSuperAdmin() {
  // ----------FE----------
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  // ----------BE----------
  // List super admin
  const [superAdmins, setSuperAdmins] = useState([]);

  const fetchSuperAdmins = useCallback(async () => {
    try {
      const response = await axiosCustom.get("/pengguna/super-admin");

      if (response.status === 200) {
        setSuperAdmins(response.data);
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  }, []);

  useEffect(() => {
    fetchSuperAdmins();
  }, [fetchSuperAdmins]);

  // Delete dimensi
  const deleteSuperAdmin = async (superAdminId) => {
    // Function to delete admin
    const performDeletion = async () => {
      try {
        const response = await axiosCustom.delete(
          `pengguna/super-admin/${superAdminId}`
        );

        if (response.status === 200) {
          setSuperAdmins((prevSuperAdmins) =>
            prevSuperAdmins.filter(
              (superAdmin) => superAdmin.id !== superAdminId
            )
          );
          // Show success message from the server
          Swal.fire("Dipadam!", response.data.message, "success");
        }
      } catch (error) {
        ErrorAlert(error);
      }
    };

    // Function to handle cancellation
    const cancelDeletion = () => {
      Swal.fire("Dibatalkan", "Data anda selamat.", "error");
    };

    // Display the deletion confirmation dialog
    DeletionAlert(performDeletion, cancelDeletion);
  };

  return (
    <>
      <div className="page-title">
        <h1>Super Admin</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="breadcrumb-previous-link">
            Senarai Pengguna
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Super Admin</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <div className="pengguna-search-pg-header">
          <h2>Cari & Tambah Super Admin</h2>

          <SearchSuperAdmin />
        </div>

        <div className="pengguna-search-result-container">
          <h2>Senarai Super Admin</h2>

          <div>
            <Table responsive striped bordered>
              <thead>
                <tr>
                  <th>Bil.</th>
                  <th>Id Kakitangan</th>
                  <th>Nama Kakitangan</th>
                  <th>Lokasi Kakitangan</th>
                  <th>Jawatan Kakitangan</th>
                  <th>Status</th>
                  <th>Tindakan</th>
                </tr>
              </thead>

              <tbody>
                {superAdmins.length === 0 ? (
                  <tr>
                    <td colSpan={7}>
                      <center>
                        Tiada maklumat. Sila klik "Cari & Tambah Super Admin"
                        untuk merekodkan super admin baharu.
                      </center>
                    </td>
                  </tr>
                ) : (
                  superAdmins.map((superAdminsData, key) => (
                    <tr key={key}>
                      <td>{key + 1}</td>
                      <td>{superAdminsData.user.idKakitangan}</td>
                      <td>{superAdminsData.user.namaKakitangan}</td>
                      <td>{superAdminsData.user.lokasiKakitangan}</td>
                      <td>{superAdminsData.user.jawatanKakitangan}</td>
                      <td>{superAdminsData.statusSuperAdmin}</td>
                      <td>
                        <EditSuperAdmin superAdmin={superAdminsData} />
                        <Button
                          className="delete-btn"
                          onClick={() => deleteSuperAdmin(superAdminsData.id)}
                        >
                          Padam
                        </Button>{" "}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>

            <div className="kembali-btn-container">
              <Button className="kembali-btn" onClick={goBack}>
                Kembali
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexSuperAdmin;
