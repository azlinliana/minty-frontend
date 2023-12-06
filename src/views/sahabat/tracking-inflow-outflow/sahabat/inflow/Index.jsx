import React, {useState, useEffect} from 'react';
import "../../../sahabat.css";
import CreateTrackingInflowSahabat from './Create';
import EditTrackingInflowSahabat from './Edit';
import ErrorAlert from '../../../../components/sweet-alert/ErrorAlert';
import DeletionAlert from '../../../../components/sweet-alert/DeletionAlert';
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import axios from 'axios';
import Swal from 'sweetalert2';

function IndexTrackingInflowSahabat({mingguId}) {
  // ----------BE----------
  const [trackingInflowSahabats, setTrackingInflowSahabats] = useState([]);

  // List inflow sahabat
  const fetchInflowSahabats = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/sahabat/inflow-sahabat/${mingguId}`);
      if (response.status === 200) {
        setTrackingInflowSahabats(response.data);
      }
       else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    }
    catch (error) {
      console.log(error);
      ErrorAlert(error);
    }
  };

  useEffect(() => {
    fetchInflowSahabats();
    const interval = setInterval(() => { // Set up recurring fetch every 5 second
      fetchInflowSahabats();
    }, 5000);
    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Delete inflow sahabat
  const deleteInflowSahabat = async (trackingInflowSahabatId) => {
    // Function to delete inflow sahabat
    const performDeletion = async () => {
      try {
        const response = await axios.delete(`http://127.0.0.1:8000/api/sahabat/inflow-sahabat/${trackingInflowSahabatId}`);
        if (response.status === 200) {
          setTrackingInflowSahabats((prevTrackingInflowSahabats) =>
            prevTrackingInflowSahabats.filter((trackingInflowSahabat) => trackingInflowSahabat.id !== trackingInflowSahabatId)
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
    <div className="tableSection">
      <div className="tambahBtnPlacement"><CreateTrackingInflowSahabat mingguId={mingguId} /></div>

      <Table responsive>
        <thead>
          <tr>
            <th>Bil.</th>
            <th>Kod Inflow</th>
            <th>Keterangan Kod Inflow</th>
            <th>Kod Inflow Terperinci</th>
            <th>Maklumat Terperinci</th>
            <th>Amaun (RM)</th>
            <th>Tindakan</th>
          </tr>
        </thead>
        <tbody>
          {trackingInflowSahabats.length === 0 ? (
            <tr><td colSpan="7"><center>Tiada maklumat tracking inflow sahabat. Sila klik butang "Tambah" untuk merekodkan inflow sahabat baharu.</center></td></tr>
          ) : (
            trackingInflowSahabats.map((trackingInflowSahabatsData, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{trackingInflowSahabatsData.kod_inflow.kodInflow}</td>
                <td>{trackingInflowSahabatsData.kod_inflow.keteranganKodInflow}</td>
                <td></td>
                <td>{trackingInflowSahabatsData.keteranganKodInflow}</td>
                <td>{trackingInflowSahabatsData.amaunInflow}</td>
                <td>
                  <EditTrackingInflowSahabat mingguId={mingguId} inflowSahabatId={trackingInflowSahabatsData.id} trackingInflowSahabat={trackingInflowSahabatsData} />
                  <Button className="delBtn" onClick={() =>deleteInflowSahabat(trackingInflowSahabatsData.id)}>Padam</Button>{" "}
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}

export default IndexTrackingInflowSahabat;