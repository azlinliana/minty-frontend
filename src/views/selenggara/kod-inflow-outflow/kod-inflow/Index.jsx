import Button from 'react-bootstrap/Button'
import Table from 'react-bootstrap/Table'

function IndexKodInflow() {
  return (
    <>
      <div>
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
            <tr>
              <td>1</td>
              <td></td>
              <td></td>
              <td>
                <Button variant="warning">Kemas Kini</Button>{' '}
                <Button variant="danger">Padam</Button>{' '}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  )
}

export default IndexKodInflow