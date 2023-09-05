import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function IndexSelenggara() {
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
              <td>Kod Inflow/Kod Outflow</td>
              <td><Button variant="primary">Lihat</Button>{' '}</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Dimensi</td>
              <td><Button variant="primary">Lihat</Button>{' '}</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Hubungan</td>
              <td><Button variant="primary">Lihat</Button>{' '}</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Pinjaman Aktiviti</td>
              <td><Button variant="primary">Lihat</Button>{' '}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default IndexSelenggara