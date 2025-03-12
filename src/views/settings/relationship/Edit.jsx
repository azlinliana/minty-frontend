import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { useHubunganStore } from "../../../store/selenggara/hubungan-store";

function EditRelationship({ hubungan }) {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalEditRelationship, setIsModalEditRelationship] = useState(false);
  const openModalEditRelationship = () => setIsModalEditRelationship(true);
  const closeModalEditRelationship = () => {
    setIsModalEditRelationship(false);
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
  // const { EditRelationship } = useHubunganStore((state) => ({
  //   EditRelationship: state.EditRelationship,
  // }));

  // Pass input & close modal
  const handleEditRelationship = (EditRelationshipData) => {
    // EditRelationship(hubungan.id, EditRelationshipData, closeModalEditRelationship);
  };

  return (
    <>
      <Button className="edit-btn" onClick={openModalEditRelationship}>
        Edit
      </Button>{" "}

      <Modal
        show={isModalEditRelationship}
        onHide={closeModalEditRelationship}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Relationship</Modal.Title>
        </Modal.Header>

        <Form onReset={reset}>
          <Modal.Body>
            <Form.Group controlId="kodHubungan" className="mb-3">
              <Form.Label className="form-label">Relationship Code</Form.Label>

              <Form.Control
                type="text"
                // {...register("kodHubungan", { required: true })}
                // aria-invalid={errors.kodHubungan ? "true" : "false"}
                placeholder="Insert relationship code"
              />

              {/* {errors.kodHubungan?.type === "required" && ( */}
                <small className="text-danger">Relationship code is required.</small>
              {/* )} */}
            </Form.Group>

            <Form.Group controlId="keteranganHubungan" className="mb-3">
              <Form.Label className="form-label">
                Relationship Description
              </Form.Label>

              <Form.Control
                as="textarea"
                // {...register("keteranganHubungan", { required: true })}
                // aria-invalid={errors.keteranganHubungan ? "true" : "false"}
                placeholder="Insert relationship description"
              />

              {/* {errors.keteranganHubungan?.type === "required" && ( */}
                <small className="text-danger">
                  Relationship description is required.
                </small>
              {/* )} */}
            </Form.Group>

            <Form.Group controlId="statusHubungan" className="mb-3">
              <Form.Label className="form-label">Relationship Status</Form.Label>

              <Form.Control
                as="select"
                className="form-select"
                // {...register("statusHubungan", { required: true })}
                // aria-invalid={errors.statusHubungan ? "true" : "false"}
                placeholder="Insert status hubungan"
              >
                <option value="" disabled>
                  --Choose Relationship Status--
                </option>
                <option value="ACTIVE">ACTIVE</option>
                <option value="INACTIVE">INACTIVE</option>
              </Form.Control>

              {/* {errors.statusHubungan?.type === "required" && ( */}
                <small className="text-danger">
                  Relationship status is required.
                </small>
              {/* )} */}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button className="batal-btn" onClick={closeModalEditRelationship}>
              Cancel
            </Button>

            <Button onClick={handleSubmit(handleEditRelationship)}>Edit</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default EditRelationship;
