import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { useKodOutflowStore } from "../../../store/selenggara/kod-outflow-store";

function EditOutflowCode(
  // { kodOutflow }
) {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalEditOutflowCode, setIsModalEditOutflowCode] = useState(false);
  const openModalEditOutflowCode = () => setIsModalEditOutflowCode(true);
  const closeModalEditOutflowCode = () => {
    setIsModalEditOutflowCode(false);
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
  // const { EditOutflowCode } = useKodOutflowStore((state) => ({
  //   EditOutflowCode: state.EditOutflowCode,
  // }));

  // Pass input & close modal
  const handleEditOutflowCode = (EditOutflowCodeData) => {
    // EditOutflowCode(kodOutflow.id, EditOutflowCodeData, closeModalEditOutflowCode);
  };


  return (
    <>
      <Button className="edit-btn" onClick={openModalEditOutflowCode}>
        Edit
      </Button>{" "}
      
      <Modal
        show={isModalEditOutflowCode}
        onHide={closeModalEditOutflowCode}
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
            <Button className="batal-btn" onClick={closeModalEditOutflowCode}>
              Cancel
            </Button>

            <Button onClick={handleSubmit(handleEditOutflowCode)}>Edit</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default EditOutflowCode;
