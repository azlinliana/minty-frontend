import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../../../assets/styles/styles_selenggara.css";
import CreateHubungan from "./Create";
import EditHubungan from "./Edit";
import { Breadcrumb, Button, Table } from "react-bootstrap";
import { useHubunganStore } from "../../../store/selenggara/hubungan-store";

function IndexHubungan() {
  // __________________________________ Frontend __________________________________
  const navigate = useNavigate();

  // Back button
  const goBack = () => {
    navigate(-1);
  };

  // ___________________________________ Backend __________________________________
  // List & delete hubungan
  // const { hubungans, fetchHubungans, deleteHubungan } = useHubunganStore(
  //   (state) => ({
  //     hubungans: state.hubungans,
  //     fetchHubungans: state.fetchHubungans,
  //     deleteHubungan: state.deleteHubungan,
  //   })
  // );

  // useEffect(() => {
  //   fetchHubungans();
  // }, [fetchHubungans]);

  return (
    <>
      <div className="page-title">
        <h1>Hubungan</h1>

        <Breadcrumb>
          <Breadcrumb.Item
            className="breadcrumb-previous-link"
            href="selenggara"
          >
            Senarai Selenggara
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Hubungan</Breadcrumb.Item>
        </Breadcrumb>
      </div>

      <div className="selenggara-table-container">
        <div className="tambah-baru-btn-container">
          <CreateHubungan />
        </div>

        <Table responsive>
          <thead>
            <tr>
              <th>Bil.</th>
              <th>Kod Hubungan</th>
              <th>Keterangan Kod Hubungan</th>
              <th>Status</th>
              <th>Tindakan</th>
            </tr>
          </thead>

          <tbody>
            {/* {hubungans.length === 0 ? ( */}
              <tr>
                <td colSpan="5">
                  <center>
                    Tiada maklumat. Sila klik butang "Tambah" untuk merekodkan
                    hubungan baharu.
                  </center>
                </td>
              </tr>
            {/* ) : (
              hubungans.map((hubungansData, key) => ( */}
                <tr 
                  // key={key}
                >
                  <td>Bil.</td>
                  <td>Kod Hubungan</td>
                  <td>Keterangan Hubungan</td>
                  <td>Status Hubungan</td>
                  <td>
                    <EditHubungan 
                      // hubungan={hubungansData} 
                    />
                    
                    <Button
                      className="delete-btn"
                      // onClick={() => deleteHubungan(hubungansData.id)}
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

export default IndexHubungan;
