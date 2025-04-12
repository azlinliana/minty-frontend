import React, { useState } from "react";
import { useForm } from "react-hook-form";
import SuccessAlert from "../../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../../components/sweet-alert/ErrorAlert";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import axiosCustom from "../../../../axios";
import { useIsiRumahStore } from "../../../../store/sahabat/isi-rumah-store";

// function CreateTrackingIsiRumah({ mingguId, hubunganOptions }) {
function CreateTrackingIsiRumah() {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalCreateIsiRumah, setIsModalCreateIsiRumah] = useState(false);

  const openModalCreateIsiRumah = () => setIsModalCreateIsiRumah(true);

  const closeModalCreateIsiRumah = () => {
    setIsModalCreateIsiRumah(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // ___________________________________ Backend __________________________________
  // Create isi rumah
  // const { createIsiRumahSahabat } = useIsiRumahStore((state) => ({
  //   createIsiRumahSahabat: state.createIsiRumahSahabat,
  // }));

  // Pass input & close modal
  const handleCreateIsiRumah = (addIsiRumahData) => {
    // createIsiRumahSahabat(mingguId, addIsiRumahData, closeModalCreateIsiRumah);
  };

  return (
    <>
      <div>
        <Button onClick={openModalCreateIsiRumah}>
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

          <Form onReset={reset}>
            <Modal.Body>
              <Form.Group controlId="noKadPengenalanIsiRumah" className="mb-3">
                <Form.Label className="form-label">
                  No. Kad Pengenalan
                </Form.Label>

                <Form.Control
                  type="text"
                  // {...register("noKadPengenalanIsiRumah", {
                  //   required: "No. kad pengenalan isi rumah diperlukan.",
                  //   pattern: {
                  //     value: /^\d{12}$/,
                  //     message:
                  //       "No. kad pengenalan isi rumah perlu mengandungi 12 digit.",
                  //   },
                  // })}
                  // aria-invalid={
                  //   errors.noKadPengenalanIsiRumah ? "true" : "false"
                  // }
                  placeholder="Masukkan no. kad pengenalan isi rumah"
                />

                {/* Validate required field */}
                {/* {errors.noKadPengenalanIsiRumah?.type === "required" && ( */}
                  <small className="text-danger">
                    No. kad pengenalan isi rumah diperlukan.
                  </small>
                {/* )} */}

                {/* Validate pattern field */}
                {/* {errors.noKadPengenalanIsiRumah?.type === "pattern" && ( */}
                  <small className="text-danger">
                    {/* {errors.noKadPengenalanIsiRumah.message} */}
                  </small>
                {/* )} */}
              </Form.Group>

              <Form.Group controlId="namaIsiRumah" className="mb-3">
                <Form.Label className="form-label">Nama</Form.Label>

                <Form.Control
                  type="text"
                  // {...register("namaIsiRumah", { required: true })}
                  // aria-invalid={errors.namaIsiRumah ? "true" : "false"}
                  placeholder="Masukkan nama isi rumah"
                />

                {/* {errors.namaIsiRumah?.type === "required" && ( */}
                  <small className="text-danger">
                    Nama isi rumah diperlukan.
                  </small>
                {/* )} */}
              </Form.Group>

              <Form.Group controlId="hubunganId" className="mb-3">
                <Form.Label className="form-label">Hubungan</Form.Label>

                <Form.Control
                  as="select"
                  className="form-select"
                  // {...register("hubunganId", { required: true })}
                  // aria-invalid={errors.hubunganId ? "true" : "false"}
                  defaultValue=""
                >
                  <option value="" disabled>
                    --Pilih Hubungan--
                  </option>
                  {/* {hubunganOptions.map((hubungan) => (
                    <option key={hubungan.id} value={hubungan.id}>
                      {hubungan.kodHubungan}
                    </option>
                  ))} */}
                </Form.Control>

                {/* {errors.hubunganId?.type === "required" && ( */}
                  <small className="text-danger">
                    Hubungan isi rumah diperlukan.
                  </small>
                {/* )} */}
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button className="cancel-btn" onClick={closeModalCreateIsiRumah}>
                Batal
              </Button>

              <Button onClick={handleSubmit(handleCreateIsiRumah)}>
                Simpan
              </Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default CreateTrackingIsiRumah;
