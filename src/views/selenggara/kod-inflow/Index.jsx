import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "../Selenggara.css";
import CreateKodInflow from "./Create";
import EditKodInflow from "./Edit";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from "axios";

function IndexKodInflow() {
  // ----------FE----------
  // Back button
  const navigate = useNavigate();
  const goBack = () => {navigate(-1);};

  // ----------BE----------
  // List kod inflow
  const [kodInflows, setKodInflows] = useState([]);

  const fetchKodInflows = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/selenggara/kod-inflow`);
      if (response.status === 200) {
        setKodInflows(response.data);
      }
      else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    }
    catch (error) {
      ErrorAlert(error);
    }
  };

  useEffect(() => {
    fetchKodInflows();
    const interval = setInterval(() => { // Set up recurring fetch every 5 second
      fetchKodInflows();
    }, 5000);
    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <div className="pageTitle">
        <h1>Kod Inflow</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="previousLink" href="#">Senarai Selenggara</Breadcrumb.Item>
          <Breadcrumb.Item active>Kod Inflow</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="tableSection">
        <div className="tambahBtnPlacement"><CreateKodInflow /></div>

        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th rowSpan={2} className="rowCategory">Kod Inflow</th>
              <th>Keterangan Kod Inflow</th>
              <th>Kod Inflow Terperinci</th>
              <th>Keterangan Kod Inflow Terperinci</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            {kodInflows.length === 0 ? (
              <tr><td colSpan="6"><center>Tiada maklumat kod inflow. Sila klik butang "Tambah" untuk merekodkan kod inflow baharu.</center></td></tr>
            ) : (
              kodInflows.map((kodInflow, index) => (
                <React.Fragment key={index}>
                  <tr>
                    <td rowSpan={kodInflow.kod_inflow_terperincis.length + 1}>{index + 1}</td>
                    <td rowSpan={kodInflow.kod_inflow_terperincis.length + 1}>{kodInflow.kodInflow}</td>
                    <td rowSpan={kodInflow.kod_inflow_terperincis.length + 1}>{kodInflow.keteranganKodInflow}</td>
                  </tr>
                  {kodInflow.kod_inflow_terperincis.map((kodInflowTerperinci, subIndex) => (
                    <tr key={subIndex}>
                      <td>{kodInflowTerperinci.kodInflowTerperinci}</td>
                      <td>{kodInflowTerperinci.keteranganKodInflowTerperinci}</td>
                      <td>
                        <EditKodInflow />
                        <Button className="delBtn" variant="danger">Padam</Button>{" "}
                      </td>
                    </tr>
                  ))}
                </React.Fragment>
              ))
            )}
          </tbody>
        </Table>

        <div className="kembaliBtnPlacement"><Button className="kembaliBtn" onClick={goBack}>Kembali</Button>{" "}</div>
      </div>
    </div>
  );
}

export default IndexKodInflow;
