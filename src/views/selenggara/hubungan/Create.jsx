import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useForm, Controller} from 'react-hook-form';
import axios from 'axios';
import SuccessAlert from '../../components/sweet-alert/SuccessAlert';
import ErrorAlert from '../../components/sweet-alert/ErrorAlert';

function CreateHubungan() {
  // ----------FE----------
  // Create hubungan
  // Modal
  const [isModalCreateHubungan, setIsModalCreateHubungan] = useState(false);
  const openModalCreateHubungan = () => setIsModalCreateHubungan(true);
  const closeModalCreateHubungan = () => {
    setIsModalCreateHubungan(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {handleSubmit, control, reset, formState: {errors}} = useForm();

  // ----------BE----------
  // Create hubungan
  const createHubungan = async(hubunganInput) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/selenggara/hubungan', hubunganInput);  
      if(response.status === 200) {
        SuccessAlert(response.data.message);
        console.log('Hubungan berjaya ditambah');
        closeModalCreateHubungan();
      }
    } catch (error) {
      ErrorAlert(error);
      console.log('Api response is not as expected');
    }
  };

  return(
    <div>
      <Button variant="primary" onClick={openModalCreateHubungan}>Tambah</Button>{' '}

      <Modal show={isModalCreateHubungan} onHide={closeModalCreateHubungan} backdrop="static" keyboard={false}>
        <Modal.Header closeButton><Modal.Title>Tambah Hubungan</Modal.Title></Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit(createHubungan)} onReset={reset}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="kodHubungan">Kod Hubungan</Form.Label>
              <Controller
                name="kodHubungan"
                id="kodHubungan"
                control={control}
                defaultValue=""
                rules={{required: 'Kod hubungan is required'}}
                render={({field: {onChange, value}}) => (
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan kod hubungan"
                    autoFocus
                  />
                )}
              />
              {errors.kodHubungan && ( <small className="text-danger">{errors.kodHubungan.message}</small> )}            
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="keteranganHubungan">Keterangan Hubungan</Form.Label>
              <Controller
                name="keteranganHubungan"
                id="keteranganHubungan"
                control={control}
                defaultValue=""
                rules={{required: 'Keterangan hubungan is required'}}
                render={({field: {onChange, value}}) => (
                  <Form.Control
                    as="textarea"
                    onChange={onChange}
                    value={value}
                    rows={3}
                    placeholder="Masukkan keterangan hubungan"
                  />
                )}
              />
              {errors.keteranganHubungan && ( <small className="text-danger">{errors.keteranganHubungan.message}</small> )}
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalCreateHubungan}>Batal</Button>
          <Button variant="primary" onClick={handleSubmit(createHubungan)}>Tambah</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default CreateHubungan;