import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import SuccessAlert from "../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FaPlus } from "react-icons/fa";
import axios from "axios";

function CreateHubungan() {
  // ----------FE----------
  // Modal
  const [isModalCreateHubungan, setIsModalCreateHubungan] = useState(false);
  const openModalCreateHubungan = () => setIsModalCreateHubungan(true);
  const closeModalCreateHubungan = () => {
    setIsModalCreateHubungan(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // ----------BE----------
  // Create hubungan
  const createHubungan = async (hubunganInput) => {
    try {
      const response = await axiosCustom.post(
        "/selenggara/hubungan",
        hubunganInput
      );

      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalCreateHubungan();
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  return (
    <>
      <Button variant="primary" onClick={openModalCreateHubungan}>
        <FaPlus style={{ fontSize: "10px" }} /> Tambah
      </Button>{" "}
      <Modal
        show={isModalCreateHubungan}
        onHide={closeModalCreateHubungan}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Tambah Hubungan</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit(createHubungan)} onReset={reset}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="kodHubungan">Kod Hubungan</Form.Label>

              <Controller
                name="kodHubungan"
                id="kodHubungan"
                control={control}
                defaultValue=""
                rules={{ required: "Kod hubungan diperlukan." }}
                render={({ field: { onChange, value } }) => (
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan kod hubungan"
                    autoFocus
                  />
                )}
              />
              {errors.kodHubungan && (
                <small className="text-danger">
                  {errors.kodHubungan.message}
                </small>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="keteranganHubungan">
                Keterangan Hubungan
              </Form.Label>

              <Controller
                name="keteranganHubungan"
                id="keteranganHubungan"
                control={control}
                defaultValue=""
                rules={{ required: "Keterangan hubunngan diperlukan." }}
                render={({ field: { onChange, value } }) => (
                  <Form.Control
                    as="textarea"
                    onChange={onChange}
                    value={value}
                    rows={3}
                    placeholder="Masukkan keterangan hubungan"
                  />
                )}
              />
              {errors.keteranganHubungan && (
                <small className="text-danger">
                  {errors.keteranganHubungan.message}
                </small>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalCreateHubungan}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleSubmit(createHubungan)}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateHubungan;
