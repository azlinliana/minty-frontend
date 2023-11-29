import React, {useState, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import "../Selenggara.css";
import CreateKodOutflow from "./Create";
import EditKodOutflow from "./Edit";
import axios from "axios";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

function IndexKodOutflow() {
  // ----------FE----------
  // Back button
  const navigate = useNavigate();
  const goBack = () => {navigate(-1);};

  // ----------BE----------
  // List kod outflow
  const [kodOutflows, setKodOutflows] = useState([]);
  const fetchKodOutflows = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/selenggara/kod-outflow`);
      if (response.status === 200) {
        setKodOutflows(response.data);
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
    fetchKodOutflows();
    const interval = setInterval(() => { // Set up recurring fetch every 5 second
      fetchKodOutflows();
    }, 5000);
    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return(
    <div>
      <div className="pageTitle">
        <h1>Kod Outflow</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="previousLink" href="#">Senarai Selenggara</Breadcrumb.Item>
          <Breadcrumb.Item active>Kod Outflow</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="tableSection">
        <div className="tambahBtnPlacement">
          <CreateKodOutflow />
        </div>

        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Kod Outflow</th>
              <th>Keterangan Kod Outflow</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            {kodOutflows.length === 0 ? (
              <tr><td colSpan="6"><center>Tiada maklumat kod outflow. Sila klik butang "Tambah" untuk merekodkan kod outflow baharu.</center></td></tr>
            ) : (
              kodOutflows.map((kodOutflowsData, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{kodOutflowsData.kodOutflow}</td>
                  <td>{kodOutflowsData.keteranganKodOutflow}</td>
                  <td>
                    <EditKodOutflow kodOutflowId={kodOutflowsData.id} />
                    <Button className="delBtn" variant="danger">Padam</Button>{" "}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>

        <div className="kembaliBtnPlacement"><Button className="kembaliBtn" onClick={goBack}>Kembali</Button>{" "}</div>
      </div>
    </div>
  );
}

export default IndexKodOutflow;