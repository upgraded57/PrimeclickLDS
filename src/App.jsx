import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Loader from "./Component/Loader/Loader";

const Home = React.lazy(() => import("./Pages/Leads/Leads"));
const Auth = React.lazy(() => import("./Pages/Auth/Auth"));
const ResetPassword = React.lazy(() =>
  import("./Pages/ResetPassword/ResetPassword")
);
const ForgotPassword = React.lazy(() =>
  import("./Pages/ForgotPassword/ForgotPassword")
);
const Success = React.lazy(() => import("./Pages/Activation/Success"));
const Expired = React.lazy(() => import("./Pages/Activation/Expired"));
const Invalid = React.lazy(() => import("./Pages/Activation/Invalid"));
const DashboardLayout = React.lazy(() =>
  import("./Layouts/DashboardLayout/DashboardLayout")
);
const Leads = React.lazy(() => import("./Pages/Leads/Leads"));
const Dashboard = React.lazy(() => import("./Pages/Dashboard/Dashboard"));
const User = React.lazy(() => import("./Pages/User/User"));
const Support = React.lazy(() => import("./Pages/Support/Support"));
const Report = React.lazy(() => import("./Pages/Report/Report"));
const Settings = React.lazy(() => import("./Pages/Settings/Settings"));

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route
            path="/leads"
            element={
              <DashboardLayout>
                <Suspense fallback={<Loader />}>
                  <Leads />
                </Suspense>
              </DashboardLayout>
            }
          />
          <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <Suspense fallback={<Loader />}>
                  <Dashboard />
                </Suspense>
              </DashboardLayout>
            }
          />
          <Route
            path="/report"
            element={
              <DashboardLayout>
                <Suspense fallback={<Loader />}>
                  <Report />
                </Suspense>
              </DashboardLayout>
            }
          />
          <Route
            path="/user"
            element={
              <DashboardLayout>
                <Suspense fallback={<Loader />}>
                  <User />
                </Suspense>
              </DashboardLayout>
            }
          />
          <Route
            path="/settings"
            element={
              <DashboardLayout>
                <Suspense fallback={<Loader />}>
                  <Settings />
                </Suspense>
              </DashboardLayout>
            }
          />
          <Route
            path="/support"
            element={
              <DashboardLayout>
                <Suspense fallback={<Loader />}>
                  <Support />
                </Suspense>
              </DashboardLayout>
            }
          />
          <Route
            path="/auth"
            element={
              <Suspense fallback={<Loader />}>
                <Auth />
              </Suspense>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <Suspense fallback={<Loader />}>
                <ForgotPassword />
              </Suspense>
            }
          />
          <Route
            path="/reset-password"
            element={
              <Suspense fallback={<Loader />}>
                <ResetPassword />
              </Suspense>
            }
          />
          <Route
            path="/activation/success"
            element={
              <Suspense fallback={<Loader />}>
                <Success />
              </Suspense>
            }
          />
          <Route
            path="/activation/expired-link"
            element={
              <Suspense fallback={<Loader />}>
                <Expired />
              </Suspense>
            }
          />
          <Route
            path="/activation/invalid-link"
            element={
              <Suspense fallback={<Loader />}>
                <Invalid />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
