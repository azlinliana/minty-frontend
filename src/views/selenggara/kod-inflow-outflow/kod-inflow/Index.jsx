import { useState } from 'react';
import { useEffect } from 'react';

import CreateKodInflow from './Create';
import EditKodInflow from './Edit';

import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

function IndexKodInflow() {
  // List kod inflow
  const [kodInflows, setKodInflows] = useState([]);

  const fetchKodInflows = async () => {
    await axios.get('http://127.0.0.1:8000/api/selenggara/kod-inflow')
      .then(({ data }) => {
        setKodInflows(data);
      });
  };

  useEffect(() => {
    fetchKodInflows();
  }, []);

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
    } catch (error) {
      console.error('Error in deleting kod inflow', error);
    }
  };

  return (
    <>
      <div>
        <CreateKodInflow fetchKodInflows={fetchKodInflows} />

        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Kod</th>
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
                  
                  <Button variant="danger" onClick={() => handleDeleteKodInflow(row.id)}>Padam </Button>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default IndexKodInflow;