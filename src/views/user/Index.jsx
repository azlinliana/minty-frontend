import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/styles_users.css";
import { Table, Button } from "react-bootstrap";

function IndexUser() {
  // __________________________________ Frontend __________________________________
  const navigate = useNavigate();

  // Back button
  const goBack = () => {
    navigate(-1);
  };

  // Link pages
  const clickAdmin = () => navigate("/admin-list");

  const clickSuperAdmin = () => navigate("/super-admin-list");

  return (
    <>
      <div className="page-title">
        <h1>User List</h1>
      </div>

      <div className="user-table-container">
        <Table responsive>
          <thead>
            <tr>
              <th className="user-table-index">No.</th>
              <th>User Type</th>
              <th className="user-table-cta">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="user-table-index">1</td>
              <td>Admin</td>
              <td>
                <Button className="user-index-pg-btn" onClick={clickAdmin}>
                  View
                </Button>{" "}
              </td>
            </tr>

            <tr>
              <td className="user-table-index">2</td>
              <td>Super Admin</td>
              <td>
                <Button
                  className="user-index-pg-btn"
                  onClick={clickSuperAdmin}
                >
                  View
                </Button>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className="return-btn-container">
        <Button className="return-btn" onClick={goBack}>
          Back
        </Button>{" "}
      </div>
    </>
  );
}

export default IndexUser;
