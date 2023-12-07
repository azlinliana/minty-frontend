import React, {useState, useEffect} from "react";
import {useForm, Controller} from 'react-hook-form';
import SuccessAlert from '../../../../components/sweet-alert/SuccessAlert';
import ErrorAlert from '../../../../components/sweet-alert/ErrorAlert';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function EditTrackingOutflowSahabat({mingguId, outflowSahabatId, outflowSahabat}) {
  // ----------FE----------
  // Modal
  const [isModalEditOutflowSahabat, setIsModalEditOutflowSahabat] = useState(false);
  const openModalEditOutflowSahabat = () => setIsModalEditOutflowSahabat(true);
  const closeModalEditOutflowSahabat = () => {
    setIsModalEditOutflowSahabat(false);
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

  // Update outflow sahabat
  const updateOutflowSahabat = async (outflowSahabatInput) => {
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/sahabat/outflow-sahabat/${mingguId}/${outflowSahabatId}`, outflowSahabatInput);
      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalEditOutflowSahabat();
      }
      else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    }
    catch (error) {
      ErrorAlert(error);
    }
  };

  return(
    <div>
      <Button className="editBtn" onClick={openModalEditOutflowSahabat}>Kemas Kini</Button>{" "}

      <Modal show={isModalEditOutflowSahabat} onHide={closeModalEditOutflowSahabat} backdrop="static" keyboard={false}>
        <Modal.Header closeButton><Modal.Title>Kemas Kini Outflow Sahabat</Modal.Title></Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit} onReset={reset}>
            <Form.Group>
              <Form.Label htmlFor="kodOutflowId">Kod Outflow</Form.Label>
              <Controller
                id="kodOutflowId"
                name="kodOutflowId"
                control={control}
                defaultValue={outflowSahabat.kodOutflowId}
                rules={{required: 'Kod outflow diperlukan.'}}
                render={({field: {onChange}}) => (
                  <Form.Select onChange={onChange} defaultValue={outflowSahabat.kodOutflowId}>
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
                defaultValue={outflowSahabat.amaunOutflow}
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
          <Button variant="secondary" onClick={closeModalEditOutflowSahabat}>Batal</Button>
          <Button variant="primary" onClick={handleSubmit(updateOutflowSahabat)}>Kemas Kini</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditTrackingOutflowSahabat;
