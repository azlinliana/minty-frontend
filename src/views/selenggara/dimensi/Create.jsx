import { useState } from 'react';

import axios from 'axios';

import SelenggaraModal from "../../components/modal/SelenggaraModal";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CreateDimensi({ fetchDimensis }) {
  // Create dimensi
  const[dimensiInput, setDimensiInput] = useState({
    dimensi: '',
    keterangan: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDimensiInput({
      ...dimensiInput,
      [name]: value,
    });
  };

  const createDimensi = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/selenggara/dimensi', dimensiInput);

      if (response.status === 200) {
        console.log('Dimensi created successfully');
      }

      closeModalCreateDimensi();

      fetchDimensis();
    } 
    catch (error) {
      console.error('Error in creating dimensi', error);
    }
  };

  // Modal
  const [isModalCreateDimensi, setIsModalCreateDimensi] = useState(false);

  const openModalCreateDimensi = () => {
    setIsModalCreateDimensi(true);
  };

  const closeModalCreateDimensi = () => {
    setIsModalCreateDimensi(false);
  };

  return (
    <>
      <Button variant="primary" onClick={openModalCreateDimensi}>Tambah</Button>{' '}

      <SelenggaraModal
        modalTitle="Tambah Dimensi"
        modalContent={
          <Form>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="dimensi">Dimensi</Form.Label>
              <Form.Control
                type="text"
                id="dimensi"
                name="dimensi"
                value={dimensiInput.dimensi}
                onChange={handleInputChange}
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
                value={dimensiInput.keterangan}
                onChange={handleInputChange}
                rows={3}
                placeholder="Masukkan keterangan dimensi"
              />
            </Form.Group>
          </Form>
        }
        modalFooter={
          <>
            <Button variant="secondary" onClick={closeModalCreateDimensi}>Batal</Button>

            <Button variant="primary" onClick={createDimensi}>Tambah</Button>
          </>
        }
        isModalOpen={isModalCreateDimensi}
        closeModal={closeModalCreateDimensi}
      />
    </>
  );
}

export default CreateDimensi;