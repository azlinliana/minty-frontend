import React, {useState, useEffect} from 'react';
import "../../../sahabat.css";
import CreateTrackingOutflowSahabat from './Create';
import EditTrackingOutflowSahabat from './Edit';
import ErrorAlert from '../../../../components/sweet-alert/ErrorAlert';
import DeletionAlert from '../../../../components/sweet-alert/DeletionAlert';
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from 'axios';
import Swal from 'sweetalert2';

function IndexTrackingOutflowSahabat({mingguId}) {
  // ----------BE----------
  const [outflowSahabats, setOutflowSahabats] = useState([]);

  // List outflow sahabat
  const fetchOutflowSahabats = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/sahabat/outflow-sahabat/${mingguId}`);
      if (response.status === 200) {
        setOutflowSahabats(response.data);
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
    fetchOutflowSahabats();
    const interval = setInterval(() => { // Set up recurring fetch every 5 second
      fetchOutflowSahabats();
    }, 5000);
    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Delete outflow sahabat
  const deleteOutflowSahabat = async (outflowSahabatId) => {
    // Function to delete outflow sahabat
    const performDeletion = async () => {
      try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/sahabat/outflow-sahabat/${outflowSahabatId}`);
        if (response.status === 200) {
          setOutflowSahabats((prevOutflowSahabats) =>
            prevOutflowSahabats.filter((outflowSahabat) => outflowSahabat.id !== outflowSahabatId)
          );
          // Show success message from the server
          Swal.fire('Dipadam!', response.data.message, 'success');
        }
      } 
      catch (error) {
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

  return (
    <div className="tableSection">
      <div className="tambahBtnPlacement"><CreateTrackingOutflowSahabat mingguId={mingguId} /></div>

      <Table responsive>
        <thead>
          <tr>
            <th>Bil.</th>
            <th>Kod Outflow</th>
            <th>Keterangan Kod Outflow</th>
            <th>Amaun (RM)</th>
            <th>Tindakan</th>
          </tr>
        </thead>
        <tbody>
          {outflowSahabats.length === 0 ? (
            <tr><td colSpan="5"><center>Tiada maklumat tracking outflow sahabat. Sila klik butang "Tambah" untuk merekodkan outflow sahabat baharu.</center></td></tr>
          ) : (
            outflowSahabats.map((outflowSahabatsData, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{outflowSahabatsData.kod_outflow.kodOutflow}</td>
                <td>{outflowSahabatsData.kod_outflow.keteranganKodOutflow}</td>
                <td>{outflowSahabatsData.amaunOutflow}</td>
                <td>
                  <EditTrackingOutflowSahabat mingguId={mingguId} outflowSahabatId={outflowSahabatsData.id} outflowSahabat={outflowSahabatsData} />
                  <Button className="delBtn" onClick={() =>deleteOutflowSahabat(outflowSahabatsData.id)}>Padam</Button>{" "}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default IndexTrackingOutflowSahabat;
