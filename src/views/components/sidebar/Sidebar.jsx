import { Link } from "react-router-dom"

import SidebarMenu from "./SidebarMenu"
import './Sidebar.css'

import ListGroup from 'react-bootstrap/ListGroup';

function Sidebar() {
  return(
    <div className="sidebar">
      <ListGroup variant="flush">
        {SidebarMenu.map((item, index) => (
          <ListGroup.Item key={index}>
            <Link to={item.path}>{item.icon}{item.title}</Link>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

export default Sidebar