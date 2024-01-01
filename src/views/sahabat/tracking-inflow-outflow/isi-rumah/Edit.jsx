import React, {useState, useEffect} from "react";
import {useForm, Controller} from 'react-hook-form';
import SuccessAlert from '../../../components/sweet-alert/SuccessAlert';
import ErrorAlert from '../../../components/sweet-alert/ErrorAlert';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

function EditTrackingIsiRumah({mingguId, isiRumahSahabat}) {
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
  // Fetch hubungan data
  const [hubungansData, setHubungansData] = useState([]);
  useEffect(() => {
    const fetchHubungan = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/selenggara/hubungan/display-hubungan`);
        if (Array.isArray(response.data) && response.data.length > 0) {
          setHubungansData(response.data); // Display all kod inflow data
        } else {
          ErrorAlert(response.data);
        }
      }
      catch (error) {
        ErrorAlert(error);
      }
    };

    fetchHubungan();
  }, []);

  // Update isi rumah
  const updateIsiRumah = async (isiRumahInput) => {
    try {
      const response = await axios.put(`http://127.0.0.1:8000/api/sahabat/isi-rumah/${mingguId}`, isiRumahInput);
      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalEditIsiRumah();
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
      <span className="statusLink" onClick={openModalEditIsiRumah}>Kemas Kini</span>{" "}

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
              defaultValue={isiRumahSahabat.noKadPengenalanIsiRumah}
              rules={{
                required: 'No. kad pengenalan isi rumah diperlukan.',
                pattern: {
                  value: /^\d{12}$/,
                  message: 'No. kad pengenalan isi rumah perlu mengandungi 12 digit.'
                }
              }}
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
              defaultValue={isiRumahSahabat.namaIsiRumah}
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
              id="hubunganId"
              name="hubunganId"
              control={control}
              defaultValue={isiRumahSahabat.hubunganId}
              rules={{required: 'Hubungan isi rumah diperlukan.'}}
              render={({field: {onChange}}) => (
                <Form.Select onChange={onChange} defaultValue={isiRumahSahabat.hubunganId}>
                  <option value="" disabled>--Pilih Hubungan--</option>
                  {hubungansData.map((hubungan) => (
                    <option key={hubungan.id} value={hubungan.id}>{hubungan.kodHubungan}</option>
                  ))}
                </Form.Select>
              )}
            />
            {errors.hubunganIsiRumah && (<small className="text-danger">{errors.hubunganIsiRumah.message}</small>)}
          </Form.Group>
        </Modal.Body>
        
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalEditIsiRumah}>Batal</Button>
          <Button variant="primary" onClick={handleSubmit(updateIsiRumah)}>Simpan</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditTrackingIsiRumah;
