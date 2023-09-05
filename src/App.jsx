import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./views/layouts/MainLayout"

// SAHABAT
import IndexSahabat from "./views/sahabat/Index";

// LAPORAN
import IndexLaporan from "./views/laporan/Index";

// SELENGGARA
import IndexSelenggara from "./views/selenggara/Index";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="inflow-outflow" element={<IndexSahabat />} />
            <Route path="laporan" element={<IndexLaporan />} />
            <Route path="selenggara" element={<IndexSelenggara />} />
          </Route>
          
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
