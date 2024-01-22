import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import CarianKakitangan from "../CarianKakitangan";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import { FaPlus } from "react-icons/fa";

function CreateAdmin() {
  // ----------FE----------
  // Modal
  const [isModalCreateAdmin, setIsModalCreateAdmin] = useState(false);
  const openModalCreateAdmin = () => setIsModalCreateAdmin(true);
  const closeModalCreateAdmin = () => {
    setIsModalCreateAdmin(false);
    reset(); // Reset previous form input
  };

  // Form validation
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  return (
    <>
      <Button variant="primary" onClick={openModalCreateAdmin}>
        <FaPlus style={{ fontSize: "10px" }} /> Tambah
      </Button>{" "}
      <Modal
        show={isModalCreateAdmin}
        onHide={closeModalCreateAdmin}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Tambah Admin</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit} onReset={reset}>
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

            <Card body>
              Maklumat Kakitangan:
              Nama Kakitangan:
              Id Kakitangan:
              Jawatan Kakitangan:
            </Card>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalCreateAdmin}>
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

export default CreateAdmin;
