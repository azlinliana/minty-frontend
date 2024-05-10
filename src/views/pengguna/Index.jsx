import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/styles_pengguna.css";
import { Table, Button } from "react-bootstrap";

function IndexPengguna() {
  // __________________________________ Frontend __________________________________
  const navigate = useNavigate();

  // Back button
  const goBack = () => {
    navigate(-1);
  };

  // Link pages
  const clickAdmin = () => navigate("/senarai-admin");

  const clickSuperAdmin = () => navigate("/senarai-super-admin");

  return (
    <>
      <div className="page-title">
        <h1>Senarai Pengguna</h1>
      </div>

      <div className="pengguna-table-container">
        <Table responsive>
          <thead>
            <tr>
              <th className="pengguna-table-index">Bil.</th>
              <th>Jenis Pengguna</th>
              <th className="pengguna-table-cta">Tindakan</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="pengguna-table-index">1</td>
              <td>Admin</td>
              <td>
                <Button className="pengguna-index-pg-btn" onClick={clickAdmin}>
                  Lihat
                </Button>{" "}
              </td>
            </tr>

            <tr>
              <td className="pengguna-table-index">2</td>
              <td>Super Admin</td>
              <td>
                <Button
                  className="pengguna-index-pg-btn"
                  onClick={clickSuperAdmin}
                >
                  Lihat
                </Button>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className="kembali-btn-container">
        <Button className="kembali-btn" onClick={goBack}>
          Kembali
        </Button>{" "}
      </div>
    </>
  );
}

export default IndexPengguna;
