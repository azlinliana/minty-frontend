import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import FirstNavbar from "../components/navbar/FirstNavbar";
import SecondNavbar from "../components/navbar/SecondNavbar";
import "../../assets/styles/styles_layout.css";

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
  );
}

export default MainLayout;
