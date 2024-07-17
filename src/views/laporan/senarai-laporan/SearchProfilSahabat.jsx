import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button, Form, Modal } from "react-bootstrap";
import { useLaporanStore } from "../../../store/laporan/laporan-store";

function SearchProfilSahabat() {
  // __________________________________ Frontend __________________________________
  // Modal
  const [
    isModalCarianLaporanProfilSahabat,
    setIsModalCarianLaporanProfilSahabat,
  ] = useState(false);

  const openModalCarianLaporanProfilSahabat = () =>
    setIsModalCarianLaporanProfilSahabat(true);

  const closeModalCarianLaporanProfilSahabat = () => {
    setIsModalCarianLaporanProfilSahabat(false);
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
  // Search profil sahabat
  const [searchComplete, setSearchComplete] = useState(false);

  const { laporanProfilSahabats, searchNoKadPengenalanSahabatProfilSahabat } =
    useLaporanStore((state) => ({
      laporanProfilSahabats: state.laporanProfilSahabats,
      searchNoKadPengenalanSahabatProfilSahabat:
        state.searchNoKadPengenalanSahabatProfilSahabat,
    }));

  // Pass input & navigate to the pembiayaaan sahabat page with sahabat data
  const handleSearchProfilSahabat = async (noKadPengenalanSahabatData) => {
    await searchNoKadPengenalanSahabatProfilSahabat(noKadPengenalanSahabatData);

    setSearchComplete(true);
  };

  // Link pages
  const navigate = useNavigate();

  useEffect(() => {
    if (searchComplete) {
      navigate("/pembiayaan-sahabat", {
        state: { resultSahabat: laporanProfilSahabats },
      });
    }
  }, [laporanProfilSahabats, searchComplete, navigate]);

  return (
    <>
      <Button
        className="laporan-index-pg-btn"
        onClick={openModalCarianLaporanProfilSahabat}
      >
        Cari
      </Button>{" "}
      
      <Modal
        show={isModalCarianLaporanProfilSahabat}
        onHide={closeModalCarianLaporanProfilSahabat}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Carian Laporan Profil Sahabat</Modal.Title>
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
              onClick={closeModalCarianLaporanProfilSahabat}
            >
              Batal
            </Button>
            <Button onClick={handleSubmit(handleSearchProfilSahabat)}>
              Cari
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default SearchProfilSahabat;
