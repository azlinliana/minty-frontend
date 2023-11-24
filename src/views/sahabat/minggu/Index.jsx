import React, {useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import "../sahabat.css";
import CreateMinggu from "./Create";
import ErrorAlert from '../../components/sweet-alert/ErrorAlert';
import DeletionAlert from "../../components/sweet-alert/DeletionAlert";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Alert from 'react-bootstrap/Alert';
import axios from 'axios';

function IndexMinggu({resultSahabat, sahabatId, pembiayaanId}) {
  // ----------FE----------
  // Navigate to tracking pages along with sahabat, pembiayaan and minggu data
  const navigate = useNavigate();
  const clickKemasKiniMinggu = (mingguId) => {
    navigate('/tracking-inflow-outflow', {state: {resultSahabat, sahabatId, pembiayaanId, mingguId}});
  };

  // ----------BE----------
  // List minggu pembiayaan sahabat
  const [mingguPembiayaanSahabats, setMingguPembiayaanSahabats] = useState([]);
  const fetchMingguPembiayaanSahabats = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/api/sahabat/${sahabatId}/pembiayaan/${pembiayaanId}/minggu`);
      if (response.status === 200) {
        setMingguPembiayaanSahabats(response.data);
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
    fetchMingguPembiayaanSahabats();
    const interval = setInterval(() => { // Set up recurring fetch every 5 second
      fetchMingguPembiayaanSahabats();
    }, 5000);
    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(interval);
    };
  }, []);

  return(
    <div>
      <div className="tableSection">
        <div className="tambahBtnPlacement"><CreateMinggu sahabatId={sahabatId} pembiayaanId={pembiayaanId} /></div>

        {mingguPembiayaanSahabats.some(
          (minggu) =>
            minggu.totalInflow === 'Tiada maklumat' || minggu.totalOutflow === 'Tiada maklumat') 
            && (
              <Alert variant="danger">Sila tambah maklumat untuk minggu{" "}
                <span className="trackingMinggu">
                  {mingguPembiayaanSahabats
                    .filter(
                      (minggu) =>
                        minggu.totalInflow === 'Tiada maklumat' || minggu.totalOutflow === 'Tiada maklumat'
                    )
                    .map((minggu) => minggu.bilanganMinggu)
                    .sort((a, b) => a - b) // Add this line for sorting in ascending order
                    .join(', ')
                  }
                </span>.
                Klik butang "Kemas Kini" bagi minggu berkenaan.
              </Alert>
            )
        }

        <Table responsive>
          <thead>
            <tr>
              <th>Minggu</th>
              <th>Jumlah Inflow (RM)</th>
              <th>Jumlah Outflow (RM)</th>
              <th>Tarikh Tracking</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            {mingguPembiayaanSahabats.length === 0 ? (
              <tr><td colSpan="5"><center>Tiada maklumat minggu tracking. Sila klik butang "Tambah Minggu" untuk merekodkan minggu baharu.</center></td></tr>
            ) : (
              mingguPembiayaanSahabats.map((mingguPembiayaanSahabatsData, key) => (
                <tr key={key} className={mingguPembiayaanSahabatsData.totalOutflow === 'Tiada maklumat' ? 'warningRow' : ''}>
                  <td>{mingguPembiayaanSahabatsData.bilanganMinggu}</td>
                  <td>{mingguPembiayaanSahabatsData.totalInflow}</td>
                  <td>{mingguPembiayaanSahabatsData.totalOutflow}</td>
                  <td>{new Date(mingguPembiayaanSahabatsData.tarikhBorangMinggu).toLocaleDateString('en-GB')}</td>
                  <td>
                    <Button className="editBtn" onClick={() => clickKemasKiniMinggu(mingguPembiayaanSahabatsData.id)}>Kemas Kini</Button>{" "}
                    <Button className="delBtn">Padam</Button>{" "}
                  </td>
                </tr>
              ))              
            )}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default IndexMinggu;
