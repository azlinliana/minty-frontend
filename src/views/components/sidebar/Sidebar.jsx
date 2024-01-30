import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import ErrorAlert from "../sweet-alert/ErrorAlert";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import { BsPersonCircle } from "react-icons/bs";
import ListGroup from "react-bootstrap/ListGroup";
import "../../../assets/styles/styles_layout.css";
import axiosCustom from "../../../axios";

function Sidebar() {
  // ----------FE----------
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // ----------BE----------
  const [userSidebarInfo, setUserSidebarInfo] = useState();

  const showUserSidebarInfo = useCallback(async () => {
    try {
      const response = await axiosCustom.get(`profil/sidebar`);

      if (response.status === 200) {
        setUserSidebarInfo(response.data);
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      if (
        error.response &&
        (error.response.status === 503 || error.response.status === 429)
      ) {
        // The server is not ready, ignore the error
        console.log("Server not ready, retry later.");
      } else {
        // Handle other errors
        ErrorAlert(error);
      }
    }
  }, []);

  useEffect(() => {
    showUserSidebarInfo();
  }, [showUserSidebarInfo]);

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "shrink"}`}>
      <div className="sidebar-toggle-button">
        <button onClick={toggleSidebar} className="toggle-button">
          {isSidebarOpen ? (
            <TfiArrowCircleLeft size={26} />
          ) : (
            <TfiArrowCircleRight size={26} />
          )}
        </button>
      </div>

      {isSidebarOpen && userSidebarInfo && (
        <div className="user-profile">
          <BsPersonCircle className="userIcon" />
          <h5>{userSidebarInfo.namaKakitangan}</h5>
          <h6>{userSidebarInfo.lokasiKakitangan}</h6>
        </div>
      )}

      <ListGroup variant="flush">
        {SidebarMenu.map((item, index) => (
          <ListGroup.Item key={index}>
            <Link to={item.path}>
              <span className="sidebar-icon">{item.icon}</span>
              
              {isSidebarOpen && (
                <span className="sidebar-title">{item.title}</span>
              )}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Sidebar;
