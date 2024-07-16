import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "../../assets/styles/styles_laporan.css";
import { Table, Button, Form, Modal } from "react-bootstrap";
import { useLaporanStore } from "../../store/laporan/laporan-store";

function IndexLaporan() {
  // __________________________________ Frontend __________________________________
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
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // Link pages
  const navigate = useNavigate();

  const clickJadualTF01 = () => navigate("/search-tf01");
  const clickJadualTF01Cawangan = () => navigate("/search-tf01-cawangan");
  const clickJadualTF02 = () => navigate("/search-tf02");

  // ___________________________________ Backend __________________________________
  // Search profil sahabat & profil sahabat terperinci
  const [searchComplete, setSearchComplete] = useState(false);

  const {
    laporanProfilSahabats,
    searchNoKadPengenalanSahabatProfilSahabat,
    laporanProfilSahabatTerperincis,
    searchNoKadPengenalanSahabatProfilSahabatTerperinci,
  } = useLaporanStore((state) => ({
    laporanProfilSahabats: state.laporanProfilSahabats,
    searchNoKadPengenalanSahabatProfilSahabat:
      state.searchNoKadPengenalanSahabatProfilSahabat,
    laporanProfilSahabatTerperincis: state.laporanProfilSahabatTerperincis,
    searchNoKadPengenalanSahabatProfilSahabatTerperinci:
      state.searchNoKadPengenalanSahabatProfilSahabatTerperinci,
  }));

  // Pass input & navigate to the pembiayaaan sahabat page with sahabat data
  const handleSearchProfilSahabat = async (noKadPengenalanSahabatData) => {
    await searchNoKadPengenalanSahabatProfilSahabat(noKadPengenalanSahabatData);

    setSearchComplete(true);
  };

  useEffect(() => {
    if (searchComplete) {
      navigate("/pembiayaan-sahabat", {
        state: { resultSahabat: laporanProfilSahabats },
      });
    }
  }, [laporanProfilSahabats, searchComplete, navigate]);

  // Pass input & navigate to the pembiayaaan sahabat terperinci page with sahabat data
  const handleSearchProfilSahabatTerperinci = async (
    noKadPengenalanSahabatData
  ) => {
    await searchNoKadPengenalanSahabatProfilSahabatTerperinci(
      noKadPengenalanSahabatData
    );

    setSearchComplete(true);
  };

  useEffect(() => {
    if (searchComplete) {
      navigate("/pembiayaan-sahabat-terperinci", {
        state: { resultSahabat: laporanProfilSahabatTerperincis },
      });
    }
  }, [laporanProfilSahabatTerperincis, searchComplete, navigate]);

  return (
    <div>
      <div className="page-title">
        <h1>Senarai Laporan</h1>
      </div>

      <div className="laporan-table-container">
        <Table responsive>
          <thead>
            <tr>
              <th className="laporan-table-index">Bil.</th>
              <th>Keterangan</th>
              <th className="laporan-table-cta">Tindakan</th>
            </tr>
          </thead>
          
          <tbody>
            {/* Laporan Profil Sahabat */}
            <tr>
              <td className="laporan-table-index">1</td>
              <td>Laporan Profil Sahabat</td>
              <td>
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
                      <Form.Group
                        controlId="noKadPengenalanSahabat"
                        className="mb-3"
                      >
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
                          aria-invalid={
                            errors.noKadPengenalanSahabat ? "true" : "false"
                          }
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
              </td>
            </tr>
            
            {/* Laporan Profil Sahabat Terperinci */}
            <tr>
              <td className="laporan-table-index">2</td>
              <td>Laporan Profil Sahabat Terperinci</td>
              <td>
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
                    <Modal.Title>
                      Carian Laporan Profil Sahabat Terperinci
                    </Modal.Title>
                  </Modal.Header>

                  <Form onReset={reset}>
                    <Modal.Body>
                      <Form.Group
                        controlId="noKadPengenalanSahabat"
                        className="mb-3"
                      >
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
                          aria-invalid={
                            errors.noKadPengenalanSahabat ? "true" : "false"
                          }
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
                      <Button
                        onClick={handleSubmit(
                          handleSearchProfilSahabatTerperinci
                        )}
                      >
                        Cari
                      </Button>
                    </Modal.Footer>
                  </Form>
                </Modal>
              </td>
            </tr>
            
            {/* Jadual TF01 */}
            <tr>
              <td className="laporan-table-index">3</td>
              <td>Jadual TF01</td>
              <td>
                <Button
                  className="laporan-index-pg-btn"
                  onClick={clickJadualTF01}
                >
                  Lihat
                </Button>{" "}
              </td>
            </tr>

            {/* Jadual TF01 Mengikut Cawangan */}
            <tr>
              <td className="laporan-table-index">4</td>
              <td>Jadual TF01 Mengikut Cawangan</td>
              <td>
                <Button
                  className="laporan-index-pg-btn"
                  onClick={clickJadualTF01Cawangan}
                >
                  Lihat
                </Button>{" "}
              </td>
            </tr>

            {/* Jadual TF02 */}
            <tr>
              <td className="laporan-table-index">5</td>
              <td>Jadual TF02</td>
              <td>
                <Button
                  className="laporan-index-pg-btn"
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
