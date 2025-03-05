import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MainLayout from "./views/layouts/MainLayout";
import SignIn from "./views/auth/SignIn";
import Dashboard from "./views/Dashboard";
import SignUp from "./views/auth/SignUp";
import SearchSahabat from "./views/sahabat/carian/SearchSahabat";
import SearchResultSahabat from "./views/sahabat/carian/SearchResultSahabat";
import TrackingInflowOutflow from "./views/sahabat/tracking-inflow-outflow/Tracking";
import IndexLaporan from "./views/laporan/senarai-laporan/Index";
import ShowProfilSahabat from "./views/laporan/profil-sahabat/show-result/Show";
import ShowProfilSahabatTerperinci from "./views/laporan/profil-sahabat-terperinci/show-result/Show";
import SearchTf01 from "./views/laporan/jadual-tf01/Search";
import ResultTf01 from "./views/laporan/jadual-tf01/SearchResult";
import SearchTf01ByCawangan from "./views/laporan/jadual-tf01-cawangan/Search";
import ResultTf01ByCawangan from "./views/laporan/jadual-tf01-cawangan/SearchResult";
import SearchTf02 from "./views/laporan/jadual-tf02/Search";
import ResultTf02 from "./views/laporan/jadual-tf02/SearchResult";
import SearchProfilSahabat from "./views/laporan/profil-sahabat/Search";
import SearchProfilSahabatTerperinci from "./views/laporan/profil-sahabat-terperinci/Search";
import IndexSelenggara from "./views/selenggara/Index";
import IndexKodInflow from "./views/selenggara/kod-inflow/Index";
import IndexKodOutflow from "./views/selenggara/kod-outflow/Index";
import IndexDimensi from "./views/selenggara/dimensi/Index";
import IndexHubungan from "./views/selenggara/hubungan/Index";
import IndexPengguna from "./views/pengguna/Index";
import IndexAdmin from "./views/pengguna/admin/Index";
import IndexSuperAdmin from "./views/pengguna/super-admin/Index";
import BadRequest from "./views/http_requests/BadRequest";
import Unauthorized from "./views/http_requests/Unauthorized";
import Forbidden from "./views/http_requests/Forbidden";
import NotFound from "./views/http_requests/NotFound";
import UnprocessableEntity from "./views/http_requests/UnprocessableEntity";
import TooManyRequests from "./views/http_requests/TooManyRequests";
import InternalServer from "./views/http_requests/InternalServer";
import ServiceUnavailable from "./views/http_requests/ServiceUnavailable";
import UnknownError from "./views/http_requests/UnknownError";

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
            <Route path="laporan" element={<IndexLaporan />} />
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
            <Route path="selenggara" element={<IndexSelenggara />} />
            <Route path="kod-inflow" element={<IndexKodInflow />} />
            <Route path="kod-outflow" element={<IndexKodOutflow />} />
            <Route path="dimensi" element={<IndexDimensi />} />
            <Route path="hubungan" element={<IndexHubungan />} />

            {/* Pengguna */}
            <Route path="tetapan-pengguna" element={<IndexPengguna />} />
            <Route path="senarai-admin" element={<IndexAdmin />} />
            <Route path="senarai-super-admin" element={<IndexSuperAdmin />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
