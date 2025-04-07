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

import IndexReport from "./views/report/list-report/Index";
import SearchResultCustomerFinancial from "./views/report/customer-profile/SearchResult";
import ShowCustomerProfile from "./views/report/customer-profile/show-result/Show";
import SearchResultDetailedCustomerFinancial from "./views/report/detailed-customer-profile/SearchResult";
import ShowDetailedCustomerProfile from "./views/report/detailed-customer-profile/show-result/Show";

import SearchReport1 from "./views/report/report-1/Search";
import SearchReport2 from "./views/report/report-2/Search";

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

            {/* Customer */}
            <Route path="carian-sahabat" element={<SearchSahabat />} />
            <Route
              path="hasil-carian-sahabat"
              element={<SearchResultSahabat />}
            />
            <Route
              path="tracking-inflow-outflow"
              element={<TrackingInflowOutflow />}
            />

            {/* Report */}
            <Route path="report" element={<IndexReport />} />

            <Route
              path="/customer-profile-list-financial"
              element={<SearchResultCustomerFinancial />}
            />
            <Route
              path="/customer-profile-report"
              element={<ShowCustomerProfile />}
            />

            <Route
              path="/detailed-customer-profile-list-financial"
              element={<SearchResultDetailedCustomerFinancial />}
            />
            <Route
              path="/detailed-customer-profile-report"
              element={<ShowDetailedCustomerProfile />}
            />

            <Route path="search-report-1" element={<SearchReport1 />} />
            
            <Route path="search-report-2" element={<SearchReport2 />} />

            {/* Settings */}
            <Route path="settings" element={<IndexSettings />} />
            <Route path="inflow-code" element={<IndexInflowCode />} />
            <Route path="outflow-code" element={<IndexOutflowCode />} />
            <Route path="loan" element={<IndexLoan />} />
            <Route path="relationship" element={<IndexRelationship />} />

            {/* User */}
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
