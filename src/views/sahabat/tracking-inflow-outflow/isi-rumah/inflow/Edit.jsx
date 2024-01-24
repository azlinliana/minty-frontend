import React, { useState, useEffect, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import SuccessAlert from "../../../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../../../components/sweet-alert/ErrorAlert";
import { Modal, Button, Form } from "react-bootstrap";
import axiosCustom from "../../../../../axios";

function EditTrackingInflowIsiRumah({
  isiRumahId,
  inflowIsiRumahId,
  inflowIsiRumah,
  kodInflowsData,
}) {
  // ----------FE----------
  // Modal
  const [isModalEditInflowIsiRumah, setIsModalEditInflowIsiRumah] =
    useState(false);
  const openModalEditInflowIsiRumah = () => setIsModalEditInflowIsiRumah(true);
  const closeModalEditInflowIsiRumah = () => {
    setIsModalEditInflowIsiRumah(false);
  };

  // Form validation
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // ----------BE----------
  // Update inflow isi rumah
  const updateInflowIsiRumah = async (inflowIsiRumahInput) => {
    try {
      const response = await axiosCustom.put(
        `/sahabat/inflow-isi-rumah/${isiRumahId}/${inflowIsiRumahId}`,
        inflowIsiRumahInput
      );
      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalEditInflowIsiRumah();
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  return (
    <>
      <Button className="editBtn" onClick={openModalEditInflowIsiRumah}>
        Kemas Kini
      </Button>{" "}
      <Modal
        show={isModalEditInflowIsiRumah}
        onHide={closeModalEditInflowIsiRumah}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Kemas Kini Inflow Isi Rumah</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit} onReset={reset}>
            <Form.Group>
              <Form.Label htmlFor="kodInflow">Kod Inflow</Form.Label>
              <Controller
                id="kodInflowId"
                name="kodInflowId"
                control={control}
                defaultValue={inflowIsiRumah.kodInflowId}
                rules={{ required: "Kod inflow diperlukan." }}
                render={({ field: { onChange } }) => (
                  <Form.Select
                    onChange={onChange}
                    defaultValue={inflowIsiRumah.kodInflowId}
                  >
                    <option value="" disabled>
                      --Pilih Kod Inflow--
                    </option>
                    {kodInflowsData.map((kodInflow) => (
                      <option key={kodInflow.id} value={kodInflow.id}>
                        {kodInflow.kodInflow} - {kodInflow.keteranganKodInflow}
                      </option>
                    ))}
                  </Form.Select>
                )}
              />
              {errors.kodInflow && (
                <small className="text-danger">
                  {errors.kodInflow.message}
                </small>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="amaunInflow">Amaun Inflow (RM)</Form.Label>
              <Controller
                id="amaunInflow"
                name="amaunInflow"
                control={control}
                defaultValue={inflowIsiRumah.amaunInflow}
                rules={{ required: "Amaun inflow diperlukan." }}
                render={({ field: { onChange, value } }) => (
                  <Form.Control
                    type="number"
                    min="0.00"
                    max="10000.00"
                    step="0.01"
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan amaun inflow (RM)"
                    autoFocus
                  />
                )}
              />
              {errors.amaunInflow && (
                <small className="text-danger">
                  {errors.amaunInflow.message}
                </small>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalEditInflowIsiRumah}>
            Batal
          </Button>
          <Button
            variant="primary"
            onClick={handleSubmit(updateInflowIsiRumah)}
          >
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditTrackingInflowIsiRumah;
