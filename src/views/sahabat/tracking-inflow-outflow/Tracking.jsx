import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import MaklumatSahabat from "./MaklumatSahabat.jsx";
import MaklumatMinggu from "./MaklumatMinggu.jsx";
import BorangTrackingMingguanSahabat from "./BorangTrackingMingguanSahabat.jsx";
import { Button, Breadcrumb } from "react-bootstrap";
import "../../../assets/styles/styles_sahabat.css";

function TrackingInflowOutflow() {
  // __________________________________ Frontend __________________________________
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }; // Back button

  // Get sahabat, minggu and pembiayaan information
  // const location = useLocation();
  // const {
  //   sahabatData,
  //   sahabatId,
  //   pembiayaanId,
  //   mingguId,
  //   pembiayaanSahabatsData,
  // } = location.state;

  return (
    <div>
      <div className="page-title">
        {/* {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? ( */}
          <h1>Kemas Kini Tracking Sahabat</h1>
        {/* ) : ( */}
          <h1>Lihat Tracking Sahabat</h1>
        {/* )} */}

        <Breadcrumb>
          <Breadcrumb.Item className="breadcrumb-previous-link" href="#">
            Carian Sahabat
          </Breadcrumb.Item>

          <Breadcrumb.Item className="breadcrumb-previous-link" href="#">
            Hasil Carian Sahabat
          </Breadcrumb.Item>
          {/* {pembiayaanSahabatsData.statusPembiayaan !== "SELESAI" ? ( */}
            <Breadcrumb.Item active>
              Kemas Kini Tracking Sahabat
            </Breadcrumb.Item>
          {/* ) : ( */}
            <Breadcrumb.Item active>Lihat Tracking Sahabat</Breadcrumb.Item>
          {/* )} */}
        </Breadcrumb>
      </div>

      {/* <MaklumatSahabat key={sahabatData.id} sahabatData={sahabatData} /> */}
      <MaklumatSahabat />

      <MaklumatMinggu
        // sahabatId={sahabatId}
        // pembiayaanId={pembiayaanId}
        // mingguId={mingguId}
        // pembiayaanSahabatsData={pembiayaanSahabatsData}
      />

      <BorangTrackingMingguanSahabat
        // sahabatId={sahabatId}
        // pembiayaanId={pembiayaanId}
        // mingguId={mingguId}
        // pembiayaanSahabatsData={pembiayaanSahabatsData}
      />

      <div className="return-btn-container">
        <Button className="return-btn" onClick={goBack}>
          Kembali
        </Button>{" "}
      </div>
    </div>
  );
}

export default TrackingInflowOutflow;
