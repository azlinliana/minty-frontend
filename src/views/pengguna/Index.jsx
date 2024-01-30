import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/styles_pengguna.css";
import { Table, Button } from "react-bootstrap";

function IndexPengguna() {
  // ----------FE----------
  const navigate = useNavigate();

  // Back button
  const goBack = () => {
    navigate(-1);
  };

  // Link pages
  const clickAdmin = () => navigate("/senarai-admin");
  
  const clickSuperAdmin= () => navigate("/senarai-super-admin");

  return (
    <>
      <div className="pageTitle">
        <h1>Senarai Pengguna</h1>
      </div>

      <div className="tableSection">
        <Table responsive>
          <thead>
            <tr>
              <th className="tableBil">Bil.</th>
              <th>Jenis Pengguna</th>
              <th className="tableTindakan">Tindakan</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="tableBil">1</td>
              <td>Admin</td>
              <td>
                <Button
                  className="indexLaporanBtn"
                  variant="primary"
                  onClick={clickAdmin}
                >
                  Lihat
                </Button>{" "}
              </td>
            </tr>

            <tr>
              <td className="tableBil">2</td>
              <td>Super Admin</td>
              <td>
                <Button
                  className="indexLaporanBtn"
                  variant="primary"
                  onClick={clickSuperAdmin}
                >
                  Lihat
                </Button>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className="kembaliBtnPlacement">
        <Button className="kembaliBtn" onClick={goBack}>
          Kembali
        </Button>{" "}
      </div>
    </>
  );
}

export default IndexPengguna;
