import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/styles_selenggara.css";
import { Table, Button } from "react-bootstrap";

function IndexSelenggara() {
  // __________________________________ Frontend __________________________________
  // Link pages
  const navigate = useNavigate();

  const clickLihatKodInflow = () => navigate("/kod-inflow");
  const clickLihatKodOutflow = () => navigate("/kod-outflow");
  const clickLihatDimensi = () => navigate("/dimensi");
  const clickLihatHubungan = () => navigate("/hubungan");

  return (
    <>
      <div>
        <div className="page-title">
          <h1>Senarai Selenggara</h1>
        </div>

        <div className="selenggara-table-container">
          <Table responsive>
            <thead>
              <tr>
                <th className="selenggara-table-index">Bil.</th>
                <th>Keterangan</th>
                <th className="selenggara-table-action-btn-container">
                  Tindakan
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="selenggara-table-index">1</td>
                <td>Kod Inflow</td>
                <td>
                  <Button
                    className="selenggara-table-action-btn"
                    onClick={clickLihatKodInflow}
                  >
                    Lihat
                  </Button>{" "}
                </td>
              </tr>

              <tr>
                <td className="selenggara-table-index">2</td>
                <td>Kod Outflow</td>
                <td>
                  <Button
                    className="selenggara-table-action-btn"
                    onClick={clickLihatKodOutflow}
                  >
                    Lihat
                  </Button>{" "}
                </td>
              </tr>

              <tr>
                <td className="selenggara-table-index">3</td>
                <td>Dimensi</td>
                <td>
                  <Button
                    className="selenggara-table-action-btn"
                    onClick={clickLihatDimensi}
                  >
                    Lihat
                  </Button>{" "}
                </td>
              </tr>

              <tr>
                <td className="selenggara-table-index">4</td>
                <td>Hubungan</td>
                <td>
                  <Button
                    className="selenggara-table-action-btn"
                    onClick={clickLihatHubungan}
                  >
                    Lihat
                  </Button>{" "}
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default IndexSelenggara;
