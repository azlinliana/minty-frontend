import { useNavigate } from 'react-router-dom'

import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function SearchSahabat() {
  // Temporary link - Removed when carian functionality work
  const navigate = useNavigate();
  const clickCariKadPengenalan = () => navigate('/result-sahabat');
  
  return(
    <>
      <h1>Inflow/Outflow</h1>

      <Form>
        <Form.Control
          type="text"
          placeholder="Search..."
          className="mr-sm-2"
        />
        <Button variant="primary" onClick={clickCariKadPengenalan}>
          Search
        </Button>
      </Form>
    </>
  )
}

export default SearchSahabat