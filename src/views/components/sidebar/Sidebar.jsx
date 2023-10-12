import { Link } from "react-router-dom";

import SidebarMenu from "./SidebarMenu";
import "./Sidebar.css";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";

function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? "open" : "shrink"}`}>
      <button onClick={toggleSidebar} className="toggle-button">
        {isSidebarOpen ? <FaArrowCircleLeft /> : <FaArrowAltCircleRight />}
      </button>
      <ListGroup variant="flush">
        {SidebarMenu.map((item, index) => (
          <ListGroup.Item key={index}>
            <Link to={item.path}>
              {item.icon}
              {isSidebarOpen && item.title}
            </Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Sidebar;
