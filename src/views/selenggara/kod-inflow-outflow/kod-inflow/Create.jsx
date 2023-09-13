import Form from 'react-bootstrap/Form';

function createKodInflow() {
  return(
    <>
      <div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Kod Inflow</Form.Label>
            <Form.Control type="text" placeholder="Masukkan kod inflow" autoFocus />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Keterangan</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
      </div>
    </>
  )
}

export default createKodInflow