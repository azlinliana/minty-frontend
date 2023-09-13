import './MainLayout.css'

import Sidebar from "../components/sidebar/Sidebar"
import FirstNavbar from "../components/navbar/FirstNavbar"
import SecondNavbar from "../components/navbar/SecondNavbar"

import { Outlet } from 'react-router-dom'

function MainLayout() {
  return (
    <>
      <div>
        <FirstNavbar />

        <div className="main">
          <Sidebar />

          <div className="content">
            <SecondNavbar />
            
            <Outlet />
          </div>
        </div>
      </div>
    </>
  )
}

export default MainLayout