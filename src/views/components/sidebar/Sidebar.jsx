import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import { BsPersonCircle } from "react-icons/bs";
import ListGroup from "react-bootstrap/ListGroup";
import SidebarMenu from "./SidebarMenu";
import "../../../assets/styles/styles_layout.css";

function Sidebar() {
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
      {isSidebarOpen && (
        <div className="user-profile">
          <BsPersonCircle className="userIcon" />
          <h5>Nurul Aida Nazihah Binti Abdul Rashid</h5>
          <h6>(Unit Sistem Teknologi Maklumat)</h6>
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
