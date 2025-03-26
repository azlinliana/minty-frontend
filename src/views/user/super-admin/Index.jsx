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
  // const { superAdmins, fetchSuperAdmins, deleteSuperAdmin } =
  //   useSuperAdminStore((state) => ({
  //     superAdmins: state.superAdmins,
  //     fetchSuperAdmins: state.fetchSuperAdmins,
  //     deleteSuperAdmin: state.deleteSuperAdmin,
  //   }));

  // useEffect(() => {
  //   fetchSuperAdmins();
  // }, [fetchSuperAdmins]);

  return (
    <>
      <div className="page-title">
        <h1>Super Admin</h1>

        <Breadcrumb>
          <Breadcrumb.Item
            className="breadcrumb-previous-link"
            href="/tetapan-pengguna"
          >
            User List
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Super Admin</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <div className="pengguna-search-pg-header">
          <h2>Search & Add Super Admin</h2>

          <SearchSuperAdmin />
        </div>

        <div className="pengguna-search-result-container">
          <h2>Super Admin List</h2>

          <div>
            <Table responsive striped bordered>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>Staff Id</th>
                  <th>Staff Name</th>
                  <th>Staff Location</th>
                  <th>Staff Postion</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {/* {superAdmins.length === 0 ? ( */}
                  <tr>
                    <td colSpan={7}>
                      <center>
                        No information available. Please click "Search & Add Super Admin" to record a new super admin.
                      </center>
                    </td>
                  </tr>
                {/* ) : (
                  superAdmins.map((superAdminsData, key) => ( */}
                    <tr 
                      // key={key}
                    >
                      <td>Bil.</td>
                      <td>Staff Id</td>
                      <td>Staff Name</td>
                      <td>Staff Location</td>
                      <td>Staff Position</td>
                      <td>Super Admin Status</td>
                      <td>
                        <EditSuperAdmin 
                          // superAdmin={superAdminsData} 
                        />
                        
                        <Button
                          className="delete-btn"
                          // onClick={() => deleteSuperAdmin(superAdminsData.id)}
                        >
                          Delete
                        </Button>{" "}
                      </td>
                    </tr>
                  {/* ))
                )} */}
              </tbody>
            </Table>

            <div className="kembali-btn-container">
              <Button className="kembali-btn" onClick={goBack}>
                Back
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexSuperAdmin;
