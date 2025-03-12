import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useHubunganStore } from "../../../store/selenggara/hubungan-store";

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
  // Create hubungan
  // const { CreateRelationship } = useHubunganStore((state) => ({
  //   CreateRelationship: state.CreateRelationship,
  // }));

  // Pass input & close modal
  const handleCreateRelationship = (addHubunganData) => {
    // CreateRelationship(addHubunganData, closeModalCreateRelationship);
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
