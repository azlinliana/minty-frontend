import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/styles/styles_users.css";
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
            User List
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Admin</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <div className="user-search-pg-header">
          <h2>Search & Add Admin</h2>

          <SearchAdmin />
        </div>

        <div className="user-search-result-container">
          <h2>Admin List</h2>

          <div>
            <Table responsive striped bordered>
              <thead>
                <tr>
                  <th>Bil.</th>
                  <th>Staff Id</th>
                  <th>Staff Name</th>
                  <th>Staff Location</th>
                  <th>Staff Position</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {/* {admins.length === 0 ? ( */}
                  <tr>
                    <td colSpan={7}>
                      <center>
                        No information available. Please "Search & Add Admin" to record a new admin.
                      </center>
                    </td>
                  </tr>
                {/* ) : (
                  admins.map((adminsData, key) => ( */}
                    <tr 
                      // key={key}
                    >
                      <td>No.</td>
                      <td>Staff Id</td>
                      <td>Staff Name</td>
                      <td>Staff Location</td>
                      <td>Staff Position</td>
                      <td>Status Admin</td>
                      <td>
                        <EditAdmin 
                          // admin={adminsData} 
                        />
                        
                        <Button
                          className="delete-btn"
                          // onClick={() => deleteAdmin(adminsData.id)}
                        >
                          Delete
                        </Button>{" "}
                      </td>
                    </tr>
                  {/* ))
                )} */}
              </tbody>
            </Table>

            <div className="return-btn-container">
              <Button className="return-btn" onClick={goBack}>
                Back
              </Button>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexAdmin;
