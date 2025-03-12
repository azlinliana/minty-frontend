import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { useKodOutflowStore } from "../../../store/selenggara/kod-outflow-store";

function EditKodOutflow(
  // { kodOutflow }
) {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalEditKodOutflow, setIsModalEditKodOutflow] = useState(false);
  const openModalEditKodOutflow = () => setIsModalEditKodOutflow(true);
  const closeModalEditKodOutflow = () => {
    setIsModalEditKodOutflow(false);
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
  // Set default values when the kemas kini kod outflow modal is opened
  // const [formData, setFormData] = useState({
  //   kodOutflow: "",
  //   keteranganKodOutflow: "",
  //   statusKodOutflow: "",
  // });

  // useEffect(() => {
  //   // Populate form data
  //   setValue("kodOutflow", kodOutflow.kodOutflow);
  //   setValue("keteranganKodOutflow", kodOutflow.keteranganKodOutflow);
  //   setValue("statusKodOutflow", kodOutflow.statusKodOutflow);

  //   // Set default values for formData
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     kodOutflow: kodOutflow.kodOutflow,
  //     keteranganKodOutflow: kodOutflow.keteranganKodOutflow,
  //     statusKodOutflow: kodOutflow.statusKodOutflow,
  //   }));
  // }, [kodOutflow, setValue]);

  // Edit kod outflow
  // const { editKodOutflow } = useKodOutflowStore((state) => ({
  //   editKodOutflow: state.editKodOutflow,
  // }));

  // Pass input & close modal
  const handleEditKodOutflow = (editKodOutflowData) => {
    // editKodOutflow(kodOutflow.id, editKodOutflowData, closeModalEditKodOutflow);
  };


  return (
    <>
      <Button className="edit-btn" onClick={openModalEditKodOutflow}>
        Edit
      </Button>{" "}
      
      <Modal
        show={isModalEditKodOutflow}
        onHide={closeModalEditKodOutflow}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Outflow Code</Modal.Title>
        </Modal.Header>

        <Form onReset={reset}>
          <Modal.Body>
            <Form.Group controlId="kodOutflow" className="mb-3">
              <Form.Label className="form-label">Outflow Code</Form.Label>

              <Form.Control
                type="text"
                // {...register("kodOutflow", { required: true })}
                // aria-invalid={errors.kodOutflow ? "true" : "false"}
                placeholder="Insert outflow code"
              />

              {/* {errors.kodOutflow?.type === "required" && ( */}
                <small className="text-danger">Outflow code is required.</small>
              {/* )} */}
            </Form.Group>

            <Form.Group controlId="keteranganKodOutflow" className="mb-3">
              <Form.Label className="form-label">
                Outflow Code Description
              </Form.Label>

              <Form.Control
                as="textarea"
                // {...register("keteranganKodOutflow", { required: true })}
                // aria-invalid={errors.keteranganKodOutflow ? "true" : "false"}
                placeholder="Insert outflow code description"
              />

              {/* {errors.keteranganKodOutflow?.type === "required" && ( */}
                <small className="text-danger">
                  Outflow code description is required.
                </small>
              {/* )} */}
            </Form.Group>

            <Form.Group controlId="statusKodOutflow" className="mb-3">
              <Form.Label className="form-label"> Outflow Code Status</Form.Label>

              <Form.Control
                as="select"
                className="form-select"
                // {...register("statusKodOutflow", { required: true })}
                // aria-invalid={errors.statusKodOutflow ? "true" : "false"}
                placeholder="Insert outflow code status"
              >
                <option value="" disabled>
                  --Choose Outflow Code Status--
                </option>
                <option value="ACTIVE">ACTIVE</option>
                <option value="INACTIVE">INACTIVE</option>
              </Form.Control>

              {/* {errors.statusKodOutflow?.type === "required" && ( */}
                <small className="text-danger">
                  Outflow code status is required.
                </small>
              {/* )} */}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button className="batal-btn" onClick={closeModalEditKodOutflow}>
              Batal
            </Button>

            <Button onClick={handleSubmit(handleEditKodOutflow)}>Simpan</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default EditKodOutflow;
