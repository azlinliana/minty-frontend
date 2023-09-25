import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import CreateKodOutflow from "./Create";
import EditKodOutflow from "./Edit";

import axios from 'axios';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function IndexKodOutflow() {
  // List kod outflow
  const [kodOutflows, setKodOutflows] = useState([]);

  const fetchKodOutflows = async() => {
    await axios.get('http://127.0.0.1:8000/api/selenggara/kod-outflow')
    .then(({ data }) => {
      setKodOutflows(data);
    });
  };

  useEffect(() => {
    fetchKodOutflows() 
  },[]);

  // Update kod outflow
  const updateKodOutflow = (editedKodOutflow) => {
    const updatedKodOutflows = kodOutflows.map((kodOutflow) =>
      kodOutflow.id === editedKodOutflow.id ? editedKodOutflow : kodOutflow
    );
    setKodOutflows(updatedKodOutflows);
  };

  // Delete kod outflow
  const handleDeleteKodOutflow = async (kodOutflowId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/selenggara/kod-outflow/${kodOutflowId}`);
      
      setKodOutflows((prevKodOutflows) =>
        prevKodOutflows.filter((kodOutflow) => kodOutflow.id !== kodOutflowId)
      );
    }
    catch (error) {
      console.error('Error in deleting kod outflow', error);
    }
  };

  // Back button
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return(
    <>
      <div>
        <h1>Kod Outflow</h1>

        <Breadcrumb>
          <Breadcrumb.Item href="#">Senarai Selenggara</Breadcrumb.Item>
          <Breadcrumb.Item active>Kod Outflow</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <CreateKodOutflow fetchKodOutflows={ fetchKodOutflows } />

        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Kod Outflow</th>
              <th>Keterangan</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            {kodOutflows.length > 0 && kodOutflows.map((row, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{row.kodOutflow}</td>
                <td>{row.keterangan}</td>
                <td>
                  <EditKodOutflow kodOutflow={ row } updateKodOutflow= { updateKodOutflow } closeModalEditKodOutflow={() => {}} />

                  <Button variant="danger" onClick={ () => handleDeleteKodOutflow(row.id) }>Padam</Button>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        <Button variant="secondary" onClick={ goBack }>Kembali</Button>{' '}
      </div>
    </>
  )
}

export default IndexKodOutflow;