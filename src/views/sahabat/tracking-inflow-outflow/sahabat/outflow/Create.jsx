import React, {useState, useEffect} from 'react';
import {useForm, Controller} from 'react-hook-form';
import SuccessAlert from '../../../../components/sweet-alert/SuccessAlert';
import ErrorAlert from '../../../../components/sweet-alert/ErrorAlert';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FaPlus} from "react-icons/fa";
import axios from 'axios';

function CreateTrackingOutflowSahabat({mingguId}) {
  // ----------FE----------
  // Modal
  const [isModalCreateOutflowSahabat, setIsModalCreateOutflowSahabat] = useState(false);
  const openModalCreateOutflowSahabat = () => setIsModalCreateOutflowSahabat(true);
  const closeModalCreateOutflow = () => {
    setIsModalCreateOutflowSahabat(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {handleSubmit, control, reset, formState: {errors}} = useForm();

  // ----------BE----------
  // Fetch kod outflow data
  const [kodOutflowsData, setKodOutflowsData] = useState([]);
  useEffect(() => {
    const fetchKodOutflow = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/selenggara/kod-outflow/display-kod-outflow`);
        if (Array.isArray(response.data) && response.data.length > 0) {
          setKodOutflowsData(response.data); // Display all kod inflow data
        } else {
          ErrorAlert(response.data);
        }
      }
      catch (error) {
        ErrorAlert(error);
      }
    };
  
    fetchKodOutflow();
  }, []);

  // Create inflow sahabat
  const createOutflowSahabat = async (outflowSahabatInput) => {
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/sahabat/outflow-sahabat/${mingguId}`, outflowSahabatInput);
      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalCreateOutflow();
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
      <Button variant="primary" onClick={openModalCreateOutflowSahabat}><FaPlus style={{fontSize: "10px"}} /> Tambah</Button>{" "}

      <Modal show={isModalCreateOutflowSahabat} onHide={closeModalCreateOutflow} backdrop="static" keyboard={false}>
        <Modal.Header closeButton><Modal.Title>Tambah Outflow Sahabat</Modal.Title></Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit} onReset={reset}>
            <Form.Group>
              <Form.Label htmlFor="kodOutflowId">Kod Outflow</Form.Label>
              <Controller
                id="kodOutflowId"
                name="kodOutflowId"
                control={control}
                defaultValue=""
                rules={{required: 'Kod outflow diperlukan.'}}
                render={({field: {onChange}}) => (
                  <Form.Select onChange={onChange} defaultValue="">
                    <option value="" disabled>--Pilih Kod Outflow--</option>
                    {kodOutflowsData.map((kodOutflow) => (
                      <option key={kodOutflow.id} value={kodOutflow.id}>{kodOutflow.kodOutflow} - {kodOutflow.keteranganKodOutflow}</option>
                    ))}
                  </Form.Select>
                )}
              />
              {errors.kodOutflowId && (<small className="text-danger">{errors.kodOutflowId.message}</small>)}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="amaunOutflow">Amaun Outflow (RM)</Form.Label>
              <Controller
                id="amaunOutflow"
                name="amaunOutflow"
                control={control}
                defaultValue=""
                rules={{required: 'Amaun outflow diperlukan.'}}
                render={({field:{onChange, value}}) => (
                  <Form.Control
                    type="number"
                    min="0.00" max="10000.00"
                    step="0.01"
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan amaun outflow (RM)"
                    autoFocus
                  />
                )}
              />
              {errors.amaunOutflow && (<small className="text-danger">{errors.amaunOutflow.message}</small>)}
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalCreateOutflow}>Batal</Button>
          <Button variant="primary" onClick={handleSubmit(createOutflowSahabat)}>Tambah</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateTrackingOutflowSahabat;
