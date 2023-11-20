import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import SuccessAlert from '../../../../components/sweet-alert/SuccessAlert';
import ErrorAlert from '../../../../components/sweet-alert/ErrorAlert';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FaPlus} from "react-icons/fa";
import axios from 'axios';

function CreateTrackingInflowIsiRumah() {
  // ----------FE----------
  // Modal
  const [isModalCreateTrackingInflowIsiRumah, setIsModalCreateTrackingInflowIsiRumah] = useState(false);
  const openModalCreateTrackingInflowIsiRumah = () => setIsModalCreateTrackingInflowIsiRumah(true);
  const closeModalCreateTrackingInflowIsiRumah = () => {
    setIsModalCreateTrackingInflowIsiRumah(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {handleSubmit, control, reset, formState: {errors}} = useForm();

  // ----------BE----------

  return(
    <div>
      <Button variant="primary" onClick={openModalCreateTrackingInflowIsiRumah}><FaPlus style={{fontSize: "10px"}} /> Tambah</Button>{" "}

      <Modal show={isModalCreateTrackingInflowIsiRumah} onHide={closeModalCreateTrackingInflowIsiRumah} backdrop="static" keyboard={false}>
        <Modal.Header closeButton><Modal.Title>Tambah Inflow Isi Rumah</Modal.Title></Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit} onReset={reset}>
            <Form.Group>
              <Form.Label htmlFor="kodInflow">Kod Inflow</Form.Label>
              <Controller
                id="kodInflow"
                name="kodInflow"
                control={control}
                defaultValue=""
                rules={{required: 'Kod inflow diperlukan.'}}
                render={({ field: {onChange}}) => (
                  <Form.Select onChange={onChange} defaultValue="">
                    <option value="" disabled>--Pilih Kod Inflow--</option>
                    <option value="A1">A1-Pendapatan (dari Pembiayaan AIM)</option>
                    <option value="A2">A2-Pendapatan (Pembiayaan Selain AIM)</option>
                  </Form.Select>
                )}
              />
              {errors.kodInflow && ( <small className="text-danger">{errors.kodInflow.message}</small> )}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="keteranganKodInflow">Keterangan Kod Inflow</Form.Label>
              <Controller
                type="text"
                id="keteranganKodInflow"
                name="keteranganKodInflow"
                control={control}
                defaultValue=""
                rules={{required: 'Keterangan kod inflow diperlukan.'}}
                render={({field:{onChange, value}}) => (
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan keterangan kod inflow"
                    autoFocus
                  />
                )}
              />
              {errors.keteranganKodInflow && ( <small className="text-danger">{errors.keteranganKodInflow.message}</small> )}
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
              {errors.amaunInflow && ( <small className="text-danger">{errors.amaunInflow.message}</small> )}
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalCreateTrackingInflowIsiRumah}>Batal</Button>
          <Button variant="primary" onClick={handleSubmit()}>Tambah</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateTrackingInflowIsiRumah;