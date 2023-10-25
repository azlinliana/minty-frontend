import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import SuccessAlert from '../../components/sweet-alert/SuccessAlert';
import ErrorAlert from '../../components/sweet-alert/ErrorAlert';

function EditDimensi({dimensi}) {
  // ----------FE----------
  // Modal
  const [isModalEditDimensi, setIsModalEditDimensi] = useState(false);
  const openModalEditDimensi = () => setIsModalEditDimensi(true);
  const closeModalEditDimensi = () => {
    setIsModalEditDimensi(false);
  };

  // Form validation
  const { handleSubmit, control, reset, formState: { errors } } = useForm();

  // ----------BE----------
  const updateDimensi = async (dimensiInput) => {
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/selenggara/dimensi/${dimensi.id}`, dimensiInput);
  
      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalEditDimensi();
        console.log('Dimensi updated successfully');
      }
    } catch (error) {
      ErrorAlert(error);
      console.error('Error in updating dimensi', error);
    }
  };

  return (
    <div>
      <Button variant="warning" onClick={openModalEditDimensi}>Kemas Kini</Button>{' '}

      <Modal show={isModalEditDimensi} onHide={closeModalEditDimensi} backdrop="static" keyboard={false}>
        <Modal.Header closeButton><Modal.Title>Kemas Kini Dimensi</Modal.Title></Modal.Header>
        
        <Modal.Body>
          <Form onSubmit={handleSubmit(updateDimensi)} onReset={reset}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="kodDimensi">Kod Dimensi</Form.Label>
              <Controller
                name="kodDimensi"
                id="kodDimensi"
                control={control}
                defaultValue={dimensi.kodDimensi}
                rules={{required: 'Kod dimensi is required'}}
                render={({field: {onChange, value}}) => (
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan kod dimensi"
                    autoFocus
                  />
                )}
              />
              {errors.kodDimensi && ( <small className="text-danger">{errors.kodDimensi.message}</small> )}            
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="keteranganDimensi">Keterangan Dimensi</Form.Label>
              <Controller
                name="keteranganDimensi"
                id="keteranganDimensi"
                control={control}
                defaultValue={dimensi.keteranganDimensi}
                rules={{ required: 'Keterangan dimensi is required' }}
                render={({ field: { onChange, value } }) => (
                  <Form.Control
                    as="textarea"
                    onChange={onChange}
                    value={value}
                    rows={3}
                    placeholder="Masukkan keterangan dimensi"
                  />
                )}
              />
              {errors.keteranganDimensi && ( <small className="text-danger">{errors.keteranganDimensi.message}</small> )}
            </Form.Group>

            <Form.Group>
              <Form.Label>Status Dimensi</Form.Label>
              <Controller
                name="statusDimensi"
                control={control}
                defaultValue={dimensi.statusDimensi}
                render={({ field: { onChange } }) => (
                  <Form.Select onChange={onChange} defaultValue={dimensi.statusDimensi}>
                    <option value="" disabled>--Pilih Dimensi--</option>
                    <option value="AKTIF">AKTIF</option>
                    <option value="TIDAK AKTIF">TIDAK AKTIF</option>
                  </Form.Select>
                )}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalEditDimensi}>Batal</Button>
          <Button variant="primary" onClick={handleSubmit(updateDimensi)}>Kemas Kini</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditDimensi;