import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import SuccessAlert from '../../components/sweet-alert/SuccessAlert';
import ErrorAlert from '../../components/sweet-alert/ErrorAlert';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function EditPembiayaan() {
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

  return(
    <div>
      <Button variant="warning" onClick={openModalEditPembiayaanSahabat}>Kemas Kini</Button>{' '}

      <Modal show={isModalEditPembiayaanSahabat} onHide={closeModalEditPembiayaanSahabat} backdrop="static" keyboard={false}>
        <Modal.Header closeButton><Modal.Title>Kemas Kini Pembiayaan Sahabat</Modal.Title></Modal.Header>
        
        <Modal.Body>
          <Form onSubmit={handleSubmit()} onReset={reset}>
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
              {errors.statusPembiayaan && (<small className="text-danger">{errors.statusPembiayaan.message}</small>)}
            </Form.Group>
          </Form>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalEditPembiayaanSahabat}>Batal</Button>
          <Button variant="primary" onClick={handleSubmit()}>Kemas Kini</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditPembiayaan;