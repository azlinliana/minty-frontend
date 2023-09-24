import { useState } from 'react';
import axios from 'axios';
import SelenggaraModal from '../../../components/modal/SelenggaraModal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function EditKodInflow({ kodInflow, updateKodInflow }) {
  const [editedKodInflow, setEditedKodInflow] = useState(kodInflow);
  const [isModalEditKodInflowOpen, setIsModalEditKodInflowOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedKodInflow({
      ...editedKodInflow,
      [name]: value,
    });
  };

  const openModalEditKodInflow = () => {
    setIsModalEditKodInflowOpen(true);
  };

  const closeModalEditKodInflow = () => {
    setIsModalEditKodInflowOpen(false);
  };

  const handleUpdateKodInflow = async () => {
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/selenggara/kod-inflow/${kodInflow.id}`, editedKodInflow);

      if (response.status === 200) {
        updateKodInflow(editedKodInflow);

        console.log('Kod Inflow updated successfully');

        closeModalEditKodInflow(); // Close the modal after successful update
      }
    } 
    catch (error) {
      console.error('Error in updating kod inflow', error);
    }
  };

  return (
    <>
      <Button variant="warning" onClick={openModalEditKodInflow}>Kemas Kini</Button>{' '}

      <SelenggaraModal
        modalTitle="Kemas Kini Kod Inflow"
        modalContent={
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="kod-inflow">Kod Inflow</Form.Label>
              <Form.Control
                type="text"
                id="kod-inflow"
                name="kodInflow"
                value={editedKodInflow.kodInflow}
                onChange={handleInputChange}
                placeholder="Masukkan kod inflow"
                autoFocus
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="keterangan">Keterangan</Form.Label>
              <Form.Control
                as="textarea"
                id="keterangan"
                name="keterangan"
                value={editedKodInflow.keterangan}
                onChange={handleInputChange}
                rows={3}
                placeholder="Masukkan keterangan kod inflow"
              />
            </Form.Group>
          </Form>
        }
        modalFooter={
          <>
            <Button variant="secondary" onClick={closeModalEditKodInflow}>Batal</Button>
            <Button variant="primary" onClick={handleUpdateKodInflow}>Kemas Kini</Button>
          </>
        }
        isModalOpen={isModalEditKodInflowOpen}
        closeModal={closeModalEditKodInflow}
      />
    </>
  );
}

export default EditKodInflow;