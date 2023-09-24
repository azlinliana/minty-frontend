import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import CreateHubungan from './Create';
import EditHubungan from './Edit';

import axios from 'axios';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function IndexHubungan() {
  // List hubungan
  const [hubungans, setHubungans] = useState([]);

  const fetchHubungans = async() => {
    await axios.get('http://127.0.0.1:8000/api/selenggara/hubungan')
    .then(({ data }) => {
      setHubungans(data);
    });
  };

  useEffect(() => {
    fetchHubungans() 
  },[]);

  // Update hubungan
  const updateHubungan = (editedHubungan) => {
    const updatedHubungans = hubungans.map((hubungan) =>
      hubungan.id === editedHubungan.id ? editedHubungan : hubungan
    );
    setHubungans(updatedHubungans);
  };

  // Delete hubungan
  const handleDeleteHubungan = async (hubunganId) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/selenggara/hubungan/${hubunganId}`);
      
      setHubungans((prevHubungans) =>
        prevHubungans.filter((hubungan) => hubungan.id !== hubunganId)
      );
    }
    catch (error) {
      console.error('Error in deleting hubungan', error);
    }
  };

  // Back button
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div>
        <h1>Hubungan</h1>

        <Breadcrumb>
          <Breadcrumb.Item href="#">Senarai Selenggara</Breadcrumb.Item>
          <Breadcrumb.Item active>Hubungan</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div>
        <CreateHubungan fetchHubungans={ fetchHubungans } />

        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Hubungan</th>
              <th>Keterangan</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            {hubungans.length > 0 && hubungans.map((row, key) => (
              <tr key={key}>
                <td>{key + 1}</td>
                <td>{row.hubungan}</td>
                <td>{row.keterangan}</td>
                <td>
                  <EditHubungan hubungan={ row } updateHubungan={ updateHubungan } closeModalEditHubungan={() => {}} />

                  <Button variant="danger" onClick={ () => handleDeleteHubungan(row.id) }>Padam</Button>{' '}
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

export default IndexHubungan;