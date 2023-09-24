import { useState } from 'react';

import axios from 'axios';

import SelenggaraModal from "../../components/modal/SelenggaraModal";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function EditDimensi({dimensi, updateDimensi}) {
  // Update dimensi
  const [editedDimensi, setEditedDimensi] = useState(dimensi);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setEditedDimensi({
      ...editedDimensi,
      [name]: value,
    });
  };

  const handleUpdateDimensi = async () => {
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/selenggara/dimensi/${dimensi.id}`, editedDimensi);

      if (response.status === 200) {
        closeModalEditDimensi();

        updateDimensi(editedDimensi);

        console.log('Dimensi updated successfully');
      }
    } 
    catch (error) {
      console.error('Error in updating dimensi', error);
    }
  };

  // Modal
  const [isModalEditDimensiOpen, setIsModalEditDimensiOpen] = useState(false);

  const openModalEditDimensi = () => {
    setIsModalEditDimensiOpen(true);
  };

  const closeModalEditDimensi = () => {
    setIsModalEditDimensiOpen(false);
  };

  return (
    <>
      <Button variant="warning" onClick={openModalEditDimensi}>Kemas Kini</Button>{' '}

      <SelenggaraModal
        modalTitle="Kemas Kini Dimensi"
        modalContent={
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="dimensi">Dimensi</Form.Label>
              <Form.Control
                type="text"
                id="dimensi"
                name="dimensi"
                value={ editedDimensi.dimensi }
                onChange={ handleInputChange }
                placeholder="Masukkan jenis dimensi"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="keterangan">Keterangan</Form.Label>
              <Form.Control
                as="textarea"
                id="keterangan"
                name="keterangan"
                value={ editedDimensi.keterangan }
                onChange={ handleInputChange }
                rows={3}
                placeholder="Masukkan keterangan dimensi"
              />
            </Form.Group>
          </Form>
        }
        modalFooter={
          <>
            <Button variant="secondary" onClick={closeModalEditDimensi}>Batal</Button>

            <Button variant="primary" onClick={handleUpdateDimensi}>Kemas Kini</Button>
          </>
        }
        isModalOpen={isModalEditDimensiOpen}
        closeModal={closeModalEditDimensi}
      />
    </>
  );
}

export default EditDimensi;