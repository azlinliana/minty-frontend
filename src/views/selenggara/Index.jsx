import { useNavigate } from "react-router-dom";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import "./Selenggara.css";

function IndexSelenggara() {
  // Link pages
  const navigate = useNavigate();

  const clickLihatKodInflow = () => navigate("/kod-inflow");
  const clickLihatKodOutflow = () => navigate("/kod-outflow");

  const clickLihatDimensi = () => navigate("/dimensi");
  const clickLihatHubungan = () => navigate("/hubungan");
  // const clickLihatPinjamanAktiviti = () => navigate('/pinjaman-aktiviti');

  // Back button
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="pageTitle">
        <h1>Senarai Selenggara</h1>
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
              <td>Kod Inflow</td>
              <td>
                <Button
                  className="indexSelenggaraBtn"
                  variant="primary"
                  onClick={clickLihatKodInflow}
                >
                  Lihat
                </Button>{" "}
              </td>
            </tr>

            <tr>
              <td className="tableBil">2</td>
              <td>Kod Outflow</td>
              <td>
                <Button
                  className="indexSelenggaraBtn"
                  variant="primary"
                  onClick={clickLihatKodOutflow}
                >
                  Lihat
                </Button>{" "}
              </td>
            </tr>

            <tr>
              <td className="tableBil">3</td>
              <td>Dimensi</td>
              <td>
                <Button
                  className="indexSelenggaraBtn"
                  variant="primary"
                  onClick={clickLihatDimensi}
                >
                  Lihat
                </Button>{" "}
              </td>
            </tr>
            <tr>
              <td className="tableBil">4</td>
              <td>Hubungan</td>
              <td>
                <Button
                  className="indexSelenggaraBtn"
                  variant="primary"
                  onClick={clickLihatHubungan}
                >
                  Lihat
                </Button>{" "}
              </td>
            </tr>
            {/* <tr>
              <td>5</td>
              <td>Pinjaman Aktiviti</td>
              <td><Button variant="primary" onClick={clickLihatPinjamanAktiviti}>Lihat</Button>{' '}</td>
            </tr> */}
          </tbody>
        </Table>

        <div className="kembaliBtnPlacement">
          <Button className="kembaliBtn" onClick={goBack}>
            Kembali
          </Button>{" "}
        </div>
      </div>
    </>
  );
}

export default IndexSelenggara;
