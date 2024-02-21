import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import SuccessAlert from "../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import { Modal, Form, Button } from "react-bootstrap";
import axiosCustom from "../../../axios";

function CreateSuperAdmin({
  isModalCreateSuperAdmin,
  closeModalCreateSuperAdmin,
  searchStaffResult,
}) {
  // ----------FE----------
  // Form validation
  const { register, handleSubmit, setValue } = useForm();

  // ----------BE----------
  // Set default values when searchStaffResult changes for each field
  useEffect(() => {
    if (searchStaffResult) {
      setValue("id", searchStaffResult.id);
      setValue("idKakitangan", searchStaffResult.idKakitangan);
      setValue("namaKakitangan", searchStaffResult.namaKakitangan);
      setValue("lokasiKakitangan", searchStaffResult.lokasiKakitangan);
      setValue("jawatanKakitangan", searchStaffResult.jawatanKakitangan);
    }
  }, [searchStaffResult, setValue]);

  // Create super admin
  const createSuperAdmin = async (superAdminInput) => {
    try {
      const response = await axiosCustom.post(
        "pengguna/super-admin",
        superAdminInput
      );

      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalCreateSuperAdmin();
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  return (
    <>
      <Button className="pengguna-carian-search-btn" type="submit">
        Cari
      </Button>

      <Modal
        show={isModalCreateSuperAdmin}
        onHide={closeModalCreateSuperAdmin}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Tambah Super Admin</Modal.Title>
        </Modal.Header>

        <Form
          onSubmit={handleSubmit(() =>
            createSuperAdmin({ userId: searchStaffResult.id })
          )}
        >
          <Modal.Body>
            {/* Display search staff result */}
            <Form.Group controlId="idKakitangan" className="mb-3">
              <Form.Label className="form-label">Id Kakitangan</Form.Label>

              <Form.Control
                type="text"
                {...register("idKakitangan", { required: true })}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="namaKakitangan" className="mb-3">
              <Form.Label className="form-label">Nama Kakitangan</Form.Label>

              <Form.Control
                type="text"
                {...register("namaKakitangan", { required: true })}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="lokasiKakitangan" className="mb-3">
              <Form.Label className="form-label">Lokasi Kakitangan</Form.Label>

              <Form.Control
                type="text"
                {...register("lokasiKakitangan", { required: true })}
                readOnly
              />
            </Form.Group>

            <Form.Group controlId="jawatanKakitangan" className="mb-3">
              <Form.Label className="form-label">Jawatan Kakitangan</Form.Label>

              <Form.Control
                type="text"
                {...register("jawatanKakitangan", { required: true })}
                readOnly
              />
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button className="batal-btn" onClick={closeModalCreateSuperAdmin}>
              Batal
            </Button>

            <Button type="submit">Tambah</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default CreateSuperAdmin;
