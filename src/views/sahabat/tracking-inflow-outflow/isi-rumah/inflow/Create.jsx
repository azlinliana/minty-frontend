import React, {useState, useEffect} from 'react';
import {useForm, Controller} from 'react-hook-form';
import SuccessAlert from '../../../../components/sweet-alert/SuccessAlert';
import ErrorAlert from '../../../../components/sweet-alert/ErrorAlert';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FaPlus} from "react-icons/fa";
import axios from 'axios';

function CreateTrackingInflowIsiRumah({isiRumahId}) {
  // ----------FE----------
  // Modal
  const [isModalCreateInflowIsiRumah, setIsModalCreateInflowIsiRumah] = useState(false);
  const openModalCreateInflowIsiRumah = () => setIsModalCreateInflowIsiRumah(true);
  const closeModalCreateInflowIsiRumah = () => {
    setIsModalCreateInflowIsiRumah(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {handleSubmit, control, reset, formState: {errors}} = useForm();

  // ----------BE----------
  // Fetch kod inflow data
  const [kodInflowsData, setKodInflowsData] = useState([]);
  useEffect(() => {
    const fetchKodInflow = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/selenggara/kod-inflow/display-kod-inflow`);
        if (Array.isArray(response.data) && response.data.length > 0) {
          setKodInflowsData(response.data); // Display all kod inflow data
        } else {
          ErrorAlert(response.data);
        }
      }
      catch (error) {
        ErrorAlert(error);
      }
    };
  
    fetchKodInflow();
  }, []);

  // Create inflow isi rumah
  const createInflowIsiRumah = async (inflowIsiRumahInput) => {
    try {
      const response = await axios.post(`http://127.0.0.1:8000/api/sahabat/inflow-isi-rumah/${isiRumahId}`, inflowIsiRumahInput);
      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalCreateInflowIsiRumah();
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
      <Button variant="primary" onClick={openModalCreateInflowIsiRumah}><FaPlus style={{fontSize: "10px"}} /> Tambah</Button>{" "}

      <Modal show={isModalCreateInflowIsiRumah} onHide={closeModalCreateInflowIsiRumah} backdrop="static" keyboard={false}>
        <Modal.Header closeButton><Modal.Title>Tambah Inflow Isi Rumah</Modal.Title></Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit} onReset={reset}>
            <Form.Group>
              <Form.Label htmlFor="kodInflow">Kod Inflow</Form.Label>
              <Controller
                id="kodInflowId"
                name="kodInflowId"
                control={control}
                defaultValue=""
                rules={{required: 'Kod inflow diperlukan.'}}
                render={({field: {onChange}}) => (
                  <Form.Select onChange={onChange} defaultValue="">
                    <option value="" disabled>--Pilih Kod Inflow--</option>
                    {kodInflowsData.map((kodInflow) => (
                      <option key={kodInflow.id} value={kodInflow.id}>{kodInflow.kodInflow} - {kodInflow.keteranganKodInflow}</option>
                    ))}
                  </Form.Select>
                )}
              />
              {errors.kodInflowId && ( <small className="text-danger">{errors.kodInflowId.message}</small> )}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="amaunInflow">Amaun Inflow (RM)</Form.Label>
              <Controller
                id="amaunInflow"
                name="amaunInflow"
                control={control}
                defaultValue=""
                rules={{required: 'Amaun inflow diperlukan.'}}
                render={({field:{onChange, value}}) => (
                  <Form.Control
                    type="number"
                    min="0.00" max="10000.00"
                    step="0.01"
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan amaun inflow (RM)"
                    autoFocus
                  />
                )}
              />
              {errors.amaunInflow && (<small className="text-danger">{errors.amaunInflow.message}</small>)}
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalCreateInflowIsiRumah}>Batal</Button>
          <Button variant="primary" onClick={handleSubmit(createInflowIsiRumah)}>Tambah</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateTrackingInflowIsiRumah;