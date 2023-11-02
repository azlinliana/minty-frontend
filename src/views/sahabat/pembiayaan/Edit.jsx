import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import SuccessAlert from '../../components/sweet-alert/SuccessAlert';
import ErrorAlert from '../../components/sweet-alert/ErrorAlert';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function EditPembiayaan({pembiayaanSahabats}) {
  // ----------FE----------
  // Modal
  const [isModalEditPembiayaanSahabat, setIsModalEditPembiayaanSahabat] = useState(false);
  const openModalEditPembiayaanSahabat = () => setIsModalEditPembiayaanSahabat(true);
  const closeModalEditPembiayaanSahabat = () => {
    setIsModalEditPembiayaanSahabat(false);
  };

  // Form validation
  const {handleSubmit, control, reset, formState: {errors}} = useForm();

  // ----------BE----------
  const updatePembiayaanSahabat = async (pembiayaanSahabatInput) => {
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/selenggara/dimensi/${dimensi.id}`, pembiayaanSahabatInput);
  
      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalEditPembiayaanSahabat();
        console.log('Pembiayaan sahabat berjaya dikemas kini');
      }
    } catch (error) {
      ErrorAlert(error);
      console.error('Ralat dalam mengemas kini pembiayaan sahabat', error);
    }
  };

  return(
    <div>
      <Button variant="warning" onClick={openModalEditPembiayaanSahabat}>Kemas Kini</Button>{' '}

      <Modal show={isModalEditPembiayaanSahabat} onHide={closeModalEditPembiayaanSahabat} backdrop="static" keyboard={false}>
        <Modal.Header closeButton><Modal.Title>Kemas Kini Pembiayaan Sahabat</Modal.Title></Modal.Header>
        
        <Modal.Body>
          <Form onSubmit={handleSubmit(updatePembiayaanSahabat)} onReset={reset}>
            <Form.Group>
              <Form.Label>Skim Pembiayaan</Form.Label>
              <Controller
                id="skimPembiayaan"
                name="skimPembiayaan"
                control={control}
                defaultValue=""
                rules={{required: 'Skim pembiayaan sahabat diperlukan.'}}
                render={({ field: {onChange}}) => (
                  <Form.Select onChange={onChange} defaultValue="">
                    <option value="" disabled>--Pilih Skim Pembiayaan--</option>
                    <option value="TIADA PEMBIAYAAN">Tiada Pembiayaan</option>
                    <option value="I-MUDA">i-Muda</option>
                    <option value="I-MESRA">i-Mesra</option>
                  </Form.Select>
                )}
              />
            {errors.skimPembiayaan && (<small className="text-danger">{errors.skimPembiayaan.message}</small>)}
            </Form.Group>

            <Form.Group>
              <Form.Label>Status Pembiayaan</Form.Label>

              <Controller
                id="statusPembiayaan"
                name="statusPembiayaan"
                control={control}
                defaultValue=""
                rules={{required: 'Status pembiayaan sahabat diperlukan.'}}
                render={({ field: {onChange}}) => (
                  <Form.Select onChange={onChange} defaultValue="">
                    <option value="" disabled>--Pilih Status Pembiayaan--</option>
                    <option value="AKTIF">AKTIF</option>
                    <option value="SELESAI">SELESAI</option>
                  </Form.Select>
                )}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalEditPembiayaanSahabat}>Batal</Button>
          <Button variant="primary" onClick={handleSubmit(updatePembiayaanSahabat)}>Kemas Kini</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditPembiayaan;