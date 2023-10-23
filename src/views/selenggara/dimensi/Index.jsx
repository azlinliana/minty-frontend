import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import CreateDimensi from "./Create";
import EditDimensi from "./Edit";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import axios from 'axios';

function IndexDimensi() {
  // ----------FE----------
  const [dimensis, setDimensis] = useState([]);

  // ----------BE----------
  // List dimensi
  const fetchDimensis = async() => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/selenggara/dimensi');
      setDimensis(response.data);
    }
    catch(error) {
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

  // Update dimensi
  const updateDimensi = (editedDimensi) => {
    const updatedDimensis = dimensis.map((dimensi) =>
      dimensi.id === editedDimensi.id ? editedDimensi : dimensi
    );
    setDimensis(updatedDimensis);
  };

  // Delete dimensi
  const handleDeleteDimensi = async (dimensiId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/selenggara/dimensi/${dimensiId}`);
      
      setDimensis((prevDimensis) =>
        prevDimensis.filter((dimensi) => dimensi.id !== dimensiId)
      );
    }
    catch (error) {
      console.error('Error in deleting dimensi', error);
    }
  };

  // Back button
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div>
        <h1>Dimensi</h1>

        <Breadcrumb>
          <Breadcrumb.Item href="#">Senarai Selenggara</Breadcrumb.Item>
          <Breadcrumb.Item active>Dimensi</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <CreateDimensi fetchDimensis={ fetchDimensis } />

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
            {dimensis.length > 0 && dimensis.map((dimensisData, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{dimensisData.kodDimensi}</td>
                <td>{dimensisData.keteranganDimensi}</td>
                <td>{dimensisData.statusDimensi}</td>
                <td>
                  <EditDimensi dimensi={ dimensisData } updateDimensi= { updateDimensi } closeModalEditDimensi={() => {}} />

                  <Button variant="danger" onClick={ () => handleDeleteDimensi(dimensisData.id) }>Padam</Button>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Button variant="secondary" onClick={ goBack }>Kembali</Button>{' '}
      </div>
    </div>
  );
}

export default IndexDimensi;