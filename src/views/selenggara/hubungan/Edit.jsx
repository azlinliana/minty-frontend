import { useState } from 'react';

import axios from 'axios';

import SelenggaraModal from "../../components/modal/SelenggaraModal";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function EditHubungan({ hubungan, updateHubungan }) {
  // Update hubungan
  const [editedHubungan, setEditedHubungan] = useState(hubungan);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedHubungan({
      ...editedHubungan,
      [name]: value,
    });
  };

  const handleUpdateHubungan = async () => {
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/selenggara/hubungan/${hubungan.id}`, editedHubungan);

      if (response.status === 200) {
        closeModalEditHubungan();

        updateHubungan(editedHubungan);
      }
      } catch (error) {
        console.error('Error in updating hubungan', error);
      }
  };

  // Modal
  const [isModalEditHubunganOpen, setIsModalEditHubunganOpen] = useState(false);

  const openModalEditHubungan = () => {
    setIsModalEditHubunganOpen(true);
  };

  const closeModalEditHubungan = () => {
    setIsModalEditHubunganOpen(false);
  };

  return(
    <>
      <Button variant="warning" onClick={ openModalEditHubungan }>Kemas Kini</Button>{' '}

      <SelenggaraModal
        modalTitle="Kemas Kini Hubungan"
        modalContent={
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="hubungan">Hubungan</Form.Label>
              <Form.Control
                type="text"
                id="hubungan"
                name="hubungan"
                value={ editedHubungan.hubungan }
                onChange={ handleInputChange }
                placeholder="Masukkan jenis hubungan"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="keterangan">Keterangan</Form.Label>
              <Form.Control
                as="textarea"
                id="keterangan"
                name="keterangan"
                value={ editedHubungan.keterangan }
                onChange={ handleInputChange }
                rows={3}
                placeholder="Masukkan keterangan hubungan"
              />
            </Form.Group>
          </Form>
        }
        modalFooter={
          <>
            <Button variant="secondary" onClick={ closeModalEditHubungan }>Batal</Button>

            <Button variant="primary" onClick={ handleUpdateHubungan }>Kemas Kini</Button>
          </>
        }
        isModalOpen={isModalEditHubunganOpen}
        closeModal={ closeModalEditHubungan }
      />
    </>
  );
}

export default EditHubungan;