import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Form, Button } from "react-bootstrap";
import { useSuperAdminStore } from "../../../store/pengguna/super-admin-store";

function CreateSuperAdmin({
  isModalCreateSuperAdmin,
  openModalCreateSuperAdmin,
  closeModalCreateSuperAdmin,
  // searchStaffResult,
}) {
  // __________________________________ Frontend __________________________________
  // Form validation
  const { register, handleSubmit, setValue } = useForm();

  // ___________________________________ Backend __________________________________
  // Set default values when searchStaffResult changes for each field
  // useEffect(() => {
  //   if (searchStaffResult) {
  //     setValue("id", searchStaffResult.id);
  //     setValue("idKakitangan", searchStaffResult.idKakitangan);
  //     setValue("namaKakitangan", searchStaffResult.namaKakitangan);
  //     setValue("lokasiKakitangan", searchStaffResult.lokasiKakitangan);
  //     setValue("jawatanKakitangan", searchStaffResult.jawatanKakitangan);
  //   }
  // }, [searchStaffResult, setValue]);

  // Create admin
  // const { CreateSuperAdmin } = useSuperAdminStore((state) => ({
  //   CreateSuperAdmin: state.CreateSuperAdmin,
  // }));

  // Pass input & close modal
  const handleCreateSuperAdmin = (addAdminData) => {
    // CreateSuperAdmin(addAdminData, closeModalCreateSuperAdmin);
  };

  return (
    <>
      <Button className="pengguna-carian-search-btn" onClick={openModalCreateSuperAdmin}>
        Search
      </Button>

      <Modal
        show={isModalCreateSuperAdmin}
        onHide={closeModalCreateSuperAdmin}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Admin</Modal.Title>
        </Modal.Header>

        <Form>
          <Modal.Body>
            {/* Display search staff result */}
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
              <Form.Label className="form-label">Staff Location</Form.Label>

              <Form.Control
                type="text"
                // {...register("lokasiKakitangan", { required: true })}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="jawatanKakitangan" className="mb-3">
              <Form.Label className="form-label">Staff Position</Form.Label>

              <Form.Control
                type="text"
                // {...register("jawatanKakitangan", { required: true })}
                readOnly
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button className="cancel-btn" onClick={closeModalCreateSuperAdmin}>
              Cancel
            </Button>

            <Button
              onClick={handleSubmit(() =>
                handleCreateSuperAdmin(
                  // { userId: searchStaffResult.id }
                )
              )}
            >
              Add
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default CreateSuperAdmin;
