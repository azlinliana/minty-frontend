import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/styles/styles_pengguna.css";
import SearchAdmin from "./Search";
import EditAdmin from "./Edit";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import DeletionAlert from "../../components/sweet-alert/DeletionAlert";
import { Breadcrumb, Button, Table } from "react-bootstrap";
import axiosCustom from "../../../axios";
import Swal from "sweetalert2";

function IndexAdmin() {
  // ----------FE----------
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  // ----------BE----------
  // List admin
  const [admins, setAdmins] = useState([]);

  const fetchAdmins = useCallback(async () => {
    try {
      const response = await axiosCustom.get("pengguna/admin");

      if (response.status === 200) {
        setAdmins(response.data);
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  }, []);

  useEffect(() => {
    fetchAdmins();
  }, [fetchAdmins]);

  // Delete dimensi
  const deleteAdmin = async (adminId) => {
    // Function to delete admin
    const performDeletion = async () => {
      try {
        const response = await axiosCustom.delete(`pengguna/admin/${adminId}`);

        if (response.status === 200) {
          setAdmins((prevAdmins) =>
            prevAdmins.filter((admin) => admin.id !== adminId)
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
      <div className="pageTitle">
        <h1>Admin</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="previousLink">
            Senarai Pengguna
          </Breadcrumb.Item>
          <Breadcrumb.Item active>
            Admin
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <div className="pageSubTitle">
          <h2>Cari & Tambah Admin</h2>

          <SearchAdmin />

          <hr />
        </div>

        <div className="pageSubTitle">
          <h2>Senarai Admin</h2>

          <div>
            <Table responsive>
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
                {admins.length === 0 ? (
                  <tr>
                    <td colSpan={7}>
                      <center>
                        Tiada maklumat. Sila "Cari & Tambah Admin" untuk
                        merekodkan admin baharu.
                      </center>
                    </td>
                  </tr>
                ) : (
                  admins.map((adminsData, key) => (
                    <tr key={key}>
                      <td>{key + 1}</td>
                      <td>{adminsData.user.idKakitangan}</td>
                      <td>{adminsData.user.namaKakitangan}</td>
                      <td>{adminsData.user.lokasiKakitangan}</td>
                      <td>{adminsData.user.jawatanKakitangan}</td>
                      <td>{adminsData.statusAdmin}</td>
                      <td>
                        <EditAdmin admin={adminsData} />
                        
                        <Button
                          className="delBtn"
                          onClick={() => deleteAdmin(adminsData.id)}
                        >
                          Padam
                        </Button>{" "}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </Table>

            <div className="kembaliBtnPlacement">
              <Button className="kembaliBtn" onClick={goBack}>
                Kembali
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexAdmin;
