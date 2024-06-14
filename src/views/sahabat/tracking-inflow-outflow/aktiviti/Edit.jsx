import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { useAktivitiStore } from "../../../../store/sahabat/aktiviti-store";

function EditAktiviti({
  sahabatId,
  pembiayaanId,
  aktivitiId,
  aktivitiSahabat,
  selectedAktiviti,
  setSelectedAktiviti,
  selectedKeteranganAktiviti,
  setSelectedKeteranganAktiviti,
  setSelectedProjekAktiviti,
  aktivitiOptions,
  keteranganAktivitiOptions,
  projekAktivitiOptions,
  dimensiOptions,
}) { console.log(dimensiOptions);
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalEditAktivitiSahabat, setIsModalEditAktivitiSahabat] =
    useState(false);
  const openModalEditAktivitiSahabat = () =>
    setIsModalEditAktivitiSahabat(true);
  const closeModalEditAktivitiSahabat = () => {
    setIsModalEditAktivitiSahabat(false);
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
  // Set default values when the edit aktiviti modal is opened
  const [formData, setFormData] = useState({
    kegiatanId: "",
    keteranganKegiatanId: "",
    projekKegiatanId: "",
    dimensiId: "",
    pengurusDanaAktiviti: "",
    keteranganLainAktiviti: "",
    jumlahPinjamanAktiviti: "",
  });

  useEffect(() => {
    // Populate form data
    setValue("kegiatanId", aktivitiSahabat.kegiatanId);
    setValue("keteranganKegiatanId", aktivitiSahabat.keteranganKegiatanId);
    setValue("projekKegiatanId", aktivitiSahabat.projekKegiatanId);
    setValue("dimensiId", aktivitiSahabat.kodDimensi);
    setValue("pengurusDanaAktiviti", aktivitiSahabat.pengurusDanaAktiviti);
    setValue("keteranganLainAktiviti", aktivitiSahabat.keteranganLainAktiviti);
    setValue("jumlahPinjamanAktiviti", aktivitiSahabat.jumlahPinjamanAktiviti);
    console.log(aktivitiSahabat.kodDimensi);

    // Set default values for formData
    setFormData((prevData) => ({
      ...prevData,
      kegiatanId: aktivitiSahabat.kegiatanId,
      keteranganKegiatanId: aktivitiSahabat.keteranganKegiatanId,
      projekKegiatanId: aktivitiSahabat.projekKegiatanId,
      dimensiId: aktivitiSahabat.kodDimensi,
      pengurusDanaAktiviti: aktivitiSahabat.pengurusDanaAktiviti,
      keteranganLainAktiviti: aktivitiSahabat.keteranganLainAktiviti,
      jumlahPinjamanAktiviti: aktivitiSahabat.jumlahPinjamanAktiviti,
    }));

    // setSelectedAktiviti(aktivitiSahabat.kegiatanId);
    // setSelectedKeteranganAktiviti(aktivitiSahabat.keteranganKegiatanId);
    // setSelectedProjekAktiviti(aktivitiSahabat.projekKegiatanId);
  }, [aktivitiSahabat, setValue]);

  // Edit aktiviti sahabat
  const { editAktivitiSahabat } = useAktivitiStore((state) => ({
    editAktivitiSahabat: state.editAktivitiSahabat,
  }));

  // Pass input & close modal
  const handleEditAktivitiSahabat = (editAktivitiSahabatData) => {
    editAktivitiSahabat(
      sahabatId,
      pembiayaanId,
      aktivitiId,
      editAktivitiSahabatData,
      closeModalEditAktivitiSahabat
    );
  };

  return (
    <>
      <Button className="edit-btn" onClick={openModalEditAktivitiSahabat}>
        Edit
      </Button>{" "}

      <Modal
        show={isModalEditAktivitiSahabat}
        onHide={closeModalEditAktivitiSahabat}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Aktiviti Sahabat</Modal.Title>
        </Modal.Header>

        <Form onReset={reset}>
          <Modal.Body>
            {/* Aktiviti */}
            <Form.Group controlId="kegiatanId" className="mb-3">
              <Form.Label className="form-label">Aktiviti</Form.Label>

              <Form.Control
                as="select"
                className="form-select"
                {...register("kegiatanId", { required: true })}
                aria-invalid={errors.kegiatanId ? "true" : "false"}
                defaultValue=""
              >
                <option value="" disabled>
                  --Pilih Aktiviti--
                </option>

                {aktivitiOptions.map((aktiviti) => (
                  <option key={aktiviti.id} value={aktiviti.id}>
                    {aktiviti.jenisKegiatan}
                  </option>
                ))}
              </Form.Control>

              {errors.kegiatanId?.type === "required" && (
                <small className="text-danger">Aktiviti diperlukan.</small>
              )}
            </Form.Group>

            {/* Keterangan Kegiatan */}
            <Form.Group controlId="keteranganKegiatanId" className="mb-3">
              <Form.Label className="form-label">
                Keterangan Kegiatan
              </Form.Label>

              <Form.Control
                as="select"
                className="form-select"
                {...register("keteranganKegiatanId", { required: true })}
                onChange={(e) => {
                  setSelectedKeteranganAktiviti(e.target.value);
                }}
                aria-invalid={errors.keteranganKegiatanId ? "true" : "false"}
              >
                <option value="" disabled>
                  --Pilih Keterangan Kegiatan--
                </option>

                {keteranganAktivitiOptions
                  .filter(
                    (item) =>
                      selectedAktiviti && item.kegiatanId === selectedAktiviti
                  )
                  .map((keteranganAktiviti) => (
                    <option
                      key={keteranganAktiviti.id}
                      value={keteranganAktiviti.id}
                    >
                      {keteranganAktiviti.jenisKeteranganKegiatan}
                    </option>
                  ))}
              </Form.Control>

              {errors.keteranganKegiatanId?.type === "required" && (
                <small className="text-danger">
                  Keterangan kegiatan diperlukan.
                </small>
              )}
            </Form.Group>

            {/* Projek Aktiviti */}
            <Form.Group controlId="projekKegiatanId" className="mb-3">
              <Form.Label className="form-label">Projek Aktiviti</Form.Label>

              <Form.Control
                as="select"
                className="form-select"
                {...register("projekKegiatanId", { required: true })}
                onChange={(e) => {
                  setSelectedProjekAktiviti(e.target.value);
                }}
                aria-invalid={errors.projekKegiatanId ? "true" : "false"}
              >
                <option value="" disabled>
                  --Pilih Projek Aktiviti--
                </option>
                {projekAktivitiOptions
                  .filter(
                    (item) =>
                      selectedKeteranganAktiviti &&
                      item.keteranganKegiatanId === selectedKeteranganAktiviti
                  )
                  .map((projekAktiviti) => (
                    <option key={projekAktiviti.id} value={projekAktiviti.id}>
                      {projekAktiviti.jenisProjekKegiatan}
                    </option>
                  ))}
              </Form.Control>

              {errors.projekKegiatanId?.type === "required" && (
                <small className="text-danger">
                  Projek aktiviti diperlukan.
                </small>
              )}
            </Form.Group>

            {/* Dimensi */}
            <Form.Group controlId="dimensiId" className="mb-3">
              <Form.Label className="form-label">Dimensi</Form.Label>

              <Form.Control
                as="select"
                className="form-select"
                {...register("dimensiId", { required: true })}
                aria-invalid={errors.dimensiId ? "true" : "false"}
              >
                <option value="" disabled>
                  --Pilih Kod Dimensi--
                </option>
                {dimensiOptions
                  .sort((a, b) => a.kodDimensi.localeCompare(b.kodDimensi))
                  .map((kodDimensi) => (
                    <option key={kodDimensi.id} value={kodDimensi.id}>
                      {kodDimensi.kodDimensi} - {kodDimensi.keteranganDimensi}
                    </option>
                  ))}
              </Form.Control>

              {errors.dimensiId?.type === "required" && (
                <small className="text-danger">Kod dimensi diperlukan.</small>
              )}
            </Form.Group>

            {/* Pengurusan Dana */}
            <Form.Group controlId="pengurusDanaAktiviti" className="mb-3">
              <Form.Label className="form-label">Pengurusan Dana</Form.Label>

              <Form.Control
                as="select"
                className="form-select"
                {...register("pengurusDanaAktiviti", { required: true })}
                onChange={(e) => {}}
                aria-invalid={errors.pengurusDanaAktiviti ? "true" : "false"}
              >
                <option value="" disabled>
                  --Pilih Pengurus Dana Sahabat--
                </option>
                <option value="FM - FUND MANAGER">FM - FUND MANAGER</option>
                <option value="PS - PARTNERSHIP">PS - PARTNERSHIP</option>
                <option value="PL - PERNIAGAAN">PL - PIPELINER</option>

                {errors.pengurusDanaAktiviti?.type === "required" && (
                  <small className="text-danger">
                    Pengurusan dana diperlukan.
                  </small>
                )}
              </Form.Control>

              {errors.pengurusDanaAktiviti?.type === "required" && (
                <small className="text-danger">
                  Pengurusan dana diperlukan.
                </small>
              )}
            </Form.Group>

            {/* Keterangan Lain Aktiviti */}
            <Form.Group controlId="keteranganLainAktiviti" className="mb-3">
              <Form.Label className="form-label">
                Keterangan untuk Lain-Lain
              </Form.Label>

              <Form.Control
                type="text"
                {...register("keteranganLainAktiviti")}
                aria-invalid={errors.keteranganLainAktiviti ? "true" : "false"}
                placeholder="Masukkan keterangan untuk lain-lain"
              />
            </Form.Group>

            {/* Jumlah Pinjaman */}
            <Form.Group controlId="jumlahPinjamanAktiviti" className="mb-3">
              <Form.Label className="form-label">
                Jumlah Pinjaman (RM)
              </Form.Label>

              <Form.Control
                type="number"
                min="0.00"
                max="10000.00"
                step="0.01"
                {...register("jumlahPinjamanAktiviti", { required: true })}
                aria-invalid={errors.jumlahPinjamanAktiviti ? "true" : "false"}
                placeholder="Masukkan jumlah pinjaman (RM)"
              />
              {errors.jumlahPinjamanAktiviti?.type === "required" && (
                <small className="text-danger">
                  Jumlah pinjaman diperlukan.
                </small>
              )}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button
              className="batal-btn"
              onClick={closeModalEditAktivitiSahabat}
            >
              Batal
            </Button>

            <Button onClick={handleSubmit(handleEditAktivitiSahabat)}>
              Simpan
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default EditAktiviti;
