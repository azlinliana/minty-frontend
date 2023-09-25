import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function IndexSelenggara() {
  // Link pages
  const navigate = useNavigate();
  
  const clickLihatKodInflow = () => navigate('/kod-inflow');
  const clickLihatKodOutflow = () => navigate('/kod-outflow');

  const clickLihatDimensi = () => navigate('/dimensi');
  const clickLihatHubungan = () => navigate('/hubungan');
  // const clickLihatPinjamanAktiviti = () => navigate('/pinjaman-aktiviti');

  // Back button
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>Senarai Selenggara</h1>

      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Keterangan</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Kod Inflow</td>
              <td><Button variant="primary" onClick={clickLihatKodInflow}>Lihat</Button>{' '}</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Kod Outflow</td>
              <td><Button variant="primary" onClick={clickLihatKodOutflow}>Lihat</Button>{' '}</td>
            </tr>

            <tr>
              <td>3</td>
              <td>Dimensi</td>
              <td><Button variant="primary" onClick={clickLihatDimensi}>Lihat</Button>{' '}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Hubungan</td>
              <td><Button variant="primary" onClick={clickLihatHubungan}>Lihat</Button>{' '}</td>
            </tr>
            {/* <tr>
              <td>5</td>
              <td>Pinjaman Aktiviti</td>
              <td><Button variant="primary" onClick={clickLihatPinjamanAktiviti}>Lihat</Button>{' '}</td>
            </tr> */}
          </tbody>
        </Table>

        <Button variant="secondary" onClick={ goBack }>Kembali</Button>{' '}
      </div>
    </>
  )
}

export default IndexSelenggara