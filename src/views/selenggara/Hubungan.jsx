import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import SelenggaraModal from '../components/modal/SelenggaraModal'

import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

function Hubungan() {
  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <h1>Hubungan</h1>

      <Breadcrumb>
        <Breadcrumb.Item href="#">Senarai Selenggara</Breadcrumb.Item>
        <Breadcrumb.Item active>Hubungan</Breadcrumb.Item>
      </Breadcrumb>

      {/* Modal start */}
      <Button variant="primary" onClick={openModal}>
        Tambah
      </Button>

      <SelenggaraModal
        modalTitle="Tambah Hubungan"
        modalContent={
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="hubungan">Hubungan</Form.Label>
              <Form.Control
                type="text"
                id="hubungan"
                placeholder="Masukkan jenis hubungan"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="keterangan">Keterangan</Form.Label>
              <Form.Control
                as="textarea"
                id="keterangan"
                rows={3}
                placeholder="Masukkan keterangan hubungan"
              />
            </Form.Group>
          </Form>
        }
        modalFooter={
          <>
            <Button variant="secondary" onClick={closeModal}>Batal</Button>
            <Button variant="primary" type="submit">Tambah</Button>
          </>
        }
        isModalOpen={isModalOpen}
        closeModal={closeModal}
      />
      {/* Modal end */}

      <div>
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
            <tr>
              <td></td>
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
  );
}

export default Hubungan