import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import CreateTrackingOutflowIsiRumah from './Create';
import EditTrackingOutflowIsiRumah from './Edit';
import DeletionAlert from '../../../../components/sweet-alert/DeletionAlert';
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from 'axios';

function IndexTrackingOutflowIsiRumah({isiRumahId}) {
  // ----------BE----------
  // List outflow isi rumah sahabat
  const [trackingOutflowIsiRumahSahabats, setTrackingOutflowIsiRumahSahabats] = useState([]);
  const fetchOutflowIsiRumahSahabats = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/sahabat/outflow-isi-rumah/${isiRumahId}`);
      if (response.status === 200) {
        setTrackingOutflowIsiRumahSahabats(response.data);
      }
       else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    }
    catch (error) {
      ErrorAlert(error);
    }
  }

  useEffect(() => {
    fetchOutflowIsiRumahSahabats();
    // const interval = setInterval(() => { // Set up recurring fetch every 5 second
    //   fetchOutflowIsiRumahSahabats();
    // }, 5000);
    // // Cleanup the interval when the component unmounts
    // return () => {
    //   clearInterval(interval);
    // };
  }, []);
  
  return(
    <div className="tableSection">
      <div className="tambahBtnPlacement"><CreateTrackingOutflowIsiRumah /></div>

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
          {trackingOutflowIsiRumahSahabats.length === 0 ? (
            <tr><td colSpan="5"><center>Tiada maklumat tracking outflow isi rumah sahabat. Sila klik butang "Tambah" untuk merekodkan outflow isi rumah sahabat baharu.</center></td></tr>
          ) : (
            trackingOutflowIsiRumahSahabats.map((trackingOutflowIsiRumahSahabatsData, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{trackingOutflowIsiRumahSahabatsData.kodOutflow}</td>
                <td>{trackingOutflowIsiRumahSahabatsData.keteranganKodOutflow}</td>
                <td>{trackingOutflowIsiRumahSahabatsData.amaunOutflow}</td>
                <td>
                  <EditTrackingOutflowIsiRumah />
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

export default IndexTrackingOutflowIsiRumah;
