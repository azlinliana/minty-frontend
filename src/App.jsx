import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import MainLayout from "./views/layouts/MainLayout";

// IMPORT FROM AUTH FOLDER
import SignIn from "./views/auth/SignIn";
import NoPage from "./views/auth/NoPage";

// IMPORT FROM SAHABAT FOLDER
import SearchSahabat from "./views/sahabat/carian/SearchSahabat";
import SearchResultSahabat from "./views/sahabat/carian/SearchResultSahabat";
import TrackingInflowOutflow from "./views/sahabat/tracking-inflow-outflow/Tracking";

// IMPORT FROM LAPORAN FOLDER
import IndexLaporan from "./views/laporan/Index";
import ShowProfilSahabat from "./views/laporan/profil-sahabat/show-result/Show";
import ShowProfilSahabatTerperinci from "./views/laporan/profil-sahabat-terperinci/show-result/Show";
import SearchTf01 from "./views/laporan/jadual-tf01/Search";
import ResultTf01 from "./views/laporan/jadual-tf01/SearchResult";
import SearchTf01ByCawangan from "./views/laporan/jadual-tf01-cawangan/Search";
import ResultTf01ByCawangan from "./views/laporan/jadual-tf01-cawangan/SearchResult";
import SearchTf02 from "./views/laporan/jadual-tf02/Search";
import ResultTf02 from "./views/laporan/jadual-tf02/SearchResult";
// New imports
import SearchProfilSahabat from "./views/laporan/profil-sahabat/Search";
import SearchProfilSahabatTerperinci from "./views/laporan/profil-sahabat-terperinci/Search";

// IMPORT FROM SELENGGARA FOLDER
import IndexSelenggara from "./views/selenggara/Index";
import IndexKodInflow from "./views/selenggara/kod-inflow/Index";
import IndexKodOutflow from "./views/selenggara/kod-outflow/Index";
import IndexDimensi from "./views/selenggara/dimensi/Index";
import IndexHubungan from "./views/selenggara/hubungan/Index";
import PinjamanAktiviti from "./views/selenggara/PinjamanAktiviti";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* AUTH PATH */}
          <Route path="/" element={<SignIn />} index />

          <Route element={<MainLayout />}>
            {/* SAHABAT PATH */}
            <Route path="search-sahabat" element={<SearchSahabat />} />
            <Route
              path="search-result-sahabat"
              element={<SearchResultSahabat />}
            />
            <Route
              path="tracking-inflow-outflow"
              element={<TrackingInflowOutflow />}
            />

            {/* LAPORAN PATH */}
            <Route path="laporan" element={<IndexLaporan />} />
            <Route path="profil-sahabat" element={<ShowProfilSahabat />} />
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
            {/* New routes */}
            <Route
              path="pembiayaan-sahabat"
              element={<SearchProfilSahabat />}
            />
            <Route
              path="pembiayaan-sahabat-terperinci"
              element={<SearchProfilSahabatTerperinci />}
            />

            {/* SELENGGARA PATH */}
            <Route path="selenggara" element={<IndexSelenggara />} />
            <Route path="kod-inflow" element={<IndexKodInflow />} />
            <Route path="kod-outflow" element={<IndexKodOutflow />} />
            <Route path="dimensi" element={<IndexDimensi />} />
            <Route path="hubungan" element={<IndexHubungan />} />
            <Route path="pinjaman-aktiviti" element={<PinjamanAktiviti />} />
          </Route>

          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
