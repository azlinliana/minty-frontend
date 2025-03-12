import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { useoutflowCodeStore } from "../../../store/selenggara/kod-outflow-store";

function EditOutflowCode(
  // { outflowCode }
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
  // Set default values when the kemas kini outflow code modal is opened
  // const [formData, setFormData] = useState({
  //   outflowCode: "",
  //   keteranganoutflowCode: "",
  //   statusoutflowCode: "",
  // });

  // useEffect(() => {
  //   // Populate form data
  //   setValue("outflowCode", outflowCode.outflowCode);
  //   setValue("keteranganoutflowCode", outflowCode.keteranganoutflowCode);
  //   setValue("statusoutflowCode", outflowCode.statusoutflowCode);

  //   // Set default values for formData
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     outflowCode: outflowCode.outflowCode,
  //     keteranganoutflowCode: outflowCode.keteranganoutflowCode,
  //     statusoutflowCode: outflowCode.statusoutflowCode,
  //   }));
  // }, [outflowCode, setValue]);

  // Edit outflow code
  // const { EditOutflowCode } = useoutflowCodeStore((state) => ({
  //   EditOutflowCode: state.EditOutflowCode,
  // }));

  // Pass input & close modal
  const handleEditOutflowCode = (EditOutflowCodeData) => {
    // EditOutflowCode(outflowCode.id, EditOutflowCodeData, closeModalEditOutflowCode);
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
            <Form.Group controlId="outflowCode" className="mb-3">
              <Form.Label className="form-label">Outflow Code</Form.Label>

              <Form.Control
                type="text"
                // {...register("outflowCode", { required: true })}
                // aria-invalid={errors.outflowCode ? "true" : "false"}
                placeholder="Insert outflow code"
              />

              {/* {errors.outflowCode?.type === "required" && ( */}
                <small className="text-danger">Outflow code is required.</small>
              {/* )} */}
            </Form.Group>

            <Form.Group controlId="keteranganoutflowCode" className="mb-3">
              <Form.Label className="form-label">
                Outflow Code Description
              </Form.Label>

              <Form.Control
                as="textarea"
                // {...register("keteranganoutflowCode", { required: true })}
                // aria-invalid={errors.keteranganoutflowCode ? "true" : "false"}
                placeholder="Insert outflow code description"
              />

              {/* {errors.keteranganoutflowCode?.type === "required" && ( */}
                <small className="text-danger">
                  Outflow code description is required.
                </small>
              {/* )} */}
            </Form.Group>

            <Form.Group controlId="statusoutflowCode" className="mb-3">
              <Form.Label className="form-label"> Outflow Code Status</Form.Label>

              <Form.Control
                as="select"
                className="form-select"
                // {...register("statusoutflowCode", { required: true })}
                // aria-invalid={errors.statusoutflowCode ? "true" : "false"}
                placeholder="Insert outflow code status"
              >
                <option value="" disabled>
                  --Choose Outflow Code Status--
                </option>
                <option value="ACTIVE">ACTIVE</option>
                <option value="INACTIVE">INACTIVE</option>
              </Form.Control>

              {/* {errors.statusoutflowCode?.type === "required" && ( */}
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
