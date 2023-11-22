import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../Selenggara.css";
import CreateKodInflow from "./Create";
import EditKodInflow from "./Edit";
import axios from "axios";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function IndexKodInflow() {
  // List kod inflow
  const [kodInflows, setKodInflows] = useState([]);

  const fetchKodInflows = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/selenggara/kod-inflow")
      .then(({ data }) => {
        setKodInflows(data);
      });
  };

  useEffect(() => {
    fetchKodInflows();
  }, []);

  // Update kod inflow
  const updateKodInflow = (editedKodInflow) => {
    const updatedKodInflows = kodInflows.map((kodInflow) =>
      kodInflow.id === editedKodInflow.id ? editedKodInflow : kodInflow
    );
    setKodInflows(updatedKodInflows);
  };

  // Delete kod inflow
  const handleDeleteKodInflow = async (kodInflowId) => {
    try {
      await axios.delete(
        `http://127.0.0.1:8000/api/selenggara/kod-inflow/${kodInflowId}`
      );

      setKodInflows((prevKodInflows) =>
        prevKodInflows.filter((kodInflow) => kodInflow.id !== kodInflowId)
      );
    } catch (error) {
      console.error("Ralat dalam memadam kod inflow", error);
    }
  };

  // Back button
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div className="pageTitle">
        <h1>Kod Inflow</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="previousLink" href="#">
            Senarai Selenggara
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Kod Inflow</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="tableSection">
        <div className="tambahBtnPlacement">
          <CreateKodInflow fetchKodInflows={fetchKodInflows} />
        </div>

        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th rowSpan={2} className="rowCategory">
                Kod Inflow
              </th>
              <th>Keterangan Kod Inflow</th>
              <th>Kod Inflow Terperinci</th>
              <th>Keterangan Kod Inflow Terperinci</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            {/* {kodInflows.length > 0 && kodInflows.map((kodInflowData, key) => (
              <React.Fragment key={key}>
                <tr>
                  <td rowSpan={kodInflowData.kod_inflow_terperincis.length + 1}>{key + 1}</td>
                  <td rowSpan={kodInflowData.kod_inflow_terperincis.length + 1}>{kodInflowData.kodInflow}</td>
                  <td rowSpan={kodInflowData.kod_inflow_terperincis.length + 1}>{kodInflowData.keteranganKodInflow}</td>
                </tr>
                {kodInflowData.kod_inflow_terperincis.map((kodInflowTerperinciData, subKey) => (
                  <tr key={subKey}>
                    <td>{kodInflowTerperinciData.kodInflowTerperinci}</td>
                    <td>{kodInflowTerperinciData.keteranganKodInflowTerperinci}</td>
                    <td>
                      <Button variant="warning">Kemas Kini</Button>{' '}
                      <Button variant="danger">Padam</Button>{' '}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))} */}
            <tr>
              <td>1</td>
              <td>A1</td>
              <div className="multipleRowsInARow">
                <tr>
                  <td>1</td>
                </tr>
                <tr>
                  <td>2</td>
                </tr>
              </div>
              <td></td>
              <td></td>
              <td>
                <Button className="editBtn">Kemas Kini</Button>{" "}
                <Button className="delBtn">Padam</Button>{" "}
              </td>
            </tr>
          </tbody>
        </Table>

        <div className="kembaliBtnPlacement">
          <Button className="kembaliBtn" onClick={goBack}>
            Kembali
          </Button>{" "}
        </div>
      </div>
    </div>
  );
}

export default IndexKodInflow;
