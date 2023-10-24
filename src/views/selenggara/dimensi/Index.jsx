import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import CreateDimensi from "./Create";
import EditDimensi from "./Edit";

import axios from "axios";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

import "../Selenggara.css";

function IndexDimensi() {
  // List dimensi
  const [dimensis, setDimensis] = useState([]);

  const fetchDimensis = async () => {
    await axios
      .get("http://127.0.0.1:8000/api/selenggara/dimensi")
      .then(({ data }) => {
        setDimensis(data);
      });
  };

  useEffect(() => {
    fetchDimensis();
  }, []);

  // Update dimensi
  const updateDimensi = (editedDimensi) => {
    const updatedDimensis = dimensis.map((dimensi) =>
      dimensi.id === editedDimensi.id ? editedDimensi : dimensi
    );
    setDimensis(updatedDimensis);
  };

  // Delete dimensi
  const handleDeleteDimensi = async (dimensiId) => {
    try {
      await axios.delete(
        `http://127.0.0.1:8000/api/selenggara/dimensi/${dimensiId}`
      );

      setDimensis((prevDimensis) =>
        prevDimensis.filter((dimensi) => dimensi.id !== dimensiId)
      );
    } catch (error) {
      console.error("Error in deleting dimensi", error);
    }
  };

  // Back button
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <div className="pageTitle">
        <h1>Dimensi</h1>

        <Breadcrumb>
          <Breadcrumb.Item className="previousLink" href="#">
            Senarai Selenggara
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Dimensi</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="tableSection">
        <div className="tambahBtnPlacement">
          <CreateDimensi fetchDimensis={fetchDimensis} />
        </div>
        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Dimensi</th>
              <th>Keterangan</th>
              <th>Tindakan</th>
            </tr>
          </thead>
          <tbody>
            {dimensis.length > 0 &&
              dimensis.map((row, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>{row.dimensi}</td>
                  <td>{row.keterangan}</td>
                  <td>
                    <EditDimensi
                      dimensi={row}
                      updateDimensi={updateDimensi}
                      closeModalEditDimensi={() => {}}
                    />
                    <Button
                      variant="danger"
                      onClick={() => handleDeleteDimensi(row.id)}
                    >
                      Padam
                    </Button>{" "}
                  </td>
                </tr>
              ))}
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

export default IndexDimensi;
