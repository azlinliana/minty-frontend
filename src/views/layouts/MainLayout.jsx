import Sidebar from "../components/sidebar/Sidebar"
import FirstNavbar from "../components/navbar/FirstNavbar"
import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
      <div>
        <FirstNavbar />

        <Sidebar />

        <div className="content">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default MainLayout