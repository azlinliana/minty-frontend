import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ListGroup, Image } from "react-bootstrap";
import ErrorAlert from "../sweet-alert/ErrorAlert";
import SidebarMenu from "./SidebarMenu";
import ProfileImg from "../../../assets/profile.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { TfiArrowCircleLeft, TfiArrowCircleRight } from "react-icons/tfi";
import axiosCustom from "../../../axios";
import "../../../assets/styles/styles_layout.css";

function Sidebar() {
  // __________________________________ Frontend __________________________________
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [openMenus, setOpenMenus] = useState({});

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

  const toggleDropdown = (index) => {
    setOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index], // to toggle specific menu
    }));
  };

  // ___________________________________ Backend __________________________________
  // const [userSidebarInfo, setUserSidebarInfo] = useState();

  // const showUserSidebarInfo = useCallback(async () => {
  // try {
  //   const response = await axiosCustom.get(`user`);

  //   if (response.status === 200) {
  //     setUserSidebarInfo(response.data);
  //   } else {
  //     ErrorAlert(response); // Error from the backend or unknow error from the server side
  //   }
  // } catch (error) {
  //   ErrorAlert(error);
  // }
  // }, []);

  // useEffect(() => {
  //   showUserSidebarInfo();
  // }, [showUserSidebarInfo]);

  // Generate filtered sidebar menu based on user's roles
  // const filteredSidebarMenu = userSidebarInfo
  //   ? SidebarMenu.filter(
  // (item) => item.roles.includes(Number(userSidebarInfo.perananId)) // Match string and number for perananId value
  //   )
  // : [];

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
        <div className="sidebar-user-profile">
          <Image src={ProfileImg} />
          {/* <h5>{userSidebarInfo.namaKakitangan}</h5> */}
          <h5>User Full Name</h5>
        </div>
      )}

      <ListGroup variant="flush">
        {SidebarMenu.map((item, index) => (
          <React.Fragment key={index}>
            <ListGroup.Item className="sidebar-items">
              <div
                onClick={() => (item.subRoutes ? toggleDropdown(index) : null)}
                className="sidebar-link"
              >
                <Link to={item.path} className="sidebar-main-item">
                  <span className="sidebar-icon">{item.icon}</span>
                  {isSidebarOpen && (
                    <span className="sidebar-title">{item.title}</span>
                  )}
                </Link>
                {item.subRoutes && isSidebarOpen && (
                  <span className="dropdown-toggle-icon">
                    {openMenus[index] ? <FaAngleUp /> : <FaAngleDown />}
                  </span>
                )}
              </div>
            </ListGroup.Item>

            {item.subRoutes && openMenus[index] && (
              <ListGroup variant="flush" className="submenu">
                {item.subRoutes.map((subItem, subIndex) => (
                  <ListGroup.Item key={subIndex} className="sidebar-sub-item">
                    <Link to={subItem.path}>
                      {isSidebarOpen && (
                        <span className="sidebar-title">{subItem.title}</span>
                      )}
                    </Link>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
          </React.Fragment>
        ))}
      </ListGroup>
    </div>
  );
}

export default Sidebar;
