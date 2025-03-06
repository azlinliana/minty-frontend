import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useHubunganStore } from "../../../store/selenggara/hubungan-store";

function CreateHubungan() {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalCreateHubungan, setIsModalCreateHubungan] = useState(false);
  const openModalCreateHubungan = () => setIsModalCreateHubungan(true);
  const closeModalCreateHubungan = () => {
    setIsModalCreateHubungan(false);
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
  // Create hubungan
  // const { createHubungan } = useHubunganStore((state) => ({
  //   createHubungan: state.createHubungan,
  // }));

  // Pass input & close modal
  const handleCreateHubungan = (addHubunganData) => {
    // createHubungan(addHubunganData, closeModalCreateHubungan);
  };

  return (
    <>
      <Button onClick={openModalCreateHubungan}>
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
          </Modal.Body>

          <Modal.Footer>
            <Button className="batal-btn" onClick={closeModalCreateHubungan}>
              Batal
            </Button>

            <Button onClick={handleSubmit(handleCreateHubungan)}>Simpan</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default CreateHubungan;
