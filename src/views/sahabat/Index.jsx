import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'

function IndexSahabat() {
  return(
    <>
      <h1>Senarai Inflow/Outflow</h1>
      <Table responsive>
        <thead>
          <tr>
            <th>Bil.</th>
            <th>Nama & No. KP</th>
            <th>No. Sahabat</th>
            <th>Wilayah</th>
            <th>Cawangan</th>
            <th>Pusat</th>
            <th>Kumpulan</th>
            <th>Jumlah Minggu Tracking</th>
            <th>Tindakan</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              Rusiah binti Reduansa<br></ br>
              660828125772
            </td>
            <td>15601998</td>
            <td>Sabah</td>
            <td>Lahad Datu</td>
            <td>An Nur 2</td>
            <td>Nur Jannah</td>
            <td>4</td>
            <td><Button variant="primary">Lihat</Button>{' '}</td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default IndexSahabat