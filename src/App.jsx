import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Loader from "./Component/Loader/Loader";
import DashboardLayout from "./Layouts/DashboardLayout/DashboardLayout";
import ProtectedRoute from "./Utils/ProtectedRoute";
import UserLead from "./Pages/Roles-User/UserLead/UserLead";

const Home = React.lazy(() => import("./Pages/Home/Home"));
const Features = React.lazy(() => import("./Pages/Features/Features"));
const Pricing = React.lazy(() => import("./Pages/Pricing/Pricing"));
const About = React.lazy(() => import("./Pages/About/About"));
const NotFound = React.lazy(() => import("./Pages/NotFound/NotFound"));
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
const FollowUp = React.lazy(() => import("./Pages/FollowUp/FollowUp"));
const Calls = React.lazy(() => import("./Pages/FollowUp/Calls"));
const Text = React.lazy(() => import("./Pages/FollowUp/Text"));
const FormWizard = React.lazy(() => import("./Pages/FormWizard/FormWizard"));
const FormEdit = React.lazy(() => import("./Pages/FormWizard/FormEdit"));
const LeadInfo = React.lazy(() => import("./Pages/LeadInfo/LeadInfo"));
const GuestLeadInfo = React.lazy(() =>
  import("./Pages/LeadInfo/GuestLeadInfo")
);
const TempForm = React.lazy(() => import("./Pages/FormSetup/TempForm"));
const Forms = React.lazy(() => import("./Pages/Forms/Forms"));
const Notifications = React.lazy(() =>
  import("./Pages/Notifications/Notifications")
);

function App() {
  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          {/* Protected Routes */}
          <Route path="/" element={<ProtectedRoute />}>
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
              path="/leads/:id/info"
              element={
                <DashboardLayout>
                  <Suspense fallback={<Loader />}>
                    <LeadInfo />
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
              path="/notifications"
              element={
                <DashboardLayout>
                  <Suspense fallback={<Loader />}>
                    <Notifications />
                  </Suspense>
                </DashboardLayout>
              }
            />

            <Route
              path="/new"
              element={
                <Suspense fallback={<Loader />}>
                  <Onboarding />
                </Suspense>
              }
            />

            <Route
              path="/new/:type/:campaign_id/follow-up-method"
              element={
                <Suspense fallback={<Loader />}>
                  <FollowUp />
                </Suspense>
              }
            />

            <Route
              path="/new/:type/:campaign_id/follow-up-method/call"
              element={
                <Suspense fallback={<Loader />}>
                  <Calls />
                </Suspense>
              }
            />

            <Route
              path="/new/:type/:campaign_id/follow-up-method/text"
              element={
                <Suspense fallback={<Loader />}>
                  <Text />
                </Suspense>
              }
            />

            <Route
              path="/temp-form/:campaign_id"
              element={
                <Suspense fallback={<Loader />}>
                  <TempForm />
                </Suspense>
              }
            />

            <Route
              path="/form/:campaign_id/wizard"
              element={
                <Suspense fallback={<Loader />}>
                  <DashboardLayout>
                    <FormWizard />
                  </DashboardLayout>
                </Suspense>
              }
            />
          </Route>

          <Route
            path="/form/:campaign_id/edit"
            element={
              <Suspense fallback={<Loader />}>
                <DashboardLayout>
                  <FormEdit />
                </DashboardLayout>
              </Suspense>
            }
          />

          {/* User View only routes */}
          <Route
            path="guest/dashboard/:campaign_id"
            element={
              <Suspense fallback={<Loader />}>
                <UserLead />
              </Suspense>
            }
          />

          <Route
            path="/guest/leads/:id/info"
            element={
              <Suspense fallback={<Loader />}>
                <GuestLeadInfo />
              </Suspense>
            }
          />
          {/* Public Routes */}
          <Route
            index
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/features"
            element={
              <Suspense fallback={<Loader />}>
                <Features />
              </Suspense>
            }
          />
          <Route
            path="/pricing"
            element={
              <Suspense fallback={<Loader />}>
                <Pricing />
              </Suspense>
            }
          />
          <Route
            path="/about"
            element={
              <Suspense fallback={<Loader />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/forms/:campaign_id"
            element={
              <Suspense fallback={<Loader />}>
                <Forms />
              </Suspense>
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
            path="/*"
            element={
              <Suspense fallback={<Loader />}>
                <NotFound />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
