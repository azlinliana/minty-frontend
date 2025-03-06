import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/styles/styles_selenggara.css";
import CreateDimensi from "./Create";
import EditDimensi from "./Edit";
import { Breadcrumb, Button, Table } from "react-bootstrap";
import { useDimensiStore } from "../../../store/selenggara/dimensi-store";

function IndexDimensi() {
  // __________________________________ Frontend __________________________________
  const navigate = useNavigate();

  // Back button
  const goBack = () => {
    navigate(-1);
  };

  // ___________________________________ Backend __________________________________
  // List & delete dimensi
  // const { dimensis, fetchDimensis, deleteDimensi } = useDimensiStore(
  //   (state) => ({
  //     dimensis: state.dimensis,
  //     fetchDimensis: state.fetchDimensis,
  //     deleteDimensi: state.deleteDimensi,
  //   })
  // );

  // useEffect(() => {
  //   fetchDimensis();
  // }, [fetchDimensis]);

  return (
    <>
      <div className="page-title">
        <h1>Dimensi</h1>

        <Breadcrumb>
          <Breadcrumb.Item
            className="breadcrumb-previous-link"
            href="selenggara"
          >
            Senarai Selenggara
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Dimensi</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="selenggara-table-container">
        <div className="tambah-baru-btn-container">
          <CreateDimensi />
        </div>

        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Kod Dimensi</th>
              <th>Keterangan Dimensi</th>
              <th>Status</th>
              <th>Tindakan</th>
            </tr>
          </thead>

          <tbody>
            {/* {dimensis.length === 0 ? ( */}
              <tr>
                <td colSpan="5">
                  <center>
                    Tiada maklumat. Sila klik butang "Tambah" untuk merekodkan
                    dimensi baharu.
                  </center>
                </td>
              </tr>
            {/* ) : (
              dimensis.map((dimensisData, key) => ( */}
                <tr 
                  // key={key}
                >
                  <td>Bil.</td>
                  <td>Kod Dimensi</td>
                  <td>Keterangan Dimensi</td>
                  <td>Status Dimensi</td>
                  <td>
                    <EditDimensi 
                      // dimensi={dimensisData} 
                    />
                    
                    <Button
                      className="delete-btn"
                      onClick={() => deleteDimensi(dimensisData.id)}
                    >
                      Padam
                    </Button>{" "}
                  </td>
                </tr>
              {/* ))
            )} */}
          </tbody>
        </Table>

        <div className="kembali-btn-container">
          <Button className="kembali-btn" onClick={goBack}>
            Kembali
          </Button>{" "}
        </div>
      </div>
    </>
  );
}

export default IndexDimensi;
