import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import SuccessAlert from "../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

function EditHubungan({ hubungan }) {
  // ----------FE----------
  // Modal
  const [isModalEditHubungan, setIsModalEditHubungan] = useState(false);
  const openModalEditHubungan = () => setIsModalEditHubungan(true);
  const closeModalEditHubungan = () => {
    setIsModalEditHubungan(false);
  };

  // Form validation
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // ----------BE----------
  const updateHubungan = async (hubunganInput) => {
    try {
      const response = await axiosCustom.put(
        `/selenggara/hubungan/${hubungan.id}`,
        hubunganInput
      );

      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalEditHubungan();
      } else {
        ErrorAlert(response.data.error); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  return (
    <>
      <Button className="editBtn" onClick={openModalEditHubungan}>
        Kemas Kini
      </Button>{" "}
      <Modal
        show={isModalEditHubungan}
        onHide={closeModalEditHubungan}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Kemas Kini Hubungan</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit(updateHubungan)} onReset={reset}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="kodHubungan">Kod Hubungan</Form.Label>
              <Controller
                name="kodHubungan"
                id="kodHubungan"
                control={control}
                defaultValue={hubungan.kodHubungan}
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
                defaultValue={hubungan.keteranganHubungan}
                rules={{ required: "Keterangan hubungan diperlukan." }}
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

            <Form.Group>
              <Form.Label>Status Hubungan</Form.Label>
              <Controller
                name="statusHubungan"
                control={control}
                defaultValue={hubungan.statusHubungan}
                render={({ field: { onChange } }) => (
                  <Form.Select
                    onChange={onChange}
                    defaultValue={hubungan.statusHubungan}
                  >
                    <option value="" disabled>
                      --Pilih Hubungan--
                    </option>
                    <option value="AKTIF">AKTIF</option>
                    <option value="TIDAK AKTIF">TIDAK AKTIF</option>
                  </Form.Select>
                )}
              />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalEditHubungan}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleSubmit(updateHubungan)}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditHubungan;
