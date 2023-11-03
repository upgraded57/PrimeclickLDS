import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loader from "./Component/Loader/Loader";
import DashboardLayout from "./Layouts/DashboardLayout/DashboardLayout";

const Home = React.lazy(() => import("./Pages/Home/Home"));
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
const Leads = React.lazy(() => import("./Pages/Leads/Leads"));
const Lead = React.lazy(() => import("./Pages/Lead/Lead"));
const Dashboard = React.lazy(() => import("./Pages/Dashboard/Dashboard"));
const User = React.lazy(() => import("./Pages/User/User"));
const Support = React.lazy(() => import("./Pages/Support/Support"));
const Reports = React.lazy(() => import("./Pages/Reports/Reports"));
const Settings = React.lazy(() => import("./Pages/Settings/Settings"));
const Onboarding = React.lazy(() => import("./Pages/Onboarding/Onboarding"));
const FormSetup = React.lazy(() => import("./Pages/FormSetup/FormSetup"));

function App() {
  return (
    <div className="container">
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
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
            path="/leads/:id"
            element={
              <DashboardLayout>
                <Suspense fallback={<Loader />}>
                  <Lead />
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
                  <Reports />
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
          <Route
            path="/onboarding"
            element={
              <Suspense fallback={<Loader />}>
                <Onboarding />
              </Suspense>
            }
          />
          <Route
            path="/form-setup"
            element={
              <Suspense fallback={<Loader />}>
                <FormSetup />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
