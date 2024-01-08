import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import SuccessAlert from "../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axiosCustom from "../../../axios";

function EditKodOutflow({ kodOutflow }) {
  // ----------FE----------
  // Modal
  const [isModalEditKodOutflow, setIsModalEditKodOutflow] = useState(false);
  const openModalEditKodOutflow = () => setIsModalEditKodOutflow(true);
  const closeModalEditKodOutflow = () => {
    setIsModalEditKodOutflow(false);
  };

  // Form validation
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // ----------BE----------
  const updateKodOutflow = async (kodOutflowInput) => {
    try {
      const response = await axiosCustom.put(
        `/selenggara/kod-outflow/${kodOutflow.id}`,
        kodOutflowInput
      );

      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalEditKodOutflow();
      } else {
        ErrorAlert(response.data.error); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  return (
    <>
      <Button className="editBtn" onClick={openModalEditKodOutflow}>
        Kemas Kini
      </Button>{" "}
      <Modal
        show={isModalEditKodOutflow}
        onHide={closeModalEditKodOutflow}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Kemas Kini Kod Outflow</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit(updateKodOutflow)} onReset={reset}>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="kodOutflow">Kod Outflow</Form.Label>

              <Controller
                name="kodOutflow"
                id="kodOutflow"
                control={control}
                defaultValue={kodOutflow.kodOutflow}
                rules={{ required: "Kod outflow diperlukan." }}
                render={({ field: { onChange, value } }) => (
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan kod outflow"
                    autoFocus
                  />
                )}
              />
              {errors.kodOutflow && (
                <small className="text-danger">
                  {errors.kodOutflow.message}
                </small>
              )}
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label htmlFor="keteranganKodOutflow">
                Keterangan Kod Outflow
              </Form.Label>

              <Controller
                name="keteranganKodOutflow"
                id="keteranganKodOutflow"
                control={control}
                defaultValue={kodOutflow.keteranganKodOutflow}
                rules={{ required: "Keterangan kod outflow diperlukan." }}
                render={({ field: { onChange, value } }) => (
                  <Form.Control
                    as="textarea"
                    onChange={onChange}
                    value={value}
                    rows={3}
                    placeholder="Masukkan keterangan kod outflow"
                  />
                )}
              />
              {errors.keteranganKodOutflow && (
                <small className="text-danger">
                  {errors.keteranganKodOutflow.message}
                </small>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label>Status Kod Outflow</Form.Label>

              <Controller
                name="statusKodOutflow"
                control={control}
                defaultValue={kodOutflow.statusKodOutflow}
                render={({ field: { onChange } }) => (
                  <Form.Select
                    onChange={onChange}
                    defaultValue={kodOutflow.statusKodOutflow}
                  >
                    <option value="" disabled>
                      --Pilih Kod Outflow--
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
          <Button variant="secondary" onClick={closeModalEditKodOutflow}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleSubmit(updateKodOutflow)}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditKodOutflow;
