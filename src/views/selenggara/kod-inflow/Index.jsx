import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import CreateKodInflow from "./Create";
import EditKodInflow from "./Edit";

import axios from 'axios';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function IndexKodInflow() {
  // List kod inflow
  const [kodInflows, setKodInflows] = useState([]);

  const fetchKodInflows = async() => {
    await axios.get('http://127.0.0.1:8000/api/selenggara/kod-inflow')
    .then(({ data }) => {
      setKodInflows(data);
    });
  };

  useEffect(() => {
    fetchKodInflows() 
  },[]);

  // Update kod inflow
  const updateKodInflow = (editedKodInflow) => {
    const updatedKodInflows = kodInflows.map((kodInflow) =>
      kodInflow.id === editedKodInflow.id ? editedKodInflow : kodInflow
    );
    setKodInflows(updatedKodInflows);
  };

  // Delete kod inflow
  const handleDeleteKodInflow = async (kodInflowId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/selenggara/kod-inflow/${kodInflowId}`);
      
      setKodInflows((prevKodInflows) =>
        prevKodInflows.filter((kodInflow) => kodInflow.id !== kodInflowId)
      );
    }
    catch (error) {
      console.error('Error in deleting kod inflow', error);
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
        <h1>Kod Inflow</h1>

        <Breadcrumb>
          <Breadcrumb.Item href="#">Senarai Selenggara</Breadcrumb.Item>
          <Breadcrumb.Item active>Kod Inflow</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <CreateKodInflow fetchKodInflows={ fetchKodInflows } />

        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Kod Inflow</th>
              <th>Keterangan</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            {kodInflows.length > 0 && kodInflows.map((row, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{row.kodInflow}</td>
                <td>{row.keterangan}</td>
                <td>
                  <EditKodInflow kodInflow={ row } updateKodInflow= { updateKodInflow } closeModalEditKodInflow={() => {}} />

                  <Button variant="danger" onClick={ () => handleDeleteKodInflow(row.id) }>Padam</Button>{' '}
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

export default IndexKodInflow;