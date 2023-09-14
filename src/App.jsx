import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import MainLayout from "./views/layouts/MainLayout";
import NoPage from "./views/auth/NoPage";

// IMPORT FROM AUTH FOLDER
import "./assets/Fonts.css";
import "./App.css";

// import ForgotPassword from "./views/auth/ForgotPassword";
import SignIn from "./views/auth/SignIn";
import NoPage from "./views/auth/NoPage";

//IMPORT FROM LAPORAN FOLDER
import SearchTf01 from "./views/laporan/jadual-tf01/Search";
import ResultTf01 from "./views/laporan/jadual-tf01/SearchResult";

import SearchTf01ByCawangan from "./views/laporan/jadual-tf01-cawangan/Search";
import ResultTf01ByCawangan from "./views/laporan/jadual-tf01-cawangan/SearchResult";
import SearchTf02 from "./views/laporan/jadual-tf02/Search";
import ResultTf02 from "./views/laporan/jadual-tf02/SearchResult";

// LAPORAN
import IndexLaporan from "./views/laporan/Index";
import ShowProfilSahabat from "./views/laporan/profil-sahabat/Show";
import ShowProfilSahabatTerperinci from "./views/laporan/profil-sahabat-terperinci/Show";
import SearchTf01 from "./views/laporan/jadual-tf01/Search";
import ResultTf01 from "./views/laporan/jadual-tf01/SearchResult";
import SearchTf01ByCawangan from "./views/laporan/jadual-tf01-cawangan/Search";
import ResultTf01ByCawangan from "./views/laporan/jadual-tf01-cawangan/SearchResult";
import SearchTf02 from "./views/laporan/jadual-tf02/Search";
import ResultTf02 from "./views/laporan/jadual-tf02/SearchResult";

// SELENGGARA
import IndexSelenggara from "./views/selenggara/Index";
import IndexKodInflowOutflow from "./views/selenggara/kod-inflow-outflow/Index";
import Dimensi from "./views/selenggara/Dimensi";
import Hubungan from "./views/selenggara/Hubungan";
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
            <Route path="inflow-outflow" element={<SearchSahabat />} />
            <Route path="result-sahabat" element={<ResultSahabat />} />

            {/* LAPORAN PATH */}
            <Route path="profil-sahabat" element={<ShowProfilSahabat />} />
            <Route
              path="profil-sahabat-terperinci"
              element={<ShowProfilSahabatTerperinci />}
            />

            <Route path="laporan" element={<IndexLaporan />} />
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

            {/* SELENGGARA PATH */}
            <Route path="selenggara" element={<IndexSelenggara />} />
            <Route
              path="kod-inflow-outflow"
              element={<IndexKodInflowOutflow />}
            />
            <Route path="dimensi" element={<Dimensi />} />
            <Route path="hubungan" element={<Hubungan />} />
            <Route path="pinjaman-aktiviti" element={<PinjamanAktiviti />} />
          </Route>

          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
