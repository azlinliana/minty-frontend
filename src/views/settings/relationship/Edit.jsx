import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { useRelationshipStore } from "../../../store/settings/relationship-store";

function EditRelationship({ relationship }) {
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
  // Set default values when the kemas kini relationship modal is opened
  // const [formData, setFormData] = useState({
  //   kodrelationship: "",
  //   keteranganrelationship: "",
  //   statusrelationship: "",
  // });

  // useEffect(() => {
  //   // Populate form data
  //   setValue("kodrelationship", relationship.kodrelationship);
  //   setValue("keteranganrelationship", relationship.keteranganrelationship);
  //   setValue("statusrelationship", relationship.statusrelationship);

  //   // Set default values for formData
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     kodrelationship: relationship.kodrelationship,
  //     keteranganrelationship: relationship.keteranganrelationship,
  //     statusrelationship: relationship.statusrelationship,
  //   }));
  // }, [relationship, setValue]);

  // Edit relationship
  // const { EditRelationship } = userelationshipStore((state) => ({
  //   EditRelationship: state.EditRelationship,
  // }));

  // Pass input & close modal
  const handleEditRelationship = (EditRelationshipData) => {
    // EditRelationship(relationship.id, EditRelationshipData, closeModalEditRelationship);
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
            <Form.Group controlId="kodrelationship" className="mb-3">
              <Form.Label className="form-label">Relationship Code</Form.Label>

              <Form.Control
                type="text"
                // {...register("kodrelationship", { required: true })}
                // aria-invalid={errors.kodrelationship ? "true" : "false"}
                placeholder="Insert relationship code"
              />

              {/* {errors.kodrelationship?.type === "required" && ( */}
                <small className="text-danger">Relationship code is required.</small>
              {/* )} */}
            </Form.Group>

            <Form.Group controlId="keteranganrelationship" className="mb-3">
              <Form.Label className="form-label">
                Relationship Description
              </Form.Label>

              <Form.Control
                as="textarea"
                // {...register("keteranganrelationship", { required: true })}
                // aria-invalid={errors.keteranganrelationship ? "true" : "false"}
                placeholder="Insert relationship description"
              />

              {/* {errors.keteranganrelationship?.type === "required" && ( */}
                <small className="text-danger">
                  Relationship description is required.
                </small>
              {/* )} */}
            </Form.Group>

            <Form.Group controlId="statusrelationship" className="mb-3">
              <Form.Label className="form-label">Relationship Status</Form.Label>

              <Form.Control
                as="select"
                className="form-select"
                // {...register("statusrelationship", { required: true })}
                // aria-invalid={errors.statusrelationship ? "true" : "false"}
                placeholder="Insert status relationship"
              >
                <option value="" disabled>
                  --Choose Relationship Status--
                </option>
                <option value="ACTIVE">ACTIVE</option>
                <option value="INACTIVE">INACTIVE</option>
              </Form.Control>

              {/* {errors.statusrelationship?.type === "required" && ( */}
                <small className="text-danger">
                  Relationship status is required.
                </small>
              {/* )} */}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button className="cancel-btn" onClick={closeModalEditRelationship}>
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
