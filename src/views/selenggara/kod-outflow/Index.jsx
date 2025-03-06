import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/styles/styles_selenggara.css";
import CreateKodOutflow from "./Create";
import EditKodOutflow from "./Edit";
import { Breadcrumb, Button, Table } from "react-bootstrap";
import { useKodOutflowStore } from "../../../store/selenggara/kod-outflow-store";

function IndexKodOutflow() {
  // __________________________________ Frontend __________________________________
  const navigate = useNavigate();

  // Back button
  const goBack = () => {
    navigate(-1);
  };

  // ___________________________________ Backend __________________________________
  // List & delete kod outflow
  // const { kodOutflows, fetchKodOutflows, deleteKodOutflow } = useKodOutflowStore(
  //   (state) => ({
  //     kodOutflows: state.kodOutflows,
  //     fetchKodOutflows: state.fetchKodOutflows,
  //     deleteKodOutflow: state.deleteKodOutflow,
  //   })
  // );

  // useEffect(() => {
  //   fetchKodOutflows();
  // }, [fetchKodOutflows]);

  return (
    <>
      <div className="page-title">
        <h1>Kod Outflow</h1>

        <Breadcrumb>
          <Breadcrumb.Item
            className="breadcrumb-previous-link"
            href="selenggara"
          >
            Senarai Selenggara
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Kod Outflow</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="selenggara-table-container">
        <div className="tambah-baru-btn-container">
          <CreateKodOutflow />
        </div>

        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Kod Outflow</th>
              <th>Keterangan Kod Outflow</th>
              <th>Status</th>
              <th>Tindakan</th>
            </tr>
          </thead>

          <tbody>
            {/* {kodOutflows.length === 0 ? ( */}
              <tr>
                <td colSpan="6">
                  <center>
                    Tiada maklumat kod outflow. Sila klik butang "Tambah" untuk
                    merekodkan kod outflow baharu.
                  </center>
                </td>
              </tr>
            {/* ) : (
              kodOutflows.map((kodOutflowsData, index) => ( */}
                <tr 
                  // key={index}
                >
                  <td>Bil.</td>
                  <td>KodOutflow</td>
                  <td>Keterangan Kod Outflow</td>
                  <td>Status Kod Outflow</td>
                  <td>
                    <EditKodOutflow 
                      // kodOutflow={kodOutflowsData} 
                    />
                    
                    <Button
                      className="delete-btn"
                      // onClick={() => deleteKodOutflow(kodOutflowsData.id)}
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

export default IndexKodOutflow;
