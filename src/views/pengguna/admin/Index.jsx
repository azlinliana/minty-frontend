import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/styles/styles_pengguna.css";
import SearchAdmin from "./Search";
import EditAdmin from "./Edit";
import { Breadcrumb, Button, Table } from "react-bootstrap";
import { useAdminStore } from "../../../store/pengguna/admin-store";

function IndexAdmin() {
  // __________________________________ Frontend __________________________________
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  // ___________________________________ Backend __________________________________
  // List & delete admin
  // const { admins, fetchAdmins, deleteAdmin } = useAdminStore((state) => ({
  //   admins: state.admins,
  //   fetchAdmins: state.fetchAdmins,
  //   deleteAdmin: state.deleteAdmin,
  // }));

  // useEffect(() => {
  //   fetchAdmins();
  // }, [fetchAdmins]);

  return (
    <>
      <div className="page-title">
        <h1>Admin</h1>

        <Breadcrumb>
          <Breadcrumb.Item
            className="breadcrumb-previous-link"
            href="/tetapan-pengguna"
          >
            Senarai Pengguna
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Admin</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <div className="pengguna-search-pg-header">
          <h2>Cari & Tambah Admin</h2>

          <SearchAdmin />
        </div>

        <div className="pengguna-search-result-container">
          <h2>Senarai Admin</h2>

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
                {/* {admins.length === 0 ? ( */}
                  <tr>
                    <td colSpan={7}>
                      <center>
                        Tiada maklumat. Sila "Cari & Tambah Admin" untuk
                        merekodkan admin baharu.
                      </center>
                    </td>
                  </tr>
                {/* ) : (
                  admins.map((adminsData, key) => ( */}
                    <tr 
                      // key={key}
                    >
                      <td>Bil.</td>
                      <td>Id Kakitangan</td>
                      <td>Nama Kakitangan</td>
                      <td>Lokasi Kakitangan</td>
                      <td>Jawatan Kakitangan</td>
                      <td>Status Admin</td>
                      <td>
                        <EditAdmin 
                          // admin={adminsData} 
                        />
                        
                        <Button
                          className="delete-btn"
                          // onClick={() => deleteAdmin(adminsData.id)}
                        >
                          Padam
                        </Button>{" "}
                      </td>
                    </tr>
                  {/* ))
                )} */}
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

export default IndexAdmin;
