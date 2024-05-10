import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/styles/styles_pengguna.css";
import SearchSuperAdmin from "./Search";
import EditSuperAdmin from "./Edit";
import { Breadcrumb, Button, Table } from "react-bootstrap";
import { useSuperAdminStore } from "../../../store/pengguna/super-admin-store";

function IndexSuperAdmin() {
  // __________________________________ Frontend __________________________________
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  // ___________________________________ Backend __________________________________
  // List & delete super admin
  const { superAdmins, fetchSuperAdmins, deleteSuperAdmin } =
    useSuperAdminStore((state) => ({
      superAdmins: state.superAdmins,
      fetchSuperAdmins: state.fetchSuperAdmins,
      deleteSuperAdmin: state.deleteSuperAdmin,
    }));

  useEffect(() => {
    fetchSuperAdmins();
  }, [fetchSuperAdmins]);

  return (
    <>
      <div className="page-title">
        <h1>Super Admin</h1>

        <Breadcrumb>
          <Breadcrumb.Item
            className="breadcrumb-previous-link"
            href="/tetapan-pengguna"
          >
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
