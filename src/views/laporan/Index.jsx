import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import CarianLaporanProfilSahabatModal from "../components/modal/CarianLaporanProfilSahabatModal";
import "./Laporan.css";

function IndexLaporan() {
  // Link pages
  const navigate = useNavigate();
  const clickJadualTF01 = () => navigate("/search-tf01");
  const clickJadualTF01Cawangan = () => navigate("/search-tf01-cawangan");
  const clickJadualTF02 = () => navigate("/search-tf02");

  // Temporary link - Removed when carian functionality work
  const clickCarianLaporanProfilSahabatMelaluiPembiayaan = () => navigate("/pembiayaan-sahabat");
  const clickCarianLaporanProfilSahabatTerperinciMelaluiPembiayaan = () =>
    navigate("/pembiayaan-sahabat-terperinci");

  // Separate modals
  const [isModal1Open, setIsModal1Open] = useState(false);
  const [isModal2Open, setIsModal2Open] = useState(false);

  // Modal 1 - Carian Profil Sahabat
  const openModal1 = () => {
    console.log("Opening Modal 1");
    setIsModal1Open(true);
  };

  const closeModal1 = () => {
    console.log("Closing Modal 1");
    setIsModal1Open(false);
  };

  // Modal 2 - Carian Profil Sahsbat Terperinci
  const openModal2 = () => {
    console.log("Closing Modal 2");
    setIsModal2Open(true);
  };

  const closeModal2 = () => {
    console.log("Closing Modal 2");
    setIsModal2Open(false);
  };

  return (
    <>
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

              {/* Modal Carian Laporan Profil Sahabat start */}
              <td>
                <Button
                  className="indexLaporanBtn"
                  variant="primary"
                  onClick={openModal1}
                >
                  Cari
                </Button>{" "}
                <CarianLaporanProfilSahabatModal
                  modalTitle="Carian Laporan Profil Sahabat"
                  modalContent={
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          id="carian-ic-sahabat"
                          placeholder="Carian No. Kad Pengenalan Sahabat"
                          autoFocus
                        />
                      </Form.Group>
                    </Form>
                  }
                  modalFooter={
                    <>
                      <Button className="batalBtn" onClick={closeModal1}>
                        Batal
                      </Button>
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={clickCarianLaporanProfilSahabatMelaluiPembiayaan}
                      >
                        Cari
                      </Button>
                    </>
                  }
                  isModalOpen={isModal1Open}
                  closeModal={closeModal1}
                />
              </td>
              {/* Modal Carian Laporan Profil Sahabat end */}
            </tr>

            <tr>
              <td className="tableBil">2</td>
              <td>Laporan Profil Sahabat Terperinci</td>

              {/* Modal Carian Laporan Profil Sahabat Terperinci start */}
              <td>
                <Button
                  className="indexLaporanBtn"
                  variant="primary"
                  onClick={openModal2}
                >
                  Cari
                </Button>{" "}
                <CarianLaporanProfilSahabatModal
                  modalTitle="Carian Laporan Profil Sahabat Terperinci"
                  modalContent={
                    <Form>
                      <Form.Group className="mb-3">
                        <Form.Control
                          type="text"
                          id="carian-ic-sahabat"
                          placeholder="Carian No. Kad Pengenalan Sahabat"
                          autoFocus
                        />
                      </Form.Group>
                    </Form>
                  }
                  modalFooter={
                    <>
                      <Button className="batalBtn" onClick={closeModal2}>
                        Batal
                      </Button>
                      <Button
                        variant="primary"
                        type="submit"
                        onClick={clickCarianLaporanProfilSahabatTerperinciMelaluiPembiayaan}
                      >
                        Cari
                      </Button>
                    </>
                  }
                  isModalOpen={isModal2Open}
                  closeModal={closeModal2}
                />
              </td>
              {/* Modal Carian Laporan Profil Sahabat Terperinci end */}
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
    </>
  );
}

export default IndexLaporan;
