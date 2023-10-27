import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import SuccessAlert from '../../components/sweet-alert/SuccessAlert';
import ErrorAlert from '../../components/sweet-alert/ErrorAlert';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FaPlus} from "react-icons/fa";
import axios from 'axios';

function CreateKodInflow() {
  // ----------FE----------
  // Modal
  const [isModalCreateKodInflow, setIsModalCreateKodInflow] = useState(false);
  const openModalCreateKodInflow = () => setIsModalCreateKodInflow(true);
  const closeModalCreateKodInflow = () => {
    setIsModalCreateKodInflow(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {handleSubmit, control, reset, formState: {errors}} = useForm();

  // ----------BE----------
  // Create kod inflow
  const createKodInflow = async(kodInflowInput) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/selenggara/kod-inflow', kodInflowInput);  
      if(response.status === 200) {
        SuccessAlert(response.data.message);
        console.log('Kod inflow berjaya ditambah');
        closeModalCreateKodInflow();
      }
    } catch (error) {
      ErrorAlert(error);
      console.log('Tindak balas API tidak seperti yang diharapkan');
    }
  };

  return (
    <div>
      <Button variant="primary" onClick={openModalCreateKodInflow}><FaPlus style={{ fontSize: "10px" }} /> Tambah</Button>{" "}

      <Modal show={isModalCreateKodInflow} onHide={closeModalCreateKodInflow} backdrop="static" keyboard={false}>
        <Modal.Header closeButton><Modal.Title>Tambah Kod Inflow</Modal.Title></Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit(createKodInflow)} onReset={reset}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="kodInflow">Kod Inflow</Form.Label>

              <Controller
                name="kodInflow"
                id="kodInflow"
                control={control}
                defaultValue=""
                rules={{required: 'Kod inflow diperlukan'}}
                render={({field: {onChange, value}}) => (
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan kod inflow"
                    autoFocus
                  />
                )}
              />
              {errors.kodInflow && ( <small className="text-danger">{errors.kodInflow.message}</small> )}            
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="keteranganKodInflow">Keterangan Kod Inflow</Form.Label>

              <Controller
                name="keteranganKodInflow"
                id="keteranganKodInflow"
                control={control}
                defaultValue=""
                rules={{required: 'Keterangan kod inflow diperlukan'}}
                render={({field: {onChange, value}}) => (
                  <Form.Control
                    as="textarea"
                    onChange={onChange}
                    value={value}
                    rows={3}
                    placeholder="Masukkan keterangan kod inflow"
                  />
                )}
              />
              {errors.keteranganKodInflow && ( <small className="text-danger">{errors.keteranganKodInflow.message}</small> )}
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalCreateKodInflow}>Batal</Button>
          <Button variant="primary" onClick={handleSubmit(createKodInflow)}>Tambah</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateKodInflow;