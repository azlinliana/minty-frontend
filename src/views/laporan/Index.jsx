import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import ErrorAlert from "../components/sweet-alert/ErrorAlert";
import { Table, Button, Form, Modal } from "react-bootstrap";
import axiosCustom from "../../axios";
import "../../assets/styles/styles_laporan.css";

function IndexLaporan() {
  // ----------FE----------
  // Modal Carian Laporan Profil Sahabat
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

  // Modal Carian Laporan Profil Sahabat Terperinci
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
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  // Link pages
  const navigate = useNavigate();
  const clickJadualTF01 = () => navigate("/search-tf01");
  const clickJadualTF01Cawangan = () => navigate("/search-tf01-cawangan");
  const clickJadualTF02 = () => navigate("/search-tf02");

  // ----------BE----------
  const searchNoKadPengenalanSahabatProfilSahabat = async (
    noKadPengenalanSahabatInput
  ) => {
    try {
      const response = await axiosCustom.get(
        `/laporan/search/${noKadPengenalanSahabatInput.noKadPengenalanSahabat}`
      );
      if (response.status === 200) {
        navigate("/pembiayaan-sahabat", {
          state: { resultSahabat: response.data },
        }); // Set response data as a state
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error); // Error related to API response or client side
    }
  };

  const searchNoKadPengenalanSahabatProfilSahabatTerperinci = async (
    noKadPengenalanSahabatInput
  ) => {
    try {
      const response = await axiosCustom.get(
        `/laporan/search/${noKadPengenalanSahabatInput.noKadPengenalanSahabat}`
      );
      if (response.status === 200) {
        navigate("/pembiayaan-sahabat-terperinci", {
          state: { resultSahabat: response.data },
        }); // Set response data as a state
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error); // Error related to API response or client side
    }
  };

  return (
    <div>
      <div className="pageTitle">
        <h1>Senarai Laporan</h1>
      </div>

      <div className="tableSection">
        <Table responsive>
          <thead>
            <tr>
              <th className="tableBil">Bil.</th>
              <th>Keterangan</th>
              <th className="tableTindakan">Tindakan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="tableBil">1</td>
              <td>Laporan Profil Sahabat</td>
              <td>
                <Button
                  className="indexLaporanBtn"
                  variant="primary"
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

                  <Modal.Body>
                    <Form
                      onSubmit={handleSubmit(
                        searchNoKadPengenalanSahabatProfilSahabat
                      )}
                      onReset={reset}
                    >
                      <Form.Group className="mb-3">
                        <Controller
                          id="noKadPengenalanSahabat"
                          name="noKadPengenalanSahabat"
                          control={control}
                          defaultValue=""
                          rules={{
                            required: "No. kad pengenalan sahabat diperlukan.",
                          }}
                          render={({ field: { onChange, value } }) => (
                            <Form.Control
                              type="text"
                              maxLength={12}
                              onChange={onChange}
                              value={value}
                              placeholder="Masukkan no. kad pengenalan sahabat"
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
                    </Form>
                  </Modal.Body>

                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={closeModalCarianLaporanProfilSahabat}
                    >
                      Batal
                    </Button>
                    <Button
                      variant="primary"
                      onClick={handleSubmit(
                        searchNoKadPengenalanSahabatProfilSahabat
                      )}
                    >
                      Cari
                    </Button>
                  </Modal.Footer>
                </Modal>
              </td>
            </tr>

            <tr>
              <td className="tableBil">2</td>
              <td>Laporan Profil Sahabat Terperinci</td>
              <td>
                <Button
                  className="indexLaporanBtn"
                  variant="primary"
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
                    <Modal.Title>
                      Carian Laporan Profil Sahabat Terperinci
                    </Modal.Title>
                  </Modal.Header>

                  <Modal.Body>
                    <Form
                      onSubmit={handleSubmit(
                        searchNoKadPengenalanSahabatProfilSahabatTerperinci
                      )}
                      onReset={reset}
                    >
                      <Form.Group className="mb-3">
                        <Controller
                          id="noKadPengenalanSahabat"
                          name="noKadPengenalanSahabat"
                          control={control}
                          defaultValue=""
                          rules={{
                            required: "No. kad pengenalan sahabat diperlukan.",
                          }}
                          render={({ field: { onChange, value } }) => (
                            <Form.Control
                              type="text"
                              maxLength={12}
                              onChange={onChange}
                              value={value}
                              placeholder="Masukkan no. kad pengenalan sahabat"
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
                    </Form>
                  </Modal.Body>

                  <Modal.Footer>
                    <Button
                      variant="secondary"
                      onClick={closeModalCarianLaporanProfilSahabatTerperinci}
                    >
                      Batal
                    </Button>
                    <Button
                      variant="primary"
                      onClick={handleSubmit(
                        searchNoKadPengenalanSahabatProfilSahabatTerperinci
                      )}
                    >
                      Cari
                    </Button>
                  </Modal.Footer>
                </Modal>
              </td>
            </tr>

            <tr>
              <td className="tableBil">3</td>
              <td>Jadual TF01</td>
              <td>
                <Button
                  className="indexLaporanBtn"
                  variant="primary"
                  onClick={clickJadualTF01}
                >
                  Lihat
                </Button>{" "}
              </td>
            </tr>

            <tr>
              <td className="tableBil">4</td>
              <td>Jadual TF01 Mengikut Cawangan</td>
              <td>
                <Button
                  className="indexLaporanBtn"
                  variant="primary"
                  onClick={clickJadualTF01Cawangan}
                >
                  Lihat
                </Button>{" "}
              </td>
            </tr>

            <tr>
              <td className="tableBil">5</td>
              <td>Jadual TF02</td>
              <td>
                <Button
                  className="indexLaporanBtn"
                  variant="primary"
                  onClick={clickJadualTF02}
                >
                  Lihat
                </Button>{" "}
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}

export default IndexLaporan;
