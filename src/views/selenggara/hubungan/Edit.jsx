import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { useHubunganStore } from "../../../store/selenggara/hubungan-store";

function EditHubungan({ hubungan }) {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalEditHubungan, setIsModalEditHubungan] = useState(false);
  const openModalEditHubungan = () => setIsModalEditHubungan(true);
  const closeModalEditHubungan = () => {
    setIsModalEditHubungan(false);
  };

  // Form validation
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  // ___________________________________ Backend __________________________________
  // Set default values when the kemas kini hubungan modal is opened
  // const [formData, setFormData] = useState({
  //   kodHubungan: "",
  //   keteranganHubungan: "",
  //   statusHubungan: "",
  // });

  // useEffect(() => {
  //   // Populate form data
  //   setValue("kodHubungan", hubungan.kodHubungan);
  //   setValue("keteranganHubungan", hubungan.keteranganHubungan);
  //   setValue("statusHubungan", hubungan.statusHubungan);

  //   // Set default values for formData
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     kodHubungan: hubungan.kodHubungan,
  //     keteranganHubungan: hubungan.keteranganHubungan,
  //     statusHubungan: hubungan.statusHubungan,
  //   }));
  // }, [hubungan, setValue]);

  // Edit hubungan
  // const { editHubungan } = useHubunganStore((state) => ({
  //   editHubungan: state.editHubungan,
  // }));

  // Pass input & close modal
  const handleEditHubungan = (editHubunganData) => {
    // editHubungan(hubungan.id, editHubunganData, closeModalEditHubungan);
  };

  return (
    <>
      <Button className="edit-btn" onClick={openModalEditHubungan}>
        Edit
      </Button>{" "}

      <Modal
        show={isModalEditHubungan}
        onHide={closeModalEditHubungan}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Hubungan</Modal.Title>
        </Modal.Header>

        <Form onReset={reset}>
          <Modal.Body>
            <Form.Group controlId="kodHubungan" className="mb-3">
              <Form.Label className="form-label">Kod Hubungan</Form.Label>

              <Form.Control
                type="text"
                // {...register("kodHubungan", { required: true })}
                // aria-invalid={errors.kodHubungan ? "true" : "false"}
                placeholder="Masukkan kod hubungan"
              />

              {/* {errors.kodHubungan?.type === "required" && ( */}
                <small className="text-danger">Kod hubungan diperlukan.</small>
              {/* )} */}
            </Form.Group>

            <Form.Group controlId="keteranganHubungan" className="mb-3">
              <Form.Label className="form-label">
                Keterangan Hubungan
              </Form.Label>

              <Form.Control
                as="textarea"
                // {...register("keteranganHubungan", { required: true })}
                // aria-invalid={errors.keteranganHubungan ? "true" : "false"}
                placeholder="Masukkan keterangan hubungan"
              />

              {/* {errors.keteranganHubungan?.type === "required" && ( */}
                <small className="text-danger">
                  Keterangan hubungan diperlukan.
                </small>
              {/* )} */}
            </Form.Group>

            <Form.Group controlId="statusHubungan" className="mb-3">
              <Form.Label className="form-label">Status Hubungan</Form.Label>

              <Form.Control
                as="select"
                className="form-select"
                // {...register("statusHubungan", { required: true })}
                // aria-invalid={errors.statusHubungan ? "true" : "false"}
                placeholder="Masukkan status hubungan"
              >
                <option value="" disabled>
                  --Pilih Status Hubungan--
                </option>
                <option value="AKTIF">AKTIF</option>
                <option value="TIDAK AKTIF">TIDAK AKTIF</option>
              </Form.Control>

              {/* {errors.statusHubungan?.type === "required" && ( */}
                <small className="text-danger">
                  Status hubungan diperlukan.
                </small>
              {/* )} */}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button className="batal-btn" onClick={closeModalEditHubungan}>
              Batal
            </Button>

            <Button onClick={handleSubmit(handleEditHubungan)}>Simpan</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default EditHubungan;
