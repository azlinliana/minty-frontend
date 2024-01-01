import React from 'react';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';

function MaklumatInflowOutflow({ maklumatInflowOutflowSahabatData }) {
  // ------------ BE --------------
  if (!maklumatInflowOutflowSahabatData) {
    return <p>No data available</p>; // Or any other fallback content
  }
  
  // Extract data from props
  const { rekodMingguanInflowOutflow, rekodKumulatifInflowOutflow } = maklumatInflowOutflowSahabatData;
  
  return (
    <>
      <div className="tableSection">
        <div className="sectionHeader"><h1>Bahagian C: Maklumat Inflow/Outflow Sahabat</h1></div>

        <div className="tableBhgC">
          <Row>
            {rekodMingguanInflowOutflow.data && Array.isArray(rekodMingguanInflowOutflow.data).length === 0 ? ( 
              <Alert variant="secondary">Tiada maklumat inflow/outflow untuk sahabat ini. Sila isi maklumat tracking sahabat dahulu.</Alert>
            ) : (
              <>
                {/* Left Section */}
                <Col md={6}>
                  <h2>Rekod Mingguan Inflow/Outflow Sahabat</h2>

                  <Table responsive striped bordered className="laporanTable">
                    <thead>
                      <tr>
                        <th>Minggu</th>
                        <th>Inflow (RM)</th>
                        <th>Outflow (RM)</th>
                      </tr>
                    </thead>

                    <tbody>
                        {rekodMingguanInflowOutflow.data.map((rekodMingguanInflowOutflowData, index) => (
                          <tr key={index}>
                            <td>{rekodMingguanInflowOutflowData.minggu}</td>
                            <td>{rekodMingguanInflowOutflowData.inflow}</td>
                            <td>{rekodMingguanInflowOutflowData.outflow}</td>
                          </tr>
                        ))}
                    </tbody>

                    <tfoot>
                      <tr>
                        <td>Jumlah (RM)</td>
                        <td>{rekodMingguanInflowOutflow.data.reduce((total, data) => total + data.inflow, 0)}</td>
                        <td>{rekodMingguanInflowOutflow.data.reduce((total, data) => total + data.outflow, 0)}</td>
                      </tr>
                    </tfoot>
                  </Table>
                </Col>

                {/* Right Section */}
                <Col md={6}>
                  <h2>Rekod Kumulatif Inflow/Outflow Sahabat</h2>

                  <Table striped bordered className="laporanTable">
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
                        <td>{rekodKumulatifInflowOutflow.jumlahBilanganMinggu}</td>
                        <td>{rekodKumulatifInflowOutflow.kumulatifInflow}</td>
                        <td>{rekodKumulatifInflowOutflow.kumulatifOutflow}</td>
                        <td>{rekodKumulatifInflowOutflow.bersih}</td>
                        <td>{rekodKumulatifInflowOutflow.pendapatanDaripadaA1}</td>
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
