import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useForm, Controller} from 'react-hook-form';
import axios from 'axios';
import SuccessAlert from '../../components/sweet-alert/SuccessAlert';
import ErrorAlert from '../../components/sweet-alert/ErrorAlert';

function CreateDimensi() {
  // ----------FE----------
import { useState } from "react";

import axios from "axios";

import SelenggaraModal from "../../components/modal/SelenggaraModal";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaPlus } from "react-icons/fa";

function CreateDimensi({ fetchDimensis }) {
  // Create dimensi
  const [dimensiInput, setDimensiInput] = useState({
    dimensi: "",
    keterangan: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDimensiInput({
      ...dimensiInput,
      [name]: value,
    });
  };

  const createDimensi = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/selenggara/dimensi",
        dimensiInput
      );

      if (response.status === 200) {
        console.log("Dimensi created successfully");
      }

      closeModalCreateDimensi();

      fetchDimensis();
    } catch (error) {
      console.error("Error in creating dimensi", error);
    }
  };

  // Modal
  const [isModalCreateDimensi, setIsModalCreateDimensi] = useState(false);
  const openModalCreateDimensi = () => setIsModalCreateDimensi(true);
  const closeModalCreateDimensi = () => {
    setIsModalCreateDimensi(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {handleSubmit, control, reset, formState: {errors}} = useForm();

  // ----------BE----------
  // Create dimensi
  const createDimensi = async(dimensiInput) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/selenggara/dimensi', dimensiInput);  
      if(response.status === 200) {
        SuccessAlert(response.data.message);
        console.log('Dimensi berjaya ditambah');
        closeModalCreateDimensi();
      }
    } catch (error) {
      ErrorAlert(error);
      console.log('Api response is not as expected');
    }
  };

  return(
    <div>
      <Button variant="primary" onClick={openModalCreateDimensi}>
        <FaPlus style={{ fontSize: "10px" }} /> Tambah
      </Button>{" "}
      <Modal show={isModalCreateDimensi} onHide={closeModalCreateDimensi} backdrop="static" keyboard={false}>
        <Modal.Header closeButton><Modal.Title>Tambah Dimensi</Modal.Title></Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit(createDimensi)} onReset={reset}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="kodDimensi">Kod Dimensi</Form.Label>
              <Controller
                name="kodDimensi"
                id="kodDimensi"
                control={control}
                defaultValue=""
                rules={{required: 'Kod dimensi is required'}}
                render={({field: {onChange, value}}) => (
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan kod dimensi"
                    autoFocus
                  />
                )}
              />
              {errors.kodDimensi && ( <small className="text-danger">{errors.kodDimensi.message}</small> )}            
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="keteranganDimensi">Keterangan Dimensi</Form.Label>
              <Controller
                name="keteranganDimensi"
                id="keteranganDimensi"
                control={control}
                defaultValue=""
                rules={{required: 'Keterangan dimensi is required'}}
                render={({field: {onChange, value}}) => (
                  <Form.Control
                    as="textarea"
                    onChange={onChange}
                    value={value}
                    rows={3}
                    placeholder="Masukkan keterangan dimensi"
                  />
                )}
              />
              {errors.keteranganDimensi && ( <small className="text-danger">{errors.keteranganDimensi.message}</small> )}
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalCreateDimensi}>Batal</Button>
          <Button variant="primary" onClick={handleSubmit(createDimensi)}>Tambah</Button>
        </Modal.Footer>
      </Modal>
    </div>
        }
        modalFooter={
          <>
            <Button variant="secondary" onClick={closeModalCreateDimensi}>
              Batal
            </Button>

            <Button variant="primary" onClick={createDimensi}>
              Tambah
            </Button>
          </>
        }
        isModalOpen={isModalCreateDimensi}
        closeModal={closeModalCreateDimensi}
      />
    </>
  );
}

export default CreateDimensi;
