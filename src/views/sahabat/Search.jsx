import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function SearchSahabat() {
  // Search Sahabat's No. Kad Pengenalan
  const [noKadPengenalan, setNoKadPengenalan] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    axios.get(`http://127.0.0.1:8000/api/sahabat/search/${noKadPengenalan}`)
    .then((response) => {
      const data = response.data;

      navigate('/result-sahabat', { state: {results: data} });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }

  return(
    <>
      <h1>Inflow/Outflow</h1>

      <Form>
        <Form.Control
          type="text"
          placeholder="Carian No. Kad Pengenalan Sahabat"
          className="mr-sm-2"
          value={noKadPengenalan}
          onChange={(e) => setNoKadPengenalan(e.target.value)}
        />

        <Button variant="primary" onClick={handleSearch}>
          Cari
        </Button>
      </Form>
    </>
  );
}

export default SearchSahabat