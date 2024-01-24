import React, { useState, useEffect, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import SuccessAlert from "../../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../../components/sweet-alert/ErrorAlert";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import axiosCustom from "../../../../axios";

function CreateTrackingIsiRumah({ mingguId, hubungansData }) {
  // ----------FE----------
  // Modal
  const [isModalCreateIsiRumah, setIsModalCreateIsiRumah] = useState(false);
  const openModalCreateIsiRumah = () => setIsModalCreateIsiRumah(true);
  const closeModalCreateIsiRumah = () => {
    setIsModalCreateIsiRumah(false);
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
  // Create isi rumah
  const createIsiRumah = async (isiRumahInput) => {
    try {
      const response = await axiosCustom.post(
        `/sahabat/isi-rumah/${mingguId}`,
        isiRumahInput
      );
      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalCreateIsiRumah();
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  return (
    <>
      <div>
        <Button variant="primary" onClick={openModalCreateIsiRumah}>
          <FaPlus style={{ fontSize: "10px" }} /> Tambah
        </Button>{" "}
        <Modal
          show={isModalCreateIsiRumah}
          onHide={closeModalCreateIsiRumah}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Tambah Isi Rumah</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form onSubmit={handleSubmit} onReset={reset}>
              <Form.Label htmlFor="noKadPengenalanIsiRumah">
                No. Kad Pengenalan
              </Form.Label>
              <Controller
                type="text"
                id="noKadPengenalanIsiRumah"
                name="noKadPengenalanIsiRumah"
                control={control}
                defaultValue=""
                rules={{
                  required: "No. kad pengenalan isi rumah diperlukan.",
                  pattern: {
                    value: /^\d{12}$/,
                    message:
                      "No. kad pengenalan isi rumah perlu mengandungi 12 digit.",
                  },
                }}
                render={({ field: { onChange, value } }) => (
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan no. kad pengenalan isi rumah sahabat"
                    autoFocus
                  />
                )}
              />

              {errors.noKadPengenalanIsiRumah && (
                <small className="text-danger">
                  {errors.noKadPengenalanIsiRumah.message}
                </small>
              )}
            </Form>

            <Form onSubmit={handleSubmit} onReset={reset}>
              <Form.Label htmlFor="namaIsiRumah">Nama</Form.Label>
              <Controller
                type="text"
                id="namaIsiRumah"
                name="namaIsiRumah"
                control={control}
                defaultValue=""
                rules={{ required: "Nama isi rumah diperlukan." }}
                render={({ field: { onChange, value } }) => (
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan nama isi rumah sahabat"
                    autoFocus
                  />
                )}
              />
              {errors.namaIsiRumah && (
                <small className="text-danger">
                  {errors.namaIsiRumah.message}
                </small>
              )}
            </Form>

            <Form.Group>
              <Form.Label htmlFor="hubunganIsiRumah">Hubungan</Form.Label>
              <Controller
                id="hubunganId"
                name="hubunganId"
                control={control}
                defaultValue=""
                rules={{ required: "Hubungan isi rumah diperlukan." }}
                render={({ field: { onChange } }) => (
                  <Form.Select onChange={onChange} defaultValue="">
                    <option value="" disabled>
                      --Pilih Hubungan--
                    </option>
                    {hubungansData.map((hubungan) => (
                      <option key={hubungan.id} value={hubungan.id}>
                        {hubungan.kodHubungan}
                      </option>
                    ))}
                  </Form.Select>
                )}
              />
              {errors.hubunganId && (
                <small className="text-danger">
                  {errors.hubunganId.message}
                </small>
              )}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={closeModalCreateIsiRumah}>
              Batal
            </Button>
            <Button variant="primary" onClick={handleSubmit(createIsiRumah)}>
              Simpan
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}

export default CreateTrackingIsiRumah;
