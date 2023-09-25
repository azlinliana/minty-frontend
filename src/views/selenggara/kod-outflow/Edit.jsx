import { useState } from 'react';

import axios from 'axios';

import SelenggaraModal from '../../components/modal/SelenggaraModal';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function EditKodOutflow({kodOutflow, updateKodOutflow}) {
  // Update kod outflow
  const [editedKodOutflow, setEditedKodOutflow] = useState(kodOutflow);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setEditedKodOutflow({
      ...editedKodOutflow,
      [name]: value,
    });
  };

  const handleUpdateKodOutflow = async () => {
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/selenggara/kod-outflow/${kodOutflow.id}`, editedKodOutflow);

      if (response.status === 200) {
        closeModalEditKodOutflow();

        updateKodOutflow(editedKodOutflow);
      }
    } 
    catch (error) {
      console.error('Error in updating kod outflow', error);
    }
  };

  // Modal
  const [isModalEditKodOutflowOpen, setIsModalEditKodOutflowOpen] = useState(false);

  const openModalEditKodOutflow = () => {
    setIsModalEditKodOutflowOpen(true);
  };

  const closeModalEditKodOutflow = () => {
    setIsModalEditKodOutflowOpen(false);
  };

  return(
    <>
      <Button variant="warning" onClick={openModalEditKodOutflow}>Kemas Kini</Button>{' '}

      <SelenggaraModal
        modalTitle="Kemas Kini Kod Outflow"
        modalContent={
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="kod-outflow">Kod Outflow</Form.Label>
              <Form.Control
                type="text"
                id="kod-outflow"
                name="kodOutflow"
                value={ editedKodOutflow.kodOutflow }
                onChange={ handleInputChange }
                placeholder="Masukkan kod outflow"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="keterangan">Keterangan</Form.Label>
              <Form.Control
                as="textarea"
                id="keterangan"
                name="keterangan"
                value={ editedKodOutflow.keterangan }
                onChange={ handleInputChange }
                rows={3}
                placeholder="Masukkan keterangan kod outflow"
              />
            </Form.Group>
          </Form>
        }
        modalFooter={
          <>
            <Button variant="secondary" onClick={closeModalEditKodOutflow}>Batal</Button>

            <Button variant="primary" onClick={handleUpdateKodOutflow}>Kemas Kini</Button>
          </>
        }
        isModalOpen={isModalEditKodOutflowOpen}
        closeModal={closeModalEditKodOutflow}
      />
    </>
  )
}

export default EditKodOutflow;