import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import "../Selenggara.css";
import CreateDimensi from "./Create";
import EditDimensi from "./Edit";
import DeletionAlert from "../../components/sweet-alert/DeletionAlert";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from 'axios';
import Swal from 'sweetalert2';

function IndexDimensi() {
  // ----------FE----------
  const [dimensis, setDimensis] = useState([]);

  // Back button
  const navigate = useNavigate();
  const goBack = () => {navigate(-1);};

  // ----------BE----------
  // List dimensi
  const fetchDimensis = async() => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/selenggara/dimensi');
      setDimensis(response.data);
    } catch(error) {
      console.error('Ralat dalam mengambil maklumat dimensi:', error);
    }
  };

  useEffect(() => {
    fetchDimensis();
    const interval = setInterval(() => { // Set up recurring fetch every 1 second
      fetchDimensis();
    }, 1000);
    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Delete dimensi
  const deleteDimensi = async (dimensiId) => {
    // Function to delete dimensi
    const performDeletion = async () => {
      try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/selenggara/dimensi/${dimensiId}`);
        if (response.status === 200) {
          setDimensis((prevDimensis) =>
            prevDimensis.filter((dimensi) => dimensi.id !== dimensiId)
          );
          // Show success message from the server
          Swal.fire('Dipadam!', response.data.message, 'success');
          console.log('Dimensi berjaya dipadam');
        }
      } catch (error) {
        console.error('Ralat dalam memadam dimensi', error);
      }
    };

    // Function to handle cancellation
    const cancelDeletion = () => {
      Swal.fire('Dibatalkan', 'Data anda selamat.', 'error');
    };

    // Display the deletion confirmation dialog
    DeletionAlert(performDeletion, cancelDeletion);
  };
  
  return(
    <div>
      <div className="pageTitle">
        <h1>Dimensi</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="previousLink" href="#">Senarai Selenggara</Breadcrumb.Item>
          <Breadcrumb.Item active>Dimensi</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="tableSection">
        <div className="tambahBtnPlacement">
          <CreateDimensi />
        </div>

        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Kod Dimensi</th>
              <th>Keterangan</th>
              <th>Status</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            {dimensis.length === 0 ? (
              <tr><td colSpan="5"><center>Tiada maklumat</center></td></tr>
            ) : (
              dimensis.map((dimensisData, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{dimensisData.kodDimensi}</td>
                  <td>{dimensisData.keteranganDimensi}</td>
                  <td>{dimensisData.statusDimensi}</td>
                  <td>
                    <EditDimensi dimensi={dimensisData}/>
                    <Button variant="danger" onClick={() => deleteDimensi(dimensisData.id)}>Padam</Button>{' '}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
        
        <div className="kembaliBtnPlacement">
          <Button className="kembaliBtn" onClick={goBack}>Kembali</Button>{" "}
        </div>
      </div>
    </div>
  );
}

export default IndexDimensi;