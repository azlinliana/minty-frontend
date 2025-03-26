import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { FaPlus } from "react-icons/fa";
import { useAktivitiStore } from "../../../../store/sahabat/aktiviti-store";

// function CreateAktiviti({
//   sahabatId,
//   pembiayaanId,
//   selectedAktiviti,
//   setSelectedAktiviti,
//   selectedKeteranganAktiviti,
//   setSelectedKeteranganAktiviti,
//   setSelectedProjekAktiviti,
//   aktivitiOptions,
//   keteranganAktivitiOptions,
//   projekAktivitiOptions,
//   dimensiOptions,
// }) {
function CreateAktiviti() {
  // __________________________________ Frontend __________________________________
  // Modal
  const [isModalCreateAktivitiSahabat, setIsModalCreateAktivitiSahabat] =
    useState(false);

  const openModalCreateAktivitiSahabat = () =>
    setIsModalCreateAktivitiSahabat(true);

  const closeModalCreateAktivitiSahabat = () => {
    setIsModalCreateAktivitiSahabat(false);
    reset(); // Reset previous form input
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
  // Create aktiviti sahabat
  // const { createAktivitiSahabat } = useAktivitiStore((state) => ({
  //   createAktivitiSahabat: state.createAktivitiSahabat,
  // }));

  // Pass input & close modal
  const handleCreateAktivitiSahabat = (addAktivitiSahabatData) => {
    // createAktivitiSahabat(
    //   sahabatId,
    //   pembiayaanId,
    //   addAktivitiSahabatData,
    //   closeModalCreateAktivitiSahabat
    // );
  };

  return (
    <>
      <Button variant="primary" onClick={openModalCreateAktivitiSahabat}>
        <FaPlus style={{ fontSize: "10px" }} /> Tambah
      </Button>{" "}
      
      <Modal
        show={isModalCreateAktivitiSahabat}
        onHide={closeModalCreateAktivitiSahabat}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Tambah Aktiviti Sahabat</Modal.Title>
        </Modal.Header>

        <Form onReset={reset}>
          <Modal.Body>
            {/* Aktiviti */}
            <Form.Group controlId="kegiatanId" className="mb-3">
              <Form.Label className="form-label">Aktiviti</Form.Label>

              <Form.Control
                as="select"
                className="form-select"
                // {...register("kegiatanId", { required: true })}
                // onChange={(e) => {
                //   setSelectedAktiviti(e.target.value);
                // }}
                // aria-invalid={errors.kegiatanId ? "true" : "false"}
                defaultValue=""
              >
                <option value="" disabled>
                  --Pilih Aktiviti--
                </option>

                {/* {aktivitiOptions.map((aktiviti) => (
                  <option key={aktiviti.id} value={aktiviti.id}>
                    {aktiviti.jenisKegiatan}
                  </option>
                ))} */}
              </Form.Control>

              {/* {errors.aktiviti?.type === "required" && ( */}
                <small className="text-danger">
                  Aktiviti diperlukan.
                </small>
              {/* )} */}
            </Form.Group>

            {/* Keterangan Kegiatan */}
            <Form.Group controlId="keteranganKegiatanId" className="mb-3">
              <Form.Label className="form-label">
                Keterangan Kegiatan
              </Form.Label>

              <Form.Control
                as="select"
                className="form-select"
                // {...register("keteranganKegiatanId", { required: true })}
                // onChange={(e) => {
                //   setSelectedKeteranganAktiviti(e.target.value);
                // }}
                // aria-invalid={errors.keteranganKegiatanId ? "true" : "false"}
                defaultValue=""
              >
                <option value="" disabled>
                  --Pilih Keterangan Kegiatan--
                </option>

                {/* {keteranganAktivitiOptions
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
                  ))} */}
              </Form.Control>

              {/* {errors.keteranganKegiatanId?.type === "required" && ( */}
                <small className="text-danger">
                  Keterangan kegiatan diperlukan.
                </small>
              {/* )} */}
            </Form.Group>

            {/* Projek Aktiviti */}
            <Form.Group controlId="projekKegiatanId" className="mb-3">
              <Form.Label className="form-label">Projek Aktiviti</Form.Label>

              <Form.Control
                as="select"
                className="form-select"
                // {...register("projekKegiatanId", { required: true })}
                // onChange={(e) => {
                //   setSelectedProjekAktiviti(e.target.value);
                // }}
                // aria-invalid={errors.projekKegiatanId ? "true" : "false"}
                defaultValue=""
              >
                <option value="" disabled>
                  --Pilih Projek Aktiviti--
                </option>

                {/* {projekAktivitiOptions
                  .filter(
                    (item) =>
                      selectedKeteranganAktiviti &&
                      item.keteranganKegiatanId === selectedKeteranganAktiviti
                  )
                  .map((projekAktiviti) => (
                    <option key={projekAktiviti.id} value={projekAktiviti.id}>
                      {projekAktiviti.jenisProjekKegiatan}
                    </option>
                  ))} */}
              </Form.Control>

              {/* {errors.projekKegiatanId?.type === "required" && ( */}
                <small className="text-danger">
                  Projek aktiviti diperlukan.
                </small>
              {/* )} */}
            </Form.Group>

            {/* Dimensi */}
            <Form.Group controlId="dimensiId" className="mb-3">
              <Form.Label className="form-label">Dimensi</Form.Label>

              <Form.Control
                as="select"
                className="form-select"
                // {...register("dimensiId", { required: true })}
                // onChange={(e) => {}}
                // aria-invalid={errors.dimensiId ? "true" : "false"}
                defaultValue=""
              >
                <option value="" disabled>
                  --Pilih Kod Dimensi--
                </option>
                {/* {dimensiOptions
                  .sort((a, b) => a.kodDimensi.localeCompare(b.kodDimensi))
                  .map((kodDimensi) => (
                    <option key={kodDimensi.id} value={kodDimensi.id}>
                      {kodDimensi.kodDimensi} - {kodDimensi.keteranganDimensi}
                    </option>
                  ))} */}
              </Form.Control>

              {/* {errors.dimensiId?.type === "required" && ( */}
                <small className="text-danger">Kod dimensi diperlukan.</small>
              {/* )} */}
            </Form.Group>

            {/* Pengurusan Dana */}
            <Form.Group controlId="pengurusDanaAktiviti" className="mb-3">
              <Form.Label className="form-label">Pengurusan Dana</Form.Label>

              <Form.Control
                as="select"
                className="form-select"
                // {...register("pengurusDanaAktiviti", { required: true })}
                // onChange={(e) => {}}
                // aria-invalid={errors.pengurusDanaAktiviti ? "true" : "false"}
                defaultValue=""
              >
                <option value="" disabled>
                  --Pilih Pengurus Dana Sahabat--
                </option>
                {/* <option value="FM - FUND MANAGER">FM - FUND MANAGER</option>
                <option value="PS - PARTNERSHIP">PS - PARTNERSHIP</option>
                <option value="PL - PERNIAGAAN">PL - PIPELINER</option> */}

                {errors.pengurusDanaAktiviti?.type === "required" && (
                  <small className="text-danger">
                    Pengurusan dana diperlukan.
                  </small>
                )}
              </Form.Control>

              {/* {errors.pengurusDanaAktiviti?.type === "required" && ( */}
                <small className="text-danger">
                  Pengurusan dana diperlukan.
                </small>
              {/* )} */}
            </Form.Group>

            {/* Keterangan Lain Aktiviti */}
            <Form.Group controlId="keteranganLainAktiviti" className="mb-3">
              <Form.Label className="form-label">
                Keterangan untuk Lain-Lain
              </Form.Label>

              <Form.Control
                type="text"
                // {...register("keteranganLainAktiviti")}
                // aria-invalid={errors.keteranganLainAktiviti ? "true" : "false"}
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
                // {...register("jumlahPinjamanAktiviti", {
                //   required: "Jumlah pinjaman diperlukan.",
                //   valueAsNumber: true, // Ensure value is treated as a number
                //   validate: {
                //     isGreaterThanZero: (value) => {
                //       return (
                //         parseFloat(value) >= 0.01 ||
                //         "Jumlah pinjaman haruslah sekurang-kurangnya 0.01 atau lebih."
                //       );
                //     },
                //   },
                // })}
                // onBlur={(e) => {
                //   const currentValue = parseFloat(e.target.value);
                //   if (!isNaN(currentValue)) {
                //     setValue("jumlahPinjamanAktiviti", currentValue.toFixed(2)); // Format to two decimal places
                //   }
                // }}
                // aria-invalid={errors.jumlahPinjamanAktiviti ? "true" : "false"}
                placeholder="Masukkan jumlah pinjaman (RM)"
              />

              {/* {errors.jumlahPinjamanAktiviti?.type === "required" && ( */}
                <small className="text-danger">
                  Jumlah pinjaman diperlukan.
                </small>
              {/* )} */}

              {/* {errors.jumlahPinjamanAktiviti?.type === "isGreaterThanZero" && ( */}
                <small className="text-danger">
                  Jumlah pinjaman aktiviti haruslah sekurang-kurangnya 0.01 atau
                  lebih.
                </small>
              {/* )} */}
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button
              className="batal-btn"
              onClick={closeModalCreateAktivitiSahabat}
            >
              Batal
            </Button>

            <Button onClick={handleSubmit(handleCreateAktivitiSahabat)}>
              Simpan
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default CreateAktiviti;
