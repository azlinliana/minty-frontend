import React, {useState, useEffect} from "react";
import {useForm, Controller} from "react-hook-form";
import SuccessAlert from "../../../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../../../components/sweet-alert/ErrorAlert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

function EditTrackingOutflowIsiRumah({isiRumahId,outflowIsiRumahId, outflowIsiRumah}) {
  // ----------FE----------
  // Modal
  const [isModalEditOutflowIsiRumah, setIsModalEditOutflowIsiRumah] = useState(false);
  const openModalEditOutflowIsiRumah = () => setIsModalEditOutflowIsiRumah(true);
  const closeModalEditOutflowIsiRumah = () => {
    setIsModalEditOutflowIsiRumah(false);
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
          console.log(response.data);
          ErrorAlert(response.data);
        }
      }
      catch (error) {
        console.log(error);
        ErrorAlert(error);
      }
    };
  
    fetchKodOutflow();
  }, []);

  // Update outflow isi rumah
  const updateOutflowIsiRumah = async (outflowIsiRumahInput) => {
    console.log(outflowIsiRumahInput);
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/sahabat/outflow-isi-rumah/${isiRumahId}/${outflowIsiRumahId}`, outflowIsiRumahInput);
      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalEditOutflowIsiRumah();
      }
      else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    }
    catch (error) {
      console.log(error);
      ErrorAlert(error);
    }
  };

  return (
    <div>
      <Button className="editBtn" onClick={openModalEditOutflowIsiRumah}>Kemas Kini</Button>{" "}
      
      <Modal show={isModalEditOutflowIsiRumah} onHide={closeModalEditOutflowIsiRumah} backdrop="static" keyboard={false}>
        <Modal.Header closeButton><Modal.Title>Kemas Kini Outflow Isi Rumah</Modal.Title></Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit} onReset={reset}>
            <Form.Group>
              <Form.Label htmlFor="kodOutflow">Kod Outflow</Form.Label>
              <Controller
                id="kodOutflowId"
                name="kodOutflowId"
                control={control}
                defaultValue={outflowIsiRumah.kodOutflowId}
                rules={{required: 'Kod outflow diperlukan.'}}
                render={({field: {onChange}}) => (
                  <Form.Select onChange={onChange} defaultValue={outflowIsiRumah.kodOutflowId}>
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
                defaultValue={outflowIsiRumah.amaunOutflow}
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
          <Button variant="secondary" onClick={closeModalEditOutflowIsiRumah}>Batal</Button>
          <Button variant="primary" onClick={handleSubmit(updateOutflowIsiRumah)}>Simpan</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditTrackingOutflowIsiRumah;
