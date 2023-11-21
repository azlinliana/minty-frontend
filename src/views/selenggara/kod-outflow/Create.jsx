import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import SuccessAlert from '../../components/sweet-alert/SuccessAlert';
import ErrorAlert from '../../components/sweet-alert/ErrorAlert';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FaPlus} from "react-icons/fa";
import axios from 'axios';

function CreateKodOutflow() {
  // ----------FE----------
  // Modal
  const [isModalCreateKodOutflow, setIsModalCreateKodOutflow] = useState(false);
  const openModalCreateKodOutflow = () => setIsModalCreateKodOutflow(true);
  const closeModalCreateKodOutflow = () => {
    setIsModalCreateKodOutflow(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {handleSubmit, control, reset, formState: {errors}} = useForm();

  // ----------BE----------
  // Create kod outflow
  const createKodOutflow = async(kodOutflowInput) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/selenggara/kod-outflow', kodOutflowInput);  
      if(response.status === 200) {
        SuccessAlert(response.data.message);
        console.log('Kod outflow berjaya ditambah');
        closeModalCreateKodOutflow();
      }
    } catch (error) {
      ErrorAlert(error);
      console.log('Tindak balas API tidak seperti yang diharapkan');
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={openModalCreateKodOutflow}><FaPlus style={{fontSize: "10px"}} /> Tambah</Button>{" "}
      
      <Modal show={isModalCreateKodOutflow} onHide={closeModalCreateKodOutflow} backdrop="static" keyboard={false}>
        <Modal.Header closeButton><Modal.Title>Tambah Kod Outflow</Modal.Title></Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit(createKodOutflow)} onReset={reset}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="kodOutflow">Kod Outflow</Form.Label>

              <Controller
                name="kodOutflow"
                id="kodOutflow"
                control={control}
                defaultValue=""
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
                defaultValue=""
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
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalCreateKodOutflow}>Batal</Button>
          <Button variant="primary" onClick={handleSubmit(createKodOutflow)}>Tambah</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateKodOutflow;