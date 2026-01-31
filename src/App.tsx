import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApplicationProvider } from "./context/ApplicationContext";
import Home from "./pages/Home";
import "./styles/global.css";
import ScrollToHash from "./components/ScrollToHash";

// Lazy load pages
const ApplyNationalID = lazy(() => import("./pages/ApplyNationalID"));
const ApplyHealth = lazy(() => import("./pages/ApplyHealth"));
const ApplyBusiness = lazy(() => import("./pages/ApplyBusiness"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const ApplicationDetails = lazy(() => import("./pages/ApplicationDetails"));

// Service detail pages
const HealthDetails = lazy(() => import("./pages/HealthDetails"));
const NationalIDDetails = lazy(() => import("./pages/NationalIDDetails"));
const BusinessDetails = lazy(
  () => import("./pages/BusinessRegistrationDetails"),
);
const Profile = lazy(() => import("./pages/Profile"));
const Documentation = lazy(() => import("./pages/Documentation"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Contact = lazy(() => import("./pages/Contact"));

// Auth pages
const Login = lazy(() => import("./pages/Login"));
const Signup = lazy(() => import("./pages/Signup"));

// Loading fallback
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="flex flex-col items-center gap-4">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-muted border-t-primary" />
      <p className="text-muted-foreground">Loading...</p>
    </div>
  </div>
);

export default function App() {
  return (
    <ApplicationProvider>
      <Router>
        <ScrollToHash />
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            {/* Public Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            {/* Service Details Pages */}
            <Route path="/health-details" element={<HealthDetails />} />
            <Route
              path="/national-id-details"
              element={<NationalIDDetails />}
            />
            <Route path="/business-details" element={<BusinessDetails />} />

            {/* Application Forms (Protected Pages) */}
            <Route path="/apply-national-id" element={<ApplyNationalID />} />
            <Route path="/apply-health" element={<ApplyHealth />} />
            <Route path="/apply-business" element={<ApplyBusiness />} />

            {/* Dashboard & Application Details (Protected Pages) */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/applications/:id" element={<ApplicationDetails />} />
          </Routes>
        </Suspense>
      </Router>
    </ApplicationProvider>
  );
}
