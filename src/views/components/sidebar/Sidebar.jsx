import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import "../../../assets/styles/styles_layout.css";
import ErrorAlert from "../sweet-alert/ErrorAlert";
import SidebarMenu from "./SidebarMenu";
import { BsPersonCircle } from "react-icons/bs";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import axiosCustom from "../../../axios";

function Sidebar() {
  // __________________________________ Frontend __________________________________
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

  // ___________________________________ Backend __________________________________
  const [userSidebarInfo, setUserSidebarInfo] = useState();

  const showUserSidebarInfo = useCallback(async () => {
    try {
      const response = await axiosCustom.get(`user`);

      if (response.status === 200) {
        setUserSidebarInfo(response.data);
      } else {
        ErrorAlert(response); // Error from the backend or unknow error from the server side
      }
    } catch (error) {
      ErrorAlert(error);
    }
  }, []);

  useEffect(() => {
    showUserSidebarInfo();
  }, [showUserSidebarInfo]);

  // Generate filtered sidebar menu based on user's roles
  const filteredSidebarMenu = userSidebarInfo
    ? SidebarMenu.filter(
        (item) => item.roles.includes(Number(userSidebarInfo.perananId)) // Match string and number for perananId value
      )
    : [];

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
        <div className="sidebar-user-profile">
          <BsPersonCircle className="sidebar-user-icon" />

          <h5>{userSidebarInfo.namaKakitangan}</h5>

          <h6>{userSidebarInfo.lokasiKakitangan}</h6>
        </div>
      )}

      <ListGroup variant="flush">
        {filteredSidebarMenu.map((item, index) => (
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
