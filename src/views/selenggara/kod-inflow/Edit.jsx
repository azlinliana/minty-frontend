import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import SuccessAlert from '../../components/sweet-alert/SuccessAlert';
import ErrorAlert from '../../components/sweet-alert/ErrorAlert';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function EditKodInflow({kodInflowId}) {
  // ----------FE----------
  // Modal
  const [isModalEditKodInflow, setIsModalEditKodInflow] = useState(false);
  const openModalEditKodInflow = () => setIsModalEditKodInflow(true);
  const closeModalEditKodInflow = () => {
    setIsModalEditKodInflow(false);
  };

  // Form validation
  const {handleSubmit, control, reset, formState: {errors}} = useForm();

  // ----------BE----------
  const updateKodInflow = async (kodInflowInput) => {
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/selenggara/kod-inflow/${kodInflow.id}`, kodInflowInput);
  
      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalEditKodInflow();
        console.log('Kod inflow berjaya dikemas kini');
      }
    } catch (error) {
      ErrorAlert(error);
      console.error('Ralat dalam mengemas kini kod inflow', error);
    }
  };

  return(
    <div>
      <Button className="editBtn" onClick={openModalEditKodInflow}>Kemas Kini</Button>{' '}

      <Modal show={isModalEditKodInflow} onHide={closeModalEditKodInflow} backdrop="static" keyboard={false}>
        <Modal.Header closeButton><Modal.Title>Kemas Kini Kod Inflow</Modal.Title></Modal.Header>
        
        <Modal.Body>
          <Form onSubmit={handleSubmit(updateKodInflow)} onReset={reset}>
          </Form>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalEditKodInflow}>Batal</Button>
          <Button variant="primary" onClick={handleSubmit(updateKodInflow)}>Simpan</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditKodInflow;