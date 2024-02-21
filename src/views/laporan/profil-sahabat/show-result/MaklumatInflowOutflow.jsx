import React from "react";
import { Alert, Col, Row, Table } from "react-bootstrap";

function MaklumatInflowOutflow({ maklumatInflowOutflowSahabatData }) {
  // ------------ BE --------------
  if (!maklumatInflowOutflowSahabatData) {
    return <p>No data available</p>; // Or any other fallback content
  }

  // Extract data from props
  const { rekodMingguanInflowOutflow, rekodKumulatifInflowOutflow } =
    maklumatInflowOutflowSahabatData;

  // Format money value
  const formatMoney = (value) => {
    return value !== null && !isNaN(value)
      ? parseFloat(value).toLocaleString("en-US", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })
      : "-";
  };

  return (
    <>
      <div className="laporan-table-container">
        <div className="laporan-table-header">
          <h1>Bahagian C: Maklumat Inflow/Outflow Sahabat</h1>
        </div>

        <div className="tableBhgC">
          <Row>
            {rekodMingguanInflowOutflow.data &&
            Array.isArray(rekodMingguanInflowOutflow.data).length === 0 ? (
              <Alert variant="secondary">
                Tiada maklumat inflow/outflow untuk sahabat ini. Sila isi
                maklumat tracking sahabat dahulu.
              </Alert>
            ) : (
              <>
                {/* Left Section */}
                <Col md={6}>
                  <h2>Rekod Mingguan Inflow/Outflow Sahabat</h2>

                  <Table
                    responsive
                    striped
                    bordered
                    className="laporan-table-styling"
                  >
                    <thead>
                      <tr>
                        <th>Minggu</th>
                        <th>Inflow (RM)</th>
                        <th>Outflow (RM)</th>
                      </tr>
                    </thead>

                    <tbody>
                      {rekodMingguanInflowOutflow.data.map(
                        (rekodMingguanInflowOutflowData, index) => (
                          <tr key={index}>
                            <td>
                              {rekodMingguanInflowOutflowData.minggu || "-"}
                            </td>
                            <td>
                              {formatMoney(
                                rekodMingguanInflowOutflowData.inflow
                              ) || "-"}
                            </td>
                            <td>
                              {formatMoney(
                                rekodMingguanInflowOutflowData.outflow
                              ) || "-"}
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>

                    <tfoot>
                      <tr>
                        <td>Jumlah (RM)</td>
                        <td>
                          {formatMoney(
                            rekodMingguanInflowOutflow.data.reduce(
                              (total, data) => total + data.inflow,
                              0
                            )
                          ) || "-"}
                        </td>
                        <td>
                          {formatMoney(
                            rekodMingguanInflowOutflow.data.reduce(
                              (total, data) => total + data.outflow,
                              0
                            )
                          ) || "-"}
                        </td>
                      </tr>
                    </tfoot>
                  </Table>
                </Col>

                {/* Right Section */}
                <Col md={6}>
                  <h2>Rekod Kumulatif Inflow/Outflow Sahabat</h2>

                  <Table striped bordered className="laporan-table-styling">
                    <thead>
                      <tr>
                        <th>Bil. Minggu</th>
                        <th>Inflow (RM)</th>
                        <th>Outflow (RM)</th>
                        <th>Bersih(RM)</th>
                        <th>Pendapatan daripada A1 (RM)</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>
                          {rekodKumulatifInflowOutflow.jumlahBilanganMinggu ||
                            "-"}
                        </td>
                        <td>
                          {formatMoney(
                            rekodKumulatifInflowOutflow.kumulatifInflow
                          ) || "-"}
                        </td>
                        <td>
                          {formatMoney(
                            rekodKumulatifInflowOutflow.kumulatifOutflow
                          ) || "-"}
                        </td>
                        <td>
                          {formatMoney(rekodKumulatifInflowOutflow.bersih) ||
                            "-"}
                        </td>
                        <td>
                          {formatMoney(
                            rekodKumulatifInflowOutflow.pendapatanDaripadaA1
                          ) || "-"}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </>
            )}
          </Row>
        </div>
      </div>
    </>
  );
}

export default MaklumatInflowOutflow;
