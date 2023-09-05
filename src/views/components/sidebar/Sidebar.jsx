import { Link } from "react-router-dom"
import SidebarMenu from "./SidebarMenu"

function Sidebar() {
  return(
    <div className="sidebar">
      <ul>
        {SidebarMenu.map((item, index) => (
          <li key={index}>
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar