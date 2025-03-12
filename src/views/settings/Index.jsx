import React from "react";
import { useNavigate } from "react-router-dom";
import "../../assets/styles/styles_selenggara.css";
import { Table, Button } from "react-bootstrap";

function IndexSettings() {
  // __________________________________ Frontend __________________________________
  // Link pages
  const navigate = useNavigate();

  const clickViewInflowCode = () => navigate("/inflow-code");
  const clickViewOutflowCode = () => navigate("/outflow-code");
  const clickViewLoan = () => navigate("/loan");
  const clickViewRelationship = () => navigate("/relationship");

  return (
    <>
      <div>
        <div className="page-title">
          <h1>Settings List</h1>
        </div>

        <div className="selenggara-table-container">
          <Table responsive>
            <thead>
              <tr>
                <th className="selenggara-table-index">No.</th>
                <th>Items</th>
                <th className="selenggara-table-action-btn-container">
                  Action
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="selenggara-table-index">1</td>
                <td>Inflow Code</td>
                <td>
                  <Button
                    className="selenggara-table-action-btn"
                    onClick={clickViewInflowCode}
                  >
                    View
                  </Button>{" "}
                </td>
              </tr>

              <tr>
                <td className="selenggara-table-index">2</td>
                <td>Outflow Code</td>
                <td>
                  <Button
                    className="selenggara-table-action-btn"
                    onClick={clickViewOutflowCode}
                  >
                    View
                  </Button>{" "}
                </td>
              </tr>

              <tr>
                <td className="selenggara-table-index">3</td>
                <td>Loan</td>
                <td>
                  <Button
                    className="selenggara-table-action-btn"
                    onClick={clickViewLoan}
                  >
                    View
                  </Button>{" "}
                </td>
              </tr>

              <tr>
                <td className="selenggara-table-index">4</td>
                <td>Relationship</td>
                <td>
                  <Button
                    className="selenggara-table-action-btn"
                    onClick={clickViewRelationship}
                  >
                    View
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

export default IndexSettings;
