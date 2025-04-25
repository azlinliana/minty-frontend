import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/styles/styles_report.css";
import SearchCustomerProfile from "./SearchCustomerProfile";
import SearchDetailedCustomerProfile from "./SearchDetailedCustomerProfile";
import { Table, Button } from "react-bootstrap";

function IndexReport() {
  // __________________________________ Frontend __________________________________
  // Link pages
  const navigate = useNavigate();

  const clickReport1 = () => navigate("/search-report-1");
  const clickReport2 = () => navigate("/search-report-2");

  return (
    <>
      <div className="page-title">
        <h1>Report List</h1>
      </div>

      <div className="report-table-container">
        <Table responsive>
          <thead>
            <tr>
              <th className="report-table-index">No.</th>
              <th>Explanation</th>
              <th className="report-table-cta">Action</th>
            </tr>
          </thead>

          <tbody>
            {/* Customer Profile Report */}
            <tr>
              <td className="report-table-index">1</td>
              <td>Search Customer Profile</td>
              <td>
                <SearchCustomerProfile />
              </td>
            </tr>

            {/* Detailed Customer Profile Report */}
            <tr>
              <td className="report-table-index">2</td>
              <td>Search Detailed Customer Profile</td>
              <td>
                <SearchDetailedCustomerProfile />
              </td>
            </tr>

            {/* Jadual TF01 */}
            <tr>
              <td className="report-table-index">3</td>
              <td>Report 1</td>
              <td>
                <Button
                  className="report-index-pg-btn"
                  onClick={clickReport1}
                >
                  View
                </Button>{" "}
              </td>
            </tr>

            {/* Jadual TF01 Mengikut Cawangan */}
            <tr>
              <td className="report-table-index">4</td>
              <td>Report 2</td>
              <td>
                <Button
                  className="report-index-pg-btn"
                  onClick={clickReport2}
                >
                  View
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
