import React, {useState} from "react";
import {useForm, Controller} from "react-hook-form";
import SuccessAlert from "../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {FaPlus} from "react-icons/fa";
import axios from "axios";

function CreatePembiayaan({sahabatId}) {
  // ----------FE----------
  // Modal
  const [isModalCreatePembiayaanSahabat, setIsModalCreatePembiayaanSahabat] = useState(false);
  const openModalCreatePembiayaanSahabat = () => setIsModalCreatePembiayaanSahabat(true);
  const closeModalCreatePembiayaanSahabat = () => {
    setIsModalCreatePembiayaanSahabat(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {handleSubmit, control, reset, formState: {errors}} = useForm();

  // ----------BE----------
  // Create pembiayaan sahabat
  const createPembiayaanSahabat = async (pembiayaanSahabatInput) => {
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/sahabat/pembiayaan/${sahabatId}`, pembiayaanSahabatInput);
      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalCreatePembiayaanSahabat();
      }
      else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    }
    catch (error) {
      ErrorAlert(error);
    }
  }

  return(
    <div>
      <Button variant="primary" onClick={openModalCreatePembiayaanSahabat}><FaPlus style={{fontSize: "10px"}} /> Tambah Pembiayaan</Button>{" "}

      <Modal show={isModalCreatePembiayaanSahabat} onHide={closeModalCreatePembiayaanSahabat} backdrop="static" keyboard={false}>
        <Modal.Header closeButton><Modal.Title>Tambah Pembiayaan Sahabat</Modal.Title></Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit(createPembiayaanSahabat)} onReset={reset}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="skimPembiayaan">Skim Pembiayaan</Form.Label>
              <Controller
                id="skimPembiayaan"
                name="skimPembiayaan"
                control={control}
                defaultValue=""
                rules={{ required: "Skim pembiayaan sahabat diperlukan." }}
                render={({field: {onChange}}) => (
                  <Form.Select onChange={onChange} defaultValue="">
                    <option value="" disabled>--Pilih Skim Pembiayaan--</option>
                    <option value="TIADA PEMBIAYAAN">TIADA PEMBIAYAAN</option>
                    <option value="I-MUDA">I-MUDA</option>
                    <option value="I-MESRA">I-MESRA</option>
                  </Form.Select>
                )}
              />
              {errors.skimPembiayaan && (<small className="text-danger">{errors.skimPembiayaan.message}</small>)}
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalCreatePembiayaanSahabat}>Batal</Button>
          <Button variant="primary" onClick={handleSubmit(createPembiayaanSahabat)}>Tambah</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreatePembiayaan;
