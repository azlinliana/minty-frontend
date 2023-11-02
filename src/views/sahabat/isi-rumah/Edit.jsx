import React, {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import SuccessAlert from '../../components/sweet-alert/SuccessAlert';
import ErrorAlert from '../../components/sweet-alert/ErrorAlert';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function EditIsiRumah({editIsiRumah}) {
  // ----------FE----------  
  // Modal
  const [isModalEditIsiRumah, setIsModalEditIsiRumah] = useState(false);
  const openModalEditIsiRumah = () => setIsModalEditIsiRumah(true);
  const closeModalEditIsiRumah = () => {
    setIsModalEditIsiRumah(false);
  };

  // Form validation
  const {handleSubmit, control, reset, formState: {errors}} = useForm();

  // ----------BE----------

  return(
    <div>
      <Button variant="warning" onClick={openModalEditIsiRumah}>Kemas Kini Isi Rumah</Button>{' '}

      <Modal show={isModalEditIsiRumah} onHide={closeModalEditIsiRumah} backdrop="static" keyboard={false}>
        <Modal.Header closeButton><Modal.Title>Kemas Kini Isi Rumah</Modal.Title></Modal.Header>
        
        <Modal.Body>
          <Form onSubmit={handleSubmit} onReset={reset}>
            <Form.Label htmlFor="noKadPengenalanIsiRumah">No. Kad Pengenalan</Form.Label>
            <Controller
              type="text"
              id="noKadPengenalanIsiRumah"
              name="noKadPengenalanIsiRumah"
              control={control}
              defaultValue=""
              rules={{required: 'No. kad pengenalan isi rumah diperlukan.'}}
              render={({field:{onChange, value}}) => (
                <Form.Control
                  type="text"
                  onChange={onChange}
                  value={value}
                  placeholder="Masukkan no. kad pengenalan isi rumah sahabat"
                  autoFocus
                />
              )}
            />
            {errors.noKadPengenalanIsiRumah && (<small className="text-danger">{errors.noKadPengenalanIsiRumah.message}</small>)}
          </Form>

          <Form onSubmit={handleSubmit} onReset={reset}>
            <Form.Label htmlFor="namaIsiRumah">Nama</Form.Label>
            <Controller
              type="text"
              id="namaIsiRumah"
              name="namaIsiRumah"
              control={control}
              defaultValue=""
              rules={{required: 'Nama isi rumah diperlukan.'}}
              render={({field:{onChange, value}}) => (
                <Form.Control
                  type="text"
                  onChange={onChange}
                  value={value}
                  placeholder="Masukkan nama isi rumah sahabat"
                  autoFocus
                />
              )}
            />
            {errors.namaIsiRumah && (<small className="text-danger">{errors.namaIsiRumah.message}</small>)}
          </Form>

          <Form.Group>
            <Form.Label htmlFor="hubunganIsiRumah">Hubungan</Form.Label>
            <Controller
              id="hubunganIsiRumah"
              name="hubunganIsiRumah"
              control={control}
              defaultValue=""
              rules={{required: 'Hubungan isi rumah diperlukan.'}}
              render={({ field: {onChange}}) => (
                <Form.Select onChange={onChange} defaultValue="">
                  <option value="" disabled>--Pilih Hubungan Isi Rumah Sahabat--</option>
                  <option value="SUAMI">SUAMI</option>
                  <option value="ANAK">ANAK</option>
                </Form.Select>
              )}
            />
            {errors.hubunganIsiRumah && (<small className="text-danger">{errors.hubunganIsiRumah.message}</small>)}
          </Form.Group>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalEditIsiRumah}>Batal</Button>
          <Button variant="primary" onClick={handleSubmit()}>Kemas Kini</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditIsiRumah;