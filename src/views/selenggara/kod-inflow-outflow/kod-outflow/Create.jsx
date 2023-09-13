import Form from 'react-bootstrap/Form';

function createKodOutflow() {
  return(
    <>
      <div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Kod Outflow</Form.Label>
            <Form.Control type="text" placeholder="Masukkan kod outflow" autoFocus />
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

export default createKodOutflow