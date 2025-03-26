import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/styles/styles_laporan.css";
import SearchProfilSahabat from "./SearchProfilSahabat";
import SearchProfilSahabatTerperinci from "./SearchProfilSahabatTerperinci";
import { Table, Button } from "react-bootstrap";

function IndexReport() {
  // __________________________________ Frontend __________________________________
  // Link pages
  const navigate = useNavigate();

  const clickJadualTF01 = () => navigate("/search-tf01");
  const clickJadualTF01Cawangan = () => navigate("/search-tf01-cawangan");
  const clickJadualTF02 = () => navigate("/search-tf02");

  return (
    <>
      <div className="page-title">
        <h1>Senarai Laporan</h1>
      </div>

      <div className="laporan-table-container">
        <Table responsive>
          <thead>
            <tr>
              <th className="laporan-table-index">Bil.</th>
              <th>Keterangan</th>
              <th className="laporan-table-cta">Tindakan</th>
            </tr>
          </thead>

          <tbody>
            {/* Laporan Profil Sahabat */}
            <tr>
              <td className="laporan-table-index">1</td>
              <td>Laporan Profail Sahabat</td>
              <td>
                <SearchProfilSahabat />
              </td>
            </tr>

            {/* Laporan Profil Sahabat Terperinci */}
            <tr>
              <td className="laporan-table-index">2</td>
              <td>Laporan Profail Sahabat Terperinci</td>
              <td>
                <SearchProfilSahabatTerperinci />
              </td>
            </tr>

            {/* Jadual TF01 */}
            <tr>
              <td className="laporan-table-index">3</td>
              <td>Jadual TF01</td>
              <td>
                <Button
                  className="laporan-index-pg-btn"
                  onClick={clickJadualTF01}
                >
                  Lihat
                </Button>{" "}
              </td>
            </tr>

            {/* Jadual TF01 Mengikut Cawangan */}
            <tr>
              <td className="laporan-table-index">4</td>
              <td>Jadual TF01 Mengikut Cawangan</td>
              <td>
                <Button
                  className="laporan-index-pg-btn"
                  onClick={clickJadualTF01Cawangan}
                >
                  Lihat
                </Button>{" "}
              </td>
            </tr>

            {/* Jadual TF02 */}
            <tr>
              <td className="laporan-table-index">5</td>
              <td>Jadual TF02</td>
              <td>
                <Button
                  className="laporan-index-pg-btn"
                  onClick={clickJadualTF02}
                >
                  Lihat
                </Button>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default IndexReport;
