import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import SuccessAlert from '../../components/sweet-alert/SuccessAlert';
import ErrorAlert from '../../components/sweet-alert/ErrorAlert';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function EditKodOutflow({kodOutflow}) {
  // ----------FE----------
  // Modal
  const [isModalEditKodOutflow, setIsModalEditKodOutflow] = useState(false);
  const openModalEditKodOutflow = () => setIsModalEditKodOutflow(true);
  const closeModalEditKodOutflow = () => {
    setIsModalEditKodOutflow(false);
  };

  // Form validation
  const {handleSubmit, control, reset, formState: {errors}} = useForm();

  // ----------BE----------
  const updateKodOutflow = async (kodOutflowInput) => {
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/selenggara/kod-outflow/${kodOutflow.id}`, kodOutflowInput);
  
      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalEditKodOutflow();
        console.log('Kod outflow berjaya dikemas kini');
      }
    } catch (error) {
      ErrorAlert(error);
      console.error('Ralat dalam mengemas kini kod outflow', error);
    }
  };

  return(
    <div>
      <Button variant="warning" onClick={openModalEditKodOutflow}>Kemas Kini</Button>{' '}

      <Modal show={isModalEditKodOutflow} onHide={closeModalEditKodOutflow} backdrop="static" keyboard={false}>
        <Modal.Header closeButton><Modal.Title>Kemas Kini Kod Outflow</Modal.Title></Modal.Header>
        
        <Modal.Body>
          <Form onSubmit={handleSubmit(updateKodOutflow)} onReset={reset}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="kodOutflow">Kod Outflow</Form.Label>

              <Controller
                name="kodOutflow"
                id="kodOutflow"
                control={control}
                defaultValue={kodOutflow.kodOutflow}
                rules={{required: 'Kod outflow diperlukan'}}
                render={({field: {onChange, value}}) => (
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan kod outflow"
                    autoFocus
                  />
                )}
              />
              {errors.kodOutflow && ( <small className="text-danger">{errors.kodOutflow.message}</small> )}            
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="keteranganKodOutflow">Keterangan Kod Outflow</Form.Label>

              <Controller
                name="keteranganKodOutflow"
                id="keteranganKodOutflow"
                control={control}
                defaultValue={kodOutflow.keteranganKodOutflow}
                rules={{required: 'Keterangan kod outflow diperlukan'}}
                render={({field: {onChange, value}}) => (
                  <Form.Control
                    as="textarea"
                    onChange={onChange}
                    value={value}
                    rows={3}
                    placeholder="Masukkan keterangan kod outflow"
                  />
                )}
              />
              {errors.keteranganKodOutflow && ( <small className="text-danger">{errors.keteranganKodOutflow.message}</small> )}
            </Form.Group>

            <Form.Group>
              <Form.Label>Status Kod Outflow</Form.Label>

              <Controller
                name="statusKodOutflow"
                control={control}
                defaultValue={kodOutflow.statusKodOutflow}
                render={({field: {onChange}}) => (
                  <Form.Select onChange={onChange} defaultValue={kodOutflow.statusKodOutflow}>
                    <option value="" disabled>--Pilih Kod Outflow--</option>
                    <option value="AKTIF">AKTIF</option>
                    <option value="TIDAK AKTIF">TIDAK AKTIF</option>
                  </Form.Select>
                )}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalEditKodOutflow}>Batal</Button>
          <Button variant="primary" onClick={handleSubmit(updateKodOutflow)}>Kemas Kini</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditKodOutflow;