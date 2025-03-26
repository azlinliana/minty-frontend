import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainLayout from "./views/layouts/MainLayout";
import SignIn from "./views/auth/SignIn";
import Dashboard from "./views/Dashboard";
import SignUp from "./views/auth/SignUp";
import SearchSahabat from "./views/sahabat/carian/SearchSahabat";
import SearchResultSahabat from "./views/sahabat/carian/SearchResultSahabat";
import TrackingInflowOutflow from "./views/sahabat/tracking-inflow-outflow/Tracking";
import IndexReport from "./views/report/list-report/Index";
import ShowProfilSahabat from "./views/report/profil-sahabat/show-result/Show";
import ShowProfilSahabatTerperinci from "./views/report/profil-sahabat-terperinci/show-result/Show";
import SearchTf01 from "./views/report/jadual-tf01/Search";
import ResultTf01 from "./views/report/jadual-tf01/SearchResult";
import SearchTf01ByCawangan from "./views/report/jadual-tf01-cawangan/Search";
import ResultTf01ByCawangan from "./views/report/jadual-tf01-cawangan/SearchResult";
import SearchTf02 from "./views/report/jadual-tf02/Search";
import ResultTf02 from "./views/report/jadual-tf02/SearchResult";
import SearchProfilSahabat from "./views/report/profil-sahabat/Search";
import SearchProfilSahabatTerperinci from "./views/report/profil-sahabat-terperinci/Search";
import IndexSettings from "./views/settings/Index";
import IndexInflowCode from "./views/settings/inflow-code/Index";
import IndexOutflowCode from "./views/settings/outflow-code/Index";
import IndexLoan from "./views/settings/loan/Index";
import IndexRelationship from "./views/settings/relationship/Index";
import IndexUser from "./views/user/Index";
import IndexAdmin from "./views/user/admin/Index";
import IndexSuperAdmin from "./views/user/super-admin/Index";
import BadRequest from "./views/http_requests/BadRequest";
import Unauthorized from "./views/http_requests/Unauthorized";
import Forbidden from "./views/http_requests/Forbidden";
import NotFound from "./views/http_requests/NotFound";
import UnprocessableEntity from "./views/http_requests/UnprocessableEntity";
import TooManyRequests from "./views/http_requests/TooManyRequests";
import InternalServer from "./views/http_requests/InternalServer";
import ServiceUnavailable from "./views/http_requests/ServiceUnavailable";
import UnknownError from "./views/http_requests/UnknownError";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Auth */}
          <Route path="/" element={<SignIn />} index />
          <Route path="/sign-up" element={<SignUp />} />

          <Route element={<MainLayout />}>
            <Route path="dashboard" element={<Dashboard />} />

            {/* Sahabat */}
            <Route path="carian-sahabat" element={<SearchSahabat />} />
            <Route
              path="hasil-carian-sahabat"
              element={<SearchResultSahabat />}
            />
            <Route
              path="tracking-inflow-outflow"
              element={<TrackingInflowOutflow />}
            />

            {/* Laporan */}
            <Route path="laporan" element={<IndexReport />} />
            <Route
              path="pembiayaan-sahabat"
              element={<SearchProfilSahabat />}
            />
            <Route path="profil-sahabat" element={<ShowProfilSahabat />} />

            <Route
              path="pembiayaan-sahabat-terperinci"
              element={<SearchProfilSahabatTerperinci />}
            />
            <Route
              path="profil-sahabat-terperinci"
              element={<ShowProfilSahabatTerperinci />}
            />
            <Route path="search-tf01" element={<SearchTf01 />} />
            <Route path="result-tf01" element={<ResultTf01 />} />
            <Route
              path="search-tf01-cawangan"
              element={<SearchTf01ByCawangan />}
            />
            <Route
              path="result-tf01-cawangan"
              element={<ResultTf01ByCawangan />}
            />
            <Route path="search-tf02" element={<SearchTf02 />} />
            <Route path="result-tf02" element={<ResultTf02 />} />

            {/* Selenggara */}
            <Route path="settings" element={<IndexSettings />} />
            <Route path="inflow-code" element={<IndexInflowCode />} />
            <Route path="outflow-code" element={<IndexOutflowCode />} />
            <Route path="loan" element={<IndexLoan />} />
            <Route path="relationship" element={<IndexRelationship />} />

            {/* Pengguna */}
            <Route path="user-settings" element={<IndexUser />} />
            <Route path="admin-list" element={<IndexAdmin />} />
            <Route path="super-admin-list" element={<IndexSuperAdmin />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
