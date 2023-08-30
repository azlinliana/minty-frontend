import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

// IMPORT FROM ACCOUNT FOLDER
import Dashboard from "./views/account/Dashboard";
import Profile from "./views/account/Profile";

// IMPORT FROM AUTH FOLDER
import "./assets/Fonts.css";
import "./App.css";

import ForgotPassword from "./views/auth/ForgotPassword";
import SignIn from "./views/auth/SignIn";
import NoPage from "./views/auth/NoPage";

//IMPORT FROM LAPORAN FOLDER
import SearchTf01 from "./views/laporan/jadual-tf01/Search";
import ResultTf01 from "./views/laporan/jadual-tf01/SearchResult";

import SearchTf01ByCawangan from "./views/laporan/jadual-tf01-cawangan/Search";
import ResultTf01ByCawangan from "./views/laporan/jadual-tf01-cawangan/SearchResult";
import SearchTf02 from "./views/laporan/jadual-tf02/Search";
import ResultTf02 from "./views/laporan/jadual-tf02/SearchResult";

// IMPORT FROM PROFIL SAHABAT FOLDER
import ShowSahabat from "./views/laporan/profil-sahabat/Show";

// IMPORT FROM PROFIL SAHABAT TERPERINCI FOLDER
import ShowSahabatTerperinci from "./views/laporan/profil-sahabat-terperinci/Show";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* AUTH PATH */}
          <Route index element={<SignIn />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />

          {/* ACCOUNT PATH */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />

          {/* lAPORAN PATH */}
          {/* SEARCH JADUAL TF01 */}
          <Route path="/searchtf01" element={<SearchTf01 />} />
          <Route path="/resulttf01" element={<ResultTf01 />} />

          {/* SEARCH JADUAL TF01 BY CAWANGAN PATH */}
          <Route
            path="/searchtf01cawangan"
            element={<SearchTf01ByCawangan />}
          />
          <Route
            path="/resulttf01cawangan"
            element={<ResultTf01ByCawangan />}
          />

          {/* SEARCH JADUAL BY TF02 PATH */}
          <Route path="/searchtf02" element={<SearchTf02 />} />
          <Route path="/resulttf02" element={<ResultTf02 />} />

          {/* PROFIL SAHABAT PATH */}
          <Route path="/showsahabat" element={<ShowSahabat />} />
          <Route
            path="/showsahabatterperinci"
            element={<ShowSahabatTerperinci />}
          />

          {/* 404 ERROR PAGE */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
