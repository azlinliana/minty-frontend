import { useNavigate } from 'react-router-dom';

import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';

function PinjamanAktiviti() {
  // Back button
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return(
    <>
      <h1>Pinjaman Aktiviti</h1>

      <Breadcrumb>
        <Breadcrumb.Item href="#">Senarai Selenggara</Breadcrumb.Item>
        <Breadcrumb.Item active>Pinjaman Aktiviti</Breadcrumb.Item>
      </Breadcrumb>

      <p>Perlu kenal pasti keperluan page ini</p>
      
      <Button variant="secondary" onClick={ goBack }>Kembali</Button>{' '}
    </>
  )
}

export default PinjamanAktiviti