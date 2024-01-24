import React, { useState, useEffect, useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import SuccessAlert from "../../../components/sweet-alert/SuccessAlert";
import ErrorAlert from "../../../components/sweet-alert/ErrorAlert";
import { Modal, Button, Form } from "react-bootstrap";
import axiosCustom from "../../../../axios";

function EditAktiviti({
  sahabatId,
  pembiayaanId,
  aktivitiId,
  aktiviti,
  kegiatanOptions,
  keteranganKegiatanOptions,
  projekKegiatanOptions,
  kodDimensisData,
}) {
  // ----------FE----------
  // Modal
  const [isModalEditAktiviti, setIsModalEditAktiviti] = useState(false);
  const openModalEditAktiviti = () => setIsModalEditAktiviti(true);
  const closeModalEditAktiviti = () => {
    setIsModalEditAktiviti(false);
  };

  // Form validation
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // ----------BE----------
  // Fetch kegiatan, keterangan kegiatan, and projek kegiatan
  const [selectedKegiatan, setSelectedKegiatan] = useState("");
  const [selectedKeteranganKegiatan, setSelectedKeteranganKegiatan] =
    useState("");
  const [selectedProjekKegiatan, setSelectedProjekKegiatan] = useState("");

  // Set initial values based on aktiviti prop
  useEffect(() => {
    if (aktiviti) {
      setSelectedKegiatan(aktiviti.kegiatanId.toString());
      setSelectedKeteranganKegiatan(aktiviti.keteranganKegiatanId.toString());
      setSelectedProjekKegiatan(aktiviti.projekKegiatanId.toString());
    }
  }, [aktiviti]);

  const updateAktiviti = async (aktivitiInput) => {
    try {
      const response = await axiosCustom.put(
        `/sahabat/${sahabatId}/pembiayaan/${pembiayaanId}/aktiviti/${aktivitiId}`,
        aktivitiInput
      );
      if (response.status === 200) {
        SuccessAlert(response.data.message);
        closeModalEditAktiviti();
      } else {
        console.log(response);
        ErrorAlert(response.error); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  };

  return (
    <>
      <Button className="editBtn" onClick={openModalEditAktiviti}>
        Kemas Kini
      </Button>{" "}
      <Modal
        show={isModalEditAktiviti}
        onHide={closeModalEditAktiviti}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Kemas Kini Aktiviti Sahabat</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={handleSubmit} onReset={reset}>
            <Form.Group>
              <Form.Label htmlFor="kegiatanId">Aktiviti</Form.Label>
              <Controller
                id="kegiatanId"
                name="kegiatanId"
                control={control}
                defaultValue={aktiviti.kegiatanId}
                rules={{ required: "Aktivti diperlukan." }}
                render={({ field: { onChange } }) => (
                  <Form.Select
                    onChange={(e) => {
                      setSelectedKegiatan(e.target.value);
                      onChange(e);
                    }}
                    defaultValue={aktiviti.kegiatanId}
                  >
                    <option value="" disabled>
                      --Pilih Aktiviti--
                    </option>
                    {kegiatanOptions.map((kegiatan) => (
                      <option key={kegiatan.value} value={kegiatan.value}>
                        {kegiatan.label}
                      </option>
                    ))}
                  </Form.Select>
                )}
              />
              {errors.kegiatanId && (
                <small className="text-danger">
                  {errors.kegiatanId.message}
                </small>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="keteranganKegiatanId">
                Keterangan Aktiviti
              </Form.Label>
              <Controller
                id="keteranganKegiatanId"
                name="keteranganKegiatanId"
                control={control}
                defaultValue={aktiviti.keteranganKegiatanId}
                rules={{ required: "Keterangan aktiviti diperlukan." }}
                render={({ field: { onChange } }) => (
                  <Form.Select
                    onChange={(e) => {
                      setSelectedKeteranganKegiatan(e.target.value);
                      onChange(e);
                    }}
                    defaultValue={aktiviti.keteranganKegiatanId}
                  >
                    <option value="" disabled>
                      --Pilih Keterangan Aktiviti--
                    </option>
                    {keteranganKegiatanOptions
                      .filter(
                        (item) =>
                          selectedKegiatan &&
                          item.kegiatanId === Number(selectedKegiatan)
                      )
                      .map((keteranganKegiatan) => (
                        <option
                          key={keteranganKegiatan.value}
                          value={keteranganKegiatan.value}
                        >
                          {keteranganKegiatan.label}
                        </option>
                      ))}
                  </Form.Select>
                )}
              />
              {errors.keteranganKegiatanId && (
                <small className="text-danger">
                  {errors.keteranganKegiatanId.message}
                </small>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="projekKegiatanId">
                Projek Aktiviti
              </Form.Label>
              <Controller
                id="projekKegiatanId"
                name="projekKegiatanId"
                control={control}
                defaultValue={aktiviti.projekKegiatanId}
                rules={{ required: "Projek aktiviti diperlukan." }}
                render={({ field: { onChange } }) => (
                  <Form.Select
                    onChange={(e) => {
                      setSelectedProjekKegiatan(e.target.value);
                      onChange(e);
                    }}
                    defaultValue={aktiviti.projekKegiatanId}
                  >
                    <option value="" disabled>
                      --Pilih Projek Aktiviti--
                    </option>
                    {projekKegiatanOptions
                      .filter(
                        (item) =>
                          selectedKeteranganKegiatan &&
                          item.keteranganKegiatanId ===
                            Number(selectedKeteranganKegiatan)
                      )
                      .map((projekKegiatan) => (
                        <option
                          key={projekKegiatan.value}
                          value={projekKegiatan.value}
                        >
                          {projekKegiatan.label}
                        </option>
                      ))}
                  </Form.Select>
                )}
              />
              {errors.projekKegiatanId && (
                <small className="text-danger">
                  {errors.projekKegiatanId.message}
                </small>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="dimensiId">Dimensi</Form.Label>
              <Controller
                id="dimensiId"
                name="dimensiId"
                control={control}
                defaultValue={aktiviti.dimensiId}
                rules={{ required: "Kod dimensi diperlukan." }}
                render={({ field: { onChange } }) => (
                  <Form.Select
                    onChange={onChange}
                    defaultValue={aktiviti.dimensiId}
                  >
                    <option value="" disabled>
                      --Pilih Kod Dimensi--
                    </option>
                    {kodDimensisData.map((kodDimensi) => (
                      <option key={kodDimensi.id} value={kodDimensi.id}>
                        {kodDimensi.kodDimensi} - {kodDimensi.keteranganDimensi}
                      </option>
                    ))}
                  </Form.Select>
                )}
              />
              {errors.dimensiId && (
                <small className="text-danger">
                  {errors.dimensiId.message}
                </small>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="pengurusDana">Pengurusan Dana</Form.Label>
              <Controller
                id="pegurusDanaAktiviti"
                name="pengurusDanaAktiviti"
                control={control}
                defaultValue={aktiviti.pengurusDanaAktiviti}
                rules={{ required: "Pengurus dana diperlukan." }}
                render={({ field: { onChange } }) => (
                  <Form.Select
                    onChange={onChange}
                    defaultValue={aktiviti.pengurusDanaAktiviti}
                  >
                    <option value="" disabled>
                      --Pilih Pengurus Dana Sahabat--
                    </option>
                    <option value="FM-FUND MANAGER">FM-FUND MANAGER</option>
                    <option value="PS-PARTNERSHIP">PS-PARTNERSHIP</option>
                    <option value="PL-PERNIAGAAN">PL-PIPELINER</option>
                  </Form.Select>
                )}
              />
              {errors.pengurusDanaAktiviti && (
                <small className="text-danger">
                  {errors.pengurusDanaAktiviti.message}
                </small>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="keteranganLainAktiviti">
                Keterangan untuk Lain-Lain
              </Form.Label>
              <Controller
                id="keteranganLainAktiviti"
                name="keteranganLainAktiviti"
                control={control}
                defaultValue={aktiviti.keteranganLainAktiviti}
                render={({ field: { onChange, value } }) => (
                  <Form.Control
                    type="text"
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan keterangan untuk lain-lain"
                    autoFocus
                  />
                )}
              />
            </Form.Group>

            <Form.Group>
              <Form.Label htmlFor="jumlahPinjamanAktiviti">
                Jumlah Pinjaman (RM)
              </Form.Label>
              <Controller
                id="jumlahPinjamanAktiviti"
                name="jumlahPinjamanAktiviti"
                control={control}
                defaultValue={aktiviti.jumlahPinjamanAktiviti}
                rules={{ required: "Jumlah pinjaman diperlukan." }}
                render={({ field: { onChange, value } }) => (
                  <Form.Control
                    type="number"
                    min="0.00"
                    max="10000.00"
                    step="0.01"
                    onChange={onChange}
                    value={value}
                    placeholder="Masukkan jumlah pinjaman (RM)"
                    autoFocus
                  />
                )}
              />
              {errors.jumlahPinjamanAktiviti && (
                <small className="text-danger">
                  {errors.jumlahPinjamanAktiviti.message}
                </small>
              )}
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={closeModalEditAktiviti}>
            Batal
          </Button>
          <Button variant="primary" onClick={handleSubmit(updateAktiviti)}>
            Simpan
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditAktiviti;
