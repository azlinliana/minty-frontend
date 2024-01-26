import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import CarianKakitangan from "../CarianKakitangan";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FaPlus } from "react-icons/fa";
import axiosCustom from "../../../axios";

function CreateSuperAdmin() {
  // ----------FE----------
  // Modal
  const [isModalCreateSuperAdmin, setIsModalCreateSuperAdmin] = useState(false);
  const openModalCreateSuperAdmin = () => setIsModalCreateSuperAdmin(true);
  const closeModalCreateSuperAdmin = () => {
    setIsModalCreateSuperAdmin(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // ----------BE----------

  return (
    <>
      <Button variant="primary" onClick={openModalCreateSuperAdmin}>
        <FaPlus style={{ fontSize: "10px" }} /> Tambah
      </Button>{" "}
      <Modal
        show={isModalCreateSuperAdmin}
        onHide={closeModalCreateSuperAdmin}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Tambah Super Admin</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form className="searchBar" onSubmit="" onReset={reset}>
            {/* <Form.Label htmlFor="carian-kakitangan">Carian Kakitangan</Form.Label> */}

            <Row>
              <Form.Group className="col-md-10">
                <Controller
                  id=""
                  name=""
                  control={control}
                  defaultValue=""
                  rules={{ required: "Id kakitangan diperlukan." }}
                  render={({ field: { onChange, value } }) => (
                    <Form.Control
                      type="text"
                      maxLength={12}
                      onChange={onChange}
                      value={value}
                      placeholder="Masukkan id kakitangan"
                      autoFocus
                    />
                  )}
                />
                {errors.noKadPengenalanSahabat && (
                  <small className="text-danger">
                    {errors.noKadPengenalanSahabat.message}
                  </small>
                )}
              </Form.Group>

              <Form.Group className="col-md-2">
                <div>
                  <Button className="CarianSearchBarBtn" onClick="">
                    Cari
                  </Button>
                </div>
              </Form.Group>
            </Row>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalCreateSuperAdmin}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateSuperAdmin;
