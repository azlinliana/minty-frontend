import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ErrorAlert from "../../components/sweet-alert/ErrorAlert";
import { Button, Form, Modal } from "react-bootstrap";
import axiosCustom from "../../../axios";

function SearchDetailedCustomerProfile() {
  // ______________________________ Hook Declaration ______________________________
  const navigate = useNavigate();

  // __________________________________ Frontend __________________________________
  // Modal
  const [
    isModalCarianLaporanProfilSahabatTerperinci,
    setIsModalCarianLaporanProfilSahabatTerperinci,
  ] = useState(false);

  const openModalCarianLaporanProfilSahabatTerperinci = () =>
    setIsModalCarianLaporanProfilSahabatTerperinci(true);

  const closeModalCarianLaporanProfilSahabatTerperinci = () => {
    setIsModalCarianLaporanProfilSahabatTerperinci(false);
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
  // Search profil sahabat terperinci
  const handleSearchDetailedCustomerProfile = async (noKadPengenalanSahabatInput) => {
    try {
      const response = await axiosCustom.post(
        `laporan/search`,
        noKadPengenalanSahabatInput
      );

      if (response.status === 200) {
        navigate("/pembiayaan-sahabat-terperinci", {
          state: { resultSahabat: response.data },
        });
      } else {
        ErrorAlert(response);
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  return (
    <>
      <Button
        className="laporan-index-pg-btn"
        onClick={openModalCarianLaporanProfilSahabatTerperinci}
      >
        Cari
      </Button>{" "}
      
      <Modal
        show={isModalCarianLaporanProfilSahabatTerperinci}
        onHide={closeModalCarianLaporanProfilSahabatTerperinci}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Carian Laporan Profil Sahabat Terperinci</Modal.Title>
        </Modal.Header>

        <Form onReset={reset}>
          <Modal.Body>
            <Form.Group controlId="noKadPengenalanSahabat" className="mb-3">
              <Form.Control
                type="text"
                placeholder="Masukkan no. kad pengenalan sahabat"
                {...register("noKadPengenalanSahabat", {
                  required: "No. kad pengenalan sahabat diperlukan.",
                  pattern: {
                    value: /^\d{12}$/,
                    message:
                      "No. kad pengenalan sahabat perlu mengandungi 12 digit.",
                  },
                })}
                aria-invalid={errors.noKadPengenalanSahabat ? "true" : "false"}
              />

              {/* Validate required field */}
              {errors.noKadPengenalanSahabat?.type === "required" && (
                <small className="text-danger">
                  No. kad pengenalan sahabat diperlukan.
                </small>
              )}

              {/* Validate pattern field */}
              {errors.noKadPengenalanSahabat?.type === "pattern" && (
                <small className="text-danger">
                  {errors.noKadPengenalanSahabat.message}
                </small>
              )}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button
              className="batal-btn"
              onClick={closeModalCarianLaporanProfilSahabatTerperinci}
            >
              Batal
            </Button>
            <Button onClick={handleSubmit(handleSearchDetailedCustomerProfile)}>
              Cari
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default SearchDetailedCustomerProfile;
