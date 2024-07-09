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
  selectedProjekAktiviti,
  setSelectedProjekAktiviti,
  aktivitiOptions,
  keteranganAktivitiOptions,
  projekAktivitiOptions,
  dimensiOptions,
}) {
  // __________________________________ Frontend __________________________________
  // Form validation
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  // _____________________________ Frontend & Backend _____________________________
  // Match data from zustand & backend
  const findOptionId = (options, key, value) => {
    const option = options.find((option) => option[key] === value);

    return option ? option.id : "";
  };

  // Match data
  const kegiatanId = findOptionId(
    aktivitiOptions,
    "jenisKegiatan",
    aktivitiSahabat.jenisKegiatan
  );

  const keteranganKegiatanId = findOptionId(
    keteranganAktivitiOptions,
    "jenisKeteranganKegiatan",
    aktivitiSahabat.jenisKeteranganKegiatan
  );

  const projekKegiatanId = findOptionId(
    projekAktivitiOptions,
    "jenisProjekKegiatan",
    aktivitiSahabat.jenisProjekKegiatan
  );

  const dimensiId = findOptionId(
    dimensiOptions,
    "kodDimensi",
    aktivitiSahabat.kodDimensi
  );

  // Modal
  const [isModalEditAktivitiSahabat, setIsModalEditAktivitiSahabat] =
    useState(false);

  const openModalEditAktivitiSahabat = () =>
    setIsModalEditAktivitiSahabat(true);

  const closeModalEditAktivitiSahabat = () => {
    setIsModalEditAktivitiSahabat(false);

    // Reset previous form input
    const resetFields = {
      kegiatanId: kegiatanId,
      keteranganKegiatanId: keteranganKegiatanId,
      projekKegiatanId: projekKegiatanId,
      dimensiId: dimensiId,
      pengurusDanaAktiviti: aktivitiSahabat.pengurusDanaAktiviti,
      keteranganLainAktiviti: aktivitiSahabat.keteranganLainAktiviti,
      jumlahPinjamanAktiviti: aktivitiSahabat.jumlahPinjamanAktiviti,
    };

    reset(resetFields);
  };

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
    setValue("kegiatanId", kegiatanId);
    setValue("keteranganKegiatanId", keteranganKegiatanId);
    setValue("projekKegiatanId", projekKegiatanId);
    setValue("dimensiId", dimensiId);
    setValue("pengurusDanaAktiviti", aktivitiSahabat.pengurusDanaAktiviti);
    setValue("keteranganLainAktiviti", aktivitiSahabat.keteranganLainAktiviti);
    setValue("jumlahPinjamanAktiviti", aktivitiSahabat.jumlahPinjamanAktiviti);

    // Set default values for formData
    setFormData((prevData) => ({
      ...prevData,
      kegiatanId,
      keteranganKegiatanId,
      projekKegiatanId,
      dimensiId,
      pengurusDanaAktiviti: aktivitiSahabat.pengurusDanaAktiviti,
      keteranganLainAktiviti: aktivitiSahabat.keteranganLainAktiviti,
      jumlahPinjamanAktiviti: aktivitiSahabat.jumlahPinjamanAktiviti,
    }));
  }, [aktivitiSahabat, setValue]);

  // ___________________________________ Backend __________________________________
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
                onChange={(e) => {
                  setSelectedAktiviti(e.target.value);
                }}
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
                defaultValue=""
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
                defaultValue=""
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
