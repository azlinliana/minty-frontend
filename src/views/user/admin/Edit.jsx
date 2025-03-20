import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Modal, Form } from "react-bootstrap";
import { useAdminStore } from "../../../store/pengguna/admin-store";

function EditAdmin({ admin }) {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalEditAdmin, setIsModalEditAdmin] = useState(false);
  const openModalEditAdmin = () => setIsModalEditAdmin(true);
  const closeModalEditAdmin = () => {
    setIsModalEditAdmin(false);
  };

  // Form validation
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  // ___________________________________ Backend __________________________________
  // Set default values when the kemas kini admin modal is opened
  // useEffect(() => {
  //   setValue("idKakitangan", admin.user.idKakitangan);
  //   setValue("namaKakitangan", admin.user.namaKakitangan);
  //   setValue("lokasiKakitangan", admin.user.lokasiKakitangan);
  //   setValue("jawatanKakitangan", admin.user.jawatanKakitangan);
  //   setValue("statusAdmin", admin.statusAdmin);
  // }, [admin, setValue]);

  // Edit admin
  // const { editAdmin } = useAdminStore((state) => ({
  //   editAdmin: state.editAdmin,
  // }));

  // Pass input & close modal
  const handleEditAdmin = (editAdminData) => {
    // editAdmin(admin.id, editAdminData, closeModalEditAdmin);
  };

  return (
    <>
      <div>
        <Button className="edit-btn" onClick={openModalEditAdmin}>
          Edit
        </Button>{" "}
        
        <Modal
          show={isModalEditAdmin}
          onHide={closeModalEditAdmin}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Admin</Modal.Title>
          </Modal.Header>

          <Form onReset={reset}>
            <Modal.Body>
              <Form.Group controlId="idKakitangan" className="mb-3">
                <Form.Label className="form-label">Staff Id</Form.Label>

                <Form.Control
                  type="text"
                  // {...register("idKakitangan", { required: true })}
                  readOnly
                />
              </Form.Group>

              <Form.Group controlId="namaKakitangan" className="mb-3">
                <Form.Label className="form-label">Staff Name</Form.Label>

                <Form.Control
                  type="text"
                  // {...register("namaKakitangan", { required: true })}
                  readOnly
                />
              </Form.Group>

              <Form.Group controlId="lokasiKakitangan" className="mb-3">
                <Form.Label className="form-label">
                  Staff Location
                </Form.Label>

                <Form.Control
                  type="text"
                  // {...register("lokasiKakitangan", { required: true })}
                  readOnly
                />
              </Form.Group>

              <Form.Group controlId="jawatanKakitangan" className="mb-3">
                <Form.Label className="form-label">
                  Staff Position
                </Form.Label>

                <Form.Control
                  type="text"
                  // {...register("jawatanKakitangan", { required: true })}
                  readOnly
                />
              </Form.Group>

              <Form.Group controlId="statusAdmin" className="mb-3">
                <Form.Label className="form-label">Admin Status</Form.Label>

                <Form.Control
                  as="select"
                  className="form-select"
                  // {...register("statusAdmin", { required: true })}
                  // aria-invalid={errors.statusAdmin ? "true" : "false"}
                >
                  <option value="" disabled>
                    --Choose Admin Status--
                  </option>
                  <option value="ALLOW">ALLOW</option>
                  <option value="BLOCK">BLOCK</option>
                </Form.Control>

                {/* {errors.statusAdmin?.type === "required" && ( */}
                  <small className="text-danger">
                    Admin status is required.
                  </small>
                {/* )} */}
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button className="batal-btn" onClick={closeModalEditAdmin}>
                Cancel
              </Button>

              <Button onClick={handleSubmit(handleEditAdmin)}>Edit</Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default EditAdmin;
