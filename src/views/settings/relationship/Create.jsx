import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useRelationshipStore } from "../../../store/settings/relationship-store";

function CreateRelationship() {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalCreateRelationship, setIsModalCreateRelationship] = useState(false);
  const openModalCreateRelationship = () => setIsModalCreateRelationship(true);
  const closeModalCreateRelationship = () => {
    setIsModalCreateRelationship(false);
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
  // Create relationship
  // const { CreateRelationship } = useRelationshipStore((state) => ({
  //   createRelationship: state.createRelationship,
  // }));

  // Pass input & close modal
  const handleCreateRelationship = (addRelationshipData) => {
    // createRelationship(addrelationshipData, closeModalCreateRelationship);
  };

  return (
    <>
      <Button onClick={openModalCreateRelationship}>
        <FaPlus style={{ fontSize: "10px" }} /> Add
      </Button>{" "}

      <Modal
        show={isModalCreateRelationship}
        onHide={closeModalCreateRelationship}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Relationship</Modal.Title>
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
          </Modal.Body>

          <Modal.Footer>
            <Button className="batal-btn" onClick={closeModalCreateRelationship}>
              Cancel
            </Button>

            <Button onClick={handleSubmit(handleCreateRelationship)}>Add</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default CreateRelationship;
