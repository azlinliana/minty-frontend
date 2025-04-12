import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal, Button, Form } from "react-bootstrap";
import { useIsiRumahStore } from "../../../../store/sahabat/isi-rumah-store";

// function EditTrackingIsiRumah({ isiRumahId, isiRumahSahabat, hubunganOptions }) {
function EditTrackingIsiRumah() {
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
  // const findOptionId = (options, key, value) => {
  //   const option = options.find((option) => option[key] === value);

  //   return option ? option.id : "";
  // };

  // Match data
  // const hubunganId = findOptionId(
  //   hubunganOptions,
  //   "kodHubungan",
  //   isiRumahSahabat.hubungan
  // );

  // Modal
  const [isModalEditIsiRumah, setIsModalEditIsiRumah] = useState(false);

  const openModalEditIsiRumah = () => setIsModalEditIsiRumah(true);

  const closeModalEditIsiRumah = () => {
    setIsModalEditIsiRumah(false);

    // Reset previous form input
    // const resetFields = {
    //   noKadPengenalanIsiRumah: isiRumahSahabat.noKadPengenalanIsiRumah,
    //   namaIsiRumah: isiRumahSahabat.namaIsiRumah,
    //   hubunganId: hubunganId,
    // };

    // reset(resetFields);
  };

  // Set default values when the edit isi rumah modal is opened
  const [formData, setFormData] = useState({
    noKadPengenalanIsiRumah: "",
    namaIsiRumah: "",
    hubunganId: "",
  });

  // useEffect(() => {
  //   // Populate form data
  //   setValue(
  //     "noKadPengenalanIsiRumah",
  //     isiRumahSahabat.noKadPengenalanIsiRumah
  //   );
  //   setValue("namaIsiRumah", isiRumahSahabat.namaIsiRumah);
  //   setValue("hubunganId", hubunganId);

  //   // Set default values for formData
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     noKadPengenalanIsiRumah: isiRumahSahabat.noKadPengenalanIsiRumah,
  //     namaIsiRumah: isiRumahSahabat.namaIsiRumah,
  //     hubunganId,
  //   }));
  // }, [isiRumahSahabat, setValue]);

  // ___________________________________ Backend __________________________________
  // const { editIsiRumahSahabat } = useIsiRumahStore((state) => ({
  //   editIsiRumahSahabat: state.editIsiRumahSahabat,
  // }));

  // Pass input & close modal
  const handleEditIsiRumah = (editIsiRumahData) => {
    // editIsiRumahSahabat(
    //   isiRumahId,
    //   editIsiRumahData,
    //   closeModalEditIsiRumah
    // );
  };

  return (
    <>
      <div>
        <span onClick={openModalEditIsiRumah}>Edit</span>{" "}

        <Modal
          show={isModalEditIsiRumah}
          onHide={closeModalEditIsiRumah}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Edit Isi Rumah</Modal.Title>
          </Modal.Header>

          <Form onReset={reset}>
            <Modal.Body>
              {/* No. kad pengenalan isi rumah */}
              <Form.Group controlId="noKadPengenalanIsiRumah" className="mb-3">
                <Form.Label className="form-label">
                  No. Kad Pengenalan
                </Form.Label>

                <Form.Control
                  type="text"
                  // {...register("noKadPengenalanIsiRumah", {
                  //   required: "No. kad pengenalan isi rumah diperlukan.",
                  //   pattern: {
                  //     value: /^\d{12}$/,
                  //     message:
                  //       "No. kad pengenalan isi rumah perlu mengandungi 12 digit.",
                  //   },
                  // })}
                  // aria-invalid={
                  //   errors.noKadPengenalanIsiRumah ? "true" : "false"
                  // }
                  placeholder="Masukkan no. kad pengenalan isi rumah"
                />

                {/* Validate required field */}
                {/* {errors.noKadPengenalanIsiRumah?.type === "required" && ( */}
                  <small className="text-danger">
                    No. kad pengenalan isi rumah diperlukan.
                  </small>
                {/* )} */}

                {/* Validate pattern field */}
                {/* {errors.noKadPengenalanIsiRumah?.type === "pattern" && ( */}
                  <small className="text-danger">
                    {/* {errors.noKadPengenalanIsiRumah.message} */}
                  </small>
                {/* )} */}
              </Form.Group>

              {/* Nama isi rumah */}
              <Form.Group controlId="namaIsiRumah" className="mb-3">
                <Form.Label className="form-label">Nama</Form.Label>

                <Form.Control
                  type="text"
                  // {...register("namaIsiRumah", { required: true })}
                  // aria-invalid={errors.namaIsiRumah ? "true" : "false"}
                  placeholder="Masukkan nama isi rumah"
                />
                {/* {errors.namaIsiRumah?.type === "required" && ( */}
                  <small className="text-danger">
                    Nama isi rumah diperlukan.
                  </small>
                {/* )} */}
              </Form.Group>

              {/* Hubungan */}
              <Form.Group controlId="hubunganId" className="mb-3">
                <Form.Label className="form-label">Hubungan</Form.Label>

                <Form.Control
                  as="select"
                  className="form-select"
                  // {...register("hubunganId", { required: true })}
                  // aria-invalid={errors.hubunganId ? "true" : "false"}
                  defaultValue=""
                >
                  <option value="" disabled>
                    --Pilih Hubungan--
                  </option>
                  {/* {hubunganOptions.map((hubungan) => (
                    <option key={hubungan.id} value={hubungan.id}>
                      {hubungan.kodHubungan}
                    </option>
                  ))} */}
                </Form.Control>

                {/* {errors.hubunganId?.type === "required" && ( */}
                  <small className="text-danger">
                    Hubungan isi rumah diperlukan.
                  </small>
                {/* )} */}
              </Form.Group>
            </Modal.Body>

            <Modal.Footer>
              <Button className="cancel-btn" onClick={closeModalEditIsiRumah}>
                Batal
              </Button>

              <Button onClick={handleSubmit(handleEditIsiRumah)}>Simpan</Button>
            </Modal.Footer>
          </Form>
        </Modal>
      </div>
    </>
  );
}

export default EditTrackingIsiRumah;
