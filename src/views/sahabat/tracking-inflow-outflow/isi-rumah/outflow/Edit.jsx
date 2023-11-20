import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import SuccessAlert from "../../../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../../../components/sweet-alert/ErrorAlert";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from "axios";

function EditTrackingOutflowIsiRumah({ trackingOutflowIsiRumah }) {
  // ----------FE----------
  // Modal
  const [
    isModalEditTrackingOutflowIsiRumah,
    setIsModalEditTrackingOutflowIsiRumah,
  ] = useState(false);
  const openModalEditTrackingOutflowIsiRumah = () =>
    setIsModalEditTrackingOutflowIsiRumah(true);
  const closeModalEditTrackingOutflowIsiRumah = () => {
    setIsModalEditTrackingOutflowIsiRumah(false);
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

  return (
    <div>
      <Button
        className="editBtn"
        onClick={openModalEditTrackingOutflowIsiRumah}
      >
        Kemas Kini
      </Button>{" "}
      <Modal
        show={isModalEditTrackingOutflowIsiRumah}
        onHide={closeModalEditTrackingOutflowIsiRumah}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Kemas Kini Outflow Isi Rumah</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit} onReset={reset}>
            <Form.Group>
              <Form.Label htmlFor="kodOutflow">Kod Outflow</Form.Label>
              <Controller
                id="kodOutflow"
                name="kodOutflow"
                control={control}
                defaultValue=""
                rules={{ required: "Kod outflow diperlukan." }}
                render={({ field: { onChange } }) => (
                  <Form.Select onChange={onChange} defaultValue="">
                    <option value="" disabled>
                      --Pilih Kod Outflow--
                    </option>
                    <option value="A1">
                      A1-Pendapatan (dari Pembiayaan AIM)
                    </option>
                    <option value="A2">
                      A2-Pendapatan (Pembiayaan Selain AIM)
                    </option>
                  </Form.Select>
                )}
              />
              {errors.kodOutflow && (
                <small className="text-danger">
                  {errors.kodOutflow.message}
                </small>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="keteranganKodOutflow">
                Keterangan Kod Outflow
              </Form.Label>
              <Controller
                type="text"
                id="keteranganKodOutflow"
                name="keteranganKodOutflow"
                control={control}
                defaultValue=""
                rules={{ required: "Keterangan kod outflow diperlukan." }}
                render={({ field: { onChange, value } }) => (
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan keterangan kod outflow"
                    autoFocus
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
              <Form.Label htmlFor="amaunOutflow">Amaun Outflow (RM)</Form.Label>
              <Controller
                id="amaunOutflow"
                name="amaunOutflow"
                control={control}
                defaultValue=""
                rules={{ required: "Amaun outflow diperlukan." }}
                render={({ field: { onChange, value } }) => (
                  <Form.Control
                    type="number"
                    min="0.00"
                    max="10000.00"
                    step="0.01"
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan amaun outflow (RM)"
                    autoFocus
                  />
                )}
              />
              {errors.amaunOutflow && (
                <small className="text-danger">
                  {errors.amaunOutflow.message}
                </small>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={closeModalEditTrackingOutflowIsiRumah}
          >
            Batal
          </Button>
          <Button variant="primary" onClick={handleSubmit()}>
            Kemas Kini
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default EditTrackingOutflowIsiRumah;
