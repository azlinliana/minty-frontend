import React, {useState, useEffect} from 'react';
import {useForm, Controller} from 'react-hook-form';
import SuccessAlert from '../../../components/sweet-alert/SuccessAlert';
import ErrorAlert from '../../../components/sweet-alert/ErrorAlert';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {FaPlus} from "react-icons/fa";
import axios from 'axios';

function CreateAktiviti({sahabatId, pembiayaanId}) {
  // ----------FE----------
  // Modal
  const [isModalCreateAktiviti, setIsModalCreateAktiviti] = useState(false);
  const openModalCreateAktiviti = () => setIsModalCreateAktiviti(true);
  const closeModalCreateAktiviti = () => {
    setIsModalCreateAktiviti(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {handleSubmit, control, reset, formState: {errors}} = useForm();

  // Dummy data for simulation
  // State for selected values
  const [selectedAktiviti, setSelectedAktiviti] = useState('');
  const [selectedKeteranganAktiviti, setSelectedKeteranganAktiviti] = useState('');

  const [aktivitiOptions, setAktivitiOptions] = useState([]);
  const [keteranganAktivitiOptions, setKeteranganAktivitiOptions] = useState([]);
  const [projekAktivitiOptions, setProjekAktivitiOptions] = useState([]);
  
  useEffect(() => {
    // Simulate process of fetching aktiviti, keterangan aktiviti, and projek aktiviti data
    setAktivitiOptions([
      { id: 1, jenisAktiviti: 'PERTANIAN' },
      { id: 2, jenisAktiviti: 'TERNAKAN' },
      { id: 3, jenisAktiviti: 'PERIKANAN' },
      { id: 4, jenisAktiviti: 'PEMBUATAN' },
      { id: 5, jenisAktiviti: 'PERNIAGAAN' },
    ]);

    setKeteranganAktivitiOptions([
      { id: 1, aktivitiId: 1, jenisKeteranganAktiviti: 'TANAMAN KEKAL' },
      { id: 2, aktivitiId: 1, jenisKeteranganAktiviti: 'TANAMAN KONTAN' },
      { id: 3, aktivitiId: 2, jenisKeteranganAktiviti: 'TERNAKAN DAGING' },
      // ... other options
    ]);

    setProjekAktivitiOptions([
      { id: 1, aktivitiId: 1, keteranganAktivitiId: 1, jenisProjekAktiviti: 'GETAH' },
      { id: 2, aktivitiId: 1, keteranganAktivitiId: 1, jenisProjekAktiviti: 'KOKO' },
      // ... other options
    ]);
  }, []); // Empty dependency array means this effect runs once after the initial render
  
  // ----------BE----------
  // Fetch kod dimensi data
  const [kodDimensisData, setKodDimensisData] = useState([]);
  useEffect(() => {
    const fetchKodDimensi = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/selenggara/dimensi/display-dimensi`);
        if (Array.isArray(response.data) && response.data.length > 0) {
          setKodDimensisData(response.data); // Display all kod inflow data
        } else {
          ErrorAlert(response.data);
        }
      }
      catch (error) {
        ErrorAlert(error);
      }
    };
  
    fetchKodDimensi();
  }, []);

  // Create aktiviti
  const createAktiviti = async (aktivitiInput) => {
    try{
      console.log('Aktiviti Input:', aktivitiInput);

      const response = await axios.post(`http://127.0.0.1:8000/api/sahabat/${sahabatId}/pembiayaan/${pembiayaanId}/aktiviti`, aktivitiInput);
      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalCreateAktiviti();
      }
      else {
        console.log(response);
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    }
    catch (error) {
      console.log(error);
      ErrorAlert(error);
    }
  }

  return(
    <div>
      <Button variant="primary" onClick={openModalCreateAktiviti}><FaPlus style={{fontSize: "10px"}} /> Tambah</Button>{" "}

      <Modal show={isModalCreateAktiviti} onHide={closeModalCreateAktiviti} backdrop="static" keyboard={false}>
        <Modal.Header closeButton><Modal.Title>Tambah Aktiviti Sahabat</Modal.Title></Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit} onReset={reset}>
            <Form.Group>
              <Form.Label htmlFor="aktivitiId">Aktiviti</Form.Label>
              <Controller
                id="aktivitiId"
                name="aktivitiId"
                control={control}
                defaultValue=""
                rules={{required: 'Aktivti diperlukan.'}}
                render={({field: {onChange}}) => (
                  <Form.Select onChange={(e) => {setSelectedAktiviti(e.target.value); onChange(e);}} defaultValue="">
                    <option value="" disabled>--Pilih Aktiviti--</option>
                      {aktivitiOptions.map((aktiviti) => (
                        <option key={aktiviti.id} value={aktiviti.id}>{aktiviti.jenisAktiviti}</option>
                      ))}
                  </Form.Select>                
                )}
              />
              {errors.aktivitiId && (<small className="text-danger">{errors.aktivitiId.message}</small>)}       
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="keteranganAktivitiId">Keterangan Aktiviti</Form.Label>
              <Controller
                id="keteranganAktivitiId"
                name="keteranganAktivitiId"
                control={control}
                defaultValue=""
                rules={{required: 'Keterangan aktiviti diperlukan.'}}
                render={({field: {onChange}}) => (
                  <Form.Select onChange={(e) => {setSelectedKeteranganAktiviti(e.target.value); onChange(e);}} defaultValue="">
                    <option value="" disabled>--Pilih Keterangan Aktiviti--</option>
                    {keteranganAktivitiOptions
                      .filter((item) => item.aktivitiId === Number(selectedAktiviti))
                      .map((keteranganAktiviti) => (
                        <option key={keteranganAktiviti.id} value={keteranganAktiviti.id}>{keteranganAktiviti.jenisKeteranganAktiviti}</option>
                      ))
                    }
                  </Form.Select>
                )}
              />
              {errors.keteranganAktivitiId && (<small className="text-danger">{errors.keteranganAktivitiId.message}</small>)}       
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="projekAktivitiId">Projek Aktiviti</Form.Label>
              <Controller
                id="projekAktivitiId"
                name="projekAktivitiId"
                control={control}
                defaultValue=""
                rules={{required: 'Projek aktiviti diperlukan.'}}
                render={({field: {onChange}}) => (
                  <Form.Select onChange={onChange} defaultValue="">
                    <option value="" disabled>--Pilih Projek Aktiviti--</option>
                    {projekAktivitiOptions
                      .filter((item) => item.keteranganAktivitiId === Number(selectedKeteranganAktiviti))
                      .map((projekAktiviti) => (
                        <option key={projekAktiviti.id} value={projekAktiviti.id}>{projekAktiviti.jenisProjekAktiviti}</option>
                      ))
                    }
                  </Form.Select>
                )}
              />
              {errors.projekAktivitiId && (<small className="text-danger">{errors.projekAktivitiId.message}</small>)}       
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="dimensiId">Dimensi</Form.Label>
              <Controller
                id="dimensiId"
                name="dimensiId"
                control={control}
                defaultValue=""
                rules={{required: 'Kod dimensi diperlukan.'}}
                render={({field: {onChange}}) => (
                  <Form.Select onChange={onChange} defaultValue="">
                    <option value="" disabled>--Pilih Kod Dimensi--</option>
                    {kodDimensisData.map((kodDimensi) => (
                      <option key={kodDimensi.id} value={kodDimensi.id}>{kodDimensi.kodDimensi} - {kodDimensi.keteranganDimensi}</option>
                    ))}
                  </Form.Select>
                )}
              />
              {errors.dimensiId && ( <small className="text-danger">{errors.dimensiId.message}</small> )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="pengurusDana">Pengurusan Dana</Form.Label>
              <Controller
                id="pegurusDanaAktiviti"
                name="pengurusDanaAktiviti"
                control={control}
                defaultValue=""
                rules={{required: 'Pengurus dana diperlukan.'}}
                render={({field: {onChange}}) => (
                  <Form.Select onChange={onChange} defaultValue="">
                    <option value="" disabled>--Pilih Pengurus Dana Sahabat--</option>
                    <option value="FM-FUND MANAGER">FM-FUND MANAGER</option>
                    <option value="PS-PARTNERSHIP">PS-PARTNERSHIP</option>
                    <option value="PL-PERNIAGAAN">PL-PIPELINER</option>
                  </Form.Select>
                )}
              />
              {errors.pengurusDanaAktiviti && (<small className="text-danger">{errors.pengurusDanaAktiviti.message}</small>)}            
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="keteranganLainAktiviti">Keterangan untuk Lain-Lain</Form.Label>
              <Controller
                id="keteranganLainAktiviti"
                name="keteranganLainAktiviti"
                control={control}
                defaultValue=""
                render={({field:{onChange, value}}) => (
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan keterangan untuk lain-lain"
                    autoFocus
                  />
                )}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="jumlahPinjamanAktiviti">Jumlah Pinjaman (RM)</Form.Label>
              <Controller
                id="jumlahPinjamanAktiviti"
                name="jumlahPinjamanAktiviti"
                control={control}
                defaultValue=""
                rules={{required: 'Jumlah pinjaman diperlukan.'}}
                render={({field:{onChange, value}}) => (
                  <Form.Control
                    type="number"
                    min="0.00" max="10000.00"
                    step="0.01"
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan jumlah pinjaman (RM)"
                    autoFocus
                  />
                )}
              />
              {errors.jumlahPinjamanAktiviti && (<small className="text-danger">{errors.jumlahPinjamanAktiviti.message}</small>)}
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalCreateAktiviti}>Batal</Button>
          <Button variant="primary" onClick={handleSubmit(createAktiviti)}>Tambah</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CreateAktiviti;
