import React, {useState, useEffect} from 'react';
import CreateTrackingInflowIsiRumah from './Create';
import EditTrackingInflowIsiRumah from './Edit';
import ErrorAlert from '../../../../components/sweet-alert/ErrorAlert';
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from 'axios';

function IndexTrackingInflowIsiRumah({isiRumahId}) {
  // ----------BE----------
  // List inflow isi rumah sahabat
  const [trackingInflowIsiRumahSahabats, setTrackingInflowIsiRumahSahabats] = useState([]);
  const fetchInflowIsiRumahSahabats = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/sahabat/inflow-isi-rumah/${isiRumahId}`);
      if (response.status === 200) {
        setTrackingInflowIsiRumahSahabats(response.data);
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
    fetchInflowIsiRumahSahabats();
    // const interval = setInterval(() => { // Set up recurring fetch every 5 second
    //   fetchInflowIsiRumahSahabats();
    // }, 5000);
    // // Cleanup the interval when the component unmounts
    // return () => {
    //   clearInterval(interval);
    // };
  }, []);

  return(
    <div className="tableSection">
      <div className="tambahBtnPlacement"><CreateTrackingInflowIsiRumah /></div>

      <Table responsive>
        <thead>
          <tr>
            <th>Bil.</th>
            <th>Kod Inflow</th>
            <th>Keterangan Inflow</th>
            <th>Amaun (RM)</th>
            <th>Tindakan</th>
          </tr>
        </thead>
        <tbody>
          {trackingInflowIsiRumahSahabats.length === 0 ? (
            <tr><td colSpan="5"><center>Tiada maklumat tracking inflow isi rumah sahabat. Sila klik butang "Tambah" untuk merekodkan inflow isi rumah sahabat baharu.</center></td></tr>
          ) : (
            trackingInflowIsiRumahSahabats.map((trackingInflowIsiRumahSahabatsData, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{trackingInflowIsiRumahSahabatsData.kodInflow}</td>
                <td>{trackingInflowIsiRumahSahabatsData.keteranganKodInflow}</td>
                <td>{trackingInflowIsiRumahSahabatsData.amaunInflow}</td>
                <td>
                  <EditTrackingInflowIsiRumah />
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

export default IndexTrackingInflowIsiRumah;