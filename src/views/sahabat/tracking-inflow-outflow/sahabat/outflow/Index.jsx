import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import CreateTrackingOutflowSahabat from './Create';
import EditTrackingOutflowSahabat from './Edit';
import SuccessAlert from '../../../../components/sweet-alert/SuccessAlert';
import ErrorAlert from '../../../../components/sweet-alert/ErrorAlert';
import DeletionAlert from '../../../../components/sweet-alert/DeletionAlert';
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Swal from 'sweetalert2';
import axios from 'axios';

function IndexTrackingOutflowSahabat({mingguId}) {
  // ----------BE----------
  // List outflow sahabat
  const [trackingOutflowSahabats, setOutflowSahabats] = useState([]);
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

  return(
    <div className="tableSection">
      <div className="tambahBtnPlacement"><CreateTrackingOutflowSahabat mingguId={mingguId} /></div>

      <Table responsive>
        <thead>
          <tr>
            <th>Bil.</th>
            <th>Kod Outflow</th>
            <th>Keterangan Outflow</th>
            <th>Amaun (RM)</th>
            <th>Tindakan</th>
          </tr>
        </thead>
        <tbody>
          {trackingOutflowSahabats.length === 0 ? (
            <tr><td colSpan="5"><center>Tiada maklumat tracking outflow sahabat. Sila klik butang "Tambah" untuk merekodkan outflow sahabat baharu.</center></td></tr>
          ) : (
            trackingOutflowSahabats.map((trackingOutflowSahabatsData, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{trackingOutflowSahabatsData.kodOutflow}</td>
                <td>{trackingOutflowSahabatsData.keteranganKodOutflow}</td>
                <td>{trackingOutflowSahabatsData.amaunOutflow}</td>
                <td>
                  <EditTrackingOutflowSahabat />
                  <Button variant="danger">Padam</Button>{' '}
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