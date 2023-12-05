import React, {useState, useEffect} from 'react';
import ErrorAlert from '../../../components/sweet-alert/ErrorAlert';
import { Table, Row, Col } from "react-bootstrap";
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

function MaklumatInflowOutflow({sahabatId, pembiayaanSahabatId}) {
  // ------------ BE --------------
  // Rekod mingguan inflow/outflow
  const [rekodMingguanInflowOutflow, setRekodMingguanInflowOutflow] = useState([]);
  const fetchRekodMingguanInflowOutflow = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/laporan/profil-sahabat/rekod-mingguan-inflow-outflow/${sahabatId}/${pembiayaanSahabatId}`);
      if (response.status === 200) {
        setRekodMingguanInflowOutflow(response.data.data || []);
      } else {
        ErrorAlert(response); // Error from the backend or unknown error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  useEffect(() => {
    fetchRekodMingguanInflowOutflow();
  }, [sahabatId, pembiayaanSahabatId]);

  // Rekod kumulatif inflow/outflow
  const [rekodKumulatifInflowOutflow, setRekodKumulatifInflowOutflow] = useState([]);
  const getRekodKumulatifInflowOutflow = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/laporan/profil-sahabat/rekod-kumulatif-inflow-outflow/${sahabatId}/${pembiayaanSahabatId}`);
      if (response.status === 200) {
        setRekodKumulatifInflowOutflow(response.data);
      } else {
        ErrorAlert(response); // Error from the backend or unknown error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  useEffect(() => {
    getRekodKumulatifInflowOutflow();
  });

  return(
    <div>
      <div className="tableSection">
        <div className="sectionHeader"><h1>Bahagian C: Maklumat Inflow/Outflow Sahabat</h1></div>

        <div className="tableBhgC">
          <Row>
            {rekodMingguanInflowOutflow.length === 0 ? (
              <Alert variant="secondary">Tiada maklumat inflow/outflow untuk sahabat ini. Sila isi maklumat tracking sahabat dahulu.</Alert>
            ) : (
              <>
                {/* Left Section */}
                <Col md={6}>
                  <h2>Rekod Minggu Inflow/Outflow Sahabat</h2>

                  <Table responsive striped bordered className="laporanTable">
                    <thead>
                      <tr>
                        <th>Minggu</th>
                        <th>Inflow (RM)</th>
                        <th>Outflow (RM)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {rekodMingguanInflowOutflow.map((rekodMingguanInflowOutflowData, index) => (
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
                        <td>{rekodMingguanInflowOutflow.reduce((total, data) => total + data.inflow, 0)}</td>
                        <td>{rekodMingguanInflowOutflow.reduce((total, data) => total + data.outflow, 0)}</td>
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
                      {/* {rekodKumulatifInflowOutflow.length > 0 && (
                        <tr>
                          <td>{rekodKumulatifInflowOutflow[0].jumlahBilanganMinggu}</td>
                          <td>{rekodKumulatifInflowOutflow[0].kumulatifInflow}</td>
                          <td>{rekodKumulatifInflowOutflow[0].kumulatifOutflow}</td>
                          <td>{rekodKumulatifInflowOutflow[0].bersih}</td>
                          <td>{rekodKumulatifInflowOutflow[0].pendapatanDaripadaA1}</td>
                        </tr>
                      )} */}
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
    </div>
  );
}

export default MaklumatInflowOutflow;
