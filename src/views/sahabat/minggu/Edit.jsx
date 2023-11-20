import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import SuccessAlert from '../../components/sweet-alert/SuccessAlert';
import ErrorAlert from '../../components/sweet-alert/ErrorAlert';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function EditMinggu({sahabatId, pembiayaanId, mingguId, mingguPembiayaanSahabat}) {
  // ----------FE----------
  // Modal
  const [isModalEditMinggu, setIsModalEditMinggu] = useState(false);
  const openModalEditMinggu = () => setIsModalEditMinggu(true);
  const closeModalEditMinggu = () => {
    setIsModalEditMinggu(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {handleSubmit, control, reset, formState: {errors}} = useForm();

  // ----------BE----------
  // Update minggu pembiayaan sahabat
  const updateMingguPembiayaanSahabat = async (mingguPembiayaanSahabatInput) => {
    console.log(mingguPembiayaanSahabatInput);
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/sahabat/${sahabatId}/pembiayaan/${pembiayaanId}/minggu/${mingguId}`, mingguPembiayaanSahabatInput);
      if(response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalEditMinggu();
      }
      else {
        ErrorAlert(response);
      }
    }
    catch(error) {
      ErrorAlert(error);
    }
  };

  return(
    <div>
      <Button variant="primary" onClick={openModalEditMinggu}> Kemas Kini</Button>{" "}

      <Modal show={isModalEditMinggu} onHide={closeModalEditMinggu} backdrop="static" keyboard={false}>
        <Modal.Header closeButton><Modal.Title>Kemas Kini Minggu</Modal.Title></Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit(updateMingguPembiayaanSahabat)} onReset={reset}>
            <Form.Group>
              <Form.Label htmlFor="bilanganMinggu">Bilangan Minggu</Form.Label>
              <Controller
                type="number"
                id="bilanganMinggu"
                name="bilanganMinggu"
                control={control}
                defaultValue={mingguPembiayaanSahabat.bilanganMinggu}
                rules={{required: 'Bilangan minggu diperlukan.'}}
                render={({field:{onChange, value}}) => (
                  <Form.Control
                    type="number"
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan minggu ke berapa"
                    autoFocus
                  />
                )}
              />
              {errors.bilanganMinggu && (<small className="text-danger">{errors.bilanganMinggu.message}</small>)}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="tarikhBorangMinggu">Tarikh Borang Minggu</Form.Label>
              <Controller
                type="date"
                id="tarikhBorangMinggu"
                name="tarikhBorangMinggu"
                control={control}
                defaultValue={mingguPembiayaanSahabat.tarikhBorangMinggu}
                rules={{required: 'Tarikh borang minggu diperlukan.'}}
                render={({field:{onChange, value}}) => (
                  <Form.Control
                    type="date"
                    onChange={onChange}
                    value={value}
                    autoFocus
                  />
                )}
              />
              {errors.tarikhBorangMinggu && (<small className="text-danger">{errors.tarikhBorangMinggu.message}</small>)}
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalEditMinggu}>Batal</Button>
          <Button variant="primary" onClick={handleSubmit(updateMingguPembiayaanSahabat)}>Kemas Kini</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditMinggu;